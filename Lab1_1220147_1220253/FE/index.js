function fetchEmployees() {
  fetch('http://localhost:3000/api/v1/employee')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.getElementById('dataTable')
      tableBody.innerHTML = ''
      const list = data.data
      list.forEach(item => {
        const row = document.createElement('tr')
        const idCell = document.createElement('td')
        idCell.textContent = item.id
        row.appendChild(idCell)

        const nameCell = document.createElement('td')
        nameCell.textContent = item.name
        row.appendChild(nameCell)

        const deleteCell = document.createElement('td')
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteButton.setAttribute('onclick','deleteButton(event)')
        deleteCell.appendChild(deleteButton);

        row.appendChild(deleteCell)

        tableBody.appendChild(row)
      })
    })
    .catch(error => console.error(error))
}

// TODO
const SubmitButton = (e)=>{
  e.preventDefault();
  console.log('submit button clicked');
  const nameElement = document.getElementById('name');
  const idElement = document.getElementById('id');
  if(!nameElement.value || !idElement.value){
    alert('Please enter both name and id');
    return;
  }
  createEmployee(nameElement, idElement);
  nameElement.value = '';
  idElement.value = '';
}

// TODO
const deleteButton = (e)=>{
  try{
    const idElement = e.target.parentNode.parentNode.firstChild;
    deleteEmployee(idElement);
  }
  catch(error){
    console.error(error);
  }
}

// TODO
function createEmployee (nameElement, idElement){
  const name = nameElement.value;
  const id = idElement.value;
  fetch('http://localhost:3000/api/v1/employee',{
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: name, id: id}) 
    }
  )
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }})
    .then(()=>fetchEmployees()).catch(error => console.error(error))

}

// TODO
function deleteEmployee (idElement){
  const id = idElement.textContent; 
  fetch(`http://localhost:3000/api/v1/employee/${id}`,{
    method: 'DELETE'
  })
    .then(()=>fetchEmployees()).catch(error => console.error(error))
}

fetchEmployees()
