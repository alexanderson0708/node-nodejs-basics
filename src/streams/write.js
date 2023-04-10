import {createWriteStream} from 'node:fs'
const fileName = 'fileToWrite.txt'

const write = async () => {
    const getAbsPath = (path) => new URL(path,import.meta.url)
    const url = getAbsPath(`files/${fileName}`)

    const stream = createWriteStream(url)
    process.stdin.pipe(stream) 
};

await write();