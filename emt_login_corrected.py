#!/usr/bin/env python3
"""
东方财富证券登录脚本（修正版本）

基于HAR文件分析，修正了关键参数和请求头
"""

import requests
import base64
import json
import time
import random
from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_v1_5
from PIL import Image
from io import BytesIO
import getpass
import ddddocr
import os
import time

#解决 `module 'PIL.Image' has no attribute 'ANTIALIAS'` 问题
if not hasattr(Image, 'ANTIALIAS'):
    setattr(Image, 'ANTIALIAS', Image.LANCZOS)


class EMTradeEncrypt:
    """东方财富证券加密类 - 已验证与JavaScript版本等效"""
    
    def __init__(self):
        # 从BaseJS.js第9647-9649行提取的RSA公钥
        self.public_key_pem = """-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDHdsyxT66pDG4p73yope7jxA92
c0AT4qIJ/xtbBcHkFPK77upnsfDTJiVEuQDH+MiMeb+XhCLNKZGp0yaUU6GlxZdp
+nLW8b7Kmijr3iepaDhcbVTsYBWchaWUXauj9Lrhz58/6AE/NF0aMolxIGpsi+ST
2hSHPu3GSXMdhPCkWQIDAQAB
-----END PUBLIC KEY-----"""
        
        self.rsa_key = RSA.import_key(self.public_key_pem)
        self.cipher = PKCS1_v1_5.new(self.rsa_key)
    
    def encrypt(self, data):
        """加密数据 - 对应JavaScript中EMTradeEncrypt.encrypt()方法"""
        if isinstance(data, str):
            data = data.encode('utf-8')
        
        encrypted_data = self.cipher.encrypt(data)
        return base64.b64encode(encrypted_data).decode('utf-8')


class EMTLogin:
    """东方财富证券登录类"""
    
    def __init__(self):
        self.session = requests.Session()
        self.encrypt = EMTradeEncrypt()
        self.base_url = "https://jywg.18.cn"
        self.captcha_path = "captcha.png"
        
        # 模拟浏览器请求头（基于HAR文件）
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:143.0) Gecko/20100101 Firefox/143.0',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'zh-CN',
            'Accept-Encoding': 'gzip, deflate, br, zstd',
            'Connection': 'keep-alive',
        })
        
        # 获取登录页面建立会话
        self._initialize_session()
    
    def _initialize_session(self):
        """初始化会话，获取必要的cookies"""
        try:
            response = self.session.get(f"{self.base_url}/Login")
            print(f"会话初始化: {response.status_code}, Cookies: {len(self.session.cookies)}")
        except Exception as e:
            print(f"会话初始化失败: {e}")
    
    def recognize_captcha(self):
        """使用 ddddocr 识别验证码"""
        try:
            ocr = ddddocr.DdddOcr()
            with open(self.captcha_path, 'rb') as f:
                img_bytes = f.read()
            res = ocr.classification(img_bytes)
            print(f"验证码识别结果: {res}")
            return res
        except Exception as e:
            print(f"验证码识别异常: {e}")
            return ""
    
    def get_captcha(self):
        """获取验证码图片"""
        try:
            # 使用JavaScript风格的随机数，而不是时间戳
            rand_num = random.random()
            captcha_url = f"{self.base_url}/Login/YZM?randNum={rand_num}"
            
            response = self.session.get(captcha_url)
            if response.status_code == 200:
                with open(self.captcha_path, 'wb') as f:
                    f.write(response.content)
                
                print(f"验证码已保存到: {self.captcha_path}")
                # 尝试显示图片
                try:
                    img = Image.open(BytesIO(response.content))
                    img.show()
                except:
                    pass
                
                return rand_num
            else:
                print(f"获取验证码失败: {response.status_code}")
                return None
        except Exception as e:
            print(f"获取验证码异常: {e}")
            return None
    
    def check_account_status(self, account):
        """检查账号状态 - 基于LoginSec.js第317-322行的逻辑"""
        try:
            url = f"{self.base_url}/Login/CheckZjzh"
            data = {'zjzh': account}
            
            response = self.session.post(url, data=data)
            if response.status_code == 200:
                result = response.text.strip()
                return result == "1"  # "1"表示需要验证码
            return True
        except Exception as e:
            print(f"检查账号状态异常: {e}")
            return True
    
    def login(self, account, password, captcha_code="", rand_number=None, duration="1800"):
        """执行登录 - 基于HAR文件分析的正确格式"""
        try:
            # 使用验证过的加密方法
            encrypted_password = self.encrypt.encrypt(password)
            print(f"密码加密完成，长度: {len(encrypted_password)}")
            
            # 生成gw_reqtimestamp
            gw_timestamp = str(int(time.time() * 1000))
            
            # 登录数据格式完全按照HAR文件成功请求
            login_data = {
                'userId': account,
                'password': encrypted_password,
                'randNumber': rand_number or str(random.random()),
                'identifyCode': captcha_code,
                'duration': duration,
                'authCode': "",
                'type': "Z",
                'secInfo': ""  # HAR文件中的关键参数
            }
            
            # URL包含validatekey参数
            url = f"{self.base_url}/Login/Authentication?validatekey="
            
            # 设置完整的请求头（基于HAR文件）
            self.session.headers.update({
                'Content-Type': 'application/x-www-form-urlencoded',
                'gw_reqtimestamp': gw_timestamp,  # 关键头部
                'X-Requested-With': 'XMLHttpRequest',
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Origin': self.base_url,
                'Referer': f'{self.base_url}/Login?el=1&clear=&returl=%2fTrade%2fBuy',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-origin',
                'Priority': 'u=0',
                'Pragma': 'no-cache',
                'Cache-Control': 'no-cache'
            })
            
            print("正在登录...")
            response = self.session.post(url, data=login_data)
            
            if response.status_code == 200:
                try:
                    result = response.json()
                    return self.handle_login_result(result, account)
                except json.JSONDecodeError:
                    print("登录响应格式错误")
                    print(f"响应内容: {response.text[:500]}...")
                    return False
            else:
                print(f"登录请求失败: {response.status_code}")
                return False
                
        except Exception as e:
            print(f"登录异常: {e}")
            return False
    
    def handle_login_result(self, result, account):
        """处理登录结果 - 基于LoginSec.js第279-301行的结果处理逻辑"""
        print(f"登录响应: {json.dumps(result, indent=2, ensure_ascii=False)}")
        
        if result.get('Status') == 0 or result.get('Status') == '0':  # HAR显示成功状态为0
            print("✅ 登录成功！")
            return True
        elif result.get('ErrCode') == -11 or result.get('Errcode') == -11:
            print("⚠️  需要SMS验证")
            print("提示: 请根据提示完成手机短信验证")
            return self.handle_sms_verification(account, result)
        elif result.get('ErrCode') == -1 or result.get('Return_Code') == -1:
            print("⚠️  账户状态需要处理")
            return False
        elif result.get('ErrCode') == -3:
            print(f"❌ 登录错误: {result.get('Message', '未知错误')}")
            return False
        else:
            print(f"❌ 登录失败: {result.get('Message', '未知错误')}")
            print(f"错误代码: {result.get('ErrCode', result.get('Errcode', 'N/A'))}")
            return False
    
    def handle_sms_verification(self, account, login_result):
        """处理SMS验证 - 基于LoginSec.js第98-104行和127-134行"""
        print("\\n=== SMS验证流程 ===")
        
        # 获取图形验证码
        rand_num = self.get_captcha()
        if not rand_num:
            return False
        
        # 用户输入
        mobile_last4 = input("请输入绑定手机号的末4位: ").strip()
        if not mobile_last4 or not mobile_last4.isdigit() or len(mobile_last4) != 4:
            print("手机号末4位格式不正确")
            return False
            
        img_captcha = input("请输入图形验证码: ").strip()
        if not img_captcha:
            print("图形验证码不能为空")
            return False
        
        # 发送SMS验证码
        if self.send_sms_code(account, mobile_last4, img_captcha, rand_num):
            sms_code = input("请输入短信验证码: ").strip()
            if sms_code:
                return self.verify_sms_code(account, mobile_last4, sms_code)
        
        return False
    
    def send_sms_code(self, account, mobile_last4, img_captcha, rand_num):
        """发送SMS验证码 - 基于LoginSec.js第127-134行"""
        try:
            url = f"{self.base_url}/Login/GetMsgVerifyCode_12"
            data = {
                'vCode': img_captcha,
                'randNumber': rand_num,
                'MobileNo': self.encrypt.encrypt(mobile_last4),  # 加密手机号
                'User_id': account
            }
            
            response = self.session.post(url, data=data)
            if response.status_code == 200:
                result = response.json()
                if result.get('Status') == 0:
                    print("✅ 验证码已发送，请查看手机短信")
                    return True
                else:
                    print(f"❌ 发送验证码失败: {result.get('Message')}")
                    return False
            return False
        except Exception as e:
            print(f"发送SMS验证码异常: {e}")
            return False
    
    def verify_sms_code(self, account, mobile_last4, sms_code):
        """验证SMS代码 - 基于LoginSec.js第98-104行"""
        try:
            url = f"{self.base_url}/Login/GetCheckMsgVerCode_12"
            data = {
                'Vercode': sms_code,
                'MobileNo': self.encrypt.encrypt(mobile_last4),  # 加密手机号
                'User_id': account
            }
            
            response = self.session.post(url, data=data)
            if response.status_code == 200:
                result = response.json()
                if result.get('Status') == 0:
                    print("✅ SMS验证成功！")
                    return True
                else:
                    print(f"❌ SMS验证失败: {result.get('Message')}")
                    return False
            return False
        except Exception as e:
            print(f"SMS验证异常: {e}")
            return False
    
    def full_login_process(self, account, password):
        """完整登录流程"""
        print(f"\\n=== 开始登录账号: {account} ===")
        
        # 1. 检查是否需要验证码
        need_captcha = self.check_account_status(account)
        print(f"账号状态检查: {'需要验证码' if need_captcha else '不需要验证码'}")
        
        captcha_code = ""
        rand_number = None
        
        # 2. 获取并识别验证码（如果需要），带重试机制
        if need_captcha:
            rand_number = None
            captcha_code = ""
            for i in range(3):  # 最多尝试3次
                print(f"--- 正在进行第 {i+1}/3 次验证码识别 ---")
                rand_number = self.get_captcha()
                if rand_number is None:
                    print("❌ 获取验证码失败，1秒后重试...")
                    time.sleep(1)
                    continue
                
                recognized_code = self.recognize_captcha()
                
                # 验证识别结果是否为4位数字
                if len(recognized_code) == 4 and recognized_code.isdigit():
                    print(f"✅ 识别成功: {recognized_code}")
                    captcha_code = recognized_code
                    break  # 识别成功，跳出循环
                else:
                    print(f"⚠️ 第 {i+1} 次识别结果 '{recognized_code}' 不符合要求，1秒后重试...")
                    time.sleep(1)

            # 如果3次自动识别都失败，则转为手动输入
            if not captcha_code:
                print("⚠️ 自动识别失败，请手动输入")
                captcha_code = input("请输入验证码: ").strip()

            if not captcha_code:
                print("❌ 验证码不能为空")
                return False
        else:
            # 即使不需要验证码，也要生成随机数
            rand_number = random.random()
        
        # 3. 执行登录
        return self.login(account, password, captcha_code, rand_number)


def main():
    """主函数"""
    print("=== 东方财富证券登录工具（修正版本）===")
    print("✅ 加密算法已通过与JavaScript原版的对比验证")
    print("✅ 支持验证码识别和SMS二次验证")
    print("✅ 修正了关键请求参数和头部")
    print()
    
    # 用户输入
    account = os.getenv("EM_ACCOUNT_NO")
    if not account:
        account = input("请输入资金账号（12位）: ").strip()
    else:
        print(f"从环境变量 EM_ACCOUNT_NO 读取到资金账号: {account}")
        
    password = getpass.getpass("请输入交易密码: ").strip()
    
    # 验证输入
    if not account or not password:
        print("❌ 账号和密码不能为空")
        return
    
    if len(account) != 12 or not account.isdigit():
        print("❌ 资金账号必须是12位数字")
        return
    
    # 执行登录
    login_client = EMTLogin()
    success = login_client.full_login_process(account, password)
    
    if success:
        print("\\n🎉 登录流程完成！")
    else:
        print("\\n❌ 登录失败，请检查账号密码或重试")


if __name__ == "__main__":
    main()