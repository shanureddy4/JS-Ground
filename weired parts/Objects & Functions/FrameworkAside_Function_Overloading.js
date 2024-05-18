// JS doesnot have concept of function overloading.
// since functions are first class, there are better options available.
// we will see them later. but for workaround we can use following pattern
// wrapping a function 

function greet(firstname,lastname,language){
    if(language==='es'){
        console.log("Hola "+firstname + lastname)
    }
    if(language==='en'){
        console.log("Hello "+firstname + lastname)
    }
}
function greetEnglish(firstname,lastname){
greet(firstname,lastname,'en')
}
function greetSpanish(firstname,lastname){
    greet(firstname,lastname,'es')
}
greetEnglish('shanu','reddy')
greetSpanish('shanmukh','yadav')