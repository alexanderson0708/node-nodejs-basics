import { stat } from 'fs';
import {cp} from 'fs/promises'
import { URL } from 'node:url';
import { ERROR_MSG, FILE_PATH } from './consts.js';

const fileName = 'files_copy'

const copy = async () => {
    const getAbsPath = (path) => new URL(path,import.meta.url)
    const src = getAbsPath(`${FILE_PATH}`)
    const dest = getAbsPath(`${fileName}`)
    try {
        await cp(src, dest, {errorOnExist:true, recursive:true, force:false})
    }catch (err){
        console.log(err);
        throw Error (ERROR_MSG)  
    }
};

await copy();
