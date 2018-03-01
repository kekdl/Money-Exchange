// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    var result = {};
    var count = [];
    if (currency > 10000) {
        result = { error: 'You are rich, my friend! We don\'t have so much coins for exchange' }

    } else {
        count[0] = Math.floor(currency / 50);
        currency = currency - count[0] * 50;
        count[1] = Math.floor(currency / 25);
        currency = currency - count[1] * 25;
        count[2] = Math.floor(currency / 10);
        currency = currency - count[2] * 10;
        count[3] = Math.floor(currency / 5);
        currency = currency - count[3] * 5;
        count[4] = Math.floor(currency / 1);
        currency = currency - count[4] * 1;

        var Row = ["H", "Q", "D", "N", "P"];
        var i = 0;
        Row.forEach(element => {
            if (count[i] > 0) result[element] = count[i];
            i++;
        });
    }

    return result;
}
