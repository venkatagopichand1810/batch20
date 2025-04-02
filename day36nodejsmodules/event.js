const EventEmitter = require("events");

const orderEmitter = new EventEmitter();

// register the event listeners for different stages

orderEmitter.on("orderRecived", (orderId) => {
    console.log(`order ${orderId} received: procssing the order`)
})



//simulate the process
orderEmitter.emit("orderReceived", "12345")