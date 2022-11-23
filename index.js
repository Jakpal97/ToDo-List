let todoInput //miejsce, gdzie użytkownik wpisuje treść zadania
let errorInfo //info obraku zadań / konieczność wpisania treści
let addBtn //przycisk ADD - dodaje nowe elementy do listy
let ulList // lista zadań, tagi Ul
let newTodo //Nowo dodane zadanie

let popup // popup
let popupInfo // tekst w popupie
let todoToEdit // edytowany toodo
let popupInput // iput w popupie
let popupAddBtn // button w popupie
let popupCloseBtn // przycisk anuluj w popupie

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMElements = () => {
  todoInput= document.querySelector('.todo-input')
  errorInfo= document.querySelector('.error-info')
  addBtn= document.querySelector('.btn-add')
  ulList= document.querySelector('.todolist ul')

  popup= document.querySelector('.popup')
  popupInfo=document.querySelector('.popup-info')
  popupInput=document.querySelector('.popup-input')
  popupAddBtn=document.querySelector('.accept')
  popupCloseBtn=document.querySelector('.cancel')


}

const prepareDOMEvents = () => {
  addBtn.addEventListener('click',addNewTask)
  ulList.addEventListener('click', checkClick)
  popupCloseBtn.addEventListener('click', closePopup)
  popupAddBtn.addEventListener('click', changeTodoText)
}

const addNewTask = () => {
    if (todoInput.value !== ''){
      newTodo = document.createElement('li')
      newTodo.textContent = todoInput.value
        createToolsArea()
        ulList.append(newTodo)


        todoInput.value = ''
      errorInfo.textContent = ''

    }else{
        errorInfo.textContent = 'Wpisz treść zadania !'
    }

}
const createToolsArea = () => {
    const toolsPanel= document.createElement('div')
    toolsPanel.classList.add('tools')
    newTodo.append(toolsPanel)

    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complete')
    completeBtn.innerHTML= '<i class="fas fa-check"></i>'

    const editBnt = document.createElement('button')
    editBnt.classList.add('edit')
    editBnt.textContent= 'EDIT'

    const deleteBnt = document.createElement('button')
    deleteBnt.classList.add('delete')
    deleteBnt.innerHTML= '<i class="fas fa-times"></i>'

    toolsPanel.append(completeBtn, editBnt, deleteBnt)


}

const checkClick = e => {
  if (e.target.matches('.complete')) {
      e.target.closest('li').classList.toggle('completed')
      e.target.classList.toggle('completed')
  }else if (e.target.matches('.edit')){
      editTodo(e)
  }else if (e.target.matches('.delete')){
      console.log('delete')
  }
}

const editTodo = e => {
    todoToEdit = e.target.closest('li')
    popupInput.value = todoToEdit.firstChild.textContent
    popup.style.display='flex'
}
const closePopup = () => {
  popup.style.display='none'
  popupInfo.textContent = ''
}
const changeTodoText = () => {
  if (popupInput.value !== ''){
      todoToEdit.firstChild.textContent = popupInput.value
      popup.style.display='none'
  }else {
      popupInfo.textContent = 'Wpisz treść zadania !'
  }
}

















document.addEventListener('DOMContentLoaded', main)