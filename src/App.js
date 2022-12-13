import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import EditUser from "./components/EditUser";
import AddUser from "./components/AddUser";
import NestedExample from "./NestedExample";
import Account from "./components/NestedComponent.js/Account";
import Profile from "./components/NestedComponent.js/Profile";
import UserContextComponent from "./components/ContextComponent/UserContextComponent";
import DashboardContextComponent from "./components/ContextComponent/DashboardContextComponent";
import UseRef from "./components/NestedComponent.js/UseRef";
import UseReducer from "./components/NestedComponent.js/UseReducer";
import Todo from "./components/Todo";

//App function to call all the components and to provide routing
function App() {
  return (
    <div className="container-fluid">
      <div id="wrapper">
        {/* to give access of User Context Component to all the children  */}
        <UserContextComponent>
          {/* to provide routing */}
          <BrowserRouter>
            <Sidebar />

            <Routes>
              <Route
                path="/dashboard"
                element={
                  // { to give access of Dashboard Context Component to children dashboard function }
                  <DashboardContextComponent>
                    <Dashboard />
                  </DashboardContextComponent>
                }
              />
              <Route path="/add-user" element={<AddUser />} />
              <Route path="/edit-user/:id" element={<EditUser />} />

              <Route path="/nested-example" element={<NestedExample />}>
                <Route path="account" element={<Account />} />
                <Route path="profile" element={<Profile />} />
                <Route path="use-ref" element={<UseRef />} />
                <Route path="use-reducer" element={<UseReducer />} />
              </Route>

              <Route path="/todo" element={<Todo />} />

              {/* redirect to dashboard if other than the above routes given */}
              <Route path="*" element={<Navigate to={"/dashboard"} />} />
            </Routes>
          </BrowserRouter>
        </UserContextComponent>
      </div>
    </div>
  );
}

export default App;
