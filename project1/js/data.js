var obj;
var electronics;
var jewelery;
var men;
var woman;
var page;


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
// to cheack which page is called
  switch (page) {
    case 'Accessories':
    createCards(jewelery);
      break;
      case 'Men':
    createCards(men);
      break;
      case 'Women':
    createCards(woman);
      break;
      case 'Electronics':
    createCards(electronics);
      break;
  
    default:
      break;
  }
  
}

// function to cread card in html pages
function createCards(categoryType) {
  console.log(categoryType);
  
  for (let index = 0; index < categoryType.length; index++) {
   
    
// create card element
//card
let cardDiv = document.createElement("div");
cardDiv.className='col-lg-4 col-md-6';
cardDiv.id=index;

//cardbody
let cardBody=document.createElement('div');
cardBody.className='product__item';
//img div
imgDiv=document.createElement('div');
imgDiv.className='product__item__pic set-bg';

//add img to div img 
imgElement=document.createElement('img');
imgElement.src=categoryType[index].image;
imgDiv.appendChild(imgElement);

 // icons for porudct card when hover
 ulIconElement=document.createElement('ul');
 ulIconElement.className='product__hover';
 
 // first li for expand icon
 liExpandElement=document.createElement('li');
 aExpandElement=document.createElement('a');

 aExpandElement.className='image-popup';
 expandIcon=document.createElement('span');
 expandIcon.className='fas fa-expand-alt';
 //add icon to a
 aExpandElement.appendChild(expandIcon);
//add a to li
liExpandElement.appendChild(aExpandElement);
//add li to ul 
ulIconElement.appendChild(liExpandElement);


// li for fav icon
liFavElement=document.createElement('li');
 aFavElement=document.createElement('a');
 //favou icon
 var favIcon=document.createElement('span');
 favIcon.className='far fa-heart';
 aFavElement.appendChild(favIcon);

 //add a to li
 liFavElement.appendChild(aFavElement);
//add li to ul 
ulIconElement.appendChild(liFavElement);

 // last li for shopping icon
liShopElement=document.createElement('li');
aShopElement=document.createElement('a');
shopIcon=document.createElement('span');
shopIcon.className='fas fa-shopping-cart';
aShopElement.appendChild(shopIcon);
shopIcon.onclick= function (){
  cheackOut(cardDiv.id,categoryType);
  
}

//add a to li
liShopElement.appendChild(aShopElement);
//add li to ul 
ulIconElement.appendChild(liShopElement);

//divcontent
contentDiv=document.createElement('div');
contentDiv.className='product__item__text';
//title 
titleElement=document.createElement('h6');
atext=document.createElement('a');
// stars
stardiv=document.createElement('div');
stardiv.className= 'rating';
starIcon=document.createElement('i');
starIcon.className='fa fa-star';
// to add stars
for (let x = 0; x < categoryType[index].rating.rate; x++) {
var stars =starIcon.cloneNode(true);
stardiv.appendChild(stars);
}

//add stars to content div
contentDiv.appendChild(stardiv);

let productTitle=document.createTextNode(categoryType[index].title);
atext.appendChild(productTitle);
//add title to content div
contentDiv.appendChild(atext);
atext.onclick= function (){
  displayProduct(cardDiv.id,categoryType);
  
}

//price
priceElement=document.createElement('div');
priceElement.className='product__price';
let productPrice=document.createTextNode(categoryType[index].price+"$");
priceElement.appendChild(productPrice);
//add price element to content div
contentDiv.appendChild(priceElement);

//add ul to img div
imgDiv.appendChild(ulIconElement);

//add imgcard to card body
cardBody.appendChild(imgDiv);
//add content to card body
cardBody.appendChild(contentDiv);
// add card body to card dive
cardDiv.appendChild(cardBody);

var cardRow = document.getElementById('Products');
// finally the card 
cardRow.appendChild(cardDiv);


  }


}

// display product in product page
function displayProduct(index,categ) {
  //set data from clicked card
  localStorage.setItem('id',categ[index].id);
  localStorage.setItem('title',categ[index].title);
  localStorage.setItem('price',categ[index].price);
  localStorage.setItem('description',categ[index].description);
  localStorage.setItem('category',categ[index].category);
  localStorage.setItem('image',categ[index].image);
  localStorage.setItem('rate',categ[index].rating.rate);
  localStorage.setItem('count',categ[index].rating.count);
  window.open('product.html');



}


 function setcate(categoo) {
   getdata();

   page=categoo;
   
   
 } 


 function cheackOut(current , prou) {
  var titles ='title'+current;
  var prices= 'price'+current;
  var imges= 'image'+current;
  console.log(titles);
  localStorage.setItem(titles,prou[current].title);
  localStorage.setItem(prices,prou[current].price);
  localStorage.setItem(imges,prou[current].image);


 }

