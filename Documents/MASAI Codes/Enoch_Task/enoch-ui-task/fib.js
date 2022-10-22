


function fib(n){
  let num1 = 0, num2 = 1, next;

  for(let i=0;i<n;i++){
    console.log(num1);
    next = num1+num2;
    num1 = num2;
    num2 = next;
   
  }
}

fib(5);