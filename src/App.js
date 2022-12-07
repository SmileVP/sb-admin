import React from 'react';
import Sidebar from "./components/Sidebar";
import "./App.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import EditUser from "./components/EditUser";
import AddUser from "./components/AddUser";
import NestedExample from "./NestedExample";
import Account from "./components/NestedComponent.js/Account";
import Profile from "./components/NestedComponent.js/Profile";
import UserContextComponent  from './components/ContextComponent/UserContextComponent';
import DashboardContextComponent from './components/ContextComponent/DashboardContextComponent';
import UseRef from './components/NestedComponent.js/UseRef';
import UseReducer from './components/NestedComponent.js/UseReducer';


function App() {
  

  
  return (
    <div id="wrapper">
       <UserContextComponent>
      <BrowserRouter>
        <Sidebar />
      
        <Routes>
          <Route
            path="/dashboard"
            element={
              <DashboardContextComponent>
           
              <Dashboard />
          
              </DashboardContextComponent>
            }
          />
          <Route
            path="/add-user"
            element={
          
            <AddUser  />
         
            }
          />
          <Route path="/edit-user/:id" element={
         
          <EditUser/>
       
          } 

          />

          <Route path="/nested-example" element={<NestedExample />}>
            <Route path="account" element={<Account />} />
            <Route path="profile" element={<Profile />} />
            <Route path="use-ref" element={<UseRef />} />
            <Route path="use-reducer" element={<UseReducer />} />
          </Route>

          <Route path="*" element={<Navigate to={"/dashboard"} />} />
        </Routes>
       
      </BrowserRouter>
      </UserContextComponent>
    </div>
  );
}

export default App;
