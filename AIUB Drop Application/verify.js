function verify(){
    const ID = document.getElementById("varsity_id").value;
    const pass = document.getElementById("varsity_pass").value;

    if(ID == "" || pass == ""){
        alert("please insert both of ID and Pass to continue")
    }
    else{
        window.location.href="drop_form.html";
    }
}