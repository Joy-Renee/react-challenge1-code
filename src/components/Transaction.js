import React, {useState} from "react";

function Addtransaction() {
    const [formTransact, addTransact] = useState({
        search: "",
        date: "",
        description: "",
        category: "",
        amount: ""
    })

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formTransact);
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
        <div>
            <form onSubmit={handleSubmit}>
                <h1>The Royal Bank of Flatiron</h1>
                <input 
                type="text"
                id="search"
                value={formTransact.search}
                placeholder="Search your Recent Transaction"
                onChange={handleChange}
                />

                <input 
                type="date"
                id="date"
                value={formTransact.date}
                placeholder=""
                onChange={handleChange}
                /> 

                <input 
                type="text"
                id="description"
                value={formTransact.description}
                placeholder="description"
                onChange={handleChange}
                />

                <input 
                type="text"
                id="category"
                value={formTransact.category}
                placeholder="category"
                onChange={handleChange}
                />

                <input 
                type="number"
                id="amount"
                value={formTransact.amount}
                placeholder="Amount"
                onChange={handleChange}
                />

               <div>
               <input 
                type="submit" 
                id="submit"
                value="Add Transaction" 
                
                />
               </div>
            </form>
        </div>
    )
    
}


export default Addtransaction

