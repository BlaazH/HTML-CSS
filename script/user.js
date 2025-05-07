function handleResponse(response) {
  return response.json();
}

const handleData = (data) => {
  console.log(data);
  let tableLines = "";
  for (let index = 0; index < data.length; index++) {
    const users = data[index];

    const tableLine = `
    <tr>
    <td>${users.name}</td>
        <td>${users.phone}</td>
        <td>${users.email}</td>
    
    </tr>
    `;
    tableLines = tableLines + tableLine;
  }
  document.getElementById("users-tbody").innerHTML = tableLines;
};

function fetchusers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => handleResponse(response))
    .then((data) => handleData(data));
}
