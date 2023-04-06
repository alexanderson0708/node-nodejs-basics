import {createHash} from 'node:crypto'
import { readFile } from 'node:fs/promises';

const fileName = 'fileToCalculateHashFor.txt'

const calculateHash = async () => {
    const getAbsPath = (path) => new URL(path,import.meta.url)
    const url = getAbsPath(`files/${fileName}`)
    const content = await readFile(url)
    const hash = createHash('sha3-256').update(content).digest('hex')
    console.log('Hash:',hash)
};

await calculateHash();