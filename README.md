# 🚀 How to Load Unpacked Chrome Extensions (Developer Mode)

This guide provides the necessary steps to install any Chrome extension directly from its source code (unpacked directory). This is the standard method used by developers and for testing custom extensions before publishing to the Chrome Web Store.

# 🚀 Installation (Developer Channel Deployment)

Prerequisites

You must have the extension's source files saved together in a single, dedicated folder (the "root directory"). This directory must contain the manifest.json file.

Steps

1. Access Extension Management

Navigate to the Chrome extension settings page:

In the Chrome address bar, enter the following URL:
chrome://extensions/

Press Enter.

2. Activate Developer Mode

This step enables the browser to load extensions directly from local files:

On the Extension Management page, locate the "Developer mode" toggle (typically in the top-right corner).

Click the toggle to activate ON.

3. Load the Unpacked Directory

Load the extension files into the browser:

Click the "Load unpacked" button that appears in the top-left corner.

Navigate to and select the root directory containing the extension files.

Click "Select Folder."

# ✨ Confirmation: A new card for your extension will now appear on the management page, confirming successful installation.

# 🛑 Troubleshooting: Developer Mode Disabled

If the "Developer mode" toggle is locked, grayed out, or immediately reverts to OFF:

This indicates a security or enterprise policy is enforced by a network administrator (e.g., school or corporate device).

Action Plan: You will need to use a personal device or contact your system administrator to request permission to load unpacked extensions.
