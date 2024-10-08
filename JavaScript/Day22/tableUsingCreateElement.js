var table = document.createElement("table")
document.body.appendChild(table);

table.style.border="2px solid red"
table.style.borderCollapse="collapse"
table.style.textAlign="center"

var row=[[]]

for(i=0;i<=3;i++)
{
    row[i] = document.createElement("tr");
    table.appendChild(row[i]);
    for(j=0;j<=1;j++)
    {
        row[i][j] = document.createElement("th");
        row[i].appendChild(row[i][j]);
        row[i][j].style.border="2px solid red"
        row[i][j].style.padding="5px"
    }
    
}

row[0][0].innerHTML="Name"
row[0][1].innerHTML="Omar Farooq"
row[1][0].innerHTML="Gender"
row[1][1].innerHTML="Male"
row[2][0].innerHTML="Contact"
row[2][1].innerHTML="9398921107"
row[3][0].innerHTML="Email"
row[3][1].innerHTML="omar@gmail.com"


console.log(row);

// var tr1 = document.createElement("tr");
// var tr2 = document.createElement("tr");
// var tr3 = document.createElement("tr");

// var td1 = document.createElement("td");
// var td2 = document.createElement("td");
// var td3 = document.createElement("td");
// var td4 = document.createElement("td");
// var td5 = document.createElement("td");
// var td6 = document.createElement("td");

// table.appendChild(tr1);
// table.appendChild(tr2);
// table.appendChild(tr3);

// tr1.appendChild(td1);
// tr1.appendChild(td2);
// tr2.appendChild(td3);
// tr2.appendChild(td4);
// tr3.appendChild(td5);
// tr3.appendChild(td6);

// var bor = "2px solid red";

// td1.style.border=bor
// td1.style.padding="0.5vh"
// td2.style.border=bor
// td2.style.padding="0.5vh"
// td3.style.border=bor
// td3.style.padding="0.5vh"
// td4.style.border=bor
// td4.style.padding="0.5vh"
// td5.style.border=bor
// td5.style.padding="0.5vh"
// td6.style.border=bor
// td6.style.padding="0.5vh"

// td1.innerHTML="Name: ";
// td2.innerHTML="Omar Farooq";
// td3.innerHTML="Gender: ";
// td4.innerHTML="Male";
// td5.innerHTML="Contact: ";
// td6.innerHTML="9398921107";

