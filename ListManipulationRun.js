const ListManipulation = require('./ListManipulation');
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Enter a list of numbers separated by comma:\n', function (numbers) {
    var list = numbers.split(",").map(num => parseInt(num,10));
    console.log(`input:[${list}]`);
	list = ListManipulation(list);
	// list = new Set(list); // maneira de resolucao alternativa a funcao acima
	console.log(`output:[${list}]`);

    rl.close();
});

rl.on('close', function () {
	process.exit(0);
});


