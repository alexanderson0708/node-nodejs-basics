import { cpus } from 'node:os'
import { dirname} from 'node:path';
import { fileURLToPath } from 'node:url';
import { Worker} from 'node:worker_threads';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const performCalculations = async () => {
    let initNumber = 10
    const cpuNumber = cpus()
    let resWorker = await Promise.allSettled(cpuNumber.map(()=> {
        return new Promise((resolve, reject) => {
            const worker = new Worker(__dirname + '/worker.js', {workerData: initNumber++})
            worker.on('message', message => resolve(message))
            worker.on('error', err => reject(err))
            })
    }))
    
    const res = resWorker.map( ({status, value}) => ({
        status: status === 'fulfilled' ? 'resolved' : 'error',
        data: status === 'fulfilled' ? value : null
    })) 
    console.log(res);
    return res
};

await performCalculations();