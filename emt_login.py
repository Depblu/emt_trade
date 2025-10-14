#!/usr/bin/env python3
"""
Eastern Money Trading Login Simulation
This script simulates the login process for Eastern Money trading platform
without using a real browser, instead performing HTTP requests directly.
"""

import requests
import json
import base64
import time
import random
import re
from urllib.parse import urljoin, urlparse, parse_qs
from py_mini_racer import py_mini_racer
import getpass
import sys
import os
from typing import Optional, Dict, Any

class EMTLoginSession:
    def __init__(self):
        self.session = requests.Session()
        self.base_url = "https://jywg.18.cn"
        self.login_url = f"{self.base_url}/Login"
        self.captcha_url = f"{self.base_url}/Login/YZM"
        self.auth_url = f"{self.base_url}/Login/Authentication"
        
        # Initialize session with proper headers
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:143.0) Gecko/20100101 Firefox/143.0',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
            'Accept-Language': 'zh-CN',
            'Accept-Encoding': 'gzip, deflate, br, zstd',
            'DNT': '1',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'none',
            'Sec-Fetch-User': '?1',
            'Priority': 'u=1'
        })
        
        self.js_context = None
        self.rand_num = None
        self.encryption_js = None
        
    def get_login_page(self, return_url="/Trade/Buy") -> bool:
        """Get the login page and extract necessary information"""
        try:
            params = {
                'el': '1',
                'clear': '',
                'returl': return_url
            }
            
            response = self.session.get(self.login_url, params=params)
            response.raise_for_status()
            
            print(f"✓ Successfully loaded login page (Status: {response.status_code})")
            
            # Extract any necessary data from the login page
            # Look for JavaScript variables or encryption functions
            content = response.text
            
            # Look for JavaScript bundle URLs that might contain encryption functions
            js_bundle_pattern = r'/JsBundles/[^"]+'
            js_bundles = re.findall(js_bundle_pattern, content)
            
            if js_bundles:
                print(f"✓ Found {len(js_bundles)} JavaScript bundle(s) in login page")
                # Try to extract encryption function from JavaScript bundles
                self.encryption_js = self._extract_encryption_function(js_bundles)
            else:
                print("⚠ No JavaScript bundles found - encryption may not work")
                self.encryption_js = None
            
            return True
            
        except Exception as e:
            print(f"✗ Failed to get login page: {e}")
            return False
    
    def _extract_encryption_function(self, js_bundles: list) -> Optional[str]:
        """Extract the encryption function from JavaScript bundles"""
        try:
            encryption_function = None
            
            for js_bundle in js_bundles:
                bundle_url = urljoin(self.base_url, js_bundle)
                print(f"  Fetching JS bundle: {js_bundle}")
                
                response = self.session.get(bundle_url)
                response.raise_for_status()
                
                js_content = response.text
                
                # Look for encryption patterns
                # Common patterns in Chinese trading platforms
                patterns = [
                    r'function\s+encrypt\s*\([^)]*\)\s*\{[^}]*\}',
                    r'EMTradeEncrypt\s*[:.]\s*\{[^}]*encrypt[^}]*\}',
                    r'encrypt\s*:\s*function\s*\([^)]*\)\s*\{[^}]*\}',
                    r'["\']encrypt["\']\s*:\s*function\s*\([^)]*\)\s*\{[^}]*\}',
                ]
                
                for pattern in patterns:
                    matches = re.findall(pattern, js_content, re.IGNORECASE | re.DOTALL)
                    if matches:
                        print(f"  ✓ Found potential encryption function in {js_bundle}")
                        encryption_function = matches[0]
                        break
                
                # Also look for base64/crypto imports or functions
                if 'CryptoJS' in js_content or 'btoa' in js_content:
                    print(f"  ✓ Found crypto functions in {js_bundle}")
                    # Store the entire bundle if it contains crypto functions
                    if not encryption_function:
                        encryption_function = js_content
                
                if encryption_function:
                    break
            
            if encryption_function:
                print("✓ Successfully extracted encryption function")
                return encryption_function
            else:
                print("⚠ Could not find encryption function in JavaScript bundles")
                return None
                
        except Exception as e:
            print(f"⚠ Failed to extract encryption function: {e}")
            return None
    
    def get_captcha_image(self, save_path="captcha.png") -> Optional[bytes]:
        """Fetch captcha image and save it locally"""
        try:
            self.rand_num = random.random()
            
            # Update headers for image request
            headers = {
                'Accept': 'image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5',
                'Referer': f"{self.login_url}?el=1&clear=&returl=%2fTrade%2fBuy",
                'Sec-Fetch-Dest': 'image',
                'Sec-Fetch-Mode': 'no-cors',
                'Sec-Fetch-Site': 'same-origin',
            }
            
            response = self.session.get(
                f"{self.captcha_url}?randNum={self.rand_num}",
                headers=headers
            )
            response.raise_for_status()
            
            # Save captcha image
            with open(save_path, 'wb') as f:
                f.write(response.content)
            
            print(f"✓ Captcha image saved to {save_path}")
            return response.content
            
        except Exception as e:
            print(f"✗ Failed to get captcha image: {e}")
            return None
    
    def ocr_captcha(self, image_bytes: bytes) -> Optional[str]:
        """Attempt OCR on captcha image with fallback methods"""
        # Try ddddocr first with PIL compatibility fix
        try:
            # Fix PIL.Image.ANTIALIAS compatibility issue
            from PIL import Image
            if not hasattr(Image, 'ANTIALIAS'):
                Image.ANTIALIAS = Image.LANCZOS
            
            import ddddocr
            ocr = ddddocr.DdddOcr()
            result = ocr.classification(image_bytes)
            print(f"✓ OCR result: {result}")
            return result
        except Exception as e:
            print(f"⚠ ddddocr failed ({e}), trying alternative OCR...")
            
        # Try pytesseract as fallback
        try:
            import pytesseract
            from PIL import Image
            import io
            
            # Convert bytes to PIL Image
            img = Image.open(io.BytesIO(image_bytes))
            
            # Convert to grayscale and enhance for better OCR
            img = img.convert('L')
            
            # Use pytesseract with specific config for digits only
            config = '--psm 8 -c tessedit_char_whitelist=0123456789'
            result = pytesseract.image_to_string(img, config=config).strip()
            
            if result and len(result) == 4 and result.isdigit():
                print(f"✓ OCR result (pytesseract): {result}")
                return result
            else:
                print(f"⚠ OCR result not valid: '{result}'")
                
        except Exception as e:
            print(f"⚠ Alternative OCR also failed: {e}")
            
        # Try simple PIL-based OCR as last resort
        try:
            from PIL import Image
            import io
            
            img = Image.open(io.BytesIO(image_bytes))
            # Convert to grayscale
            img = img.convert('L')
            
            # Very basic character recognition for simple captchas
            # This is a placeholder - in practice you'd need a more sophisticated approach
            print("⚠ Using basic image processing - OCR may not be accurate")
            
        except Exception as e:
            print(f"✗ All OCR methods failed: {e}")
            
        return None
    
    def get_captcha_code(self) -> str:
        """Get captcha code via OCR or user input"""
        image_bytes = self.get_captcha_image()
        if not image_bytes:
            return None
        
        # Try OCR first
        ocr_result = self.ocr_captcha(image_bytes)
        
        if ocr_result and len(ocr_result) == 4 and ocr_result.isdigit():
            # OCR seems successful
            confirm = input(f"OCR detected captcha as: {ocr_result}. Is this correct? (y/n): ")
            if confirm.lower().startswith('y'):
                return ocr_result
        
        # Fallback to manual input
        print("Please open 'captcha.png' and enter the 4-digit code:")
        if os.name == 'posix':  # Unix/Linux/Mac
            os.system("xdg-open captcha.png 2>/dev/null || open captcha.png 2>/dev/null")
        
        while True:
            captcha_code = input("Enter captcha code: ").strip()
            if len(captcha_code) == 4 and captcha_code.isdigit():
                return captcha_code
            else:
                print("Please enter a 4-digit number")
    
    def encrypt_password(self, password: str) -> str:
        """Encrypt password using JavaScript encryption from the login page"""
        if self.encryption_js:
            try:
                from py_mini_racer import py_mini_racer
                
                print("✓ Attempting to use extracted encryption function")
                
                # Create JavaScript context and load the encryption function
                ctx = py_mini_racer.MiniRacer()
                
                # If we have a full JS bundle, load it
                if len(self.encryption_js) > 500:  # Probably a full bundle
                    ctx.eval(self.encryption_js)
                    
                    # Try to call common encryption function names
                    try:
                        # Try EMTradeEncrypt.encrypt
                        result = ctx.call('EMTradeEncrypt.encrypt', password)
                        print(f"✓ Password encrypted using EMTradeEncrypt.encrypt")
                        return result
                    except:
                        pass
                    
                    # Try standalone encrypt function
                    try:
                        result = ctx.call('encrypt', password)
                        print(f"✓ Password encrypted using encrypt function")
                        return result
                    except:
                        pass
                        
                else:
                    # We have a specific function, wrap it and execute
                    wrapper_js = f'''
                    {self.encryption_js}
                    
                    function encryptPassword(pwd) {{
                        try {{
                            if (typeof encrypt === 'function') {{
                                return encrypt(pwd);
                            }}
                            if (typeof EMTradeEncrypt !== 'undefined' && EMTradeEncrypt.encrypt) {{
                                return EMTradeEncrypt.encrypt(pwd);
                            }}
                            // Fallback to base64
                            return btoa(pwd);
                        }} catch (e) {{
                            return btoa(pwd);
                        }}
                    }}
                    '''
                    
                    ctx.eval(wrapper_js)
                    result = ctx.call('encryptPassword', password)
                    print(f"✓ Password encrypted using extracted function")
                    return result
                    
            except Exception as e:
                print(f"⚠ JavaScript encryption failed: {e}")
                print("⚠ Falling back to simplified encryption")
        
        # Fallback encryption methods
        try:
            import base64
            import hashlib
            
            print("⚠ Using fallback encryption methods")
            
            # Try a few common encryption patterns used by Chinese trading platforms
            # Method 1: Simple base64
            encoded = base64.b64encode(password.encode('utf-8')).decode('utf-8')
            
            # Method 2: MD5 hash (sometimes used)
            # md5_hash = hashlib.md5(password.encode('utf-8')).hexdigest()
            
            # Method 3: Base64 with some padding/transformation
            # padded = password + str(int(time.time()))
            # encoded_padded = base64.b64encode(padded.encode('utf-8')).decode('utf-8')
            
            # For now, return the simple base64 version
            return encoded
            
        except Exception as e:
            print(f"✗ All encryption methods failed: {e}")
            print("⚠ Falling back to plain text password (will likely fail authentication)")
        return False
    
    def _encode_post_data(self, data: Dict[str, str]) -> str:
        """Encode POST data for Content-Length calculation"""
        from urllib.parse import urlencode
        return urlencode(data)
    
    def login(self, username: str, password: str, max_retries: int = 3) -> Dict[str, Any]:
        """Perform the complete login process with retry logic"""
        print("Starting Eastern Money login process...")
        
        for attempt in range(max_retries):
            if attempt > 0:
                print(f"\nRetrying login (attempt {attempt + 1}/{max_retries})...")
                time.sleep(2 + attempt)  # Progressive backoff
            
            try:
                # Step 1: Get login page
                if not self.get_login_page():
                    if attempt < max_retries - 1:
                        print("⚠ Failed to load login page, retrying...")
                        continue
                    return {"success": False, "error": "Failed to load login page"}
                
                # Step 2: Get captcha
                captcha_code = self.get_captcha_code()
                if not captcha_code:
                    if attempt < max_retries - 1:
                        print("⚠ Failed to get captcha code, retrying...")
                        continue
                    return {"success": False, "error": "Failed to get captcha code"}
                
                # Step 3: Encrypt password
                encrypted_password = self.encrypt_password(password)
                
                # Step 4: Prepare authentication request
                auth_data = {
                    'userId': username,
                    'password': encrypted_password,
                    'randNumber': str(self.rand_num),
                    'identifyCode': captcha_code,
                    'duration': '1800',  # Session duration
                    'authCode': '',
                    'type': 'Z',  # Account type
                    'secInfo': ''
                }
                
                # Generate timestamp for gw_reqtimestamp header (critical!)
                import time
                gw_timestamp = str(int(time.time() * 1000))
                
                # Update headers for POST request - match browser exactly
                headers = {
                    'Accept': 'application/json, text/javascript, */*; q=0.01',
                    'Accept-Language': 'zh-CN',
                    'Accept-Encoding': 'gzip, deflate, br, zstd',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'gw_reqtimestamp': gw_timestamp,  # Critical header found in HAR
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Length': str(len(self._encode_post_data(auth_data))),
                    'Origin': self.base_url,
                    'Connection': 'keep-alive',
                    'Referer': f"{self.login_url}?el=1&clear=&returl=%2fTrade%2fBuy",
                    'Sec-Fetch-Dest': 'empty',
                    'Sec-Fetch-Mode': 'cors',
                    'Sec-Fetch-Site': 'same-origin',
                    'Priority': 'u=0',
                    'Pragma': 'no-cache',
                    'Cache-Control': 'no-cache'
                }
                
                print("Submitting login request...")
                response = self.session.post(
                    f"{self.auth_url}?validatekey=",
                    data=auth_data,
                    headers=headers,
                    timeout=30  # Add timeout
                )
                response.raise_for_status()
                
                result = response.json()
                print(f"Authentication response: {result}")
                
                if result.get('Status') == 0:
                    print("✓ Login successful!")
                    return {
                        "success": True,
                        "result": result,
                        "cookies": dict(self.session.cookies)
                    }
                else:
                    error_msg = result.get('Message', 'Unknown error')
                    error_code = result.get('Status', 'N/A')
                    
                    # Check if this is a retriable error
                    if self._is_retriable_error(error_msg, error_code):
                        print(f"⚠ Retriable error ({error_msg}), will retry if attempts remain")
                        if attempt < max_retries - 1:
                            continue
                    
                    print(f"✗ Login failed: {error_msg}")
                    return {
                        "success": False,
                        "error": error_msg,
                        "result": result
                    }
                    
            except requests.exceptions.Timeout:
                error_msg = "Request timeout"
                print(f"⚠ {error_msg}")
                if attempt < max_retries - 1:
                    continue
                return {"success": False, "error": error_msg}
                
            except requests.exceptions.ConnectionError:
                error_msg = "Connection error"
                print(f"⚠ {error_msg}")
                if attempt < max_retries - 1:
                    continue
                return {"success": False, "error": error_msg}
                
            except Exception as e:
                error_msg = str(e)
                print(f"⚠ Login request failed: {error_msg}")
                if attempt < max_retries - 1 and "network" in error_msg.lower():
                    continue
                return {"success": False, "error": error_msg}
        
        return {"success": False, "error": "Max retries exceeded"}
    
    def _is_retriable_error(self, error_msg: str, error_code) -> bool:
        """Determine if an error is worth retrying"""
        retriable_messages = [
            "网络繁忙",  # Network busy
            "请稍候重试",  # Please retry later
            "系统繁忙",  # System busy
            "服务器繁忙",  # Server busy
            "网络超时",  # Network timeout
        ]
        
        retriable_codes = [-1, -2, -999]  # Common temporary error codes
        
        if error_code in retriable_codes:
            return True
            
        for msg in retriable_messages:
            if msg in error_msg:
                return True
                
        return False
    
    def check_login_status(self):
        """Check if login was successful by accessing a protected page"""
        try:
            response = self.session.get(f"{self.base_url}/Trade/Buy")
            if response.status_code == 200 and "登录" not in response.text:
                print("✓ Login verification successful - can access trading page")
                return True
            else:
                print("✗ Login verification failed - redirected to login page")
                return False
        except Exception as e:
            print(f"✗ Login verification error: {e}")
            return False

def main():
    print("=== Eastern Money Trading Login Simulation ===")
    print()
    
    # Get user credentials
    username = input("Enter your account number (12 digits): ").strip()
    if not username or len(username) != 12 or not username.isdigit():
        print("✗ Invalid account number. Must be 12 digits.")
        return
    
    password = getpass.getpass("Enter your trading password: ")
    if not password:
        print("✗ Password cannot be empty")
        return
    
    print()
    
    # Create login session and attempt login
    login_session = EMTLoginSession()
    result = login_session.login(username, password)
    
    if result["success"]:
        print("\n=== Login Summary ===")
        print("✓ Authentication successful")
        print(f"Cookies: {len(result['cookies'])} cookies saved")
        
        # Verify login by accessing protected page
        print("\nVerifying login status...")
        login_session.check_login_status()
        
    else:
        print("\n=== Login Failed ===")
        print(f"Error: {result['error']}")
        
        if 'result' in result:
            error_code = result['result'].get('ErrCode', 'N/A')
            print(f"Error Code: {error_code}")

if __name__ == "__main__":
    main()