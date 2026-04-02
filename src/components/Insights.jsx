import transactions from "../data/transactions";

function Insights() {
  let totalIncome = 0;
  let totalExpense = 0;
  let categoryMap = {};

  transactions.forEach((t) => {
    if (t.type === "Income") {
      totalIncome += t.amount;
    } else {
      totalExpense += t.amount;

      // category calculation
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  // find highest spending category
  let maxCategory = "";
  let maxAmount = 0;

  for (let category in categoryMap) {
    if (categoryMap[category] > maxAmount) {
      maxAmount = categoryMap[category];
      maxCategory = category;
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Insights</h2>

      <p> Total Income: ₹{totalIncome}</p>
      <p> Total Expenses: ₹{totalExpense}</p>
      <p> Highest Spending Category: {maxCategory}</p>

      {totalExpense > totalIncome ? (
        <p style={{ color: "red" }}>
           Your expenses are higher than income!
        </p>
      ) : (
        <p style={{ color: "green" }}>
           You are saving money!
        </p>
      )}
    </div>
  );
}

export default Insights;