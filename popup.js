document.getElementById('viewUrls').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { message: 'getUrls' },
      (response) => {
        const urlList = document.getElementById('urlList');
        urlList.innerHTML = '';
        response.urls.forEach((url) => {
          let li = document.createElement('li');
          li.textContent = url;
          urlList.appendChild(li);
        });
      }
    );
  });
});

document.getElementById('exportCsv').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { message: 'getUrls' },
      (response) => {
        let csvContent = 'data:text/csv;charset=utf-8,';
        response.urls.forEach((url) => {
          csvContent += url + '\r\n';
        });
        const encodedUri = encodeURI(csvContent);
        chrome.downloads.download({
          url: encodedUri,
          filename: 'ranking_urls.csv',
        });
      }
    );
  });
});
