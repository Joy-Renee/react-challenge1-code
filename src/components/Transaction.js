import React, {useState} from "react";


function Addtransaction() {
    const [formTransact, addTransact] = useState({
        search: "",
        date: "",
        description: "",
        category: "",
        amount: ""
    })

    const [transactions, setTransactions] = useState([]);

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formTransact);
        const newTransaction = {
            date: formTransact.date,
            description: formTransact.description,
            category: formTransact.category,
            amount: formTransact.amount
        };
    

    
    setTransactions([...transactions, newTransaction]);
   
    addTransact({
        ...formTransact,
        date: "",
        description: "",
        category: "",
        amount: ""
    });

    }

    function handleChange(event) {
        const key = event.target.id
        console.log(key)
         addTransact({
            ...formTransact, 
         [key]: event.target.value
        })
    }

    console.log(formTransact);
    console.log(addTransact);

    return(
        <div id="div">
            <form onSubmit={handleSubmit} id="submited">
                <h1 id="header">The Royal Bank of Flatiron</h1>
                <div id="search">
                    <input 
                    type="text"
                    id="search"
                    className=""
                    value={formTransact.search}
                    placeholder="Search your Recent Transaction"
                    onChange={handleChange}
                    />
                </div>

                <br></br>
                
                <div>
                    <input 
                    type="date"
                    id="date"
                    className="added"
                    value={formTransact.date}
                    placeholder=""
                    onChange={handleChange}
                    /> 

                    <input 
                    type="text"
                    id="description"
                    className="added"
                    value={formTransact.description}
                    placeholder="description"
                    onChange={handleChange}
                    />

                    <input 
                    type="text"
                    id="category"
                    className="added"
                    value={formTransact.category}
                    placeholder="category"
                    onChange={handleChange}
                    />

                    <input 
                    type="number"
                    id="amount"
                    className="added"
                    value={formTransact.amount}
                    placeholder="Amount"
                    onChange={handleChange}
                    />
                    <br></br>
                    <br></br>
                    <div>
                        <input 
                            type="submit" 
                            id="submitt"
                            className="submitt"
                            value="Add Transaction" 
                            
                            />
                    </div>
                </div>

            </form>
        <div>
        <table>
        <thead>
        <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
        </tr>
    </thead>
    <tbody>
        {transactions.map((transaction, index) => (
            <tr key={index}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.category}</td>
                <td>{transaction.amount}</td>
            </tr>
        ))}
    </tbody> 
        </table>
        </div>
        </div>
    )


    
}


export default Addtransaction

