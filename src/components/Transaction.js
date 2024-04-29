import React, {useState} from "react";
import Formstable from "./Formstable";


function Transaction({formList , transactions ,setTransactions}) {
    const [formTransact, addTransact] = useState({
        date: "",
        description: "",
        category: "",
        amount: ""
    })

    
    
     

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formTransact);
        const newTransaction = {
            date: formTransact.date,
            description: formTransact.description,
            category: formTransact.category,
            amount: formTransact.amount
        };
    

    setTransactions([...transactions,newTransaction])
//  addTransact([...formList, newTransaction]);
   
    addTransact({
        date: "",
        description: "",
        category: "",
        amount: ""
    });

    }

    function handleChanges(event) {
           addTransact(
            {
                ...formTransact,
                [event.target.id] : event.target.value
            }
           )
        }

    // function handleChange(event) {
    //     const key = event.target.id
    //     console.log(key)
    //      addTransact({
    //         ...formTransact, 
    //      [key]: event.target.value
    //     })
    // }

    function handleChange(event) {
        const value = event.target.value.toLowerCase();
        // console.log(value);
        const filtered = formList.filter((transaction) =>{
            return transaction.description.toLowerCase().includes(value)
        });
        // console.log(filtered);
   setTransactions(filtered)
    }

    // console.log(formTransact);
    // console.log(addTransact);

    return(
        <div id="div">
                <h1 id="header">The Royal Bank of Flatiron</h1>
             <div id="search">
                    <input 
                    type="text"
                    id="search"
                    className=""
                    // value={formTransact.search}
                    placeholder="Search your Recent Transaction"
                    onChange={handleChange}
                    />
                </div>
            <form onSubmit={handleSubmit} id="submited">
            
               

                <br></br>
                
                <div>
                    <input 
                    type="date"
                    id="date"
                    className="added"
                    value={formTransact.date}
                    placeholder=""
                    onChange={handleChanges}
                    required
                    /> 

                    <input 
                    type="text"
                    id="description"
                    className="added"
                    value={formTransact.description}
                    placeholder="description"
                    onChange={handleChanges}
                    required
                    />

                    <input 
                    type="text"
                    id="category"
                    className="added"
                    value={formTransact.category}
                    placeholder="category"
                    onChange={handleChanges}
                    required
                    />

                    <input 
                    type="number"
                    id="amount"
                    className="added"
                    value={formTransact.amount}
                    placeholder="Amount"
                    onChange={handleChanges}
                    required
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

        {/* <tbody> */}
            {/* <tr>
                <td>2019-07-01</td>
                <td>Chippole</td>
                <td>food</td>
                <td>1000</td>

            </tr>

            <tr>
                <td>2019-07-02</td>
                <td>Sunglasses</td>
                <td>fashion</td>
                <td>2000</td>
            </tr>

            <tr>
                <td>2020-01-08</td>
                <td>Books</td>
                <td>novels</td>
                <td>3500</td> 
            </tr> */}

        {/* </tbody> */}

    <tbody>
      <Formstable  formList = {transactions}/>
    </tbody> 
    
        </table>
        </div>
        </div>
    )


    
}


export default Transaction

