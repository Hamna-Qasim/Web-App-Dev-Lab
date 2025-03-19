let marks=[70,80,55,60,67,89];
console.log(marks);
let fiftyabove=marks.filter((above) =>
{
    return above>50;
});
console.log("50 above marks are= ",fiftyabove);