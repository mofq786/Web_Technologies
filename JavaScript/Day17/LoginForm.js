document.body.style.backgroundColor="#eee"
document.body.style.backgroundSize="100% 100vh"

var container = document.getElementById("container");

container.style.backgroundColor="#ffffff"
container.style.width = "50vh"
container.style.height = "50vh"
container.style.borderRadius = "7px"
container.style.marginLeft = "40vw"
container.style.padding="20px"
container.style.marginTop = "3vh"

var heading = document.querySelector("h1");
heading.style.textAlign = "center"
heading.style.fontSize="2.5vw"
heading.style.fontFamily="sans-serif"
heading.style.letterSpacing="0.5vw"

var allInp = document.querySelectorAll("input")

for(i=0;i<=1;i++)
{
    allInp[i].style.width = "80%"
    allInp[i].style.marginLeft = "10%"
    allInp[i].style.border="none"
    allInp[i].style.outline="none"
    allInp[i].style.backgroundColor="#eee"
    allInp[i].style.height="4vh"
    allInp[i].style.fontWeight="bold"
    allInp[i].style.fontSize="2.5vh"
    allInp[i].style.padding = "5px"
    allInp[i].required = "true"
    allInp[i].style.color = "rgb(70,70,70)"
    allInp[i].style.letterSpacing="0.5vw"

}

var span = document.querySelector("span");
span.style.display = "block"
span.style.padding = "5px"
span.style.width = "80%"
span.style.textAlign = "center"
span.style.height="4vh"
span.style.marginLeft = "10%"

allInp[0].placeholder = "Enter Email"
allInp[0].type = "email"
allInp[1].placeholder = "Enter Password"
allInp[1].type = "password"

allInp[2].style.width = "82%"
allInp[2].style.height = "5vh"
allInp[2].style.margin = "10%"
allInp[2].style.marginBottom = "1vh"
allInp[2].style.backgroundColor="royalblue"
allInp[2].style.color = "white"
allInp[2].style.fontSize = "3vh"
allInp[2].style.letterSpacing = "0.5vw"
allInp[2].style.fontWeight = "bold"
allInp[2].style.border="none"
allInp[2].style.outline = "none"
allInp[2].style.borderRadius = "3px"

function inputValues()
{
    var emailId = allInp[0].value;
    var password = allInp[1].value;

    if(emailId == "omar@gmail.com" && password == "Omar@123")
    {
        allInp[2].type = "submit"
        var form = document.querySelector("form");
        form.action="https://www.tesla.com"
        form.target = "_blank"
    }
    else
    {
        span.innerHTML="Invalid Email ID or Password"
        span.style.backgroundColor = "lightpink"
        span.style.border = "1px solid red"
        span.style.color = "red"
    }
}