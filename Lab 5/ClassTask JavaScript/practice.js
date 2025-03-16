console.log("------------------")
console.log("Variables");
fullname="JH";
age="31";
console.log(fullname);
console.log(age);
console.log("------------------")
console.log("Var");
var name="KN";
console.log(name);
var name="KS";
console.log(name);
name="MY";
console.log(name);
console.log("------------------")
console.log("Scope")
if (true) 
    {
        var test = "Inside block";
    }
    console.log(test);
console.log("------------------")
console.log("Let")
let age1=25;
console.log(age1);
age1=30;
console.log(age1);
if(true)
    {
        let insideBlock="Hello";
        console.log(insideBlock);
    }
console.log("------------------")
console.log("const")
const pi=3.1416;
console.log(pi);
if(true)
{
    const city="Rome";
    console.log(city);
}
console.log("------------------")
console.log("Operators")
let a=10;
let b=5;
console.log("Addition: "+ (a+b));
console.log("Subtraction: " + (a-b));
console.log("Multiplication: " + (a*b));
console.log("Division: " + (a/b));
console.log("Modulus: " + (a%b));
console.log("------------------")
console.log("Condtionals")
let marks=90;
if(marks>=90)
{
    console.log("Pass");
}
else
{
    console.log("Fail");
}
console.log("------------------")
console.log("For Loop")
for (let i=0;i<5;i++)
    {
        console.log("Iteration:" + i);
    }
console.log("------------------")
console.log("Objects")    
const product=
{
    pname:"Coffee",
    pprice: 50,     
    isAvailable: true,
}
console.log("Name:" + product.pname);
console.log("Price:" +  product["pprice"]);
console.log("Availability: " + product.isAvailable);
product["pname"]= "Frother";
console.log(product.pname);
console.log("------------------")
console.log("Unary Operators") 
let a1=5;
let b1=2;
console.log("a= ", a1,  "& b= ", b1);
console.log("a++ = ", a1++);
console.log("a1 = " , a1++);
console.log("------------------")
console.log("Conditional Operators") 
if(5*2==10)
    {
        console.log("Your answer is correct!");
    }
    else
    {
        console.log("Your answer is incorrect");
    }
/*var time= prompt("Enter time:");
if(time>5 && time < 17)
    {
        alert("Good Morning!");
    }
else
    {
        console.log("Good Evening!");
    } */
console.log("------------------")
console.log("Switch") 
/*var fruit= prompt("Which coffee would you like?");
switch(fruit)
{
    case "Latte":
        console.log("Here is your latte!");
        break;
    case "Americano":
        console.log("Here is your americano!");
        break;
    case "Matcha":
        console.log("Here is your matcha!");
        break;
    default:
        console.log("No order placed");
        break;
}*/
console.log("------------------")
console.log("For in Loop")
const person1 =
{
    fname:"John", 
    lname:"Doe", 
    age:25
};
let text = "";
for (let x in person1) {
  text += person1[x] + " ";
}
console.log(text);
console.log("------------------")
console.log("For of Loop")
const cars = ["BMW", "Mercedes", "Ferrari"];
let text1 = "";
for (let x of cars) 
{
  text1 += x + " " ;
}
console.log(text1);
console.log("------------------")
console.log("Type of")
let n1=10;
console.log(typeof n1);
let n2=10.5;
console.log(typeof n2);
let n3="Hello";
console.log(typeof n3);
console.log("------------------")









