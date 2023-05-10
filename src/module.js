console.log('module.js');

// eslint-disable-next-line require-jsdoc
async function start() {
  const toLog = await Promise.resolve('hello');
  console.log(toLog);
}

start();
