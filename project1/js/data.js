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
cardDiv.className='col-lg-4 col-md-6';
//cardbody
let cardBody=document.createElement('div');
cardBody.className='product__item';
//img div
imgDiv=document.createElement('div');
imgDiv.className='product__item__pic set-bg';
// imge 
imgElement=document.createElement('img');
imgElement.src=men[index].image;
//

 // cart
 ulElement=document.createElement('ul');
 ulElement.className='product__hover';
 // first li
 liElement=document.createElement('li');
 aElement=document.createElement('a');
 aElement.href=men[index].image;
 aElement.className='image-popup';
 imgCard=document.createElement('span');
 imgCard.className='fas fa-expand-alt';
 //add img to a
aElement.appendChild(imgCard);
//add a to li
liElement.appendChild(aElement);
//add li to ul 
ulElement.appendChild(liElement);

// second li
liElement=document.createElement('li');
 aElement=document.createElement('a');
 //aElement.href=men[index].image;
 imgCard=document.createElement('span');
 imgCard.className='far fa-heart';

 //add a to li
liElement.appendChild(aElement);
//add li to ul 
ulElement.appendChild(liElement);

 // last li
liElement=document.createElement('li');
aElement=document.createElement('a');
//aElement.href=men[index].image;
imgCard=document.createElement('span');
imgCard.className='fas fa-shopping-cart';

//add a to li
liElement.appendChild(aElement);
//add li to ul 
ulElement.appendChild(liElement);


//add img to div img 
imgDiv.appendChild(imgElement);
//add ul to content div
imgDiv.appendChild(ulElement);

//divcontent
contentDiv=document.createElement('div');
contentDiv.className='product__item__text';
//title 
titleElement=document.createElement('h6');
atext=document.createElement('a');
// stars
stardiv=document.createElement('div');
stardiv.className= 'rating';
starIcon=createElement('i');
starIcon.className='fa fa-star';
stardiv.appendChild(starIcon);
starIcon.className='fa fa-star';
stardiv.appendChild(starIcon);
starIcon.className='fa fa-star';
stardiv.appendChild(starIcon);
starIcon.className='fa fa-star';
stardiv.appendChild(starIcon);

//atext.href='#';
let productTitle=document.createTextNode(men[index].title);
atext.appendChild(productTitle);
//add title to content div
contentDiv.appendChild(atext);
// stars
contentDiv.appendChild(stardiv);
//price
priceElement=document.createElement('div');
priceElement.className='product__price';
let productPrice=document.createTextNode(men[index].price+"$");
priceElement.appendChild(productPrice);
//add price element to content div
contentDiv.appendChild(priceElement);



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