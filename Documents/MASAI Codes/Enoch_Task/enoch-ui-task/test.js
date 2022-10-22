
let obj = {
    a : 2,
    b : 3,
    c : 4
}
//console.log(obj)
for(key in obj){
   // console.log(obj[key])
}
let arry = [2,3,4,5,6,7];

for(let k of arry){
    //console.log(k);
}
 var arr = [1,2,3,4,5]

 for(var i=0; i<arr.length; i++){
   //setTimeout(()=>console.log(arr[i],i),i*1000)
 }
//  console.log('value of i after for loop',i)

function display(i){
    setTimeout(()=>console.log(this[i],i),i*1000);
}
 
 for(var i=0; i<arr.length; i++){
    // display.call(arr, i);
 }
  

function sum(a){
    let c = 9;
   return function sub(b){
       return function child(){
          console.log(a+b+c);
        }
    }
}
sum(2)(3)();

const debounce = (func, delay) => {
    // if the request or call is not interrupted for delay milliseconds
    // then the function should be fired
    let debouncing
    return function(){
        clearTimeout(debouncing)
        debouncing = setTimeout(()=>func.apply(this,arguments), delay )
    }
}

let ob ={
    name : "Akram"
}

let ob2 ={
    name : "Akram"
}
//console.log(JSON.stringify(ob) == JSON.stringify(ob2)) // give true
// console.log({...ob} == {...ob2})  always false

const loginPromise = new Promise((resolve, reject)=>{
    let port =  300;
    if(port === 3000){
        resolve(true)
    }else{
        reject("something wrong");
}
});

loginPromise
.then((res)=>console.log("login done"))
.catch((err)=>console.log(err));


function fib(number){
    let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');
let finn = 0;
let out =[];
for (let i = 1; i <= number; i++) {
   // console.log(n1);
   finn+=n1 + n2;
  
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    out.push(n1)
}
console.log(out)
}
fib(5);
