import React, {useState} from 'react'

//declaring and exporting User-Context for common storage
export const UserContext=React.createContext();
function UserContextComponent({children}) {
    let [users, setUsers] = useState([
        {
          name: "Vishnupriya",
          email: "vishnu@gmail.com",
          mobile: "9080376729",
          batch: "B38WET",
          timings: "11am to 1pm",
        },
        {
          name: "Balaji",
          email: "balaji@gmail.com",
          mobile: "9080376728",
          batch: "B38WET",
          timings: "11am to 1pm",
        },
        {
          name: "Latha",
          email: "latha@gmail.com",
          mobile: "9080376727",
          batch: "B38WET",
          timings: "11am to 1pm",
        },
        {
          name: "Sampath",
          email: "sampath@gmail.com",
          mobile: "9080376726",
          batch: "B38WET",
          timings: "11am to 1pm",
        },
      ]);
  return <UserContext.Provider value={{users,setUsers}}>
    {children}
  </UserContext.Provider>
   
  
}

export default UserContextComponent