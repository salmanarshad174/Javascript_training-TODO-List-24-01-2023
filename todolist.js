

// console.log(password);

const addButton = document.querySelector('.addButton'); //we can use the let as well but it is the good practice to use the const if you think that the value will remain constant
var input = document.querySelector('.input');
const container = document.querySelector('.container');
localStorage.clear;

var arr={};
class todolist{
   
     
  constructor(todolistName){ 
      this.myfunction(todolistName);
     
      

  }
  myfunction(todolistName){
    let input = document.createElement('input');
      input.value= todolistName;
      input.disabled = true;
      input.classList.add('todolist_input')
      // console.log(input.classList);
      input.type= "text";

      let todolistBox = document.createElement('p');
      todolistBox.classList.add('todolist')

      

      let removeButton = document.createElement('button');
      removeButton.innerHTML = "REMOVE";
      removeButton.classList.add('removeButton');
      let editButton = document.createElement('button');
      editButton.innerHTML = "EDIT";
      editButton.classList.add('editButton');

      container.appendChild(todolistBox);
      console.log(input.value);
      todolistBox.appendChild(input);
      todolistBox.appendChild(editButton);
      todolistBox.appendChild(removeButton);
       
       localStorage.setItem("class",arr.value);
      localStorage.setItem("class",input.value);
      editButton.addEventListener('click',() => this.edit(input));

      removeButton.addEventListener('click',() => this.remove(todolistBox));
  }

 

  edit(input){

      input.disabled =  !input.disabled;
     
  }

  remove(todolist){

      container.removeChild(todolist);
      
  }

}

function check(){

      if(input.value !=""){
        
        // localStorage.setItem("class",(new todolist(input.value)));
           new todolist(input.value);
           
          input.value = "";
      }

}


addButton.addEventListener('click', check);
localStorage.getItem("class");


function abc(loginForm)
{
    let name = document.getElementById("user_name").value;
    let email=document.getElementById("user_email").value;
    // var password = document.forms['form']['user_email'];
  
    localStorage.settodolist("user_name", name);
    localStorage.settodolist("user_email", email);
    
   
}

function register() {
   
    localStorage.settodolist("email", email.value);
    document.getElementById("id01").innerHTML = "Registration successful";
}