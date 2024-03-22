/* LESSON 3 - Programming Tasks */

/* Profile Object  */

myProfile={
    name:"Craig Zeng",
    photo:"images/craig.jpg",  
    favoriteFoods:['Hamburger', 'beef noodle', 'milkshake', 'pizza'],
    hobbies:['jogging', 'mountainhiking', 'moviewatching'],
    placesLived:[],
};
/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({place:'MiaoLi', length:'10 years'});
myProfile.placesLived.push({place:'TaoYuan', length:'4 years'});
myProfile.placesLived.push({place:'Taipei', length:'2 years'});

/* DOM Manipulation - Output */
/* Name */
myName=document.querySelector("#name")
myName.textContent=myProfile.name;
/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", myName);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(item=>{
    let newList=document.createElement("li");
    newList.textContent=item;
    document.querySelector("#favorite-foods").appendChild(newList);
});

/* Hobbies List */
myProfile.hobbies.forEach(item=>{
    let newList=document.createElement("li");
    newList.textContent=item;
    document.querySelector("#hobbies").appendChild(newList);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(item=>{
  let dt=document.createElement("dt");
  dt.textContent=item.place;
  document.querySelector("#places-lived").appendChild(dt);
  let dd=document.createElement("dd");
  dd.textContent=item.length;
  document.querySelector("#places-lived").appendChild(dd);
});
