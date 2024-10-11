var hour = 0;
var hourTime = "";
var minute = 0;
var minuteTime = "";
var second = 0;
var secondTime = "";
var milliSecond = 0;

function stopTimer()
{

}

function startTimer()
{

    if(milliSecond <= 99)
    {
        milliSecond++;
        if(milliSecond == 100)
        {
            milliSecond = 0;
            second++;
            if(second == 60)
            {
                second = 0;
                minute++;
                if(minute == 60)
                {
                    hour++;
                    minute=0;
                }
            }
        }

        if(hour < 10)
        {
            hourTime = "0"+hour;
        }
        if(minute < 10)
        {
            minuteTime = "0"+minute;
        }
        if(second < 10)
        {
            secondTime = "0"+second+"."+milliSecond;
        }

        document.getElementById("time").value=(hourTime+":"+minuteTime+":"+secondTime);
        setTimeout(startTimer, 10);
    }

}

function resetTimer()
{

}