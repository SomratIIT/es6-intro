function add(num1,num2=0)
{
    const result = num1 + num2;
    console.log(num1,num2,result);
    return result;
}

const final = add(5);

console.log(final);