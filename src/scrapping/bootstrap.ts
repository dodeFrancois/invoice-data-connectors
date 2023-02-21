import puppeteer from "puppeteer";
import BrowserInstance from './models/BrowserInstance';

async function start(): Promise<BrowserInstance> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  return new BrowserInstance(browser, page);
}

export default start;