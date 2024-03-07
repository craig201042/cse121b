/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName= 'Craig Zeng';
const currentYear='2024';
profilePicture='images/craig.png';


/* Step 3 - Element Variables */

nameElement=document.getElementById('name');
foodElement=document.getElementById('food');
yearElement=document.querrySelector('#year');
imageElement=document.querrySelector('img');


/* Step 4 - Adding Content */

nameElement.innerHTML='<strong>${fullName}</strong>';
yearElement.textContent =currentYear;
imageElement.setAttribute('src', 'images/craig.png');
imageElement.setAttribute('alt', 'Profile image of ${fullName}');


/* Step 5 - Array */

const foods=['Hamburger', 'beef noodle', 'milkshake'];
foodElement.innerHTML=foods;
let singleFood='pizza';
foods.push(singleFood);
foodElement.innerHTML+='<br>${foods}';
foods.shift();
foodElement.innerHTML+='<br>${foods}';
foods.pop();
foodElement.innerHTML+='<br>${foods}';




