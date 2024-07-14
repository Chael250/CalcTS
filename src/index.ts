console.log("Starting...")

const input = document.querySelector<HTMLInputElement>(".calculator-input")
const column = document.querySelectorAll<HTMLDivElement>(".column")
let arrayValue:string[] = loadData()
const add = document.getElementById("add") as HTMLDivElement | null
const subtract = document.getElementById("subtract") as HTMLDivElement | null
const divide = document.getElementById("divide") as HTMLDivElement | null
const multiply = document.getElementById("multiply") as HTMLDivElement | null
const equal = document.getElementById("equal") as HTMLDivElement | null
const clear = document.querySelector<HTMLDivElement>(".column1")
const deleteBtn = document.getElementById("delete") as HTMLDivElement | null
const squareRoot = document.getElementById("square-root") as HTMLDivElement | null
const pi = document.getElementById("pi") as HTMLDivElement | null
const power = document.getElementById("power") as HTMLDivElement | null
const not = document.getElementById("not") as HTMLDivElement | null
const modulus = document.getElementById("modulus") as HTMLDivElement | null

function loadData():string[]{
  const taskJSON = localStorage.getItem("TASKS")
  if(taskJSON ==  null) return []
  return JSON.parse(taskJSON)
}

if(column){
  column.forEach(content => {
    if(input !== null){
      content.addEventListener("click",() => {
        arrayValue = []
        const element = content.textContent
        if(element !==null){
          arrayValue.push(element)
          localStorage.setItem("ELEEH",JSON.stringify(arrayValue))
          }
          arrayValue.forEach(element => {
            input.value += element
          })
        })
      }
    })
  }

  let first_number:number | null = null
  let second_number:number | null = null
  let operator:string | null = null

function handleOperation(op:string){
  console.log("handler called")
  if(input !== null){
    first_number = parseFloat(input.value)
    console.log(first_number)
    if(!isNaN(first_number)){
      operator = op
      input.value = ""
    }
  }
}

add?.addEventListener("click",() => handleOperation("+"))
subtract?.addEventListener("click",() => {
  handleOperation("-")
})
multiply?.addEventListener("click",() => {
  handleOperation("*")
})
divide?.addEventListener("click",() => {
  handleOperation("/")
})
power?.addEventListener("click", () => {
  handleOperation("power")
})
not?.addEventListener("click",() => {
  handleOperation("not")
})
modulus?.addEventListener("click", () => {
  handleOperation("%")
})

equal?.addEventListener("click", () => {
  console.log("Equal called");
  
  if(input !== null && first_number !== null && operator !== null){
    second_number = parseFloat(input.value)
    console.log(second_number)
  
  let result:number | null | boolean= null
  
  if(!isNaN(second_number)){

    switch(operator){
      case "+":
        result = first_number + second_number
        break;
      case "-":
        result = first_number - second_number
        break;
      case "*":
        result = first_number * second_number
        break;
      case "/":
        result = first_number / second_number
        break;
      case "power":
        result = first_number ** second_number
        break;
      case "not":
        result = first_number == second_number
        break;
      case "%":
        result = first_number % second_number
        break;
      default:
        result = null
    }
    console.log(result)
   
  } 
  if(result !== null){
    input.value = result.toString()
    return
  } else {
    input.value = "Error"
  }
  first_number = null
  operator = null
}
})

clear?.addEventListener("click",() => {
  if(input !== null){
    input.value = ""
  }
})

deleteBtn?.addEventListener("click",() => {
  if(input !== null){
    const content = input.value
    let content_array = content.split("")
    console.log(content_array)
    content_array.splice(content_array.length - 4,4)
    const new_content = content_array.join("")
    input.value = new_content
  }
})

squareRoot?.addEventListener("click",() => {
  console.log("square root called")
  if(input !== null){
    const value = parseInt(input.value)
    const result = Math.sqrt(value)
    input.value = result.toString()
  }
})

function roundToDecimalPlaces(num:number, decimalPlaces:number):number {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(num * factor) / factor;
}

pi?.addEventListener("click",() => {
  if(input !== null && input.value == ""){
    input.value = Math.PI.toString()
  }
})
