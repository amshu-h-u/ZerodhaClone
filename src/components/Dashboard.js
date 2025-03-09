import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Orders from './Orders';
import Holdings from './Holdings';
import Positions from './Positions';
import Funds from './Funds';
import Apps from './Apps';
import Summary from './Summary';
import WatchList from './WatchList';
import { GeneralContextProvider } from './GeneralContext';

function Dashboard() {
    return ( 
        <div className='dashboard-container'>
             <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
        <div className='content'>
            <Routes>
                <Route path="/" element={<Summary/>}></Route>
                <Route path="/orders" element={<Orders/>}></Route>
                <Route path="/holdings" element={<Holdings/>}></Route>
                <Route path="/positions" element={<Positions/>}></Route>
                <Route path="/funds" element={<Funds/>}></Route>
                <Route path="/apps" element={<Apps/>}></Route>
            </Routes>
        </div>
        </div>
     );
}

export default Dashboard;