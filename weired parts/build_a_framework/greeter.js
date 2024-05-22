(function(global,$){
    var Greeter = function(firstname,lastname,language){
        return new Greeter.init(firstname,lastname,language); // we can do without Greeter.init.ref oneNote.
    }
    var supportedLans = ['en','tl'];
    var greetings = {
        'en': 'Hello',
        'tl': 'Namasthe'
    }
    var formalGreetings = {
        'en': 'Greetings',
        'tl': 'Ela unnaru'
    }
    var logging = {
        'en':'Loggind in..',
        'tl': 'Anumathi pondinadi'
    }
    // So it's like we are using Greeter.init assign the vars.
    Greeter.prototype = {
        getFullName: function(){
            return this.firstname+" "+this.lastname;
        },
        greetings: function(){
            return greetings[this.language]+" "+this.firstname+"!";
        },
        formalGreetings: function(){
            return formalGreetings[this.language]+" "+this.getFullName()
        },
        //chainable
        greet: function(formal){
            if (formal) {
                msg = this.formalGreetings();  
            }
            else {
                msg = this.greetings();  
            }

            if (console) {
                console.log(msg);
            }
            // this will help in chaining. like greet(true).greet(false)
            return this;
        },
        // chainable
        setLang: function(lang) {
            this.language = lang;
            return this;
        }
    }
    Greeter.init = function(firstname,lastname,language){
        var self = this;
        self.firstname = firstname || ''
        self.lastname = lastname || ''
        self.language = language || ''
    }

    // recall prototype.
    // here we are doing so, cuz we want do define functions in Greeter.prototype.
    // since Greeter is only going into the global scope. not Greeter.init. ref next lines
    Greeter.init.prototype = Greeter.prototype;

    // we are making Greeter accessible globally and also we made G$ as short hand notation.
    global.Greeter = global.G$ = Greeter

}(window,jQuery))