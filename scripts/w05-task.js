/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement=document.querySelector("#temples");
let templeList=[];
/* async displayTemples Function */
const displayTemples=(temples)=>{temples.forEach(item=>{
    articleElement=document.createElement("article");
    h3Element=document.createElement("h3")
    h3Element.innerHTML=item.templeName;
    imgElement=document.createElement("img");
    imgElement.setAttribute("src", item.imageUrl); 
    imgElement.setAttribute("alt", item.location);
    articleElement.appendChild(h3Element);
    articleElement.appendChild(imgElement);
    templesElement.appendChild(articleElement);
})};

/* async getTemples Function using fetch()*/
const getTemples=async()=>{
    const response=await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList=await response.json();
    displayTemples(templeList);
};

/* reset Function */
const reset=()=>templesElement.innerHTML=" ";

/* filterTemples Function */
const filterTemples=(temples)=>{
    reset();
    const filter=document.querySelector("#filtered").value;
    switch(filter){
       case "utah":
         templeUtah=temples.filter(item=>item.location.includes("Utah")); 
         displayTemples(templeUtah);          
       break; 
       
       case "notutah":
          templeNotUtah=temples.filter(item=>!item.location.includes("Utah")); 
          displayTemples(templeNotUtah);
       break; 

       case "older":
          templeOlder=temples.filter(item=>new Date(item.dedicated) < new Date(1950, 0, 1));
          displayTemples(templeOlder);
       break; 
       
       case "all":
         displayTemples(temples);
       break; 
    }   
};

getTemples();

/* Event Listener */
filterElement=document.querySelector("#filtered");
filterElement.addEventListener("change", ()=>{filterTemples(templeList)});