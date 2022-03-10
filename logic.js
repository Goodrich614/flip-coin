flipCoin = (result) => {

    if (result == 1) {
        result = 'heads'
    }
    else {
        result = 'tails'
    }

    console.log(`It's ${result}!`)
}

const result = Math.floor(Math.random() * 2) 

module.exports.flipCoin = flipCoin;
module.exports.result = result;