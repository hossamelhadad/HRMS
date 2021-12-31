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
// imge 
imgElement=document.createElement('img');
imgElement.src=categoryType[index].image;
//

 // cart
 ulElement=document.createElement('ul');
 ulElement.className='product__hover';
 // first li
 liElement=document.createElement('li');
 aElement=document.createElement('a');
 aElement.href=categoryType[index].image;

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
 aElement.appendChild(imgCard);

 //add a to li
liElement.appendChild(aElement);
//add li to ul 
ulElement.appendChild(liElement);

 // last li
liElement=document.createElement('li');
aElement=document.createElement('a');
//aElement.href=categoryType[index].image;
imgCard=document.createElement('span');
imgCard.className='fas fa-shopping-cart';
aElement.appendChild(imgCard);

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
starIcon=document.createElement('i');
starIcon.className='fa fa-star';
// to add stars
for (let x = 0; x < categoryType[index].rating.rate; x++) {
var stars =starIcon.cloneNode(true);
stardiv.appendChild(stars);
}



//atext.href='#';
let productTitle=document.createTextNode(categoryType[index].title);
atext.appendChild(productTitle);
//add title to content div
contentDiv.appendChild(atext);
// stars
contentDiv.appendChild(stardiv);
//price
priceElement=document.createElement('div');
priceElement.className='product__price';
let productPrice=document.createTextNode(categoryType[index].price+"$");
priceElement.appendChild(productPrice);
//add price element to content div
contentDiv.appendChild(priceElement);



//add imgcard to card body
cardBody.appendChild(imgDiv);
//add content to card body
cardBody.appendChild(contentDiv);
// add card body to card dive
cardDiv.appendChild(cardBody);

var cardRow = document.getElementById('Products');

cardRow.appendChild(cardDiv);

cardDiv.onclick= function (){
  displayProduct(cardDiv.id,categoryType);
  
}
  }


}









// display product in product page
function displayProduct(index,categ) {
  
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


