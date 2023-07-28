const apiEP = "https://randomuser.me/api/?results=20";
let userList = [];

document.getElementById("search").addEventListener("keyup", (e) => {
  const { value } = e.target;

  const filteredUser = userList.filter((item) => {
    const name = (item.name.first + " " + item.name.last).toLowerCase();

    return name.includes(value.toLowerCase());
  });

  display(filteredUser);
});

const fetchUser = async (url) => {
  try {
    //to fetch data from any server, fetch()
    //promise method
    // fetch(apiEP)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   });

    // async await

    const response = await fetch(url);
    const data = await response.json();
    userList = data.results;

    display(userList);
  } catch (error) {
    console.log(error);
  }
};

fetchUser(apiEP);

const display = (users) => {
  let str = "";
  users.map((usr, i) => {
    str += `
        <div class="card" style="width: 18rem">
        <img src="${usr.picture.large}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${usr.name.title} ${usr.name.first} ${usr.name.last}</h5>
          <div class="card-text">
           
<ul class="list-unstyled">
<li><i class="fa-solid fa-mobile"></i> ${usr.cell}</li>
<li> <i class="fa-solid fa-envelope"></i> ${usr.email} </li>
<li><i class="fa-solid fa-map"></i> ${usr.location.street.number} ${usr.location.street.name}  ${usr.location.postcode} ${usr.location.country} </li>
</ul>
          </div>
         
        </div>
      </div>`;
  });

  document.getElementById("list").innerHTML = str;
  document.getElementById("count").innerText = users.length;
};

const handleOnGenderSelect = (e) => {
  const g = e.value;
  const url = `${apiEP}&gender=${g}`;
  fetchUser(url);
};

//Js basic
// Arry with all loops,
//OBJ with destructure, default and rest, sprade
//es6
