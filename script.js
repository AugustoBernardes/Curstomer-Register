let inputName = document.getElementById("input-name")

let inputOption = document.getElementById("select-box")

let inputDuration = document.getElementById("input-duration")

let inputPrice = document.getElementById("input-price")

let html = document.getElementById("cardCustoner")



console.log(html)

function addCustomer(){
    let name = inputName.value
    let option = inputOption.value
    let duration = inputDuration.value
    let price = inputPrice.value

    validingInputs(name,option, duration,price)

    // Cleaning the inputs 

    inputName.value = ''
    inputOption.value = 0
    inputDuration.value = ''
    inputPrice.value = ''

}


// Check if we receive the input values

function validingInputs(name ,option,duration,price){
    if (name ==  "" || duration == "" || price == ""){
        alert("Type all the values (Name and Duration)")
        
    }
    else{
        creatingCard(name,option,duration,price)
    }
   
}


// Here we create the card

function creatingCard(name , option , duration, price){


    // Entered time 
    let today = new Date()
    let time = today.getHours() + ":" + today.getMinutes()

    // Departure time

    let departureTime = duration

    // Price 

    let pricePerHour = (parseFloat(price) * duration)

    console.log(pricePerHour)
    

    if (option == 0){
        html.innerHTML += `
        <div class="customer-card">
            <img class="image-card" src="./assets/car.svg">
            <h2 class="name-customer">Name: ${name}</h2>
            <h2 class="name-customer" >Entered time: ${time}</h2>
            <h2 class="name-customer" >Duration: ${departureTime} hours</h2>
            <h2 class="name-customer" >Price: R$ ${pricePerHour.toFixed(2)}</h2>
        </div>
    `
    }
    else{
        html.innerHTML += `
        <div class="customer-card">
            <img class="image-card" src="./assets/moto.svg">
            <h2 class="name-customer">Name: ${name}</h2>
            <h2 class="name-customer" >Entered time: ${time}</h2>
            <h2 class="name-customer" >Duration: ${departureTime} hours</h2>
            <h2 class="name-customer" >Price: R$ ${pricePerHour.toFixed(2)}</h2>
        </div>
    `
    }
}   