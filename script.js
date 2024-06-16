const postsList=document.querySelector('.posts-list');
const addPostForm=document.querySelector('.add-post-form');
const titleValue=document.getElementById('title-value');
const bodyValue=document.getElementById('body-value');
// const url='https://jsonplaceholder.typicode.com/todos';
let scrollicon = document.getElementById("scroll-icon");
window.onscroll = function() {sFunction()};
function validateForm() {
  // Get form values
  var name = document.getElementById("nameInput").value;
  var email = document.getElementById("emailInput").value;
  var phone = document.getElementById("phoneInput").value;
  var message = document.getElementById("messageTextarea").value;

  // Regular expressions for validation
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var phonePattern = /^\d{10}$/;

  // Validate name
  if (name.trim() === "") {
      alert("Please enter your name.");
      return false;
  }

  // Validate email
  if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
  }

  // Validate phone
  if (!phonePattern.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
  }

  // Validate message
  if (message.trim() === "") {
      alert("Please enter your message.");
      return false;
  }

  // If all validations pass, submit the form
  alert("Form submitted successfully!");
  return true;
}

function sFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollicon.style.display = "block";
  } else {
    scrollicon.style.display = "none";
  }
}


function Scroll() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

let output='';
const renderPosts=(posts)=> {
  posts.forEach(post => {
     
    output += `
    <div class="card mt-4 col-md-6 bg-light" >
    <div class="card-body" data-id=${post.id}>
      <h5 class="card-title">${post.title}</h5>
      <p class="card-text">lorem nknnmlnljk</p>
      <a href="#" class="card-link" id='edit-post'>Edit</a>
      <a href="#" class="card-link" id='delete-post'>Delete</a>
    </div>
  </div>

    `;
  }) ;
    postsList.innerHTML=output;
  }

fetch (url)
.then(res => res.json())
.then(data =>  renderPosts(data))
postsList.addEventListener('click', (e) => {
  e.preventDefault();
  
  // Determine if the delete or edit button is pressed
  let delButtonIsPressed = e.target.id === 'delete-post';
  let editButtonIsPressed = e.target.id === 'edit-post';
  
  // Retrieve the post's ID from the parent element's dataset
  let id = e.target.parentElement.dataset.id;
  
  // If the delete button is pressed, proceed with deletion
  if (delButtonIsPressed) {
    console.log(`Attempting to delete post with ID: ${id}`); // Logging for debugging
    fetch(`${url}/${id}`, {
      method: 'DELETE',
    })
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then(() => {
      console.log(`Post with ID: ${id} successfully deleted`); // Logging for debugging
      location.reload();
    })
    .catch(error => {
      // Handle any errors that occur during the fetch
      console.error('Error deleting post:', error);
    });
  }
});
  
addPostForm.addEventListener('submit',(e) =>{
  e.preventDefault();

console.log(titleValue.value)
  fetch(url,{
    method:'POST',
  headers: {
'Content-Type': 'application/json'
  }, 
  body: JSON.stringify({
  title :titleValue.value,
body:bodyValue.value
})

})

.then(res => res.json())
.then(data =>
  {
    const dataArr=[];
    dataArr.push(data);
    renderPosts(dataArr);

  })
})

