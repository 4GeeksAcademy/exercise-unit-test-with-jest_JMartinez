let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// esta es mi función que conversion D > Y
const fromDollarToYen = (num) =>{

    let resul = num * oneEuroIs.JPY
   
    return resul
}

 module.exports = {fromDollarToYen};
 console.log(fromDollarToYen(10)) 

/* // esta es mi función que conversion E > D
const fromEuroToDollar  = (num) =>{

    let resul = num * oneEuroIs.USD
   
    return resul
}
 module.exports = {fromEuroToDollar};


 // esta es mi función que conversion Y > P
const fromYenToPound  = (num) =>{

    let resul = num * oneEuroIs.GBP
   
    return resul
}
 module.exports = {fromYenToPound}; */