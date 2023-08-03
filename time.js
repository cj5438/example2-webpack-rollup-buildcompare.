const { spawn } = require('child_process');
const process = spawn('npm', ['run', 'start']);

const dateBegin = new Date();

process.stdout.on('data', (data) => {
  console.log(data.toString());
  if (data.toString().includes('toimc')) {
    const dateEnd = new Date();
    console.log('Duration:', dateEnd - dateBegin, 'ms');
    process.kill();
  }
});
