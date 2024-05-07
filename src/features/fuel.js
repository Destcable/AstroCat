let countFuel = 0;

const fuel = { 
    add: (count = 1) => { 
        return countFuel += count;
    },
    take: (count = 1) => { 
        return countFuel -= count;
    },
    set: (count) => { 
        return countFuel = count;
    },
    get: () => { 
        return countFuel;
    }
};

export default fuel;