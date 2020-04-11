const a = new Promise((resolve, reject) => {
    reject(1)
}).catch(() => {
    return 1;
});
