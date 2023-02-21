import { Browser, Page } from "puppeteer";

export default class BrowserInstance {
  browser: Browser;

  page: Page;

  constructor(browser: Browser, page: Page) {
    this.browser = browser;
    this.page = page;
  }

  stop(): Promise<void> {
    return this.browser.close();
  }
}