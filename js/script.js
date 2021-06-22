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
injecting HTML into the page via template literal the studenList.innerHTML variable.
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
addPagination function will create buttons based on the number of items present within
the data.js file. Dynamically create buttons based on the length of items
*/
const linkList = document.querySelector('.link-list')
linkList.innerHTML=''
function removeClasses(e){
   e.className=''
}
function addPagination(listofStudents){
   const numOfPages = Math.ceil(listofStudents.length / 9)
   for(i=1; i<=numOfPages; i++){
      let button = `<li> <button type="button" class="pageButton">${i}</button> </li>`;
      linkList.insertAdjacentHTML('beforeend', button);
   }
   console.log('data',listofStudents)
   const pageButtons = document.querySelector('.pageButton')
   pageButtons.className = 'active'
   /*
   Event listener will change the items on the page based on the button item
   clicked by switching active class.
   */
   linkList.addEventListener('click', (e)=>{
      if(e.target.tagName === 'BUTTON'){
         const activeButton = document.querySelector('.active')
         removeClasses(activeButton)
         e.target.className = "active"
         showPage(listofStudents, e.target.textContent)
   
      }
      
   }) 
}
/*
Search Bar filter will check for search term and filter the page based on results. Filter
will display only items related to search, and will display a no results found message
if unmatched search
*/
const header = document.querySelector('header');
const searchBar = document.createElement('label')
searchBar.setAttribute("for", 'search')
searchBar.className = "student-search"
searchBar.innerHTML = `<span>Search by name</span>
<input id="search" placeholder="Search by name...">
<button type="button"><img src="img/icn-search.svg" alt="Search icon">
</button>
`;

header.appendChild(searchBar);
searchBar.addEventListener('keyup', (e) =>{
   const searchTerm = e.target.value.toLowerCase();
   const filteredStudents = data.filter((student) => {
      return (
         student.name.first.toLowerCase().includes(searchTerm) ||
         student.name.last.toLowerCase().includes(searchTerm)
      );
   })
showPage(filteredStudents,1)
   if (filteredStudents.length <= 9){               
      linkList.innerHTML = ''
         }else if (filteredStudents.length > 9 ){
            linkList.innerHTML = ''
            addPagination(filteredStudents)}
   if(filteredStudents.length == 0){
      let ul = document.querySelector('ul')  
      let noResults = document.createElement('h3')
        noResults.innerHTML="No Results Found"
        ul.appendChild(noResults)  
      }
})

showPage(data,1);
addPagination(data);