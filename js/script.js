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
showPage(data, 1)

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
