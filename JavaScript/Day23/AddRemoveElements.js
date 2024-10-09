// var input = document.querySelector("input");
var login = document.querySelector("button");

function fun()
{
    var inputValue = document.querySelector("input").value;
    if(inputValue.length > 5)
    {
        console.log("Hi")
        login.removeAttribute("disabled");
    }
    else
    {
        login.setAttribute("disabled","true");
    }
}

var video = document.querySelector("video");

function playVideo()
{
    video.setAttribute("src","../../assets/videos/Landscape.mp4");
}

function pauseVideo()
{
    video.setAttribute("src","../../assets/videos/Landscape.m4");
}