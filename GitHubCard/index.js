/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

//GITHUB HTML PARENT
const main = document.querySelector('.cards');

axios.get('https://api.github.com/users/Issac909').then(response => {
  // console.log(response.data);
  const card = createCard(response.data);
  main.appendChild(card);
  })


.catch(error => ('DATA NOT RETURNED', error));
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  `tetondan`,
  `dustinmyers`,
  `justsml`,
  `luishrd`,
  `bigknell`,
];

followersArray.forEach(event => {
  axios.get(`https://api.github.com/users/${event}`).then(res => {
    const cardRes = createCard(res.data);

    const header = document.querySelector('.header');
    main.appendChild(cardRes);
  });
});

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/


//CREATE GITHUB CARD
function createCard (data) {
  //MAIN PARENT (CONTAINER)
  const card = document.createElement('div');
  card.classList.add('card');

  //IMAGE
  const image = document.createElement('img');
  image.src = data.avatar_url;
  card.append(image);


  //CARD INFO
  const info = document.createElement('div');
  info.classList.add('card-info');
  card.append(info);

  //NAME
  const name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = data.name;
  info.append(name);

  //USERNAME
  const username = document.createElement('p');
  username.textContent = data.login;
  info.append(username);
 
  //LOCATION
  const location = document.createElement('p');
  location.textContent = `Location: ${data.location}`;
  info.append(location);

  //PROFILE
  const profile = document.createElement('p');
  profile.textContent = 'Profile: '
  info.append(profile)

  const profileLink = document.createElement('a');
  profileLink.textContent = data.html_url;
  profile.append(profileLink)

  //FOLOWERS
  const followers = document.createElement('p');
  followers.textContent = `Followers: ${data.followers}`;
  info.append(followers);

  //FOLLOWING
  const following = document.createElement('p');
  following.textContent = `Following: ${data.following}`;
  info.append(following);

  const bio = document.createElement('p');
  bio.textContent = `Bio: ${data.bio}`;
  info.append(bio);

  return card;
}



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
