import { readFile } from 'node:fs/promises';
import { URL } from 'node:url';
import { ERROR_MSG, FILE_PATH } from './consts.js';

const fileName = 'fileToRead.txt'

const read = async () => {
    const getAbsPath = (path) => new URL(path,import.meta.url)
    const url = getAbsPath(`${FILE_PATH}/${fileName}`)
    try {
        let content = await readFile(url, 'utf-8')
        console.log(content);
    }catch (err){
        console.log(err);
        throw Error (ERROR_MSG)  
    }
};

await read();