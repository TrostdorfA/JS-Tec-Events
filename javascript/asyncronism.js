// console.log("1")
// console.log("2")
// console.log("3")
// console.log("user", user) // User nunca fue definido por lo cual es undefined
// console.log("4") // No se ejecuta - Se rompio el hilo de ejecución
// console.log("5") // No se ejecuta - Se rompio el hilo de ejecución

// Entonces, aparece el concepto de asincronismo
// Asincronismo refiere a las operaciones que se ejecutan en segundo plano
// Asincronismo es la capacidad de ejecutar codigo sin bloquear el hilo de ejecución

// setTimeout(function () {
//   console.log("Soy el primer timeout y tambien el primer callback")
// }, 3000) // Por lo tanto el callback se ejecuta en 2 segundos

// setTimeout(() => {
//   console.log("Soy el segundo timeout y tambien el segundo callback")
// }, 2000) // Por lo tanto el callback se ejecuta en 3 segundos

// setTimeout(() => {
//   console.log(1)
//   setTimeout(() => {
//     console.log(2)
//     setTimeout(() => {
//       console.log(3)
//     }, 3000)
//   }, 7000)
// }, 1000)

console.log("1")
setTimeout(function () {
  console.log("2")
}, 5000)
console.log("3")
setTimeout(function () {
  console.log("4")
  setTimeout(() => {
    console.log("5")
  }, 3000)
}, 2000)

const API_URL = "https://jsonplaceholder.typicode.com/users"

const getUsers = (id) => {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => console.log("data", data))
}
getUsers()

// Promises using async await
const getUserAsync = async () => {
  const getFetch = await fetch(API_URL)
  console.log("getFetch", getFetch)
  const getData = await getFetch.json()
  console.log("getData", getData)
}
getUserAsync()

const showDataInDOM = async () => {
  // Escribo lo que quiero renderizar en el DOM
  const getFetch = await fetch(API_URL)
  const getData = await getFetch.json()
  const users = getData
    .map((user) => {
      return `
            <li>
            <h3>${user.name}</h3>
            <p>${user.email}</p>
            </li>
        `
    })
    .join("")
  const newUl = document.createElement("ul")
  newUl.innerHTML = users
  document.body.appendChild(newUl)
}
showDataInDOM()

// Aca va lo de las clases anteriores

const someFunction = () => {
  const greeting = "Hello dev friends"
  // Intentara resolver este fragmento de codigo
  try {
    // Si no hay errores, se ejecuta el codigo
    console.log(greeting)
    // Si hay errores, se ejecuta el catch
  } catch (error) {
    // Si hay errores, se ejecuta el catch
    console.log(error)
  } finally {
    // Siempre se ejecuta
    console.log("I will always run")
  }
}
someFunction()
