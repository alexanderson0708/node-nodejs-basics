import {fileURLToPath} from 'node:url'
import { dirname } from 'node:path';
import { pipeline } from 'node:stream';
import { createUnzip } from 'node:zlib';
import {createReadStream, createWriteStream} from 'node:fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const source = '/files/archive.gz'
const newFile = '/files/fileToCompress.txt'

const decompress = async () => {
    const readStream = createReadStream(__dirname + source)
    const writeStream =  createWriteStream(__dirname + newFile)

    pipeline(
        readStream,
        createUnzip(),
        writeStream,
        (err)=>{
            console.error(err);
        }
    )
}
await decompress();