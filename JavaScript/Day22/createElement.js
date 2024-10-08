var divTag = document.createElement("div");
document.body.appendChild(divTag);

divTag.style.width="50vw"
divTag.style.height="50vh"
divTag.style.backgroundColor="red"

var divTag2 = document.createElement("div");

divTag.appendChild(divTag2);
divTag2.style.width="10vw"
divTag2.style.height="10vh"
divTag2.style.backgroundColor="yellow"