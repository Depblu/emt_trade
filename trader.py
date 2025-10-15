
import requests
import json
import os

class StockTrader:
    def __init__(self, session_file='session.json'):
        if not os.path.exists(session_file):
            raise FileNotFoundError("Session file not found. Please run the login script first.")

        with open(session_file, 'r') as f:
            session_data = json.load(f)

        self.validatekey = session_data['validatekey']
        self.cookies = session_data['cookies']

        self.session = requests.Session()
        self.session.cookies.update(self.cookies)
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:143.0) Gecko/20100101 Firefox/143.0',
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Accept-Language': 'zh-CN',
            'Accept-Encoding': 'gzip, deflate, br, zstd',
            'Connection': 'keep-alive',
        })
        self.base_url = "https://jywg.18.cn"

    def query_stock_info(self, stock_code):
        """查询股票信息"""
        url = f"https://emhsmarketwgmix.eastmoneysec.com/api/SHSZQuery/GetCodeAutoComplete2?id={stock_code}&count=10&callback=sData&DC_APP_KEY=dcquotes-service-tweb"
        # This is a simplified version, as the original has timestamp and sign
        try:
            response = self.session.get(url)
            print(f"查询股票信息响应: {response.text}")
            return response.text
        except Exception as e:
            print(f"查询股票信息异常: {e}")
            return None

    def get_trade_info(self, stock_code, price, stock_name):
        """获取交易所需信息"""
        url = f"{self.base_url}/Trade/GetAllNeedTradeInfo?validatekey={self.validatekey}"
        data = {
            "stockCode": stock_code,
            "price": price,
            "tradeType": "B",
            "stockName": stock_name,
            "gddm": "",
            "market": "SA",
            "jylb": "B"
        }
        try:
            response = self.session.post(url, data=data)
            print(f"获取交易所需信息响应: {response.json()}")
            return response.json()
        except Exception as e:
            print(f"获取交易所需信息异常: {e}")
            return None

    def get_max_trade_count(self, stock_code, price, stock_name):
        """获取最大可买数量"""
        url = f"{self.base_url}/Com/GetMaxTradeCountByMarketOrGddm?validatekey={self.validatekey}"
        data = {
            "zqdm": stock_code,
            "wtjg": price,
            "jylb": "0a",
            "market": "SA",
            "zqmc": stock_name,
            "gddm": ""
        }
        try:
            response = self.session.post(url, data=data)
            print(f"获取最大可买数量响应: {response.json()}")
            return response.json()
        except Exception as e:
            print(f"获取最大可买数量异常: {e}")
            return None

    def submit_buy_order(self, stock_code, price, amount, stock_name):
        """提交买入订单"""
        url = f"{self.base_url}/Trade/SubmitTradeV2?validatekey={self.validatekey}"
        data = {
            "stockCode": stock_code,
            "price": price,
            "amount": amount,
            "tradeType": "B",
            "zqmc": stock_name,
            "market": "SA"
        }
        headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Referer': f'{self.base_url}/Trade/Buy',
        }
        try:
            response = self.session.post(url, data=data, headers=headers)
            print(f"提交买入订单响应: {response.json()}")
            return response.json()
        except Exception as e:
            print(f"提交买入订单异常: {e}")
            return None

def main():
    """主函数"""
    print("=== 东方财富证券-股票交易工具 ===")
    try:
        trader = StockTrader()
        print("✅ 会话加载成功")

        # 示例：执行买入流程
        stock_code = "159991"
        stock_name = "创大盘ETF"
        price = "0.600"
        amount = "500"

        print(f"\n--- 准备买入股票 ---")
        print(f"代码: {stock_code} ({stock_name})")
        print(f"价格: {price}")
        print(f"数量: {amount}")

        # 1. 查询股票信息 (可选，主要用于获取名称等)
        trader.query_stock_info(stock_code)

        # 2. 获取交易信息
        trader.get_trade_info(stock_code, price, stock_name)

        # 3. 获取最大可买数量
        trader.get_max_trade_count(stock_code, price, stock_name)

        # 4. 提交买入订单
        # input("按回车键继续提交订单...") # 取消注释以手动确认
        trader.submit_buy_order(stock_code, price, amount, stock_name)

    except FileNotFoundError as e:
        print(f"❌ {e}")
    except Exception as e:
        print(f"❌ 发生未知错误: {e}")

if __name__ == "__main__":
    main()
