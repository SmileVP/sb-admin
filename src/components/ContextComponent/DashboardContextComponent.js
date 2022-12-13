import React from "react";
//declaring and exporting dashboard context for common storage
export const DashboardContext = React.createContext();
function DashboardContextComponent({ children }) {
  let data = {
    earningsMonthly: "40000",
    earningsYearly: "215,000",
    task: "70",
    pendingRequest: "18",
  };
  return (
    <DashboardContext.Provider value={data}>
    {/* to give access of dashboard context to the children dashboard */}
      {children}
    </DashboardContext.Provider>
  );
}

export default DashboardContextComponent;
