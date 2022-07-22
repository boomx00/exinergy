
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from '../Home';
import Dashboard from '../pages/home/home';
import Inventory from '../pages/master/inventory/inventory'
import InventoryCreate from "../pages/master/inventory/create/inventoryCreate";
import Offering from "../pages/offering/offering";
import Login from "../pages/login/login";
import { connect } from 'react-redux'
const index = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/master/inventory" element={<Inventory target="inventory" />} />
      <Route path="/master/inventory/create" element={<InventoryCreate />} />
      <Route path="/offering" element={<Offering />} />

    </Routes>
  </BrowserRouter>

  )
}


export default index
