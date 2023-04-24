import React, { useState } from "react";
import transactions from "./db.json"

function Form(){
    const[date,setDate]=useState("")
    const[description,setDescription]=useState("")
    const[category,setCategory]=useState("")
    const[amount,setAmount]=useState("")

function handleClick(){
    
    const newTransaction = {
        date: date,
        description: description,
        category: category,
        amount: amount
      };
      setDate("");
      setDescription("");
      setCategory("");
      setAmount("");
    }


    return(
     <div>
        <form>
            <input 
            type="date"
             value={date} 
             onChange={(event)=>setDate(event.target.value)}>
                {transactions.date}
                </input>
            <label>Date</label>
        </form>
        <form>
            <input 
            type="text" 
            value={decription}
            onChange={(event)=>setDescription(event.target.value)}>
                {transactions.description}</input>
            <label>Description</label>
        </form>
        <form>
            <input
             type="text" 
             value={category}
             onChange={(event)=>setCategory(event.target.value)}>
                {transactions.category}
                </input>
            <label>Category</label>
        </form>
        <form>
            <input 
            type="number" 
            value={amount}
            onChange={(event)=>setAmmount(event.target.value)}>
                {transactions.amount}
                </input>
            <label>Amount</label>
        </form>
        <button onClick={handleClick}>Add Transaction</button>
     </div>   
    )
    }

export default Form;