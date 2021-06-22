let main = document.getElementById("mainContainer");

let container = document.createElement("div");
container.setAttribute("id", "container");
main.appendChild(container);

createHTMLElements = (image, p, unit, i, span, div, likes) => {

  let wrapper = document.createElement("div");
  wrapper.setAttribute("id", "wrapper");
  container.appendChild(wrapper);

  var profileImg = document.createElement(image);
  profileImg.classList.add("profile");
  profileImg.innerHTML = `<img src=${unit[i].profile_image}/>`;
  wrapper.appendChild(profileImg);

  var instaImg = document.createElement(span);
  instaImg.classList.add("instaImg");
  instaImg.innerHTML = `<img src=icons/instagram-logo.svg></img>`;
  wrapper.appendChild(instaImg);

  var dateBirth = document.createElement(span);
  dateBirth.classList.add("dateBirth");
  dateBirth.innerHTML = `<span>${unit[i].date}</>`;
  wrapper.appendChild(dateBirth);

  var fullName = document.createElement(span);
  fullName.classList.add("fullName");
  fullName.innerHTML = `<span>${unit[i].name}</span>`;
  wrapper.appendChild(fullName);

  var coverImg = document.createElement(image);
  coverImg.classList.add("cover");
  coverImg.innerHTML = `<img src=${unit[i].image}/>`;
  wrapper.appendChild(coverImg);


  let comentWrapper = document.createElement("div");
  comentWrapper.setAttribute("id", "comentWrapper");
  wrapper.appendChild(comentWrapper);

  var comment = document.createElement(p);
  comment.classList.add("caption");
  comment.innerText = `${unit[i].caption}`;
  comentWrapper.appendChild(comment);

  var heartImg = document.createElement("div");
  heartImg.classList.add("heartImg");
  heartImg.innerHTML = `<img src=icons/heart.svg></img>`;
  wrapper.appendChild(heartImg);

  var likes = document.createElement(span);
  likes.classList.add("likes");
  likes.innerHTML = `${unit[i].likes}`;
  heartImg.appendChild(likes);
};

let curr = 4;
async function fetchData() {
  
  let response = await fetch("data.json");
  let unit = await response.json();
  let cur=0;
  let loadMore = document.createElement("button");
  loadMore.classList.add("loadFourMore");
  loadMore.innerHTML = `Load More`;
  main.appendChild(loadMore);
  console.log(unit);
  
  for (let i=0;i<4;i++){
      createHTMLElements("image", "p", unit, i, "span", "text");
  }
  loadMore.addEventListener("click", () => {
  for (let i=curr;i<curr+4;i++){
    if(i < unit.length){
      createHTMLElements("image", "p", unit, i, "span", "text");
    }
    else{
      loadMore.style.display = 'none';
    }
  }
  curr = curr+4;
  });
  
           
}
fetchData();
