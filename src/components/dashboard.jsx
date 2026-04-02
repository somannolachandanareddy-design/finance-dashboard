import transactions from "../data/transactions";

function Dashboard() {
  let income = 0;
  let expense = 0;

  transactions.forEach((t) => {
    if (t.type === "Income") {
      income += t.amount;
    } else {
      expense += t.amount;
    }
  });

  const balance = income - expense;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard Overview</h2>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        
        <div style={{
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                minWidth: "150px", display: "flex", gap: "20px", flexWrap: "wrap"
                }}>
          <h3>Total Balance</h3>
          <p>₹{balance}</p>
        </div>

        <div style={{
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                minWidth: "150px", display: "flex", gap: "20px", flexWrap: "wrap"
                }}>
          <h3>Total Income</h3>
          <p>₹{income}</p>
        </div>

        <div style={{
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            minWidth: "150px", display: "flex", gap: "20px", flexWrap: "wrap"
            }}>
          <h3>Total Expenses</h3>
          <p>₹{expense}</p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;