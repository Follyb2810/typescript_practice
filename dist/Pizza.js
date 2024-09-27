"use strict";
/*
npm init -y
npm install typescript --save-dev
npx tsc --init
npx tsc
"scripts": {
    "build": "tsc"
}
    npm run build
    npx tsc --watch
    "scripts": {
    "build": "tsc",
    "watch": "tsc --watch"
    npx tsc --watch
    npm install ts-node --save-dev
    npx ts-node src/index.ts
    "scripts": {
    "start": "ts-node src/index.ts"
    npm start
}
}

 */
let ages = [1, 2, 3, 4];
let nextPizzaId = 1;
const menu = [
    {
        id: nextPizzaId++, name: "margherita", price: 7
    },
    {
        id: nextPizzaId++, name: "peperono", price: 71
    },
    {
        id: nextPizzaId++, name: "hawalian", price: 17
    },
    {
        id: nextPizzaId++, name: "vegies", price: 6
    },
];
let CashInRegister = 100;
const OrderQueue = [];
let NextOrderId = 1;
function AddnewPizza(pizza) {
    // let nextPizz:IMenu ={id:nextPizzaId++,name:pizza.name,price:pizza.price} 
    // let addPizza =menu.push(nextPizz) 
    //?
    let addPizzas = Object.assign({ id: nextPizzaId++ }, pizza);
    menu.push(addPizzas);
    console.log(addPizzas);
    return addPizzas;
    //? 
    // pizza.id = nextPizzaId++
    // let addPizza =menu.push(pizza)  
    // console.log(addPizza)  
}
function PlaceOrder(pizzaName) {
    let selectedPizza = menu.find(pizza => pizza.name == pizzaName);
    if (!selectedPizza) {
        console.log(`${pizzaName} does not exist`);
        //    alert(`${pizzaName} does not exist`)
        return;
    }
    CashInRegister += selectedPizza.price;
    console.log(CashInRegister);
    const newOrder = { pizza: selectedPizza, status: 'ordered', id: NextOrderId++ };
    OrderQueue.push(newOrder);
    return newOrder;
}
function CompleteOrder(ordeId) {
    const order = OrderQueue.find(pizza => pizza.id === ordeId);
    console.log(order, 'order');
    if (!order) {
        console.log(`${ordeId} id is invalid`);
        // alert(`${ordeId} id is invalid`)
        return;
    }
    let updateOrder = order.status = 'completed';
    console.log(updateOrder);
    return order;
}
function GetPizzaDetails(identifier) {
    let PizzaDeal = menu.find(pizza => {
        if (typeof identifier === 'string') {
            return pizza.name.toLocaleLowerCase() === identifier.toLocaleLowerCase();
        }
        else if (typeof identifier === 'number') {
            return pizza.id === identifier || pizza.price === identifier;
        }
        else {
            console.log(`Invalid identifier type NUMBER or string`);
            throw new TypeError('parameter must be string or number');
            return false;
        }
    });
    console.log(PizzaDeal);
    return PizzaDeal;
}
AddnewPizza({ name: "chicken beeacon", price: 23 });
AddnewPizza({ name: "bbq chicken", price: 2 });
AddnewPizza({ name: "spicy sauasage", price: 10 });
AddnewPizza({ name: "spicy sauasage", price: 320 });
AddnewPizza({ name: "spicy sauasage", price: 200 });
AddnewPizza({ name: "spicy sauasage", price: 80 });
PlaceOrder('bbq chicken');
PlaceOrder('bbq chicken');
PlaceOrder('spicy sauasage');
CompleteOrder(1);
console.log(menu);
console.log(CashInRegister, 'cash ');
console.log(OrderQueue, 'order ');
GetPizzaDetails(1);
