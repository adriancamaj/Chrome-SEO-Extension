// Modify Google search results to display 100 results per page
if (window.location.href.includes('www.google.com/search')) {
  let url = new URL(window.location.href);
  url.searchParams.set('num', '100');
  if (!window.location.href.includes('num=100')) {
    window.location.replace(url.toString());
  }
}

// Collect all ranking URLs
let rankingUrls = [];
document.querySelectorAll('div.yuRUbf > a').forEach((link) => {
  rankingUrls.push(link.href);
});

// Listen for messages from popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'getUrls') {
    sendResponse({ urls: rankingUrls });
  }
});
