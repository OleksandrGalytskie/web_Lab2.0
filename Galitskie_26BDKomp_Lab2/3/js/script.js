function fibonacci(n) 
{
  if (n <= 1) 
  {
    return n;
  } else 
  {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
function IntTest(num)
{
    num = Number.parseInt(num)
    if(Number.isInteger(num))
    {
        return num;
    }else
    {
        return inputNum(num)
    }
    function inputNum(num)
    {
        num = prompt("Введіть число повторно")
        return IntTest(num)
    };
};

let n = prompt("Введіть n:");
n = IntTest(n);
console.log(`n-те число Фібоначчі з ${n} це: ${fibonacci(n)}`);
