//Data 
const apiUrl= "http://localhost:5678/api/works";
let gallery;
let works;

fetch (apiUrl)
.then((response) => response.json())
.then((data) => {
  works = data;
  console.log(works);
  createGallery(works);
});

function createGallery(works){
  gallery = document.querySelector(".gallery");
  for (let i=0;i<works.length;i++){
const workCard = document.createElement("figure");
    const workImage = document.createElement("img");
    const workTitle = document.createElement("figcaption");
    workImage.src = works[i].imageUrl;
    workImage.alt = works[i].title;
    workTitle.innerText = works[i].title;
    workCard.dataset.category = works[i].category.name;
    workCard.className = "workCard";
workCard.appendChild(workImage);
workCard.appendChild(workTitle);
console.log(gallery);
gallery.appendChild(workCard);
}
};





