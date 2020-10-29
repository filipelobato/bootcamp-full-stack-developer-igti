var inputName = null;

const globalNames = ['Um', 'Dois', 'Três', 'Quatro'];
const form = document.querySelector('form');
var isEditing = false;
var currentIndex = null;

const start = () => {
  inputName = document.querySelector('#nome');
  render();

  activateInput();

  inputName.addEventListener('blur', (e) => {
    e.target.value = handleStringWithWhiteSpace(e.target.value);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    //     handleStringWithWhiteSpace(inputName.value);
  });
};

function activateInput() {
  function insertName(newName) {
    globalNames.push(newName);
    render();
  }

  function updateName(newName) {
    globalNames[currentIndex] = newName;
    render();
  }

  function handleTyping(event) {
    var value = handleStringWithWhiteSpace(event.target.value);

    if (event.key === 'Enter') {
      if (!value) {
        alert('Nenhum valor digitado');
        return;
      }

      if (isEditing) {
        updateName(value);
      } else {
        insertName(value);
      }
      isEditing = false;
    }
  }

  inputName.addEventListener('keyup', handleTyping);
  inputName.focus();
}

function render() {
  function createDeleteButton(index) {
    function deleteName() {
      //globalNames = globalNames.filter((_, i) => i !== index);
      globalNames.splice(index, 1);
      render();
    }

    var button = document.createElement('button');
    button.classList.add('delete-button');
    button.textContent = 'x';
    button.addEventListener('click', deleteName);
    return button;
  }

  function createSpan(name, index) {
    function editItem() {
      inputName.value = name;
      inputName.focus();
      isEditing = true;
      currentIndex = index;
    }

    var span = document.createElement('span');
    span.classList.add('clickable');
    span.textContent = name;

    span.addEventListener('click', editItem);
    return span;
  }

  var divNames = document.querySelector('#pessoas');
  divNames.innerHTML = '';

  var ul = document.createElement('ul');

  for (let i = 0; i < globalNames.length; i++) {
    var currentName = globalNames[i];

    var li = document.createElement('li');
    var button = createDeleteButton(i);
    var span = createSpan(currentName, i);

    li.appendChild(button);
    li.appendChild(span);

    ul.appendChild(li);
  }

  divNames.appendChild(ul);
  clearInput();
}

function clearInput() {
  form.reset();
  inputName.focus();
}

const handleStringWithWhiteSpace = (str) => {
  return str
    ? str
        .split(' ')
        .filter((str) => str !== '')
        .join(' ')
    : null;
};

window.addEventListener('load', start);
