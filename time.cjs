const { spawn } = require('child_process');
const process = spawn('npm', ['run', 'rollup:build']);

const dateBegin = new Date();

process.stdout.on('data', (data) => {
  console.log(data.toString());
  if (data.toString().includes('created bundle.js')) {
    const dateEnd = new Date();
    console.log('Duration:', dateEnd - dateBegin, 'ms');
    process.kill();
  }
});

// 添加错误处理
process.stderr.on('data', (data) => {
  console.error(`Error: ${data}`);
});

process.on('close', (code) => {
  const dateEnd = new Date();
  console.log('Duration:', dateEnd - dateBegin, 'ms');
  console.log(`child process exited with code ${code}`);
});
