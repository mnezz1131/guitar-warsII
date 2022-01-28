import React from "react";
import { getInvoices } from "../data";
import "./Invoices.css";
import { Outlet, NavLink, useSearchParams } from "react-router-dom";
// import Invoice from "../Invoice/Invoice.jsx"

function Invoices() {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <div className="main-invoices">
        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            // console.log(filter)
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />

        {invoices.filter((invoice) => {

          let filter = searchParams.get("filter");
          if (!filter) return true;
        console.log(filter)

          let name = invoice.name.toLowerCase();
          return name.startsWith(filter.toLowerCase());
        })

        .map((invoice) => (
          <NavLink
            className={({ isActive }) => (isActive ? "inv-link" : "blue")}
            // className="inv-link"
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default Invoices;
