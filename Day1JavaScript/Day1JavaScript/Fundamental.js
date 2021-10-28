//Function is a keyword 
function Walk(x)   //called
{
    var arr = new Array(10, 20, 30, 40, 50, 60, 70);
    console.log(arr[0]);
    var arr2=["java","script","new"]
    var result  = '';
    for(var i = 0;i<arr.length;i++)
    {
        result = result +" "+ arr[i];
    }
    arr=arr.reverse();//reverse of array
    console.log(arr);
    var result1=arr.concat(arr2);
    console.log(result1)
    console.log(result);
    var j=0;
    var b="Divya";
    var c=""
    for(var j=b.length-1;j>=0;j--)
    {
        c+=b[j]
    }
    console.log(c);
    var a=b.split("");
    console.log(a);
    
}
Walk();  //caller