var obj;
var electronics;
var jewelery;
var men;
var woman;


// function to get all prouducts
function getdata() {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => obj = data)
      .then(() => splitCategory())
}

//function to split prouducts to categorys
function splitCategory() {
   jewelery=obj.filter(data=> data.category == "jewelery");
  console.log(jewelery);
   electronics=obj.filter(data=> data.category == "electronics");
  console.log(electronics);
   men=obj.filter(data=> data.category == "men's clothing");
  console.log(men);
  woman=obj.filter(data=> data.category == "women's clothing");
  console.log(woman);
  createCards();
}


function createCards() {
  
  for (let index = 0; index < men.length; index++) {
   
    
// create card element
//card
let cardDiv = document.createElement("div");
cardDiv.className='col-md-6 col-lg-4 col-xl-3';
//cardbody
let cardBody=document.createElement('div');
cardBody.className='single-product';
//img div
imgDiv=document.createElement('div');
imgDiv.className='part-1';
// imge 
imgElement=document.createElement('img');
imgElement.src=men[index].image;


//add img to div img 
imgDiv.appendChild(imgElement);
//divcontent
contentDiv=document.createElement('div');
contentDiv.className='part-2';
//title 
titleElement=document.createElement('h3');
titleElement.className='product-title';
let productTitle=document.createTextNode(men[index].title);
titleElement.appendChild(productTitle);
//price
priceElement=document.createElement('h4');
priceElement.className='product-price';
let productPrice=document.createTextNode(men[index].price+"$");
priceElement.appendChild(productPrice);
 // cart 
 ulElement=document.createElement('ul');
 liElement=document.createElement('li');
 aElement=document.createElement('a');
 aElement.href="#";
 imgCard=document.createElement('img');
imgCard.src="https://img.icons8.com/color/48/000000/add-shopping-cart--v2.png";


//add title to content div
contentDiv.appendChild(titleElement);
//add price element to content div
contentDiv.appendChild(priceElement);
//add img to a
aElement.appendChild(imgCard);
//add a to li
liElement.appendChild(aElement);
//add li to ul 
ulElement.appendChild(liElement);
//add ul to content div
contentDiv.appendChild(ulElement)

//add imgcard to card body
cardBody.appendChild(imgDiv);
//add content to card body
cardBody.appendChild(contentDiv);
// add card body to card dive
cardDiv.appendChild(cardBody);

var cardRow = document.getElementById('products');
cardRow.appendChild(cardDiv);
  }


}