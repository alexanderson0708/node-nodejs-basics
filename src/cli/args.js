const parseArgs = () => {
    const args = process.argv.slice(2)
    console.log(args);
    const newArr = args.reduce((acc, arg, index, arr)=>{
        if (arg.startsWith('--') && arr[index+1]){
            acc.push(`${arg.slice(2)} is ${arr[index+1]}`)
        }
        return acc
    },[])
    console.log(newArr.join(', '));
};

parseArgs();