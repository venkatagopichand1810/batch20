// reduce method in javascript used to tranform an array into a single value(sum of the number)


// function App() {

//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   const total = numbers.reduce((acc, curr) => acc + curr, 0);

//   return (
//     <div>
//       <h2>Total sum: {total}</h2>
//     </div>
//   )

// }

// export default App





function App() {

    const items = [
      {product: "Laptop", price: 1000},
      {product: "phone", price: 5000},
      {product: "tablet", price: 10000},
      {product: "AC", price: 25000},
    ]
  
    const totalPrice = items.reduce((acc, curr) => acc+ curr.price, 0)
  
  
    return (
      <div>
        <h2>Total price of the product: {totalPrice}</h2>
      </div>
    )
  
  }
  
  export default App
  
  
  function App(){
  
    const expenses = [
      {type: "FOOD", amount: 500},
      {type: "Transport", amount: 1000},
      {type: "Entertainment", amount: 900},
      {type: "FOOD", amount: 5000},
  
    ]
  
    const totalFoodExpenses = expenses
    .filter(expense => expense.type === "FOOD")
    .reduce((acc, curr) => acc + curr.amount, 0)
  
  
    return (
      <div>
        <h1>Total food expense is Rs{totalFoodExpenses}</h1>
      </div>
    )
  }
  
  export default App