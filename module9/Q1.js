function returnAPromise(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            const success = true;

            if(success){
                resolve('Success');
            }else{
                reject('Failed');
            }
        }, 1000)      
    });
}

returnAPromise()
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    });