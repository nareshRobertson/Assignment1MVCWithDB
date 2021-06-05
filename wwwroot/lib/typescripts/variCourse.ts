//***************************************************************************
//* Typerscript codes to vari data before submit
//*
//*
//*
//***************************************************************************

var variFlag: boolean[] = [false, false, false, false];


function checkcourseform() {
    //var f = document.forms["theform"].elements;
    var cansubmit: boolean = true;

    for (var i = 0; i < 3; i++) {
        if (variFlag[i] == false) {
            //alert("false");
            cansubmit = false;
            break;
        }
    }

    if (cansubmit) {
        //alert("tt");
        document.getElementById('submitbutton').removeAttribute("disabled");
    } else {
        document.getElementById('submitbutton').setAttribute("disabled", "true");
        //alert("ff");
    }

}

function onCourseNumChanging(Text) {
    if (Text.length > 0 && Text.length <= 5) {
        document.getElementById("courseNumMSG").innerHTML = "OK";
        variFlag[0] = true;
        checkcourseform();

    } else {
        document.getElementById("courseNumMSG").innerHTML = "<div style='color: red'>Must be 5 characters or less, total</div>";
        variFlag[0] = false;
        checkcourseform();
    }

}

function onCourseNameChanging(text) {
    if (text.length > 0 && text.length <= 10) {
        document.getElementById("courseNameMSG")
            .innerHTML = "OK";
        variFlag[1] = true;
        checkcourseform();
    } else {
        document.getElementById("courseNameMSG")
            .innerHTML = "<div style='color: red'>Must be 10 characters or less, total</div>";
        variFlag[1] = false;
        checkcourseform();
    }
}

function onDescriptionChanging(text) {

    if (text.length > 0 && text.length <= 500) {
        document.getElementById("descriptionMSG")
            .innerHTML = "OK";
        variFlag[2] = true;
        checkcourseform();
    } else {
        document.getElementById("descriptionMSG")
            .innerHTML = "<div style='color: red'>Must be 50 characters or less, total</div>";
        variFlag[2] = false;
        checkcourseform();
    }
}