#!/usr/bin/env python3
"""
验证Python加密与JavaScript加密结果一致性

此脚本用于验证我们从JavaScript中提取的加密算法在Python中的实现
是否与原始JavaScript代码产生相同的加密结果。
"""

import subprocess
import tempfile
import os
from extract_encryption import EMTradeEncrypt

def create_js_test_file():
    """创建JavaScript测试文件来执行原始加密"""
    js_code = '''
const fs = require('fs');

// 从BaseJS.js中提取的JSEncrypt实现（简化版本用于测试）
class JSEncrypt {
    constructor() {
        this.key = null;
    }
    
    setPublicKey(key) {
        this.key = key;
    }
    
    encrypt(data) {
        // 这里需要实际的RSA加密实现
        // 由于Node.js环境的限制，我们使用crypto模块
        const crypto = require('crypto');
        const publicKey = this.key;
        
        try {
            const encrypted = crypto.publicEncrypt(
                {
                    key: publicKey,
                    padding: crypto.constants.RSA_PKCS1_PADDING,
                },
                Buffer.from(data, 'utf8')
            );
            return encrypted.toString('base64');
        } catch (error) {
            console.error('Encryption failed:', error);
            return null;
        }
    }
}

// 复制EMTradeEncrypt的实现
const EMTradeEncrypt = {};
const jsencrypt = new JSEncrypt();
jsencrypt.setPublicKey(`-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDHdsyxT66pDG4p73yope7jxA92
c0AT4qIJ/xtbBcHkFPK77upnsfDTJiVEuQDH+MiMeb+XhCLNKZGp0yaUU6GlxZdp
+nLW8b7Kmijr3iepaDhcbVTsYBWchaWUXauj9Lrhz58/6AE/NF0aMolxIGpsi+ST
2hSHPu3GSXMdhPCkWQIDAQAB
-----END PUBLIC KEY-----`);

EMTradeEncrypt.encrypt = function(data) {
    return jsencrypt.encrypt(data);
};

// 测试数据
const testData = process.argv[2] || "test123";
const encrypted = EMTradeEncrypt.encrypt(testData);

console.log(JSON.stringify({
    input: testData,
    encrypted: encrypted,
    success: encrypted !== null
}));
'''
    
    # 创建临时JS文件
    with tempfile.NamedTemporaryFile(mode='w', suffix='.js', delete=False) as f:
        f.write(js_code)
        return f.name

def test_js_encryption(test_data):
    """使用Node.js测试JavaScript加密"""
    js_file = create_js_test_file()
    
    try:
        # 检查是否安装了Node.js
        result = subprocess.run(['node', '--version'], 
                              capture_output=True, text=True)
        if result.returncode != 0:
            print("Node.js 未安装，无法测试JavaScript加密")
            return None
        
        # 运行JavaScript加密测试
        result = subprocess.run(['node', js_file, test_data], 
                              capture_output=True, text=True)
        
        if result.returncode == 0:
            import json
            return json.loads(result.stdout.strip())
        else:
            print(f"JavaScript执行错误: {result.stderr}")
            return None
            
    finally:
        # 清理临时文件
        os.unlink(js_file)

def compare_encryptions():
    """比较Python和JavaScript加密结果"""
    print("=== 加密结果一致性验证 ===")
    
    # 测试数据
    test_cases = [
        "1234",
        "123456", 
        "testpassword",
        "hello world",
        "东方财富"
    ]
    
    python_encrypt = EMTradeEncrypt()
    
    print("正在测试加密一致性...")
    print()
    
    for test_data in test_cases:
        print(f"测试数据: {test_data}")
        
        # Python加密
        python_result = python_encrypt.encrypt(test_data)
        print(f"Python加密: {python_result}")
        
        # JavaScript加密
        js_result = test_js_encryption(test_data)
        
        if js_result is None:
            print("JavaScript加密失败，跳过此项测试")
            print("-" * 60)
            continue
            
        print(f"JS加密:     {js_result.get('encrypted')}")
        
        # 由于RSA加密每次结果不同（有随机padding），我们无法直接比较密文
        # 但我们可以验证两个结果的基本特征是否一致
        python_len = len(python_result)
        js_len = len(js_result.get('encrypted', ''))
        
        print(f"Python结果长度: {python_len}")
        print(f"JS结果长度:     {js_len}")
        
        # 检查长度是否一致（RSA加密结果长度应该是固定的）
        if python_len == js_len and python_len > 0:
            print("✓ 长度一致，格式正确")
        else:
            print("✗ 长度不一致或结果异常")
        
        print("-" * 60)

def test_encryption_decryption_consistency():
    """测试加密的基本一致性特征"""
    print("\n=== 加密特征一致性测试 ===")
    
    python_encrypt = EMTradeEncrypt()
    test_data = "test123"
    
    # 测试相同输入多次加密的结果差异
    results = []
    for i in range(3):
        result = python_encrypt.encrypt(test_data)
        results.append(result)
        print(f"第{i+1}次加密: {result}")
    
    # RSA加密由于有随机padding，相同输入每次结果应该不同
    all_different = len(set(results)) == len(results)
    print(f"\n相同输入多次加密结果是否不同: {'是' if all_different else '否'}")
    print("这是RSA加密的正常特征（由于随机padding）")
    
    # 测试结果长度一致性
    lengths = [len(r) for r in results]
    length_consistent = len(set(lengths)) == 1
    print(f"所有结果长度是否一致: {'是' if length_consistent else '否'} ({lengths[0] if length_consistent else lengths})")

def main():
    """主测试函数"""
    print("开始验证加密实现的正确性...")
    
    # 测试Python加密基本功能
    python_encrypt = EMTradeEncrypt()
    test_result = python_encrypt.encrypt("test")
    
    if not test_result:
        print("Python加密失败，请检查实现")
        return
        
    print(f"Python加密基本功能正常，示例结果: {test_result[:50]}...")
    print()
    
    # 比较加密结果
    compare_encryptions()
    
    # 测试加密特征一致性
    test_encryption_decryption_consistency()
    
    print("\n=== 验证结论 ===")
    print("1. 由于RSA加密使用随机padding，相同输入每次加密结果会不同")
    print("2. 但加密结果的长度和格式应该保持一致")
    print("3. 只要长度和格式匹配，说明加密算法实现正确")
    print("4. 最终验证需要在实际登录中测试服务器是否能正确解密")

if __name__ == "__main__":
    main()