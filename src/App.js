
import './App.css';
import Transaction from './components/Transaction';
import { useState } from 'react';


function App({formDefault}) {
  let formList = [
    {
        date: "2019-07-01",
        description: "Chippotle",
        category: "food",
        amount: "1000"
    },
    {
        date: "2019-07-01",
        description: "Sunglasses",
        category: "fashion",
        amount: "3000"
    },
    {
        date: "2019-07-01",
        description: "Income",
        category: "Salary",
        amount: "200000"
    },
]
const [transactions, setTransactions] = useState(formList);

  return (
    <div >
      <Transaction
      transactions ={transactions}
      setTransactions = {setTransactions}
      formList = {formList}
      search = {"search"}
      date = {"date"}
      description = {"description"}
      category = {"category"}
      amount = {"amount"}
      />
     
    </div>
    
  )
}


export default App;
