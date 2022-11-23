let todoInput //miejsce, gdzie użytkownik wpisuje treść zadania
let errorInfo //info obraku zadań / konieczność wpisania treści
let addBtn //przycisk ADD - dodaje nowe elementy do listy
let ulList // lista zadań, tagi Ul

const main = () => {
    prepareDOMEvents()
    prepareDOMElements()
}

const prepareDOMElements = () => {
  todoInput= document.querySelector('.todo-input')
  errorInfo= document.querySelector('.error-info')
  addBtn= document.querySelector('.btn-add')
  ulList= document.querySelector('.todolist ul')
}

const prepareDOMEvents = () => {
  
}

document.addEventListener('DOMContentLoaded', main)