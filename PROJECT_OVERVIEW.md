# 项目文件分析

本文档分析了 `emt_login_corrected.py` 文件与工程目录中其他 Python 文件的关系。

## 核心分析

1.  **脚本演进**: 项目中存在两个核心登录脚本：`emt_login.py` 和 `emt_login_corrected.py`。
    *   `emt_login.py` 是一个较早的版本，它试图通过提取网站的JavaScript并在Python中借助`py_mini_racer`库来运行它，以此实现密码加密。这种方法比较复杂且脆弱。
    *   `emt_login_corrected.py` 是修正和最终版本。它放弃了运行JavaScript的方式，转而使用纯Python的加密库 (`pycryptodome`) 实现了与网站JavaScript版本等效的RSA加密逻辑。这种方法更稳定、可靠，并且移除了对JavaScript运行时的依赖。

2.  **辅助工具脚本**: 项目包含几个用于开发和验证的辅助脚本。
    *   `verify_encryption.py`: 这是一个验证工具，用于确保Python中实现的加密算法 (`EMTradeEncrypt` 类) 的输出与原始JavaScript的加密逻辑在特征上（如长度和格式）是一致的。它是`emt_login_corrected.py`中加密模块正确性的重要保障。
    *   `extract_captcha.py`: 这是一个测试脚本，用于从HAR文件中提取验证码图片，并测试`ddddocr`库的识别效果。这部分功能被整合进了`emt_login_corrected.py`的验证码处理流程中。
    *   `demo.py`: 这是一个演示脚本，但它导入和演示的是旧版 `emt_login.py` 的功能，与 `emt_login_corrected.py` 没有直接关系。

3.  **依赖关系**: `requirements.txt` 文件似乎是为旧版 `emt_login.py` 准备的，因为它包含了 `py-mini-racer`。而 `emt_login_corrected.py` 的关键依赖 `pycryptodome` 却没有在该文件中列出，这表明依赖文件可能未及时更新。

## 关系总结表

下表总结了 `emt_login_corrected.py` 与工程目录中其他文件的关系：

| 文件名                 | 与 `emt_login_corrected.py` 的关系                                                                                              | 关键观察与说明                                                                                                                                                                                            |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `emt_login.py`         | **被替代的前身版本**                                                                                          | 旧版的登录脚本，依赖 `py-mini-racer` 运行JavaScript进行加密。`emt_login_corrected.py` 是对其的重构和改进，用纯Python实现加密，更加稳定。                                                              |
| `verify_encryption.py` | **开发验证工具**                                                                                              | 用于对比和验证Python加密实现与JavaScript版本的一致性。`emt_login_corrected.py` 中的 `EMTradeEncrypt` 类是经过此脚本逻辑验证的产物。                                                               |
| `extract_captcha.py` | **开发测试工具**                                                                                              | 用于从HAR文件中提取验证码并测试 `ddddocr` 的识别能力。其功能和目的与 `emt_login_corrected.py` 中的验证码识别模块直接相关。                                                                       |
| `demo.py`               | **无直接关系**                                                                                                | 该脚本是为旧版 `emt_login.py` 编写的功能演示，它导入的是旧版的 `EMTLoginSession` 类，无法直接用于演示 `emt_login_corrected.py`。                                                   |
| `requirements.txt`   | **依赖文件（部分过时）**                                                                                      | 列出了项目的依赖。但它包含的 `py-mini-racer` 是旧版脚本的依赖，且缺失了 `emt_login_corrected.py` 所需的 `pycryptodome` (或 `pycryptodomex`)。                                                             |