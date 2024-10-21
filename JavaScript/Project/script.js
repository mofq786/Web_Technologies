var api = async ("https://fakestoreapi.com/products");
api.then(res => res.json()).then(products => {
    products.map(product => {
        let image = product.image;
        let price = product.price;
        let title = product.title;
        let rating = product.rating;

        console.log(rating)
        createTheProuctBox(image,price,title,rating)
    })
});



function createTheProuctBox(image,price,title,rating)
{
    var productDiv = document.createElement("div");
productDiv.setAttribute("class","product");
var imageDiv = document.createElement("div");
imageDiv.setAttribute("class","image")
var imageTag = document.createElement("img");
var infoDiv = document.createElement("div");
infoDiv.setAttribute("class","info");
var titleDiv = document.createElement("div");
titleDiv.setAttribute("class","title");
var childInfoDiv = document.createElement("div");
childInfoDiv.setAttribute("class","child_info")
var priceDiv = document.createElement("div");
priceDiv.setAttribute("class","price");
var ratingDiv = document.createElement("div");
ratingDiv.setAttribute("class","rating");

titleDiv.innerHTML=`${title}`
imageTag.setAttribute("src",`${image}`);
priceDiv.innerHTML=`<sup style="font-size:4vh;">$</sup>${price}`
ratingDiv.innerHTML=`${rating.rate}/${rating.count}`

productDiv.appendChild(imageDiv);
productDiv.appendChild(infoDiv);
imageDiv.appendChild(imageTag);
infoDiv.appendChild(titleDiv);
infoDiv.appendChild(childInfoDiv);
childInfoDiv.appendChild(priceDiv);
childInfoDiv.appendChild(ratingDiv);

var mainDiv = document.getElementById("container");
mainDiv.appendChild(productDiv);

}



