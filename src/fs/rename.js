import { rename as renameFile } from 'node:fs/promises';
import { URL } from 'node:url';
import { ERROR_MSG, FILE_PATH } from './consts.js';

const fileName = 'wrongFilename.txt'
const newFilename = 'properFilename.md'

const rename = async () => {
    const getAbsPath = (path) => new URL(path,import.meta.url)
    const url = getAbsPath(`${FILE_PATH}/${fileName}`)
    const newUrl = getAbsPath(`${FILE_PATH}/${newFilename}`)
    try {
        await renameFile(url, newUrl)
    }catch (err){
        console.log(err);
        throw Error (ERROR_MSG)  
    } 
};

await rename();