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

const API_URL_EVENTS = "https://amazing-events-api.herokuapp.com/api/events"

const getEvents = async () => {
  const response = await fetch(API_URL_EVENTS)
  const dataEvents = await response.json()
  console.log("Events", dataEvents)
  console.log("Array de eventos", dataEvents.events)

  // Utilizamos spread operator para agregarle una nueva key a la respuesta de la api
  const newData = {
    ...dataEvents,
    havePerrito: false,
  }

  eventsInDom(dataEvents)
}
getEvents()

const eventsInDom = (dataEvents) => {
  // Working with destructuring

  // Esto seria con la forma clasica de asignar una variable para cada key que obetenemos de nuestro objeto
  // const events = dataEvents.events
  // const currentDate = dataEvents.currentDate

  // const { events } = dataEvents // Output: Array de eventos
  // const { currentDate } = dataEvents // Output: 2021-05-25T20:00:00.000Z
  // const { tuki } = dataEvents // Output: undefined

  // Destructuring - Option #1
  // const { events, currentDate, havePerrito } = dataEvents
  console.log("Informacion para pintar en el DOM", dataEvents)
  // console.log("Events with destructuring", events)
  // console.log("CurrentDate with destructuring", currentDate)
  // console.log("Tuki with destructuring", tuki)
  console.log("Tiene perrito", havePerrito)
}

// Destructuring - Option #2
// const eventsInDOM = ({ events, currentDate, havePerrito }) => {
//   // Esto se puede reemplazar por poner el nombre de las keys dentro del parametro de la funcion
//   const { events, currentDate, havePerrito } = dataEvents

//   console.log("Events with destructuring", events)
//   console.log("CurrentDate with destructuring", currentDate)
//   console.log("Tiene perrito", havePerrito)
// }

// Axios - Promise based HTTP client for the browser and node.js

const getUsersWithAxios = async () => {
  const getDataAxios = await axios.get(API_URL)
  const { data } = getDataAxios
  console.log("dataUsers", data)
  console.log("getDataAxios", getDataAxios)
}
getUsersWithAxios()

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

const API_URL_PRODUCTS = "https://fakestoreapi.com/products"

const getProducts = async () => {
  try {
    const response = await axios.get(API_URL_PRODUCTS)
    const { data } = response
    console.log("dataProducts", data)
  } catch (error) {
    console.log(error)
  }
}
getProducts()

const toStringity = {
  name: "Tuki",
  age: 2,
  color: "black",
  favouriteFood: "chicken",
  isCute: true,
}

const stringified = JSON.stringify(toStringity)
console.log("stringified", stringified)

const parsed = JSON.parse(stringified)
console.log("parsed", parsed)

const productToPost = {
  title: "My new product",
  price: 12.99,
  description: "This is a new product",
  category: "electronics",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
}

const postRequestToFakeStoreApi = async () => {
  // En una request de tipo POST utilizando Fetch, el primer parametro es la URL a la que queremos hacer la peticion y el segundo parametro es un objeto con la configuracion de la peticion
  fetch(API_URL_PRODUCTS, {
    // El verbo HTTP que queremos utilizar a traves de la key "method"
    // El content-type de la peticion a traves de la key "headers"
    // El body de la peticion a traves de la key "body"
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(productToPost),
  })
    .then((response) => response.json())
    .then((data) => console.log("data", data))
}
postRequestToFakeStoreApi()

const usersToPost = {
  name: "Tuki",
  job: "Developer",
}

const UTL_REQRES_POST = "https://reqres.in/api/users"
const postRequestToRegresApi = async () => {
  const response = await fetch(UTL_REQRES_POST, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(usersToPost),
  })
  const data = await response.json()
  console.log("Post a ReqRes", data)
}
postRequestToRegresApi()

const getUsersJsonServer = async () => {
  const response = await fetch("http://localhost:3000/users")
  const data = await response.json()
  console.log("data", data)
}

getUsersJsonServer()

// const URL_TO_REPLACE =
//   "https://www.lanacion.com.ar/resizer/{{param}}/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/UMAYEMJ42FETTEDET6JQPJSKNM.png"

// console.log("URL_TO_REPLACE", URL_TO_REPLACE)

// const parameters = [
//   {
//     media: 1024,
//     ancho: 360,
//     alto: 240,
//     firma: "kAMZ8AkR_9MQGz5ZQ4Z7ZQ",
//   },
//   {
//     media: 768,
//     ancho: 768,
//     alto: 512,
//     firma: "c2Z8AkR_9MQGz5ZQ4Z7ZQ",
//   },
//   {
//     media: 351,
//     ancho: 351,
//     alto: 234,
//     firma: "s9pUIvK_9MQGz5ZQ4Z7ZQ",
//   },
//   {
//     media: 360,
//     ancho: 360,
//     alto: 240,
//     firma: "kAMZ8AkR_9MQGz5ZQ4Z7ZQ",
//   },
// ]

// const replaceUrl = (url, parameters) => {
//   return parameters.map((parameter) => {
//     const newURL = url.replace("{{param}}", parameter.firma)
//     return {
//       url: newURL,
//       media: parameter.media,
//       width: parameter.ancho,
//       height: parameter.alto,
//     }
//   })
// }

// replaceUrl(URL_TO_REPLACE, parameters)

// Comenzando con Persistencia de datos - LocalStorage

// Obtener el valor de una key
const usernameInLocalStorage = localStorage.getItem("username")
console.log("usernameInLocalStorage", usernameInLocalStorage)

const tokenInLocalStorage = localStorage.getItem("token")
console.log("tokenInLocalStorage", tokenInLocalStorage)

// Para borrar un valor del local storage utilizamos la funcion removeItem
localStorage.removeItem("password")

// Para borrar todos los valores del local storage utilizamos la funcion clear
localStorage.clear()

const setUserInLocalStorage = () => {
  // Aca iria la logica asociada a esta funcion que ademas guardaria en el local storage
  const username = "Andy"
  const password = "123456"

  // Guardar un valor en el local storage
  localStorage.setItem("username", username)
  localStorage.setItem("password", password)

  const user = {
    username,
    password,
  }
  console.log("user", user)
  localStorage.setItem("user", JSON.stringify(user))
}

setUserInLocalStorage()

const getUserFromLocalStorage = () => {
  const username = localStorage.getItem("username")
  const password = localStorage.getItem("password")
  const user = JSON.parse(localStorage.getItem("user"))

  console.log("username", username)
  console.log("password", password)
  console.log("user", user)
}

getUserFromLocalStorage()
