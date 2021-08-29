import React from "react";

//Components
import Balance from "../../Budget/Balance";
import Transaction from "../../Budget/Transaction";

export default function BudgetDashPage() {
  return (
    <div>
      <Balance />
      <Transaction />
    </div>
  );
}
