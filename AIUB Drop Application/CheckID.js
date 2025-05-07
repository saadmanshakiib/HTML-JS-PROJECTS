function CheckID() {
    const ID = document.getElementById("ID").value;
    const name = document.getElementById("name").value;
    const semester = document.getElementById("semester_check").value;

    if(ID == "" || name ==""){
        alert("Please insert both user name & student id ");
       }
       else{
        if(semester == 1)window.location.href="1stSem.html";
        else if(semester == 2) window.location.href="2ndSem.html";
        else if(semester == 3) window.location.href="3rdSem.html";
        else if(semester == 4) window.location.href="4thSem.html";
        else if(semester == 5) window.location.href="5thSem.html";
        else if(semester == 6) window.location.href="6thSem.html";
       }

    }