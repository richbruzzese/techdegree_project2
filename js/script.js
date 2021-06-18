/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/* showPage function will show the initial list of students based on the page number
called by the function.

Created variables to call out to the index item in the data.js file and 
map it to an index
injecting HTML into the page via the studenList.innerHTML variable.
*/
function showPage (list, page){
const indexStart =  (page * 9) - 9 
const indexEnd = (page* 9)
const studentList = document.querySelector('.student-list')
studentList.innerHTML = '';
   for(i=0; i<list.length; i++){
      if(i >= indexStart && i<indexEnd){
         const studentName =  list[i].name.first + ' ' + list[i].name.last
         const avatar = list[i].picture.large
         const date = list[i].registered.date
         const email = list[i].email
         let studentItem = 
         `<li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src="${avatar}">
               <h3>${studentName}</h3>
               <span class="email">${email}</span>
            </div>
            <div class = "joined details">
             <span class = "date">${date}</span>
            </div>
            </li> `
         console.log(avatar)
         studentList.insertAdjacentHTML('beforeend', studentItem)
      }
   }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
const numOfPages = Math.ceil(data.length / 9)
const linkList = document.querySelector('.link-list')
linkList.innerHTML=''
function addPagination(list){
   for(i=1; i<=numOfPages; i++){
      let button = `<li> <button type="button">${i}</button> </li>`;
      linkList.insertAdjacentHTML('beforeend', button);
   }
}
showPage(data,1);
addPagination(data);

  // create an event listener on the `link-list` element
    // if the click target is a button:
      // remove the "active" class from the previous button
      // add the active class to the clicked button
      // call the showPage function passing the `list` parameter and page to display as arguments

const setActive = document.querySelector('button')
setActive.className += 'active'

linkList.addEventListener('click', (e)=>{
   if(e.target.tagName === 'BUTTON'){
      const removeActive = document.querySelector('.active')
      removeActive.className = ''
      e.target.className = "active"
      showPage(data,e.target.textContent)

   }
   
})
// Call functions
