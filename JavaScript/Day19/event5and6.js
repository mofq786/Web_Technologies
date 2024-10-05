function visible()
{
    document.querySelector("input").type="text";
    document.querySelector("img").src="../../assets/images/eye-solid.svg"
}

function invisible()
{
    document.getElementById("pass").type="password";
     document.querySelector("img").src="../../assets/images/eye-slash-solid.svg"
}

function passType()
{
    var passValue = document.querySelector("#pass").value;
    var pass = passValue.length;

    if(pass == 0)
    {
        document.querySelector("span").innerHTML="";
    }
    else if(pass >=1 && pass <=8)
    {
        document.querySelector("span").innerHTML="Poor Password";
        document.querySelector("span").style.color="red";
    }
    else if(pass >=9 && pass <=16)
    {
        document.querySelector("span").innerHTML="Average Password";
        document.querySelector("span").style.color="orange";
    }
    else
    {
        document.querySelector("span").innerHTML="Strong Password";
        document.querySelector("span").style.color="green";
    }
}