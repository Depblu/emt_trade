
# 模拟买入操作手册

本手册旨在指导如何通过编程模拟在 `jywg.18.cn` 网站上进行股票买入操作。所有信息均从 `jywg.18.cn_Archive.har` 文件中解析得出。

## 核心流程概览

模拟买入操作主要分为以下几个关键步骤：

1.  **查询股票信息**: 当用户输入证券代码时，系统会发起请求以自动补全代码并获取股票名称。
2.  **获取交易所需信息**: 在选择了股票并输入价格后，系统会获取进行交易所需的各种配置和验证信息。
3.  **获取最大可买数量**: 根据当前价格和账户信息，计算并获取最大允许购买的数量。
4.  **提交买入订单**: 将所有交易参数打包，最终提交订单。

---

## 详细步骤解析

### 步骤1：查询股票信息

当用户在“证券代码”输入框中输入内容时，会触发一个GET请求来获取匹配的股票列表。

- **URL**: `https://emhsmarketwgmix.eastmoneysec.com/api/SHSZQuery/GetCodeAutoComplete2`
- **方法**: `GET`
- **功能**: 根据输入的证券代码（如 `159991`）进行模糊匹配，返回证券列表用于自动完成。
- **关键参数 (Query String)**:
    - `id`: 证券代码 (例如: `159991`)
    - `count`: 返回结果数量 (例如: `10`)
    - `callback`: `sData` (JSONP回调函数名)
    - `DC_APP_KEY`: `dcquotes-service-tweb`
    - `DC_TIMESTAMP`: 请求时的时间戳 (例如: `1760413840664`)
    - `DC_SIGN`: 请求签名 (例如: `495DA89EF1DDA6CB449B53CBA2BBAC8C`)

**示例URL**:
```
https://emhsmarketwgmix.eastmoneysec.com/api/SHSZQuery/GetCodeAutoComplete2?id=159991&count=10&callback=sData&DC_APP_KEY=dcquotes-service-tweb&DC_TIMESTAMP=1760413840664&DC_SIGN=495DA89EF1DDA6CB449B53CBA2BBAC8C
```

---

### 步骤2：获取交易所需信息

在输入价格后，会触发一个POST请求，用于获取该笔交易需要的各类验证信息和参数。

- **URL**: `https://jywg.18.cn/Trade/GetAllNeedTradeInfo`
- **方法**: `POST`
- **功能**: 获取交易前的必要信息。
- **关键参数 (URL Query)**:
    - `validatekey`: 一个关键的验证令牌 (例如: `9f812869-a646-4976-9f51-f494705579e3`)
- **请求体 (POST Data)**:
    - `stockCode`: 证券代码 (例如: `159991`)
    - `price`: 委托价格 (例如: `0.701`)
    - `tradeType`: 交易类型 (`B` 代表买入)
    - `stockName`: 证券名称 (例如: `创大盘ETF`)
    - `gddm`: 股东代码 (可为空)
    - `market`: 市场代码 (例如: `SA`)
    - `jylb`: 交易类别 (例如: `B`)

**示例请求体**:
```
stockCode=159991&price=0.701&tradeType=B&stockName=%E5%88%9B%E5%A4%A7%E7%9B%98ETF&gddm=&market=SA&jylb=B
```

---

### 步骤3：获取最大可买数量

此请求用于计算并返回在当前价格下，账户资金允许购买的最大股票数量。

- **URL**: `https://jywg.18.cn/Com/GetMaxTradeCountByMarketOrGddm`
- **方法**: `POST`
- **功能**: 获取最大可交易数量。
- **关键参数 (URL Query)**:
    - `validatekey`: 同上一个请求中的验证令牌。
- **请求体 (POST Data)**:
    - `zqdm`: 证券代码 (例如: `159991`)
    - `wtjg`: 委托价格 (例如: `0.701`)
    - `jylb`: 交易类别 (例如: `0a`)
    - `market`: 市场代码 (例如: `SA`)
    - `zqmc`: 证券名称 (例如: `创大盘ETF`)
    - `gddm`: 股东代码 (可为空)

**示例请求体**:
```
zqdm=159991&wtjg=0.701&jylb=0a&market=SA&zqmc=%E5%88%9B%E5%A4%A7%E7%9B%98ETF&gddm=
```

---

### 步骤4：提交买入订单

这是整个流程的最后一步，将所有信息汇集，正式提交买入订单。

- **URL**: `https://jywg.18.cn/Trade/SubmitTradeV2`
- **方法**: `POST`
- **功能**: 提交最终的买入订单。
- **关键参数 (URL Query)**:
    - `validatekey`: 同上。
- **关键请求头**:
    - `Content-Type`: `application/x-www-form-urlencoded`
    - `Referer`: `https://jywg.18.cn/Trade/Buy`
- **请求体 (POST Data)**:
    - `stockCode`: 证券代码 (例如: `159991`)
    - `price`: 最终确认的买入价格 (例如: `0.600`)
    - `amount`: 买入数量 (例如: `500`)
    - `tradeType`: 交易类型 (`B` 代表买入)
    - `zqmc`: 证券名称 (例如: `创大盘ETF`)
    - `market`: 市场代码 (例如: `SA`)

**示例请求体**:
```
stockCode=159991&price=0.600&amount=500&tradeType=B&zqmc=%E5%88%9B%E5%A4%A7%E7%9B%98ETF&market=SA
```

## 总结

要成功模拟买入操作，需要按顺序执行以上步骤，并特别注意以下几点：

1.  **`validatekey`**: 这个参数在多个请求中出现，很可能是一个会话或单次操作的唯一标识，需要从登录后的某个请求中获取，并在后续交易请求中保持一致。
2.  **签名和时间戳**: `DC_SIGN` 和 `DC_TIMESTAMP` 用于请求行情数据接口，需要模拟生成。
3.  **请求头**: 务必模拟正确的 `Content-Type` 和 `Referer` 等请求头，以确保请求被服务器正确处理。

本手册提供了模拟买入操作所需的全部核心网络请求信息。后续的编程工作可以此为依据进行。
