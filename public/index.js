// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRz8DMthEmsRyGGnHmqw1rUELwZMzy8Fg",
  authDomain: "edu-gen-edge.firebaseapp.com",
  databaseURL: "https://edu-gen-edge-default-rtdb.firebaseio.com",
  projectId: "edu-gen-edge",
  storageBucket: "edu-gen-edge.appspot.com",
  messagingSenderId: "921609616960",
  appId: "1:921609616960:web:a07bf2f7d244104e8529a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

import {
  ref,
  get,
  push,
  set,
  child,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const db = getDatabase();
var enterID = document.querySelector("#enterID");
var enterName = document.querySelector("#enterName");
var enterCity = document.querySelector("#enterCity");
var enterSpeciality = document.querySelector("#enterSpeciality");
var findID = document.querySelector("#findID");
var findName = document.querySelector("#findName");
var findCity = document.querySelector("#findCity");
var findSpeciality = document.querySelector("#findSpeciality");

var insertBtn = document.querySelector("#insert");
var updateBtn = document.querySelector("#update");
var removeBtn = document.querySelector("#remove");
var findBtn = document.querySelector("#find");

function InsertData() {
  // + "/" + enterID.value
  set(ref(db, "BookId/" + enterID.value), {
    Name: enterName.value,
    City: enterCity.value,
    Speciality: enterSpeciality.value,
  })
    .then(() => {
      alert("Data added successfully");
    })
    .catch((error) => {
      alert(error);
    });
}

function FindData() {
  const dbref = ref(db);

  get(child(dbref, "BookId/" + findID.value))
    .then((snapshot) => {
      if (snapshot.exists()) {
        findName.innerHTML = "Name: " + snapshot.val().Name;
        findCity.innerHTML = "City: " + snapshot.val().City;
        findSpeciality.innerHTML = "Email Id: " + snapshot.val().Speciality;
      } else {
        alert("No data found");
      }
    })
    .catch((error) => {
      alert(error);
    });
}

function UpdateData() {
  update(ref(db, "BookId/" + enterID.value), {
    Name: enterName.value,
    City: enterCity.value,
    Speciality: enterSpeciality.value,
  })
    .then(() => {
      alert("Data updated successfully");
    })
    .catch((error) => {
      alert(error);
    });
}

function RemoveData() {
  remove(ref(db, "BookId/" + enterID.value))
    .then(() => {
      alert("Data deleted successfully");
    })
    .catch((error) => {
      alert(error);
    });
}
insertBtn.addEventListener("click", InsertData);
updateBtn.addEventListener("click", UpdateData);
removeBtn.addEventListener("click", RemoveData);
findBtn.addEventListener("click", FindData);
