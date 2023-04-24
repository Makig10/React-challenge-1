
import React from "react";
import transactions from "./db.json"

function Table(transactions) {

    
    return(
        transactions.map(()=>{
            return(
             <div>
               <table>
                <tr>
                    <th>{transactions.date}</th>
                    <th>{transactions.description}</th>
                    <th>{transactions.category}</th>
                    <th>{transactions.ammount}</th>
                </tr>
                </table>
             </div>   
            )
        })
    )

}
export default Table;