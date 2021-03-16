const generateCardNumber = () => {
    let arr = []
    let newFourDigits;
    for(let i = 0; i<4; i++){
        arr.push(("" + Math.random()).substring(2, 6))
    }
    return arr.join('')
}

//console.log('generateCardExample: ', generateCardNumber())


module.exports = {generateCardNumber}