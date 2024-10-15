# SEO SERP Viewer (Google Chrome Browser Extension)

*An SEO Chrome extension to view and export the top 100 Google search results URLs.*

---
## Overview

**SEO SERP Viewer** is a Chrome extension designed to enhance your SEO analysis by displaying the top 100 Google search results directly within the browser. Users can easily export these ranking URLs in CSV format for further analysis.

---
## Features

- **Display 100 Search Results per Page**
  - Automatically modifies Google search settings to show 100 results.
- **SERP Tab with Ranking URLs**
  - View all ranking URLs from your search query in a convenient list.
- **Export to CSV**
  - Download the list of ranking URLs as a CSV file with a single click.
- **User-Friendly Interface**
  - Simple and intuitive design for seamless user experience.

---
## Installation

1. **Clone or Download the Repository**

   ```
   git clone https://github.com/adriancamaj/Chrome-SEO-Extension.git
   ```
   
2. **Load the Extension into Chrome**

  - Open Chrome and navigate to `chrome://extensions/`.
  - Enable **Developer mode** by toggling the switch in the upper-right corner.
  - Click on **Load unpacked** and select the `Chrome-SEO-Extension` directory.

---
## Usage

1. **Perform a Google Search**
  - Go to `www.google.com` and enter your search query.
2. **Activate the Extension**
  - Click on the **SEO SERP Viewer** icon in the Chrome toolbar.
3. **View Ranking URLs**
  - Click the **"View Ranking URLs"** button to display the list of URLs.
    ```{% if rankingUrls %}```
  - The URLs will appear below:  `{% for url in rankingUrls %}`
    - `{{ url }} {% endfor %} {% else %}`
  - No URLs found. Please ensure you are on a Google search results page. `{% endif %}`
4. **Export as CSV**
  - Click the **"Export as CSV"** button to download the URLs.

---
## Project Structure
```
seo-serp-viewer/
│
├── manifest.json
├── background.js
├── content.js
├── popup.html
├── popup.js
├── styles.css
└── icons/
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

---
## Code Highlights

#### `manifest.json` 
Defines the extension's metadata and permissions.
#### `content.js` 
Handles modification of search results and extraction of URLs.

---
## Future Enhancements

- **UI/UX Improvements**
  - Enhance the popup design and responsiveness.
- **Additional SEO Features**
  - Incorporate more tools similar to the Detailed SEO Chrome Extension.
- **Customizable Settings**
  - Allow users to set the number of search results per page.
- **Error Handling**
  - Add notifications for scenarios like no internet connection or non-Google pages.

---
## License

This project is licensed under the MIT License - see the LICENSE file for details.

