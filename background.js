const communityGoodSites = './urls-good.json';
const communityBadSites = './urls-bad.json';
let urlsGood = urlsBad = '';

fetch(communityGoodSites)
  .then((response) => response.json())
  .then((sites) => urlsGood = sites);

fetch(communityBadSites)
  .then((response) => response.json())
  .then((sites) => urlsBad = sites);

class Unphish {
  constructor (tab) {
    const _isThisTab = (site) => {
      return new URL(this.tab.url).hostname === new URL(site).hostname;
    }

    this.tab = tab;
    this.tabSafe = urlsGood.some(_isThisTab);
    this.tabDanger = urlsBad.some(_isThisTab);
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
    chrome.action.setBadgeBackgroundColor({ color: 'lightgreen', tabId: this.tab.id }, () => {
      chrome.action.setBadgeText({ text: 'OK', tabId: this.tab.id });
    });
  }

  _badgeDanger = () => {
    chrome.action.setBadgeBackgroundColor({ color: 'hotpink', tabId: this.tab.id }, () => {
      chrome.action.setBadgeText({ text: '!UGH', tabId: this.tab.id });
      chrome.scripting.executeScript({ target: { tabId: this.tab.id }, files: ['on-danger.js'] });
    });
  }

  _badgeOff = () => {
    chrome.action.setBadgeText({ text: '', tabId: this.tab.id });
  }
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  new Unphish(tab).badge();
});
