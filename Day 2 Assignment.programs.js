// que.1)
//program to search for a particular character in a string.

let data="hello";
console.log(data[0]);

// que.2)
// program to convert minutes to seconds.

let m=prompt("Minutes");
console.log("seconds:",m*60);

// que.3)
// program to search for a element in a array of string.

let data1=["laptop","mouse","keyboard"];
 console.log(data1[2]);

// que.4)
// program to display only elements containing 'a' in hem from a array.

let x=prompt("enter size");
let a=new Array();
for(var i=0; i<x; i++)
{
    a[i]=prompt("enter the string");
 }
for( i=0; i<x; i++)
 {
     for(var j=0; j<(a[i].length); j++)
{
     if(a[i][j]=='a')
     {
       console.log(a[i]);
        break;
    }
}
}

// que.5)
// print an array in reverse order.

 let arr = [1,2,3,4,5,6];
  for(let i=arr.length-1; i>=0; i--)
 {
     console.log(" "+arr[i]);
  }