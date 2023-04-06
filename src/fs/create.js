import {writeFile} from 'fs/promises'
import { URL } from 'node:url';
import { ERROR_MSG, FILE_PATH } from './consts.js';

const fileName = 'fresh.txt'
const content = 'I am fresh and young'

const create = async () => {
    const getAbsPath = (path) => new URL(path,import.meta.url)
    const url = getAbsPath(`${FILE_PATH}/${fileName}`)
    try {
        await writeFile(url, content, {flag: 'wx'})
    }catch (err){
        console.log(err);
        throw Error (ERROR_MSG)  
    } 
};

await create();