var num = process.argv;
var sum = 0;
for (var i = 2; i < num.length; i++) {
	sum += +num[i];
	
};

console.log(sum);