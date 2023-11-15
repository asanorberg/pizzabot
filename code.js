//Declaring variables for menu & price

const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

let orderName;
let orderQty;
let orderTotal;
let cookingMins;

//------------Alert when clicking 'Place Order' button calling the displayPizzaMenu function//
function displayPizzaMenu() {
  alert(
    `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
  );
}

//------------Checking if pizza is on the menu//
function checkOrderName() {
  let orderCorrect = false;

  while (!orderCorrect) {
    orderName = prompt(`Enter the name of the pizza you want to order today`);

    if (
      orderName.toLowerCase() === "hawaiian pizza" ||
      orderName.toLowerCase() === "hawaiian" ||
      orderName.toLowerCase() === "hawaii"
    ) {
      orderName = hawaiian;
      orderCorrect = true;
    } else if (
      orderName.toLowerCase() === "vegetarian pizza" ||
      orderName.toLowerCase() === "vegetarian" ||
      orderName.toLowerCase() === "vego"
    ) {
      orderName = vegetarian;
      orderCorrect = true;
    } else if (
      orderName.toLowerCase() === "pepperoni pizza" ||
      orderName.toLowerCase() === "pepperoni" ||
      orderName.toLowerCase() === "peperoni"
    ) {
      orderName = pepperoni;
      orderCorrect = true;
    } else {
      alert("Please name a pizza from our menu");
    }
  }

  document.getElementById("pizza-name").innerHTML = " " + orderName + "(s)";
}

document
  .getElementById("place-order-btn")
  .addEventListener("click", function () {
    displayPizzaMenu();
    checkOrderName();
    totalCost();
    cookingTime();
    showOrder();
  });

//------------Order quantity//

function totalCost() {
  let qtyCorrect = false;

  while (!qtyCorrect) {
    orderQty = prompt(`How many of ${orderName} do you want?`);
    document.getElementById("pizza-qty").innerHTML = orderQty;

    orderTotal = orderQty * pizzaPrice;

    if (orderQty > 0) {
      qtyCorrect = true;
      alert(
        `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr`
      );
    } else {
      alert("No pizza for you! Please order more than 0.");
    }
  }

  document.getElementById("pizza-price").innerHTML = orderTotal + " kr";
}

//------------Calculating cooking time//

function cookingTime() {
  if (orderQty > 0 && orderQty <= 2) {
    cookingMins = 10;
  }
  if (orderQty >= 3 && orderQty <= 5) {
    cookingMins = 15;
  }
  if (orderQty > 5) {
    cookingMins = 20;
  }
  document.getElementById("pizza-time").innerHTML = cookingMins + " min";
}

//------------Showing the order summary//

function showOrder() {
  const orderSummary = document.getElementById("order-summary-container");
  orderSummary.classList.remove("invisible");
  orderSummary.classList.add("visible");
}
