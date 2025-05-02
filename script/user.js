function fetchusers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //json = javascript object notation
      console.log(data);

      return data;
    });
}
