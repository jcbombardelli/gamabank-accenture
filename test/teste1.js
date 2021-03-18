
const data = new Date(1238960)
console.log(data)


const soma = (num1, num2) => {
    if((num1 + num2) < 0) throw new Error('menor que zero')
    return num1 + num2
}


module.exports = soma