let arr=["DPL","Tekrowe","Tenergy","Netline"];
console.log(arr);
console.log("Removing first Element");
arr.shift();
for(let sw of arr)
{
    console.log(sw);
}
console.log(arr);
console.log("Removing middle Element and adding another");
arr.splice(1,1,"SiliconeV");
for(let sw of arr)
{
    console.log(sw);
}
console.log(arr);
console.log("adding at the end");
arr.push("Google");
for(let sw of arr)
{
    console.log(sw);
}
console.log(arr);