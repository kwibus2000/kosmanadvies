// Initialize Firebase
var config = {
  apiKey: "AIzaSyDMTEpUYElK8vlmDOJQ8UH9kNAY4zbu0dM",
  authDomain: "kosman-advies.firebaseapp.com",
  databaseURL: "https://kosman-advies.firebaseio.com",
  projectId: "kosman-advies",
  storageBucket: "kosman-advies.appspot.com",
  messagingSenderId: "821717645806"
};
firebase.initializeApp(config);

// Reference messages collection
const messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  const name = getInputVal('name');
  const company = getInputVal('company');
  const email = getInputVal('email');
  const phone = getInputVal('phone');
  const message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout( () => {
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  const newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}