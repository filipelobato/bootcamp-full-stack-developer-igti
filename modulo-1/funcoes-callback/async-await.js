function fetchPromise() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => console.log(json[1].name));
  }
  
  async function fetchAsyncAwait() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await res.json();
    console.log(json[2].name);
  }
  
  fetchPromise();
  fetchAsyncAwait();
  