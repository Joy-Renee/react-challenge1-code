import React from "react";


function Formstable({formList}) {
    const row =  formList.map((transaction, index) => { 
    return(
     
            <tr key={index}>
                
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.category}</td>
                <td>{transaction.amount}</td>
            </tr>
    )}
)
return(
    <> 
    {row}
    </>
)
}

export default Formstable