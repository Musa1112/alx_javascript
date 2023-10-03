function addMeMaybe(number,func){
    func(++number)
}
// let x  =4
// addMeMaybe(x,  (x)=> {
//     console.log('New value: ' + x);
//   }
//   );

module.exports.addMeMaybe= addMeMaybe;