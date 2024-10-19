var otp;

function generateOTP(){
    let num1 = Math.floor(Math.random()*10);
    let num2 = Math.floor(Math.random()*10);
    let num3 = Math.floor(Math.random()*10);
    let num4 = Math.floor(Math.random()*10);
    otp = ""+num1+num2+num3+num4;
    document.getElementById("otp_container").style.display="block";
    document.getElementById("otp").innerHTML=otp;
}

function closeOtpWindow(){
    document.getElementById("otp_container").style.display="none";
}

function verifyOTP(){
    var userOtp = document.getElementById("input_otp").value;
    if(userOtp == otp){
        document.getElementById("message").innerHTML="Correct OTP";
        document.getElementById("submit_otp").type="submit";
        document.querySelector("form").action="https://www.linkedin.com/in/mofq786/"
    }
    else{
        document.getElementById("message").innerHTML="Invalid OTP"
    }
}