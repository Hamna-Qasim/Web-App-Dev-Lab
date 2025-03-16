console.log("For Loop");
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}
console.log("-------------");
console.log("Do While Loop");
let count = 1;
do {
    console.log("Count:", count);
    count++;
} while (count <= 5);
console.log("-------------");
console.log("While Loop");
let num = 1;
while (num <= 5) {
    console.log("Number:", num);
    num++;
}
console.log("-------------");
console.log("For In Loop");
let person =
{
    name:"John",
    age:"25",
    city:"New York"
};
for (let key in person)
{
    console.log(key, ":", person[key])
}
console.log("-------------");
console.log("For of Loop");
let fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits)
{
    console.log(fruit);
}
let marks=[13,06,07];
let sum=0;
for(let mark of marks)
{
    sum += mark;
}
let avg=sum/marks.length;
console.log("avg marks of the class",avg);
console.log("-------------");
console.log("Arrays");
const number=[123,456,789];
console.log("Type of Array(number) is: ", typeof number);
let heroes=["ironman","hulk","thor"];
console.log("Type of Array(heroes) is: ", typeof heroes);
let info=["rahul",86,"Dehli"];
console.log("Type of Array(info) is: ", typeof info);
console.log("-------------");
console.log("");