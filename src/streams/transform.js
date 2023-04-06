import { EOL } from 'node:os';
import { pipeline, Transform } from 'node:stream';

const transform = async () => {
    const transformData = new Transform({
        transform(chunk, encoding, callback){
            callback(null, 
                chunk.toString()
                .replace(EOL,'')
                .split('').reverse().join('')+EOL)
        },
    })
    pipeline(
        process.stdin,
        transformData,
        process.stdout,
        (err)=>{
            console.error(err);
        }
    )
};

await transform();