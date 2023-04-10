import { unlink } from 'node:fs/promises';
import { URL } from 'node:url';
import { ERROR_MSG, FILE_PATH } from './consts.js';

const fileName = 'fileToRemove.txt'

const remove = async () => {
    const getAbsPath = (path) => new URL(path,import.meta.url)
    const url = getAbsPath(`${FILE_PATH}/${fileName}`)
    try {
        await unlink(url)
    }catch (err){
        console.log(err);
        throw Error (ERROR_MSG)  
    }
};

await remove();