//test1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkwinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win  (${avgDolphins}
            vs.${avgKoalas})`);

    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win(${avgKoalas} vs. ${avgDolphins})`)
    } else {
        console.log('No team wins...');
    }
}
checkwinner(scoreDolphins, scoreKoalas);
checkwinner(575, 111);


//test2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDolphins, scoreKoalas);
checkwinner(scoreDolphins, scoreKoalas);