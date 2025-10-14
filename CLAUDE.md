# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This project is a Python script designed to automate the login process for East Money Securities (东方财富证券). It handles password encryption, captcha retrieval, and the multi-step authentication flow, including SMS verification.

## Getting Started

### 激活python虚拟环境

```bash
source env/bin/activate
```

### Installation

To set up the development environment, install the required Python packages using `pip`:

```bash
pip install -r requirements.txt
```

### Running the Script

To run the login script, execute the following command from the root of the repository:

```bash
python emt_login_corrected.py
```

The script will prompt for a user account and password.

## Code Architecture

The main logic is contained within `emt_login_corrected.py`. The key classes are:

*   **`EMTradeEncrypt`**: This class is responsible for handling the RSA encryption of the user's password. It uses a public key extracted from the website's JavaScript to ensure the password is sent securely.
*   **`EMTLogin`**: This is the main class that orchestrates the login process. It manages the `requests` session, handles cookies, retrieves captchas, and sends the final login request. It also includes logic for handling SMS verification if required.

The script is designed to be run from the command line, and the `main()` function at the end of the file serves as the entry point.
