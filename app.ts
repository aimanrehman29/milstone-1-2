const ToggleButton =  document.getElementById("toggle-projects") as HTMLButtonElement
const Projects = document.getElementById("Projects")as HTMLElement

ToggleButton.addEventListener('click',()=>{
   if(Projects.style.display ==='none'){
      Projects.style.display = 'block'
   } else{
      Projects.style.display ='none'
   }
});
