let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


// esta es mi función que conversion Y > P
const fromYenToPound  = (num) =>{

    let resul = num * oneEuroIs.GBP
   
    return resul
}
 module.exports = {fromYenToPound}; 
 console.log(10000 * 0.8)