const puppeteer = require("puppeteer");

const Bottle = require("bottlejs");
const bottle = new Bottle();

// Heroku環境かどうかの判断（必要？）
const LAUNCH_OPTION = process.env.DYNO
  ? { args: ["--no-sandbox", "--disable-setuid-sandbox"] }
  : { headless: true };

initDI = async () => {
  const browser = await puppeteer.launch(LAUNCH_OPTION);
  bottle.service("browser", browser);
};

module.exports = initDI;

module.exports = dispose = () => bottle.container.browser.close();
