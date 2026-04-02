import Dashboard from "../components/dashboard.jsx";
import Transactions from "../components/transactions.jsx";
import Insights from "../components/Insights.jsx"; 

function Home({role}) {
  return (
    <div>
      <Dashboard />
      <Transactions role={role} />
      <Insights />
    </div>
  );
}

export default Home;