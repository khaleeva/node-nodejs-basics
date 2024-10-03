const parseArgs = () => {
    const args = process.argv.slice(2);
    const data = args.reduce((arr, value, index) => {
        let key;
        if (index % 2 === 0) {
            key = index
            arr.push({[index]: `${args[key].slice(2)} is ${args[key + 1]}`});
            return arr;
        }

        return arr;
    }, []);

    data.forEach(d => {
        console.log(Object.values(d).join(''));
    })

};

parseArgs();