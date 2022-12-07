import React from 'react'
export const DashboardContext=React.createContext();
function DashboardContextComponent({children}) {
    let data = {
        earningsMonthly: "40000",
        earningsYearly: "215,000",
        task: "70",
        pendingRequest: "18",
      };
  return <DashboardContext.Provider value={data}>
    {children}
  </DashboardContext.Provider>
    
  
}

export default DashboardContextComponent