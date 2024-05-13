function greet(firstname,lastname,language='en',...others){ // this way you can use default parameters

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments); // arguments is like array but not actual array.
    //we can access using indices though. however remember that arguments is the keyword where it gives args in array form

    //we are defined others. it is a spread operator. you know it. usually keeps at end.
    console.log(others);
    console.log('-------------');
}
greet();
greet('shanu');
greet('shanu','reddy');
greet('shanu','reddy','tl','others test');

