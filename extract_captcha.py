#!/usr/bin/env python3

import json
import base64
import ddddocr

# Extract the base64 captcha image from the HAR file
with open('har_login_success.json', 'r', encoding='utf-8') as f:
    har_data = json.load(f)

# Find the captcha image request and response
captcha_image_data = None
for entry in har_data['log']['entries']:
    if 'YZM?randNum=' in entry['request']['url']:
        # This is the captcha image request
        if 'text' in entry['response']['content']:
            captcha_image_data = entry['response']['content']['text']
            print(f"Found captcha image in URL: {entry['request']['url']}")
            break

if captcha_image_data:
    # Decode base64 and save as PNG file
    image_bytes = base64.b64decode(captcha_image_data)
    with open('captcha_test.png', 'wb') as f:
        f.write(image_bytes)
    print("Captcha image saved as 'captcha_test.png'")
    
    # Test ddddocr OCR
    try:
        ocr = ddddocr.DdddOcr()
        result = ocr.classification(image_bytes)
        print(f"OCR result: {result}")
    except Exception as e:
        print(f"OCR failed with error: {e}")
        print("Will need to handle this in the main script with manual input fallback")
    
    # From the HAR data, we know the actual captcha was: 3244
    print("Expected result: 3244")
else:
    print("No captcha image data found in HAR file")