function CheckID() {
    const ID = document.getElementById("varsity_pass").value;
    if(ID == 53467){
        window.location.href="drop_form.html";
    }
    else if(ID != 53467){
        alert("Invalid Password");
    }
}