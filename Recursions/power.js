function power(base, exp) {
    if(exp === 0) return 1;
    exp--;
    return base * power(base, exp);
}

console.log(power(2,4));