// obj to store json 
var obj;
//our category
var electronics;
var jewelery;
var men;
var woman;
var pages;
//pagintion  current page
var page =1;
//to show 3 item in each page in pagenation
var records_per_page = 3;
// to pass it to countinue pagenation
var currentPage;

// function to get all prouducts
function getdata() {


    fetch("https://mocki.io/v1/1a13d8e5-5da9-4637-ba44-4fb6726bb76e")
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

//to cheack which page is called
  switch (pages) {
    case 'Accessories':
    currentPage=jewelery;
    changePage(jewelery);
      break;
      case 'Men':
      currentPage=men;
      changePage(men);
      break;
      case 'Women':
      currentPage=woman;
      changePage(woman);
      break;
      case 'Electronics':
      currentPage=electronics;
    changePage(electronics);
      break;
  
    default:
      break;
  }
  
}

// function to cread card in html pages



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

// to detect current category
 function setcate(categoo) {
   getdata();

   pages=categoo;
   
   
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




















 // function to prev page  in pageination 
 function prevPage()
 {
     if (page > 1) {
      page--;
         changePage(currentPage);
     }
 }
 
  // function to next page  in pageination 
 function nextPage()
 {
     if (page < numPages()) {
      page++;
         changePage(currentPage);
     }
 }

 // function create cards and show it in pagention
 function changePage(categoryType)
 {
   console.log(categoryType);
   console.log(page)
     var btn_next = document.getElementById("btn_next");
     var btn_prev = document.getElementById("btn_prev");
     var listing_table = document.getElementById("listingTable");
     var page_span = document.getElementById("page");
  
     // Validate page
     if (page < 1) page = 1;
     if (page > numPages()) page = numPages();
 
     listing_table.innerHTML = "";
 
     for (var i = (page-1) * records_per_page; i < (page * records_per_page) && i < categoryType.length; i++) {
      let cardDiv = document.createElement("div");
      cardDiv.className='col-lg-4 col-md-6';
      cardDiv.id=i;
      
      //cardbody
      let cardBody=document.createElement('div');
      cardBody.className='product__item';
      //img div
      imgDiv=document.createElement('div');
      imgDiv.className='product__item__pic set-bg';
      
      //add img to div img 
      imgElement=document.createElement('img');
      imgElement.src=categoryType[i].image;
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
      for (let x = 0; x < categoryType[i].rating.rate; x++) {
      var stars =starIcon.cloneNode(true);
      stardiv.appendChild(stars);
      }
      
      //add stars to content div
      contentDiv.appendChild(stardiv);
      
      let productTitle=document.createTextNode(categoryType[i].title);
      atext.appendChild(productTitle);
      //add title to content div
      contentDiv.appendChild(atext);
      atext.onclick= function (){
        displayProduct(cardDiv.id,categoryType);
        
      }
      
      //price
      priceElement=document.createElement('div');
      priceElement.className='product__price';
      let productPrice=document.createTextNode(categoryType[i].price+"$");
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
      console.log(cardDiv);
      var cardRow = document.getElementById('listingTable');
      // finally the card 
      cardRow.appendChild(cardDiv);

    }
     page_span.innerHTML = page + "/" + numPages();
 // to hidden prev btn if in first page
     if (page == 1) {
         btn_prev.style.visibility = "hidden";
         
     }  

     else {
         btn_prev.style.visibility = "visible";
     }
 // to hidden next btn if in last page
     if (page == numPages()) {
         btn_next.style.visibility = "hidden";
     } else {
         btn_next.style.visibility = "visible";
     }
 }


// to caculate how many pages i have to display
 
 function numPages()
 {
     return Math.ceil(currentPage.length / records_per_page);
 }
 
