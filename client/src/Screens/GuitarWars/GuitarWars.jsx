import React from 'react';
import { useParams, useNavigate } from "react-router-dom"
import { getInvoice, deleteInvoice } from "../data"

function Invoice() {
  let invoiceParams = useParams();
  let invoice = getInvoice(parseInt(invoiceParams.invoiceId, 10))
  let navigate = useNavigate();

  return (
  <div>
      <h2>Invoice: {invoiceParams.invoiceId}</h2>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    
      <div>
        <button className="button-main"
          onClick={() => {
            deleteInvoice(invoice.number);
            console.log(invoice.number)
            navigate("/invoices")
          }}
          >
          Delete that shit
        </button>
    </div>
    
    
    </div>
    
  )
}

export default Invoice;
