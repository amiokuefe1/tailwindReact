import React from 'react'
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className='flex-auto w-32 bg-orange-600'>
        Hello there...
        <br/>
        <Link className='bg-sky-500/100 rounded-lg p-1 font-bold' to="/invoices">Invoices</Link> |{" "}
        <Link className='bg-sky-500/100 rounded-lg p-1 font-bold' to="/expenses">Expenses</Link>
    </div>
  )
}

export default SideBar