const print = () => {
    for (let i = 1; i <= 100; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000); // Each number prints after 'i' seconds
    }
};

print();
