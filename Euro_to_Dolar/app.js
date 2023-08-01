let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


 // esta es mi función que conversion E > D
const fromEuroToDollar  = (num) =>{

    let resul = num * oneEuroIs.USD
   
    return resul
}
 module.exports = {fromEuroToDollar};
 console.log(fromEuroToDollar(1000))
