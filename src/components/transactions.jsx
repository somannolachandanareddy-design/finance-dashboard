import { useState } from "react";
import transactionsData from "../data/transactions";

function Transactions({role}) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredData = transactionsData.filter((t) => {
    return (
      (filter === "All" || t.type === filter) &&
      t.category.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (

    <div style={{ padding: "20px" }}>
      <h2>Transactions</h2>

      {role === "Admin" && (
        <button style={{ marginBottom: "10px" }}>
            + Add Transaction
        </button>
    )}

      {/* Search + Filter */}
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Search by category"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setFilter(e.target.value)}>
          <option>All</option>
          <option>Income</option>
          <option>Expense</option>
        </select>
      </div>

      
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
        <thead>
          <tr>
            <th style={{ background: "#f5f5f5", padding: "10px" }}>Date</th>
            <th style={{ background: "#f5f5f5", padding: "10px" }}>Amount</th>
            <th style={{ background: "#f5f5f5", padding: "10px" }}>Category</th>
            <th style={{ background: "#f5f5f5", padding: "10px" }}>Type</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((t) => (
            <tr key={t.id}>
              <td style={{ padding: "10px", textAlign: "center" }}>{t.date}</td>
              <td style={{ padding: "10px", textAlign: "center" }}>₹{t.amount}</td>
              <td style={{ padding: "10px", textAlign: "center" }}>{t.category}</td>
              <td style={{ padding: "10px", textAlign: "center" }}>{t.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;