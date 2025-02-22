const task3Element = document.getElementById('task-3');

function showAlert(){
    alert(' Chanchan!!')
}


function nameTheAlert(name){
    alert(`${name}`)
}

function threeAlert(name1, name2, name3){
    alert(`${name1}, ${name2}, ${name3}`)
}

showAlert()
threeAlert('Pepe', 'pepito', 'pepón')
task3Element.addEventListener('click', showAlert)