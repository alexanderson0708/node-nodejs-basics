import { readdir} from 'node:fs/promises';
import { URL } from 'node:url';
import { ERROR_MSG, FILE_PATH } from './consts.js';

const list = async () => {
    const getAbsPath = (path) => new URL(path,import.meta.url)
    const url = getAbsPath(`${FILE_PATH}`)
    try {
        let files = await readdir(url)
        files.forEach((file)=>{
            console.log(file);
        })
    }catch (err){
        console.log(err);
        throw Error (ERROR_MSG)  
    }
};

await list();