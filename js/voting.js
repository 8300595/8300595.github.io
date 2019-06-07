function submit() {
    var can1 = document.getElementById('can1').value;
    var can2 = document.getElementById('can2').value;
    var can3 = document.getElementById('can3').value;
    var can4 = document.getElementById('can4').value;

    var candidates = Number(can1) + Number(can2) + Number(can3) + Number(can4);

    var dob = document.getElementById('DOB').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    
    var dob_done = false;
    var name_done = false;
    var email_done = false;


    if(dob == 0){
        document.getElementById('dob_err').innerHTML = ' enter your date of birth!';
    }else{
        document.getElementById('dob_err').innerHTML = '';
        dob_done = true;
    }

    if(name == 0){
        document.getElementById('name_err').innerHTML = ' enter your full name!';
    }else{
        document.getElementById('name_err').innerHTML = '';
        name_done = true;
    }

    if(email == 0){
        document.getElementById('email_err').innerHTML = ' enter your full name!';
    }else{
        document.getElementById('email_err').innerHTML = '';
        email_done = true;
    }

//checks that all options are selected
    if (can1 == 0){
        document.getElementById('fix1').innerHTML = 'please select a candidate!';
    }
    if (can2 == 0){
        document.getElementById('fix2').innerHTML = 'please select a candidate!';
    }
    if (can3 == 0){
        document.getElementById('fix3').innerHTML = 'please select a candidate!';
    }
    if (can4 == 0){
        document.getElementById('fix4').innerHTML = 'please select a candidate!';
    }

    // checks for duplicates

    if (can1 >0){

        if (can1 == can2 || can1 == can3 || can1 == can4) {
        document.getElementById('fix1').innerHTML = 'you have selected a candidate more than once!';
        }else {
            document.getElementById('fix1').innerHTML = 'done';
        }
    }
    if (can2 > 0){

        if (can2 == can1 || can2 == can3 || can2 == can4) {
            document.getElementById('fix2').innerHTML = 'you have selected a candidate more than once!';
        }else {
            document.getElementById('fix2').innerHTML = 'done';
        }
    }
    if (can3 > 0){

        if (can3 == can1 || can3 == can2 || can3 == can4) {
            document.getElementById('fix3').innerHTML = 'you have selected a candidate more than once!';
        }else {
            document.getElementById('fix3').innerHTML = 'done';
        }
    }
    if (can4 > 0){

        if (can4 == can1 || can4 == can2 || can4 == can3) {
            document.getElementById('fix4').innerHTML = 'you have selected a candidate more than once!';
        }else {
            document.getElementById('fix4').innerHTML = 'done';
        }
    }
    
    if (candidates == 10 && dob_done==true && name_done ==true && email_done ==true){
        document.getElementById('submit').innerHTML = 'submitted!';
    }else {
        document.getElementById('submit').innerHTML = 'fix errors!';
    }
}