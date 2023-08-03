const { spawn } = require('child_process');
const process = spawn('npm', ['run', 'build']);

const dateBegin = new Date();

process.stdout.on('data', (data) => {
  console.log(data.toString());
  if (data.toString().includes('webpack 5.88.2')) {
    const dateEnd = new Date();
    console.log('Duration:', dateEnd - dateBegin, 'ms');
    process.kill();
  }
});
