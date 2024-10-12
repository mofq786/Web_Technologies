var hour = 0;
var hourTime = "";
var minute = 0;
var minuteTime = "";
var second = 0;
var secondTime = "";
var milliSecond = 0;
var milliSecondTime = "";
var started = document.getElementById("start");
var stopped = document.getElementById("stop");
var reset = document.getElementById("reset");
var id;

function stopTimer()
{
    started.removeAttribute("disabled");
    started.style.opacity="100%";
    stopped.setAttribute("disabled",true);
    stopped.style.opacity="60%";
    reset.removeAttribute("disabled");
    reset.style.opacity="100%";

    if (id) {
        clearInterval(id);  
        id = null;          
    }
}

function startTimer()
{
    started.setAttribute("disabled",true);
    started.style.opacity="60%";
    stopped.removeAttribute("disabled");
    stopped.style.opacity="100%";
    reset.removeAttribute("disabled");
    reset.style.opacity="100%";

    if(!id)
    {
        id = setInterval(setTime,10);
    }
    
}

function setTime()
{
    milliSecond += 1;
    if(milliSecond >= 100)
    {
        milliSecond = 0;
        second++;
        if(second >= 60)
        {
            second = 0;
            minute++;
            if(minute >= 60)
            {
                minute = 0;
                hour++;
                if(hour > 23)
                {
                    hour = 0;
                }
            }
        }
    }

    (hour < 10)?hourTime=("0"+hour):hourTime=String(hour);
    (minute < 10)?minuteTime=("0"+minute):minuteTime=String(minute);
    (second < 10)?secondTime=("0"+second):secondTime=String(second);
    (milliSecond < 10)?milliSecondTime=("0"+milliSecond):milliSecondTime=String(milliSecond);

    document.getElementById("time").value=(hourTime+":"+minuteTime+":"+secondTime+"."+milliSecondTime)
}

function resetTimer()
{
    started.removeAttribute("disabled");
    started.style.opacity="100%";
    stopped.removeAttribute("disabled");
    stopped.style.opacity="100%";
    reset.removeAttribute("disabled");
    reset.style.opacity="100%";

    if (id) 
    {
        clearInterval(id);
        id = null;
    }

    hour = 0;
    minute = 0;
    second = 0;
    milliSecond = 0;

    hourTime = "00";   
    minuteTime = "00";   
    secondTime = "00";    
    document.getElementById("time").value=(hourTime+":"+minuteTime+":"+secondTime);
}