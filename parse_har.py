
import json

def parse_har(har_file_path):
    """
    解析 HAR 文件，提取关键请求信息
    """
    with open(har_file_path, 'r', encoding='utf-8') as f:
        har_data = json.load(f)

    print("--- 开始解析HAR文件，提取买入流程关键信息 ---")

    # 步骤2: 输入证券代码，网页自动显示“证券名称”
    print("\n--- 步骤2：查询股票信息 ---")
    for entry in har_data['log']['entries']:
        request = entry['request']
        if "api/SHSZQuery/GetCodeAutoComplete" in request['url']:
            print("URL:", request['url'])
            print("方法:", request['method'])
            print("说明: 根据输入的证券代码自动完成，获取证券名称。")
            print("--------------------------\n")
            # 只找第一个匹配的就够了
            break

    # 步骤 a: 获取交易所需信息 (GetAllNeedTradeInfo)
    print("\n--- 步骤a：获取交易所需信息 ---")
    for entry in har_data['log']['entries']:
        request = entry['request']
        if "/Trade/GetAllNeedTradeInfo" in request['url']:
            print("URL:", request['url'])
            print("方法:", request['method'])
            if 'postData' in request and 'text' in request['postData']:
                print("请求体:", request['postData']['text'])
            print("说明: 在输入价格后触发，获取交易需要的各类信息。")
            print("--------------------------\n")
            break

    # 步骤 b: 获取最大可买数量 (GetMaxTradeCountByMarketOrGddm)
    print("\n--- 步骤b：获取最大可买数量 ---")
    for entry in har_data['log']['entries']:
        request = entry['request']
        if "/Com/GetMaxTradeCountByMarketOrGddm" in request['url']:
            print("URL:", request['url'])
            print("方法:", request['method'])
            if 'postData' in request and 'text' in request['postData']:
                print("请求体:", request['postData']['text'])
            print("说明: 输入价格和数量后，获取最大可买数量。")
            print("--------------------------\n")
            break

    # 步骤6: 点击买入 (SubmitTradeV2)
    print("\n--- 步骤6：提交买入订单 ---")
    for entry in har_data['log']['entries']:
        request = entry['request']
        if "/Trade/SubmitTradeV2" in request['url']:
            print("URL:", request['url'])
            print("方法:", request['method'])
            print("请求头:")
            for header in request['headers']:
                # 打印关键的请求头
                if header['name'].lower() in ['host', 'user-agent', 'accept', 'accept-language', 'accept-encoding', 'content-type', 'sec-fetch-dest', 'sec-fetch-mode', 'sec-fetch-site', 'referer']:
                    print(f"  {header['name']}: {header['value']}")
            if 'postData' in request and 'text' in request['postData']:
                print("请求体:")
                try:
                    post_data_json = json.loads(request['postData']['text'])
                    print(json.dumps(post_data_json, indent=2, ensure_ascii=False))
                except json.JSONDecodeError:
                    print(request['postData']['text'])
            print("说明: 最终提交买入订单的请求。")
            print("--------------------------\n")
            break

if __name__ == "__main__":
    parse_har('jywg.18.cn_Archive.har')
