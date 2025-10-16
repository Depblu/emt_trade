#!/usr/bin/env python3
"""
东方财富证券-股票交易工具
支持买入和卖出操作的完整命令行工具
"""

import argparse
import sys
from trader import StockTrader

def main():
    """主函数"""
    parser = argparse.ArgumentParser(description='东方财富证券-股票交易工具')
    parser.add_argument('action', choices=['buy', 'sell'], help='交易类型: buy(买入) 或 sell(卖出)')
    parser.add_argument('--code', type=str, required=True, help='股票代码 (例如: 159991)')
    parser.add_argument('--name', type=str, required=True, help='股票名称 (例如: 创大盘ETF)')
    parser.add_argument('--price', type=str, required=True, help='交易价格 (例如: 0.700)')
    parser.add_argument('--amount', type=str, required=True, help='交易数量 (例如: 500)')
    parser.add_argument('--session', type=str, default='session.json', help='会话文件路径 (默认: session.json)')
    parser.add_argument('--confirm', action='store_true', help='执行前确认 (强烈建议使用)')
    parser.add_argument('--verbose', action='store_true', help='显示详细信息')
    
    args = parser.parse_args()
    
    # 显示交易信息
    action_text = "买入" if args.action == "buy" else "卖出"
    print(f"=== 东方财富证券-股票{action_text}工具 ===")
    print(f"交易类型: {action_text}")
    print(f"股票代码: {args.code}")
    print(f"股票名称: {args.name}")
    print(f"{action_text}价格: {args.price}")
    print(f"{action_text}数量: {args.amount}")
    
    total_amount = float(args.price) * int(args.amount)
    print(f"总金额: {total_amount:.2f}")
    print()
    
    # 安全确认
    if args.confirm:
        prompt = f"确认{action_text} {args.code} {args.name} {args.amount}股 @ {args.price}? (yes/no): "
        user_input = input(prompt)
        if user_input.lower() not in ['yes', 'y', '是']:
            print("❌ 用户取消操作")
            sys.exit(0)
    
    try:
        # 初始化交易器
        trader = StockTrader(session_file=args.session)
        print("✅ 会话加载成功")
        
        # 执行交易操作
        if args.action == "buy":
            result = trader.execute_buy(args.code, args.price, args.amount, args.name)
        else:
            result = trader.execute_sell(args.code, args.price, args.amount, args.name)
        
        if result:
            print(f"✅ {action_text}请求已提交")
            if args.verbose:
                print(f"返回结果: {result}")
        else:
            print(f"❌ {action_text}请求失败")
            sys.exit(1)
            
    except FileNotFoundError as e:
        print(f"❌ 会话文件未找到: {e}")
        print("请先运行登录脚本 emt_login_corrected.py")
        sys.exit(1)
    except Exception as e:
        print(f"❌ 发生错误: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
