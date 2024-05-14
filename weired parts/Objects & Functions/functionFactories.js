// let's see how clousers will help ful to create a function factories. 

function greetings(language){
    return function (firstname,lastname){
        if(language==='en'){
            console.log("Hello "+firstname+" "+lastname)
        }
        if(language==='es'){
            console.log("Hola "+firstname+" "+lastname)
        }
    }
}

var greetEnglish = greetings('en'); // different execution context
var greetSpanish = greetings('es'); // different execution context

greetEnglish('Shanu', 'Reddy');
greetSpanish('Shanu','Reddy');
