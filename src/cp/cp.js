import { fileURLToPath } from 'node:url';
import { dirname} from 'node:path';
import { fork } from 'node:child_process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


const spawnChildProcess = async (args) => {
    const child = fork(`${__dirname}/files/script.js`, args, {silent:true})
    process.stdin.pipe(child.stdin)
    child.stdout.pipe(process.stdout)
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['hello','world','!!!']);
