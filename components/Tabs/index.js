// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const impTabs = document.querySelector('.topics');

function allTabs(array){
  array.forEach(data => {
    const eachTab = document.createElement('div');
    eachTab.classList.add('tab');
    eachTab.textContent = data;
    impTabs.appendChild(eachTab);
  });
}

axios.get('https://lambda-times-backend.herokuapp.com/topics').then(response => {
  console.log(response);
  allTabs(response.data.topics);
})
.catch(error => {
  console.log('The data was not returned', error);
})