const urlsGood = ['https://www.SEIZE.io/', 'https://seize.io/'];
const urlsBad  = ['https://www.phishing.io/', 'https://phishing.io/'];

class Unphish {

  constructor (tab) {
    const _isThisTab = (site) => {
      return new URL(this.tab.url).hostname === new URL(site).hostname;
    }

    this.tab = tab;
    this.tabSafe = urlsGood.some(_isThisTab);
    this.tabDanger = urlsBad.some(_isThisTab);
  }

  handleClick = (activeTab) => {
    chrome.scripting.executeScript({ target: { tabId: activeTab.id }, files: ['on-click.js'] });
  }

  badge = () => {
    if (this.tabSafe) {
      this._badgeSafe();
    } else if (this.tabDanger) {
      this._badgeDanger();
    } else {
      this._badgeOff();
    }
  }

  _badgeSafe = () => {
    chrome.action.setBadgeBackgroundColor({ color: 'green', tabId: this.tab.id }, () => {
      chrome.action.setBadgeText({ text: 'OK', tabId: this.tab.id });
    });
  }

  _badgeDanger = (tab) => {
    chrome.action.setBadgeBackgroundColor({ color: 'red', tabId: this.tab.id }, () => {
      chrome.action.setBadgeText({ text: '!UGH', tabId: this.tab.id });
    });
  }

  _badgeOff = (tab) => {
    chrome.action.setBadgeText({ text: '', tabId: this.tab.id });
  }
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log('updated');
  new Unphish(tab).badge();
});

chrome.tabs.onCreated.addListener(tab => {
  console.log('created');
  new Unphish(tab).badge();
});

chrome.action.onClicked.addListener(tab => {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    new Unphish(tabs[0]).handleClick();
  });
});
