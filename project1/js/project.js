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

var validname = false, validpass = false;

function login(e){

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
        document.getElementById('invalidimg').innerHTML="<i class='fas fa-check'></i>";
    }
    else{
        document.getElementById('invalidimg').innerHTML="<i class='glyphicon glyphicon-remove'></i>";
    }
}
function checkp(x){
    if(x.value.length < 4){
        document.getElementById('invalidpassimg').innerHTML = "<i class='glyphicon glyphicon-remove'></i>";
    }
    else{
        document.getElementById('invalidpassimg').innerHTML = "<i class='fas fa-check'></i>";
    }
}
function checkiden(x){
    if(document.getElementById('pass').value != null && (document.getElementById('pass').value === document.getElementById('rp').value)){
        validpass = true;
        document.getElementById('invalididenimg').innerHTML = "<i class='fas fa-check'></i></br>";
        document.getElementById('invalididen').innerHTML = "PerfectO!";
    }
    else{
       document.getElementById('invalididenimg').innerHTML = "<i class='glyphicon glyphicon-remove'></i></br>";
       document.getElementById('invalididen').innerHTML = "NotSame!";
    }
}
