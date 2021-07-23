const Bottle = require("bottlejs");

const dispose = async () => {
  const bottle = new Bottle();
  bottle.container.browser.close();
};

module.exports = dispose;
