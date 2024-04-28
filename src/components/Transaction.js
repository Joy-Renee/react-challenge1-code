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
    

    // Add the new transaction to the list of transactions
    setTransactions([...transactions, newTransaction]);
    // Clear the form after submission
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

        <table>
            <div>
               
                    {transactions.map((transaction, index) => (
                        <div key={index}>
                            <div>Date: {transaction.date}</div>
                            <div>Description: {transaction.description}</div>
                            <div>Category: {transaction.category}</div>
                            <div>Amount: {transaction.amount}</div>
                        </div>
                    ))}
                
            </div>
        </table>
        </div>
    )


    
}


export default Addtransaction

