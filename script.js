function storeArray(arr) {
    console.log('arr',arr)
    localStorage.setItem("myArray", JSON.stringify(arr));
    console.log("Array stored");
  }
  
  // Retrieve the array from local storage
  function retrieveArray() {
    var storedArray = localStorage.getItem("myArray");
    if (storedArray) {
       storeCredential = JSON.parse(storedArray);
      console.log("Array retrieved:", storeCredential);
    } else {
      console.log("No array found");
    }
  }




function add(array,email,password,name,location,role){
    obj={
    "email":email,
    "password":password,
    "name":name,
    "location":location,
    "role":role
    }
    storeCredential.push(obj)
    storeArray(storeCredential)
}
var storeCredential=[]


// Login form submission
var form1 = document.getElementById("loginForm");
  if (form1) {
    form1.addEventListener("submit", function(event) {
        
      event.preventDefault();
      retrieveArray();
     
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      retrieveArray();
  
  
   for(var i=0;i<storeCredential.length;i++){
      if(storeCredential[i].email==email&&storeCredential[i].password===password){
        console.log(storeCredential)
          window.location.href = "search.html"; // Redirect to the dashboard
      }
      if(i<storeCredential.length-1){
        alert("Invalid email or password"); // Display error message
   }
   }
   
    });
  }

  
  
  // Register form submission

  var form2 = document.getElementById("registerForm");
  if(form2){
    form2.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const name=document.getElementById("name").value
        const location=document.getElementById('location').value;
        const role=document.getElementById('Role').value;
    
    
        if (password !== confirmPassword) {
          alert("Passwords do not match"); // Display error message
        } else {
          add(storeCredential,email,password,name,location,role)
          storeArray(storeCredential)
          console.log(storeCredential)
          window.location.href = "login.html"; // Redirect to the login page
        }
      });
  }



  // Function to search candidates based on location and job role
  var matchContent=[]
  function searchCandidates() {
    retrieveArray()
    const locationInput = document.getElementById("locationInput").value.toLowerCase();
    const jobRoleInput = document.getElementById("jobRoleInput").value.toLowerCase();
    console.log(locationInput)
    for(var i=0;i<storeCredential.length;i++){
console.log(i,storeCredential[i])
        if(storeCredential[i].location==locationInput&&storeCredential[i].role===jobRoleInput){
            console.log(storeCredential[i].location)
          matchContent.push(storeCredential[i])
        }
     }
  
    displayCandidates(matchContent);
  }
  
  // Function to display the fetched candidates
  function displayCandidates(candidates) {
    console.log(matchContent)
    const candidatesList = document.getElementById("candidatesList");
    candidatesList.innerHTML = "";
  
    if (candidates.length === 0) {
      candidatesList.innerHTML = "<li>No candidates found.</li>";
    } else {
      candidates.forEach(candidate => {
        const listItem = document.createElement("li");
        listItem.textContent = `${candidate.name} - ${candidate.location} - ${candidate.role}`;
        candidatesList.appendChild(listItem);
      });
    }
  }
  