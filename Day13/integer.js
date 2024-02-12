function Integer(a,b,c)
{
     if (a <= 0 || b <= 0 || c <= 0) {
    return false;
}
    else if (c < a+b && a < b+c && b < a+c)
    {
        return true;
    }
    else { return false ;}
}

console.log(Integer(0,3,5));//false
console.log(Integer(1,3,3));//true
console.log(Integer(5,3,5));//true
console.log(Integer(4,2,5));//true
console.log(Integer(1,2,3));//false
