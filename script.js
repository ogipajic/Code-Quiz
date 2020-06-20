var question001 = [
    "Inside which HTML element do we put the JavaScript??",
    "What is the correct syntax for referring to an external script called 'xxx.js'?",
    "How do you write 'Hello World' in an alert box?",
    "Where is the correct place to insert a JavaScript?",
    "How do you create a function in JavaScript?",
    "How do you call a function named 'myFunction'?",
    "How to write an IF statement in JavaScript?",
    "How can you add a comment in a JavaScript?",
    "JavaScript is the same as Java.",
    "Which operator is used to assign a value to a variable?"
];

var options001 = ["<button class=buttons001 onclick=q1i()>js</button><br /><br /><button class=buttons001 onclick=q1c()>script</button>"];
var options002 = ["<button class=buttons001 onclick=q2c()>script src='xxx.js'</button><br /><br /><button class=buttons001 onclick=q2i()>script href='xxx.js'</button>"];
var options003 = ["<button class=buttons001 onclick=q3c()>alert('Hello World');</button><br /><br /><button class=buttons001 onclick=q3i()>alertBox('Hello World');</button>"];
var options004 = ["<button class=buttons001 onclick=q4i()>head</button><br /><br /><button class=buttons001 onclick=q4c()>body</button>"];
var options005 = ["<button class=buttons001 onclick=q5c()>function = myFunction()</button><br /><br /><button class=buttons001 onclick=q5i()>function myFunction()</button>"];
var options006 = ["<button class=buttons001 onclick=q6i()>call myFunction</button><br /><br /><button class=buttons001 onclick=q6c()>myFunction()</button>"];
var options007 = ["<button class=buttons001 onclick=q7c()>if(condition)</button><br /><br /><button class=buttons001 onclick=q7i()>if = (condition)</button>"];
var options008 = ["<button class=buttons001 onclick=q8c()>//This is a comment</button><br /><br /><button class=buttons001 onclick=q8i()>'This is comment'</button>"];
var options009 = ["<button class=buttons001 onclick=q9c()>False</button><br /><br /><button class=buttons001 onclick=q9i()>True</button>"];
var options010 = ["<button class=buttons001 onclick=q10i()>x</button><br /><br /><button class=buttons001 onclick=q10c()>=</button>"];

var a = 0;
a++;
var b = 0;
b++;

function begin001() {
    c = 200;
    disappear001.innerHTML = "";
    message001.innerHTML = question001[0];
    message002.innerHTML = options001;
    number001.innerHTML = a++;
}

function q1c() {
    message003.innerHTML = "Correct";
    message002.innerHTML = "";
    score001.innerHTML = b++;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q1i() {
    message003.innerHTML = "Incorrect";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q2c() {
    message003.innerHTML = "Correct";
    message002.innerHTML = "";
    score001.innerHTML = b++;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q2i() {
    message003.innerHTML = "Incorrect";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q3c() {
    message003.innerHTML = "Correct";
    message002.innerHTML = "";
    score001.innerHTML = b++;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q3i() {
    message003.innerHTML = "Incorrect";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q4c() {
    message003.innerHTML = "Correct";
    message002.innerHTML = "";
    score001.innerHTML = b++;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q4i() {
    message003.innerHTML = "Incorrect";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q5c() {
    message003.innerHTML = "Correct";
    message002.innerHTML = "";
    score001.innerHTML = b++;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q5i() {
    message003.innerHTML = "Incorrect";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q6c() {
    message003.innerHTML = "Correct";
    message002.innerHTML = "";
    score001.innerHTML = b++;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q6i() {
    message003.innerHTML = "Incorrect";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q7c() {
    message003.innerHTML = "Correct";
    message002.innerHTML = "";
    score001.innerHTML = b++;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q7i() {
    message003.innerHTML = "Incorrect";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q8c() {
    message003.innerHTML = "Correct";
    message002.innerHTML = "";
    score001.innerHTML = b++;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q8i() {
    message003.innerHTML = "Incorrect";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q9c() {
    message003.innerHTML = "Correct";
    message002.innerHTML = "";
    score001.innerHTML = b++;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q9i() {
    message003.innerHTML = "Incorrect";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q10c() {
    message003.innerHTML = "Correct";
    message002.innerHTML = "";
    score001.innerHTML = b++;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q10i() {
    message003.innerHTML = "Incorrect";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}


function next001() {
    if (a == "2") {
        message001.innerHTML = question001[1];
        message002.innerHTML = options002;
        message003.innerHTML = "";
        number001.innerHTML = a++;
        message004.innerHTML = "";
    }

    else if (a == "3") {
        message001.innerHTML = question001[2];
        message002.innerHTML = options003;
        message003.innerHTML = "";
        number001.innerHTML = a++;
        message004.innerHTML = "";
    }

    else if (a == "4") {
        message001.innerHTML = question001[3];
        message002.innerHTML = options004;
        message003.innerHTML = "";
        number001.innerHTML = a++;
        message004.innerHTML = "";
    }

    else if (a == "5") {
        message001.innerHTML = question001[4];
        message002.innerHTML = options005;
        message003.innerHTML = "";
        number001.innerHTML = a++;
        message004.innerHTML = "";
    }

    else if (a == "6") {
        message001.innerHTML = question001[5];
        message002.innerHTML = options006;
        message003.innerHTML = "";
        number001.innerHTML = a++;
        message004.innerHTML = "";
    }

    else if (a == "7") {
        message001.innerHTML = question001[6];
        message002.innerHTML = options007;
        message003.innerHTML = "";
        number001.innerHTML = a++;
        message004.innerHTML = "";
    }

    else if (a == "8") {
        message001.innerHTML = question001[7];
        message002.innerHTML = options008;
        message003.innerHTML = "";
        number001.innerHTML = a++;
        message004.innerHTML = "";
    }

    else if (a == "9") {
        message001.innerHTML = question001[8];
        message002.innerHTML = options009;
        message003.innerHTML = "";
        number001.innerHTML = a++;
        message004.innerHTML = "";
    }

    else if (a == "10") {
        message001.innerHTML = question001[9];
        message002.innerHTML = options010;
        message003.innerHTML = "";
        number001.innerHTML = a++;
        message004.innerHTML = "";
    } else {
        window.clearInterval(update);
        c = "-";
        message001.innerHTML = "End of Quiz";
        message002.innerHTML = "";
        message003.innerHTML = "";
        message004.innerHTML = "<button class=buttons002 onclick=repeat001()>Play again</button>";
        message005.innerHTML = "<input class=buttons002 onclick=score001()></input>";
        message006.innerHTML = "<button class=buttons002 onclick=score001()>Score</button>";
    }
}

function timer001() {
    c = c - 1;
    if (c < 200) {
        time001.innerHTML = c;
    }

    if (c < 1) {
        window.clearInterval(update);
        message001.innerHTML = "Time's up";
        message002.innerHTML = "";
        message003.innerHTML = "";
        message004.innerHTML = "<button class=buttons002 onclick=repeat001()>Play again</button>";
        message005.innerHTML = "<input class=buttons002 onclick=score001()></input>";
        message006.innerHTML = "<button class=buttons002 onclick=score001()>Score</button>";
    }
    
}

update = setInterval("timer001()", 1000);

function repeat001() {
    location.reload();
}