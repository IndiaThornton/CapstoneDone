
let order = 1 
let adding = false;

const error = document.querySelector(".error")
const message = "Please add a description"


const add_btn = document.querySelector('.add');
add_btn.addEventListener('click', () => {
  const target = document.querySelector('#requested');
  if (adding == false) {
    adding = true;
    target.appendChild(create_item());
  } else {
    error.innerHTML = message;
  }
});
const add_btnTwo= document.querySelector(".addTwo")
add_btnTwo.addEventListener('click', ()=>{
  const target = document.querySelector('#in-progress')
  if (adding===false){
    adding = true;
    target.appendChild(create_item());
  }else{
    error.innerHTML=message
  }
});

const add_btnThree= document.querySelector(".addThree")
add_btnThree.addEventListener('click', ()=>{
  const target = document.querySelector('#done')
  if (adding===false){
    adding = true;
    target.appendChild(create_item());
  }else{
    error.innerHTML=message
  }
});


const removeBtn = document.querySelector(".remove")
removeBtn.addEventListener("click", event =>{
  var itemRemove1 = document.querySelector(".item")
  // debugger
  for(let i =0; i <itemRemove1.clientHeight; i++){
    itemRemove1.remove(".item")
  console.log('clicked')
  }
  
})

const removeBtnTwo = document.querySelector(".removeTwo")
removeBtnTwo.addEventListener("click", event =>{
  var itemRemove2 = document.querySelector(".item")
  for(let i =0; i <itemRemove2.clientHeight; i++){
    itemRemove2.remove(".item")
  console.log('clicked')
  }
  
})

const removeBtnThree =document.querySelector(".removeThree")
console.log(removeBtnThree)
removeBtnThree.addEventListener('click', ()=>{
  var itemRemove3 = document.querySelector(".item")
  for(let i =0; i < itemRemove3.clientHeight; i++){
    itemRemove3.remove(".item")
    console.log('clicked')
  }
})

const create_item = () => {
  let item = document.createElement('div');
  item.classList.add('item');

  item.id = "item-" +order;

  item.draggable= true;

  item.addEventListener('dragstart', event =>
  event.dataTransfer.setData('text', event.target.id))

  item.addEventListener('dragend', event=>
  event.dataTransfer.clearData() )

  let input = document.createElement('input')

  item.appendChild(input)

  let save_btn = document.createElement('button')
  save_btn.innerHTML='Save'
  save_btn.addEventListener('click',()=>{
  
  error.innerHTML=''
  if (input.value !==''){
    order +=1
    item.innerHTML = input.value
    adding = false
  }else{
    error.innerHTML=message

  }
});
item.appendChild(save_btn)
return item;
};

document.querySelectorAll('.drop').forEach(element => {
  element.addEventListener('drop', event =>{
    event.preventDefault();
    const id =
    event.dataTransfer.getData('text')
    event.target.appendChild(document.getElementById(id));
    })
    element.addEventListener('dragover', event =>{
      event.preventDefault();
   
  })
})