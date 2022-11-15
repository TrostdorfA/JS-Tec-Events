const buttonCounter = document.getElementById("button-counter")
const counterView = document.getElementById("counter-view")

console.log(buttonCounter)

let counter = 0

buttonCounter.addEventListener("click", (event) => {
  console.log("event", event)
  console.log("click")
  counter++
  console.log(counter)
  counterView.textContent = counter
})

const inputName = document.getElementById("input-name")
const inputContent = document.getElementById("input-content")

inputName.addEventListener("change", (event) => {
  console.log("event", event.target.value)
  console.log(inputName.value)
  inputContent.textContent = event.target.value.toLowerCase()
})

const div = document.getElementById("inside-mouse")

div.addEventListener("mouseenter", () => {
  div.style.backgroundColor = "blue"
})

div.addEventListener("mouseleave", () => {
  div.style.backgroundColor = "red"
})

// A partir del Click Tracker, generar un contador

// El contador debe iniciar en 0.
// Debe tener un botón para agregar una unidad (+) y quitar una unidad (-).
// No debe permitir número negativos. Se puede utilizar la property "Disabled"
// Debe tener un límite de 50. Se puede utilizar la property "Disabled"
// Al alcanzar cualquiera de los límites debe generar una interacción con el user. (Mensaje en pantalla que arranque en display:none y cambie de display, pueden utilizar un alert, etc)

// clickCounter = 0

// const buttonAdd = document.getElementById("button-add")
// const buttonSubstract = document.getElementById("button-substract")
// const counterViews = document.getElementById("counter-views")

// buttonAdd.addEventListener("click", () => {
//   if (clickCounter < 50) {
//     clickCounter++
//     counterViews.textContent = clickCounter
//   } else {
//     alert("No se puede agregar más de 50")
//   }
// })

// buttonSubstract.addEventListener("click", () => {
//   if (clickCounter > 0) {
//     clickCounter--
//     counterViews.textContent = clickCounter
//   } else {
//     alert("No se puede restar menos de 0")
//   }
// })

// Insertar lo anterior dentro de una funcion que se ejecute al cargar la página

window.onload = () => {
  clickCounter = 0

  const buttonAdd = document.getElementById("button-add")
  const buttonSubstract = document.getElementById("button-substract")
  const counterViews = document.getElementById("counter-views")

  buttonAdd.addEventListener("click", () => {
    if (clickCounter < 50) {
      clickCounter++
      counterViews.textContent = clickCounter
      buttonSubstract.removeAttribute("disabled")
    } else {
      buttonAdd.setAttribute("disabled", true)
      alert("No se puede agregar más de 50")
    }
  })

  buttonSubstract.addEventListener("click", () => {
    if (clickCounter > 0) {
      clickCounter--
      counterViews.textContent = clickCounter
      buttonAdd.removeAttribute("disabled")
    } else {
      buttonSubstract.setAttribute("disabled", true)
      alert("No se puede restar menos de 0")
    }
  })
}

// Practice for checkbox

const listItems = document.getElementById("list-items")
const buttonForm = document.getElementById("button-form")
const inputsCheckbox = document.querySelectorAll(".inputs-checkbox")

buttonForm.addEventListener("click", (event) => {
  console.log("event", event)
  listItems.innerHTML = ""
  inputsCheckbox.forEach((inputCheckbox) => {
    if (inputCheckbox.checked) {
      console.log("A ver que onda los inputs")
      console.log(inputCheckbox)
      const li = document.createElement("li")
      li.textContent = inputCheckbox.value
      listItems.appendChild(li)
    }
  })
})
