import {createReadStream} from 'node:fs'

const fileName = 'fileToRead.txt'

const read = async () => {
    const getAbsPath = (path) => new URL(path,import.meta.url)
    const url = getAbsPath(`files/${fileName}`)

    const stream = createReadStream(url)
    stream.pipe(process.stdout)
};

await read();