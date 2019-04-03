const colors = require('colors');

module.exports = (shallModifyGlobal) => {
  const consoleLogger = console.log;
  const logger = function (...args) {
    for (const argIndex in args) {
      if (typeof args[argIndex] === 'string') {
        args[argIndex] = colors.rainbow(args[argIndex]);
      }
    }
    consoleLogger.apply(this, args);
  };
  if (shallModifyGlobal) {
    console.log = logger;
  }
  return logger;
};
