var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'Fazer cafe',
    'Estudar',
    'Almoçar'
];

function renderTodos() {
    listElement.innerHTML = '';
    for (todo of todos) {
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);

        var linkElement = document.createElement('a')
        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')')

        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);
        todoElement.appendChild(linkElement)
    }
}

renderTodos();

function addTodos() {
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
};

buttonElement.onclick = addTodos;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
}