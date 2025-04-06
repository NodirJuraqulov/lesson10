

{

    function century(n) {
        return Math.ceil(n/100)+1;
    }

    console.log(century(2000));
    console.log(century(1441));

}

{

    const strRepeat = (str, n) => {
        // return `${str} `.repeat(n);
        let str1 = str 

        for (let i = 1; i < n; i++) {
            str1 = str1 + ` ${str}` ;
        }
        return str1;

    }

    console.log(strRepeat("ona", 3));
    console.log(strRepeat("laylo", 2));

}