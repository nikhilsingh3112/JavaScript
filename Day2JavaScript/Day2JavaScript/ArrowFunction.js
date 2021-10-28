//arrow function expression that provides a shorthand for declaring anonymous functions.
let walk=function (a,b)//------>Anonymous Function
{
    console.log(a+b);
}
walk=(a,b)=>console.log(a*b);//------->Arrow Function
walk(10,20);