const Menu =[
{
    name:"margherita",price:7
},
{
    name:"peperono",price:71
},
{
    name:"hawalian",price:17
},
{
    name:"vegies",price:6
},
]
let cashInRegister = 100;
const orderQueue=[];
let nextOrderId=0;

function addnewPizza(pizza){
    let addPizza =Menu.push(pizza)  
    console.log(addPizza)  
  return addPizza
  
}

function placeOrder(pizzaName){
  let selectedPizza =Menu.find(pizza => pizza.name == pizzaName) ;
  cashInRegister += selectedPizza.price;
  console.log(cashInRegister)
  const newOrder = {pizza:selectedPizza,status:'ordered',id:nextOrderId++}
  orderQueue.push(newOrder);
  return newOrder 
}

function completeOrder(ordeId){
    const order = orderQueue.find(pizza =>pizza.id === ordeId)
    console.log(order,'order')
    let updateOrder = order.status ='completed';
    console.log(updateOrder)
    return order;
}

addnewPizza({name:"chicken beeacon",cost:23})
addnewPizza({name:"bbq chicken",cost:2})
addnewPizza({name:"spicy sauasage",cost:20})
placeOrder('bbq chicken')
completeOrder(1)
console.log(Menu)
console.log(cashInRegister,'cash ')
console.log(orderQueue,'order ')