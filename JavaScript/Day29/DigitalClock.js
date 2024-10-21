var clicked = 0;

function dateAndTime()
{
    var sysDate = new Date();
    var dd = sysDate.getDate();
    var allMonths = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var allDays = ["Sunday","Monday","Tuesday", "Wednesday", "Thursday","Friday","Saturday"];
    var month = allMonths[sysDate.getMonth()];
    var year = sysDate.getFullYear();
    var hh = sysDate.getHours();
    var mm = sysDate.getMinutes();
    var ss = sysDate.getSeconds();
    var day = allDays[sysDate.getDay()];

    var date = format(dd);
    var minutes = format(mm);
    var seconds = format(ss);
    var hours = "";

    var images = [
        "daySky.jpg",
        "Landscape.jpg",
        "Agriculture.jpg",
        "planting.jpg",
        "forest.jpg",
        "sunset.jpg",
        "greenTree.jpg"
    ]

    if(clicked === 0)
    {
        var am_pm = "AM";

        if(hh >= 12)
        {
            am_pm = "PM"
            if(hh > 12)
            {
                hh -= 12;
            }
        }

        if(hh === 0)
        {
            hh = 12;
        }
        hours = format(hh);
        document.getElementById("time").innerHTML = `${hours}:${minutes} ${am_pm}`;
    }
    else
    {
        hours = format(hh);
        document.getElementById("time").innerHTML = `${hours}:${minutes}`;
    }
    

    
    document.body.style.backgroundImage=`url(../../assets/images/${images[sysDate.getDay()]})`;
    // document.getElementById("time").innerHTML = `${hours}:${minutes}`;
    document.getElementById("date").innerHTML = `${date}-${month}-${year}`;
    document.getElementById("sec").innerHTML=`${seconds}`;
    document.getElementById("day").innerHTML=`${day}`;


}

function format(para)
{
    if(para < 10)
    {
        return  "0"+para; 
    }
    else
    {
        return para;
    }
}

setInterval(dateAndTime, 1000);

function clockFormat()
{
    let marLeft = "";
    let butBColor = "";
    let color = ""
    let form = 12;
    if(clicked == 0)
    {
        marLeft = "61%";
        butBColor = "brown";
        color = "aqua";
        form = 24;
        clicked++;
    }
    else
    {
        clicked = 0;
        marLeft = "0%";
        butBColor = "aqua";
        color = "brown"
        form = 12;
    }
    var button = document.getElementById("button");
    button.style.marginLeft=marLeft
    button.style.backgroundColor=butBColor
    var toggle = document.getElementById("toggle");
    toggle.style.backgroundColor=color;
    toggle.style.border=`4px solid ${color}` 
    button.style.color = color
    button.innerHTML=form;
}