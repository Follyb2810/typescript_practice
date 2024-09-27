var menu = [
    {
        name: "margherita", price: 7
    },
    {
        name: "peperono", price: 71
    },
    {
        name: "hawalian", price: 17
    },
    {
        name: "vegies", price: 6
    },
];
var CashInRegister = 100;
var OrderQueue = [];
var NextOrderId = 0;
function AddnewPizza(pizza) {
    var addPizza = menu.push(pizza);
    console.log(addPizza);
    return addPizza;
}
function PlaceOrder(pizzaName) {
    var selectedPizza = menu.find(function (pizza) { return pizza.name == pizzaName; });
    if (!selectedPizza) {
        console.log("".concat(pizzaName, " does not exist"));
        //    alert(`${pizzaName} does not exist`)
        return;
    }
    CashInRegister += selectedPizza.price;
    console.log(CashInRegister);
    var newOrder = { pizza: selectedPizza, status: 'ordered', id: NextOrderId++ };
    OrderQueue.push(newOrder);
    return newOrder;
}
function CompleteOrder(ordeId) {
    var order = OrderQueue.find(function (pizza) { return pizza.id === ordeId; });
    console.log(order, 'order');
    if (!order) {
        console.log("".concat(ordeId, " id is invalid"));
        // alert(`${ordeId} id is invalid`)
        return;
    }
    var updateOrder = order.status = 'completed';
    console.log(updateOrder);
    return order;
}
AddnewPizza({ name: "chicken beeacon", price: 23 });
AddnewPizza({ name: "bbq chicken", price: 2 });
AddnewPizza({ name: "spicy sauasage", price: 20 });
PlaceOrder('bbq chicken');
CompleteOrder(1);
console.log(menu);
console.log(CashInRegister, 'cash ');
console.log(OrderQueue, 'order ');
