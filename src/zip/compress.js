import {fileURLToPath} from 'node:url'
import { dirname } from 'node:path';
import { pipeline } from 'node:stream';
import { createGzip } from 'node:zlib';
import {createReadStream, createWriteStream} from 'node:fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const source = '/files/fileToCompress.txt'
const newArchive = '/files/archive.gz'

const compress = async () => {
    const readStream = createReadStream(__dirname+source)
    const writeStream = createWriteStream(__dirname+newArchive)

    pipeline(
        readStream,
        createGzip(),
        writeStream,
        (err)=>{
            console.error(err);
        }
    ) 
};

await compress();