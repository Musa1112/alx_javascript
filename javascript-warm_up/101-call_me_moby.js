function callMeMoby(times,func){
    for (let i=0; i<times ;i++){
        func()
    }
}

module.exports.callMeMoby = callMeMoby;


// callMeMoby(3,()=>{console.log('first')})