const a = new Promise((resolve, reject) => {
    reject(1)
}).catch(() => {
    return 1;
});

const p1= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve();
    },1000);
});

const p2 =  fetch().then((resolve)=>{
    resolve();
});

Promise.all([p1,p2]).then(()=>{
   loading = false;
});