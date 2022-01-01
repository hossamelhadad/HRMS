function getproduct(){
    window.open('product.html',"_self");
}


//checkName
function checkName(e) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(e.which);
    console.log(key);
    if (regex.test(key)) {
       e.preventDefault();
       return false;
    }
    //return (key >= 'A' && key <= 'Z') || (key >= 'a' && key <= 'z');
}

var validname = false, validpass = false, username, pass;

function signUp(e){

    if(validname == true && validpass == true)
    {
        window.location.href = "home.html";   
    }
    else {
        e.preventDefault();
        alert("Plz correct the validation errors first");
        return ;
    }
}
function blr(x){
    if(x.value.length > 3){   
        validname = true;
        username = x.value;
        document.getElementById('invalidname').innerHTML="<i class='fas fa-check'></i>";
    }
    else{
        document.getElementById('invalidname').innerHTML="<i class='glyphicon glyphicon-remove'></i>";
    }
}
function checkp(x){
    if(x.value.length < 4){
        document.getElementById('invalidpass').innerHTML = "<i class='glyphicon glyphicon-remove'></i>";
    }
    else{
        document.getElementById('invalidpass').innerHTML = "<i class='fas fa-check'></i>";
    }
}
function checkiden(x){
    if(document.getElementById('pass').value != null && (document.getElementById('pass').value === document.getElementById('rpass').value)){
        validpass = true;
        pass = x.value;
        document.getElementById('invalidRpass').innerHTML = "<i class='fas fa-check'></i></br>";
        document.getElementById('invalidtext').innerHTML = "PerfectO!";
    }
    else{
       document.getElementById('invalidRpass').innerHTML = "<i class='glyphicon glyphicon-remove'></i></br>";
       document.getElementById('invalidtext').innerHTML = "NotSame!";
    }
}
function login(){
    if((document.getElementById('fullname').value == username) && (document.getElementById('password').value==pass)){
        window.location.href = "home.html"; 
    }
}
