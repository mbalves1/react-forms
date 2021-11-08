
import './App.css';
import "tailwindcss/tailwind.css"

import React from 'react'
import Profile from './components/profile'
import Table from './components/table'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TableChartIcon from '@material-ui/icons/TableChart';

import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link
} from 'react-router-dom'

function App() {

  return (
    <Router>
      <div style={{
          display: 'flex'
        }}>
        <div className="App" style={{
          alignItems: 'flexStart',
          width: '300px',
          flexDirection: 'column',
          display: 'flex',
          paddingTop: '10%',
          justifyContent: 'flexStart',
          background: '#6868A3',
          paddingLeft: '45px'
        }}>
          <span style={{
            position: 'absolute',
            top: '25px',
            color: 'White',
            borderBottom: '1px solid white',
            paddingBottom:'10px',
            fontWeight:'bold'
          }}>Challenge React</span>
          <div>
            <div style={{display: 'flex', justifyContent: 'flex-start'}}>
              <AccountCircleIcon  style={{ marginRight:'10px', alignItems: 'center'}}/><Link style={{ textDecoration: 'none', fontSize: '22px', color:"black" }} to="/profile">Cadastrar</Link>
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-start', paddingTop: '20px'}}>
              <TableChartIcon style={{ marginRight:'10px', alignItems: 'center'}}/><Link to="/table" style={{textDecoration: 'none',  fontSize: '22px', color:"black"}}>Clientes</Link>
            </div>
          </div>
        </div>
        <div style={{
          height: '100vh',
          width: '100%',
          background: '#525280',
        }}>
          <Switch>
            <Route path="/profile">
              <Profile></Profile>
            </Route>
            <Route path="/table">
              <Table></Table>
            </Route>
          </Switch>
        </div>

      </div>
    </Router>
  );
}

export default App;
