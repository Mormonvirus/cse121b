/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "James-ann Umoh",
    photo: "images/me.png",
    favoriteFoods: [
        "Rice", 
        "Soup and Eba", 
        "Rice and Stew", 
        "Pizza", 
        "Rice and Peppersoup"
    ],
    hobbies: [
        "Learning",
        "Making Research",
        "Swimming"
    ],
    placedLived: [

    ],
};



/* Populate Profile Object with placesLive objects */
myProfile.placedLived.push(
    {
      place: "Stadium Road",
      length: "2 Year"
    },
    {
      place: "Ogbunabali Road",
      length: "2 years"
    },
  );



/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(
    food => {
        let li = document.createElement("li");
        li.textContent = food;
        document.querySelector("#favorite-foods").appendChild(li);
    }
);

/* Hobbies List */
myProfile.hobbies.forEach(
    hobbie => {
        let li = document.createElement("li");
        li.textContent = hobbie;
        document.querySelector("#hobbies").appendChild(li);
    }
);

/* Places Lived DataList */

myProfile.placedLived.forEach(
    place => {
        let dt = document.createElement("dt");
        dt.textContent = place.place;
        document.querySelector("#places-lived").appendChild(dt);
        let dd = document.createElement("dd");
        dd.textContent = place.length;
        document.querySelector("#places-lived").appendChild(dd);
    }
);

