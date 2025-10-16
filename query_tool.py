#!/usr/bin/env python3
"""
东方财富证券查询工具
支持资金持仓、当日委托、当日成交查询
"""

import argparse
import sys
import json
import requests
from trader import StockTrader


class StockQuery(StockTrader):
    """股票查询类，继承自StockTrader"""

    def __init__(self, session_file='session.json'):
        """初始化查询器"""
        super().__init__(session_file)

    def query_funds_and_position(self):
        """查询资金持仓"""
        try:
            url = f"{self.base_url}/Com/queryAssetAndPositionV1?validatekey={self.validatekey}"

            # 设置请求头
            headers = {
                'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:143.0) Gecko/20100101 Firefox/143.0',
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Accept-Language': 'zh-CN',
                'Accept-Encoding': 'gzip, deflate, br, zstd',
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Requested-With': 'XMLHttpRequest',
                'Origin': self.base_url,
                'Referer': f'{self.base_url}/Search/Position',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-origin',
                'Priority': 'u=0',
                'Pragma': 'no-cache',
                'Cache-Control': 'no-cache'
            }

            # 查询资金信息（RMB类型）
            data = {'moneyType': 'RMB'}
            response = self.session.post(url, data=data, headers=headers)

            if response.status_code == 200:
                result = response.json()
                # Status=0 和 Errcode=0 表示成功
                if (result.get('Status') == 0 or result.get('Status') == '0') and \
                   (result.get('Errcode') == 0 or result.get('Errcode') == '0'):
                    return self._parse_funds_and_position(result)
                else:
                    error_msg = result.get('message', result.get('Message', f'Status: {result.get("Status")}, Errcode: {result.get("Errcode")}'))
                    print(f"❌ 资金持仓查询失败: {error_msg}")
                    return None
            else:
                print(f"❌ 资金持仓查询请求失败: {response.status_code}")
                return None

        except Exception as e:
            print(f"❌ 资金持仓查询异常: {e}")
            return None

    def _parse_funds_and_position(self, data):
        """解析资金持仓数据"""
        try:
            result = {
                'funds': {},
                'positions': []
            }

            # 解析资金信息 - 根据实际的响应结构
            if 'Data' in data and len(data['Data']) > 0:
                fund_data = data['Data'][0]  # 取第一个账户的数据
                result['funds'] = {
                    'total_assets': fund_data.get('RMBZzc', fund_data.get('Zzc', '0')),  # 总资产
                    'available_funds': fund_data.get('Kyzj', '0'),  # 可用资金
                    'frozen_funds': fund_data.get('Djzj', '0'),  # 冻结资金
                    'market_value': fund_data.get('Zxsz', '0'),  # 证券市值
                    'total_profit': fund_data.get('Ljyk', '0'),  # 总盈亏
                    'daily_profit': fund_data.get('Dryk', '0'),  # 当日盈亏
                    'withdrawable': fund_data.get('Kqzj', '0'),  # 可取资金
                }

                # 解析持仓信息 - 根据实际的响应结构
                if 'positions' in fund_data:
                    for position in fund_data['positions']:
                        pos_info = {
                            'stock_code': position.get('Zqdm', ''),  # 证券代码
                            'stock_name': position.get('Zqmc', ''),  # 证券名称
                            'position': position.get('Zqsl', '0'),  # 持仓数量
                            'available': position.get('Kysl', '0'),  # 可卖数量
                            'cost_price': position.get('Cbjg', '0'),  # 成本价
                            'current_price': position.get('Zxjg', '0'),  # 当前价
                            'market_value': position.get('Zxsz', '0'),  # 市值
                            'profit': position.get('Ljyk', '0'),  # 累计盈亏
                            'daily_profit': position.get('Dryk', '0'),  # 当日盈亏
                            'profit_ratio': position.get('Ykbl', '0'),  # 盈亏比例
                            'cost_basis': position.get('Ckcb', '0'),  # 成本基础
                        }
                        result['positions'].append(pos_info)

            return result

        except Exception as e:
            print(f"❌ 解析资金持仓数据异常: {e}")
            return None

    def query_today_orders(self):
        """查询当日委托"""
        try:
            url = f"{self.base_url}/Search/queryTodayOrderWEB?validatekey={self.validatekey}"

            # 设置请求头
            headers = {
                'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:143.0) Gecko/20100101 Firefox/143.0',
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Accept-Language': 'zh-CN',
                'Accept-Encoding': 'gzip, deflate, br, zstd',
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Requested-With': 'XMLHttpRequest',
                'Origin': self.base_url,
                'Referer': f'{self.base_url}/Search/Orders',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-origin',
                'Priority': 'u=0',
                'Pragma': 'no-cache',
                'Cache-Control': 'no-cache'
            }

            # 查询当日委托
            data = {'qqhs': '20', 'dwc': ''}  # 请求20条记录
            response = self.session.post(url, data=data, headers=headers)

            if response.status_code == 200:
                result = response.json()
                # Status=0 和 Errcode=0 表示成功
                if (result.get('Status') == 0 or result.get('Status') == '0') and \
                   (result.get('Errcode') == 0 or result.get('Errcode') == '0'):
                    return self._parse_today_orders(result)
                else:
                    error_msg = result.get('message', result.get('Message', f'Status: {result.get("Status")}, Errcode: {result.get("Errcode")}'))
                    print(f"❌ 当日委托查询失败: {error_msg}")
                    return None
            else:
                print(f"❌ 当日委托查询请求失败: {response.status_code}")
                return None

        except Exception as e:
            print(f"❌ 当日委托查询异常: {e}")
            return None

    def _parse_today_orders(self, data):
        """解析当日委托数据"""
        try:
            result = []

            # 根据实际的响应结构解析委托数据
            if 'Data' in data:
                for order in data['Data']:
                    order_info = {
                        'order_id': order.get('Wtbh', ''),  # 委托编号
                        'stock_code': order.get('Zqdm', ''),  # 证券代码
                        'stock_name': order.get('Zqmc', ''),  # 证券名称
                        'order_type': order.get('Mmsm', ''),  # 委托方式（证券买入/证券卖出）
                        'order_price': order.get('Wtjg', '0'),  # 委托价格
                        'order_quantity': order.get('Wtsl', '0'),  # 委托数量
                        'traded_quantity': order.get('Cjsl', '0'),  # 成交数量
                        'order_status': order.get('Wtzt', ''),  # 委托状态
                        'order_time': order.get('Wtsj', ''),  # 委托时间
                        'trade_amount': order.get('Cjje', '0'),  # 成交金额
                        'trade_price': order.get('Cjjg', '0'),  # 成交价格
                        'cancel_quantity': order.get('Cdsl', '0'),  # 撤单数量
                    }
                    result.append(order_info)

            return result

        except Exception as e:
            print(f"❌ 解析当日委托数据异常: {e}")
            return None

    def query_today_deals(self):
        """查询当日成交"""
        try:
            # 先查看是否有专门的当日成交接口
            url = f"{self.base_url}/Search/queryTodayCJWEB?validatekey={self.validatekey}"

            # 设置请求头
            headers = {
                'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:143.0) Gecko/20100101 Firefox/143.0',
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Accept-Language': 'zh-CN',
                'Accept-Encoding': 'gzip, deflate, br, zstd',
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Requested-With': 'XMLHttpRequest',
                'Origin': self.base_url,
                'Referer': f'{self.base_url}/Search/Deal',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-origin',
                'Priority': 'u=0',
                'Pragma': 'no-cache',
                'Cache-Control': 'no-cache'
            }

            # 查询当日成交
            data = {'qqhs': '20', 'dwc': ''}  # 请求20条记录
            response = self.session.post(url, data=data, headers=headers)

            if response.status_code == 200:
                try:
                    result = response.json()
                    # Status=0 和 Errcode=0 表示成功
                    if (result.get('Status') == 0 or result.get('Status') == '0') and \
                       (result.get('Errcode') == 0 or result.get('Errcode') == '0'):
                        return self._parse_today_deals(result)
                    else:
                        error_msg = result.get('message', result.get('Message', f'Status: {result.get("Status")}, Errcode: {result.get("Errcode")}'))
                        print(f"❌ 当日成交查询失败: {error_msg}")
                        return None
                except json.JSONDecodeError:
                    # 专门的成交接口返回HTML页面，自动切换到备选方案
                    return self._get_deals_from_orders()
            else:
                print(f"❌ 当日成交查询请求失败: {response.status_code}")
                return None

        except Exception as e:
            print(f"❌ 当日成交查询异常: {e}")
            return None

    def _parse_today_deals(self, data):
        """解析当日成交数据"""
        try:
            result = []

            if 'data' in data and 'cjList' in data['data']:
                for deal in data['data']['cjList']:
                    deal_info = {
                        'deal_id': deal.get('cjbh', ''),  # 成交编号
                        'order_id': deal.get('wtbh', ''),  # 委托编号
                        'stock_code': deal.get('zqdm', ''),  # 证券代码
                        'stock_name': deal.get('zqmc', ''),  # 证券名称
                        'deal_type': deal.get('cjl', ''),  # 成交类型（买入/卖出）
                        'deal_price': deal.get('cjjg', '0'),  # 成交价格
                        'deal_quantity': deal.get('cjsl', '0'),  # 成交数量
                        'deal_amount': deal.get('cjje', '0'),  # 成交金额
                        'deal_time': deal.get('cjsj', ''),  # 成交时间
                    }
                    result.append(deal_info)

            return result

        except Exception as e:
            print(f"❌ 解析当日成交数据异常: {e}")
            return None

    def _get_deals_from_orders(self):
        """从委托记录中提取已成交的数据"""
        try:
            orders = self.query_today_orders()
            if not orders:
                return None

            deals = []
            for order in orders:
                # 如果委托状态为已成交
                if order['order_status'] in ['已成', '已成交'] and int(order['traded_quantity']) > 0:
                    deal_info = {
                        'deal_id': order['order_id'],  # 用委托编号作为成交编号
                        'order_id': order['order_id'],
                        'stock_code': order['stock_code'],
                        'stock_name': order['stock_name'],
                        'deal_type': '买入' if order['order_type'] in ['买入', '限价买入'] else '卖出',
                        'deal_price': order['order_price'],
                        'deal_quantity': order['traded_quantity'],
                        'deal_amount': str(float(order['order_price']) * int(order['traded_quantity'])),
                        'deal_time': order['order_time'],
                    }
                    deals.append(deal_info)

            return deals if deals else None

        except Exception as e:
            print(f"❌ 从委托记录提取成交数据异常: {e}")
            return None

    def format_funds_and_position(self, data):
        """格式化显示资金持仓信息"""
        if not data:
            print("❌ 没有资金持仓数据")
            return

        print("\n=== 资金信息 ===")
        funds = data['funds']
        print(f"总资产: {funds.get('total_assets', '0.00')}")
        print(f"可用资金: {funds.get('available_funds', '0.00')}")
        print(f"可取资金: {funds.get('withdrawable', '0.00')}")
        print(f"冻结资金: {funds.get('frozen_funds', '0.00')}")
        print(f"证券市值: {funds.get('market_value', '0.00')}")
        print(f"总盈亏: {funds.get('total_profit', '0.00')}")
        print(f"当日盈亏: {funds.get('daily_profit', '0.00')}")

        print("\n=== 持仓信息 ===")
        if data['positions']:
            print(f"{'证券代码':<10} {'证券名称':<18} {'持仓数量':<10} {'可卖数量':<10} {'成本价':<8} {'当前价':<8} {'市值':<12} {'总盈亏':<12} {'当日盈亏':<10}")
            print("-" * 115)
            for pos in data['positions']:
                print(f"{pos['stock_code']:<10} {pos['stock_name']:<18} {pos['position']:<10} {pos['available']:<10} "
                      f"{pos['cost_price']:<8} {pos['current_price']:<8} {pos['market_value']:<12} "
                      f"{pos['profit']:<12} {pos['daily_profit']:<10}")
        else:
            print("当前无持仓")

    def format_today_orders(self, data):
        """格式化显示当日委托信息"""
        if not data:
            print("❌ 没有当日委托数据")
            return

        print(f"\n=== 当日委托 ({len(data)}条) ===")
        print(f"{'委托编号':<10} {'证券代码':<10} {'证券名称':<12} {'类型':<8} {'委托价格':<10} {'委托数量':<10} {'成交数量':<10} {'成交金额':<10} {'状态':<8} {'委托时间':<10}")
        print("-" * 120)
        for order in data:
            print(f"{order['order_id']:<10} {order['stock_code']:<10} {order['stock_name']:<12} "
                  f"{order['order_type']:<8} {order['order_price']:<10} {order['order_quantity']:<10} "
                  f"{order['traded_quantity']:<10} {order['trade_amount']:<10} {order['order_status']:<8} {order['order_time']:<10}")

    def format_today_deals(self, data):
        """格式化显示当日成交信息"""
        if not data:
            print("❌ 没有当日成交数据")
            return

        print(f"\n=== 当日成交 ({len(data)}条) ===")
        print(f"{'成交编号':<15} {'证券代码':<10} {'证券名称':<12} {'类型':<6} {'成交价格':<8} {'成交数量':<8} {'成交金额':<12} {'成交时间':<10}")
        print("-" * 100)
        for deal in data:
            print(f"{deal['deal_id']:<15} {deal['stock_code']:<10} {deal['stock_name']:<12} "
                  f"{deal['deal_type']:<6} {deal['deal_price']:<8} {deal['deal_quantity']:<8} "
                  f"{deal['deal_amount']:<12} {deal['deal_time']:<10}")


def main():
    """主函数"""
    parser = argparse.ArgumentParser(description='东方财富证券-查询工具')
    parser.add_argument('query_type', choices=['funds', 'orders', 'deals', 'all'],
                       help='查询类型: funds(资金持仓), orders(当日委托), deals(当日成交), all(全部)')
    parser.add_argument('--session', type=str, default='session.json', help='会话文件路径 (默认: session.json)')
    parser.add_argument('--output', type=str, help='输出结果到文件')

    args = parser.parse_args()

    print(f"=== 东方财富证券-查询工具 ===")

    try:
        # 初始化查询器
        query_tool = StockQuery(session_file=args.session)
        print("✅ 会话加载成功")

        results = {}

        # 根据查询类型执行查询
        if args.query_type in ['funds', 'all']:
            print("\n正在查询资金持仓...")
            results['funds'] = query_tool.query_funds_and_position()

        if args.query_type in ['orders', 'all']:
            print("\n正在查询当日委托...")
            results['orders'] = query_tool.query_today_orders()

        if args.query_type in ['deals', 'all']:
            print("\n正在查询当日成交...")
            results['deals'] = query_tool.query_today_deals()

        # 显示结果
        if 'funds' in results:
            query_tool.format_funds_and_position(results['funds'])
        if 'orders' in results:
            query_tool.format_today_orders(results['orders'])
        if 'deals' in results:
            query_tool.format_today_deals(results['deals'])

        # 保存结果到文件
        if args.output:
            with open(args.output, 'w', encoding='utf-8') as f:
                json.dump(results, f, ensure_ascii=False, indent=2)
            print(f"\n✅ 查询结果已保存到: {args.output}")

    except FileNotFoundError as e:
        print(f"❌ 会话文件未找到: {e}")
        print("请先运行登录脚本 emt_login_corrected.py")
        sys.exit(1)
    except Exception as e:
        print(f"❌ 发生错误: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()