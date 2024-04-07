/* W06: Final project */

/* Declare and initialize global variables */
const productsElement=document.querySelector("#products");
let productList=[];
/* async displayProducts Function */
const displayProducts=(products)=>{products.forEach(item=>{
    articleElement=document.createElement("article");
    h3Element=document.createElement("h3")
    h3Element.innerHTML=item.productName;
    imgElement=document.createElement("img");
    imgElement.setAttribute("src", item.imageUrl); 
    imgElement.setAttribute("alt", item.price);
    articleElement.appendChild(h3Element);
    articleElement.appendChild(imgElement);
    productsElement.appendChild(articleElement);
})};

/* async getProducts Function using fetch()*/
const getProducts=async()=>{
    const response=await fetch("https://craig201042.github.io/wdd130/products.json");
    productList=await response.json();
    displayProducts(productList);
};

/* reset Function */
const reset=()=>productsElement.innerHTML=" ";

/* filterProducts Function */
const filterProducts=(products)=>{
    reset();
    const filter=document.querySelector("#filtered").value;
    switch(filter){
       case "shoe":
         displayProducts(products.filter(item=>item.productName.includes("Shoe")));           
       break; 
       
       case "cloth":
          displayProducts(products.filter(item=>item.productName.includes("Cloth"))); 
       break; 

       case "cheap":
          displayProducts(products.filter(item=>item.price < 50));
       break; 
       
       case "all":
         displayProducts(products);
       break; 
    }   
};

getProducts();

/* Event Listener */
filterElement=document.querySelector("#filtered");
filterElement.addEventListener("change", ()=>{filterProducts(productList)});