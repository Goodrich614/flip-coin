let heads = 0;
let tails = 0;

function flipCoin(result){

    if (result == 1) {
        result = 'heads'
    }
    else {
        result = 'tails'
    }

    console.log(`It's ${result}!`)
}

let result = Math.floor(Math.random() * 2) 

module.exports.flipCoin = flipCoin;
module.exports.result = result;