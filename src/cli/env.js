const parseEnv = () => {
    const variables = Object.entries(process.env).reduce((acc, [key,value])=>{
        if (key.startsWith('RSS_')) acc.push(`${key}=${value}`)
            return acc
    }, [])
    console.log(variables);
    console.log(variables.join('; ')); 
};

parseEnv();