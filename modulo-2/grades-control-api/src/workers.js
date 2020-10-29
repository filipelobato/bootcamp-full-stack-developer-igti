import http from 'http';
import cluster from 'cluster';
import os from 'os';

const numCPUs = os.cpus().length;
const freeMemo = os.freemem();
const totalMemo = os.totalmem();
const homeDir = os.homedir();
const hostname = os.hostname();

http
  .createServer((req, res) => {
    console.log(process.argv);
    res.writeHead(200);
    res.end('Hello from Node.js process!\n' + homeDir);
  })
  .listen(8000);

console.log(
  'Listening on port 8000 ' + hostname + ' ' + process.argv[2] + ' ' + homeDir
);
