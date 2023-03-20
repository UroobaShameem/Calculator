function add(){
    var a=0, b=0;
    a= f.t.value;
    b= a.charAt(a.length-1);
    if(b=='+' || b=='-' || b=='*' || b=='/'){
        f.t.value= a.substr(0,a.length-1);
        f.t.value+= '+';
    }
    else{
        f.t.value+= '+';
    }
}

function sub(){
    var a=0, b=0;
    a= f.t.value;
    b= a.charAt(a.length-1);
    if(b=='+' || b=='-' || b=='*' || b=='/'){
        f.t.value= a.substr(0,a.length-1);
        f.t.value+= '-';
    }
    else{
        f.t.value+= '-';
    }
}

function div(){
    var a=0, b=0;
    a= f.t.value;
    b= a.charAt(a.length-1);
    if(b=='+' || b=='-' || b=='*' || b=='/'){
        f.t.value= a.substr(0,a.length-1);
        f.t.value+= '/';
    }
    else{
        f.t.value+= '/';
    }
}

function mul(){
    var a=0, b=0;
    a= f.t.value;
    b= a.charAt(a.length-1);
    if(b=='+' || b=='-' || b=='*' || b=='/'){
        f.t.value= a.substr(0,a.length-1);
        f.t.value+= '*';
    }
    else{
        f.t.value+= '*';
    }
}