let inputToDo = document.querySelector('.input-new-do')
let btnToDo = document.querySelector('.btn-add-to-do')
let todo = document.querySelector('.todo')

inputToDo.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
    if (!inputToDo.value) return
    creatToDo(inputToDo.value)
  }
})
btnToDo.addEventListener('click', function (e) {
  if (!inputToDo.value) return
  creatToDo(inputToDo.value)
})
function creatLi () {
  const li = document.createElement('li')
  return li
}
function limpaInput () {
  inputToDo.value = ''
  inputToDo.focus()
}
function createButtonClear (li) {
  li.innerText += ' '
  const buttonClear = document.createElement('button')
  buttonClear.innerText = 'Clear'
  li.appendChild(buttonClear)
  buttonClear.setAttribute('class', 'apagar')
  
}

function creatToDo (imputToDo) {
  const li = creatLi()
  li.innerHTML = imputToDo
  todo.appendChild(li)
  limpaInput()
  createButtonClear(li)
  saveToDo()
}

document.addEventListener('click', function (e) {
  const el = e.target
  if (el.classList.contains('apagar')) {
    el.parentElement.remove()
    saveToDo()
  }
})
function saveToDo () {
  const liToDo = todo.querySelectorAll('li')
  const listTodoArray = []
  for (const to of liToDo) {
    listTodoArray.push(to.innerText.replace('Clear', '').trim())
  }
  const todoJSON = JSON.stringify(listTodoArray)
  localStorage.setItem('todo', todoJSON)
}

function loadTodo () {
  const tasks = localStorage.getItem('todo')
  const ListTasks = JSON.parse(tasks)
  for (let task of ListTasks) {
    creatToDo(task)
  }
}
loadTodo()