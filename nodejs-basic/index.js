const initialMemoryUsage = 0;
const yourName = process.argv[2]
const environment = process.env.NODE_ENV;

for(let i = 0; i <= 10000; i++) {

}

const currentMemoryUsage = 10;

console.log(`Hai, ${yourName}`);
console.log(`Node env: ${environment}`);
console.log(`${initialMemoryUsage} naik ke ${currentMemoryUsage}`);