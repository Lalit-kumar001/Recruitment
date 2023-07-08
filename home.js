
// navbar color change on scroll 
var navbar=document.getElementById('navbar')
console.log('hekk')
window.addEventListener('scroll',function(){
   
    
    if(this.window.scrollY>20){
        navbar.style.backgroundColor='white';
        navbar.style.color='black'
    }
    else{
        navbar.style.backgroundColor='black'
        navbar.style.color='white'
    }
})


// hamburger click 
var hamburger=document.getElementById('hamburger');
var navbar_nav=document.querySelector('.navbar-nav')
hamburger.addEventListener('click',function(){
    if(navbar_nav.classList.contains('navbar-nav')){
        navbar_nav.classList.remove('navbar-nav')
        navbar_nav.classList.add('navbar-nav-show')
       
    }
    else{
        navbar_nav.classList.remove('navbar-nav-show')
        navbar_nav.classList.add('navbar-nav')
    }
})




//------------- appear letter to letter function  ------------

function Letter(name,element){
    var i=0;
    var emptyString=''  
    
 // setinterval 
var pause=setInterval(function(){
    emptyString=emptyString+name[i];
    element.innerText=emptyString;
    i++;
    
    // stoptimeinterval
    if(emptyString.length==name.length){
    clearInterval(pause)
    }
    
    },100)
    
    
    
    
}

//end of function ----------------------------------


// calling function 

var name='Your Digital Recruitment Solution'
var h1=document.getElementById('Recruitment')
Letter(name,h1);



// apply animation left box on visible 

const observerLeft = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log(entry)
        entry.target.classList.add('applyfirst'); // Add the  class when the element is in the viewport
      } else {
        entry.target.classList.remove('applyfirst'); // Remove the  class when the element is out of the viewport
      }
    });
  });

//   apply animation on right box on visible
  const observerRight = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log(entry)
        entry.target.classList.add('applysecond'); // Add the  class when the element is in the viewport
      } else {
        entry.target.classList.remove('applysecond'); // Remove the  class when the element is out of the viewport
      }
    });
  });
  
  // Target the left box to animate
  const leftBoxes = document.getElementsByClassName('left-box');

// Start observing each element
  for (let i = 0; i < leftBoxes.length; i++) {
    const element = leftBoxes[i];
    observerLeft.observe(element); 
  }

   // Target the left box to animate
  
   const rightBoxes = document.getElementsByClassName('right-box');

   // Start observing each element
  for (let i = 0; i < rightBoxes.length; i++) {
    const element = rightBoxes[i];
    observerRight.observe(element); 
  }


//   Apply animation on text on visible

const observerText = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log(entry)
        entry.target.classList.add('applyfirst'); // Add the  class when the element is in the viewport
      } else {
        entry.target.classList.remove('applyfirst'); // Remove the  class when the element is out of the viewport
      }
    });
  });

  const features=document.getElementById('feature')
  const benefits=document.getElementById('benefits')

  observerText.observe(features)
  observerText.observe(benefits)

  // image delay 

  var delay = 1000; // Adjust the delay time as needed (1 seconds in this example)

// Function to show the image
function showImage() {
  var image = document.getElementById("landing-img");
  image.style.display='block';
}

// Call the showImage function after the delay
// setTimeout(showImage, delay);