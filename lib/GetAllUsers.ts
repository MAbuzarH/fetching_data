

async function  GetAllUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  if(!res.ok)throw new Error("failed to fetch");
  return res.json();
}


export default GetAllUsers
