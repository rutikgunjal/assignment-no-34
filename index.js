
//largest number
let result = [99 , 53 , 105, 55 ];

let largest = result[0];

for(const num of result){
    if(num>largest){
        largest=num;
    }
}
console.log(`Largest Result:${largest}`);

