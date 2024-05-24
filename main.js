// const users = [
//     {
//         userFirstName: 'Nathaneil',
//         userLastName: 'Paul',
//         userPassword: 'unachi'
//     },
//     {
//         userFirstName: 'esther',
//         userLastName: 'Unachi',
//         userPassword: 'unachi'
//     },
//     {
//         userFirstName: 'Manasseh',
//         userLastName: 'Unachi',
//         userPassword: '123'
//     },
// ]
const showSidebar = document.querySelector(".showSidebar");
const hidSidebar = document.querySelector(".hideSidebar");
const onMobile = document.querySelectorAll(".onmobile");
const sidebar = document.querySelector(".sidebar");
console.log(sidebar);

showSidebar.addEventListener("click", () =>{
    sidebar.style.display = 'flex'
})
hidSidebar.addEventListener("click", () =>{
    sidebar.style.display = 'none'
})





function login() {
    const firstName =document.getElementById('firstname').value;
    const lastName =document.getElementById('lastname').value;
    const password =document.getElementById('password').value;
// logins
    const userFirstName= 'Manasseh';
    const userLastName= 'Unachi';
    const userPassword= '123';


   if(firstName === users && lastName === users && password === users)
   {
    window.location.assign('index.html');
    alert('you are logged in');
   } else{
    alert('you are not');
   }
}