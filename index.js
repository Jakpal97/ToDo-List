let todoInput //miejsce, gdzie użytkownik wpisuje treść zadania
let errorInfo //info obraku zadań / konieczność wpisania treści
let addBtn //przycisk ADD - dodaje nowe elementy do listy
let ulList // lista zadań, tagi Ul
let newTodo //Nowo dodane zadanie


const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMElements = () => {
  todoInput= document.querySelector('.todo-input')
  errorInfo= document.querySelector('.error-info')
  addBtn= document.querySelector('.btn-add')
  ulList= document.querySelector('.todolist ul')
}

const prepareDOMEvents = () => {
  addBtn.addEventListener('click',addNewTask)
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



















document.addEventListener('DOMContentLoaded', main)