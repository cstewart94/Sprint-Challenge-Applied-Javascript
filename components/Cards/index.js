// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


function myCard(array){

  const wholeCard = document.createElement('div');
  const cardHeadline = document.createElement('div');
  const cardAuthor = document.createElement('div');
  const imgContainer= document.createElement('div');
  const cardImage = document.createElement('img');
  const cardName = document.createElement('span');



  cardHeadline.textContent = array.headline;
  cardImage.src = array.authorPhoto;
  cardAuthor.textContent =`By: ${array.authorName}`;

  wholeCard.appendChild(cardHeadline);
  wholeCard.appendChild(cardAuthor);
  cardAuthor.appendChild(imgContainer);
  imgContainer.appendChild(cardImage);
  cardAuthor.appendChild(cardName);

  wholeCard.classList.add('card');
  cardHeadline.classList.add('headline');
  cardAuthor.classList.add('author');
  imgContainer.classList.add('img-container');


  return wholeCard
}

const containerCards = document.querySelector('.cards-container')



axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    const newO = (response.data.articles);
    for(let i in newO){
      newO[i].forEach(par =>{
      let allCards = myCard(par);  
      containerCards.appendChild(allCards);
      })
  } 
})