import React from 'react'
import {Switch, BrowserRouter as Router, Routes, Route, Fragment } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen'
// import AnotherLoginScreen from './screens/AnotherLoginScreen'
// import NewLoginScreen from './screens/NewLoginScreen'
import PackageScreen from './screens/PackageScreen'
import ClientListScreen from './screens/ClientListScreen'
import ClientEditScreen from './screens/ClientEditScreen'
import AddClientScreen from './screens/AddClientScreen'
// import NewAddClientScreen from './screens/NewAddClientScreen'
// import NewAddClientScreen2 from './screens/NewAddClientScreen2'
import UserListScreen from './screens/UserListScreen'
import ProfileScreen from './screens/ProfileScreen'
import ManufacturerScreen from './screens/ManufacturerScreen'
import ManufacturerEditScreen from './screens/ManufacturerEditScreen'
import SupplierScreen from './screens/SupplierScreen'
import SupplierEditScreen from './screens/SupplierEditScreen'
import ProductScreen from './screens/ProductScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import PurchaseOrderScreen from './screens/PurchaseOrderScreen'
import OrderDetailsScreen from './screens/OrderDetailsScreen'
import PurchaseOrderEditScreen from './screens/PurchaseOrderEditScreen'
import OrderScreen from './screens/OrderScreen'
import PurchaseOrderStatusScreen from './screens/PurchaseOrderStatusScreen'
import VerifyOrderScreen from './screens/VerifyOrderScreen'
import PurchaseOrderListScreen from './screens/PurchaseOrderListScreen'
import ApprovedPurchaseOrderList from './screens/ApprovedPurchaseOrderList'
import VerifyApprovedOrderScreen from './screens/VerifyApprovedOrderScreen'
import VerifyFinanceApprovedOrderScreen from './screens/VerifyFinanceApprovedOrderScreen'
import FinanceApprovalOrderListScreen from './screens/FinanceApprovalOrderListScreen'
import SaleScreen from './screens/SaleScreen'
import SaleDetailsScreen from './screens/SaleDetailsScreen'
import SalesReturnScreen from './screens/SalesReturnScreen'
import SalesOrderListScreen from './screens/SalesOrderListScreen'
import BilledOrderListScreen from './screens/BilledOrderListScreen'
import CollectedOrderListScreen from './screens/CollectedOrderListScreen'
import MySalesScreen from './screens/MySalesScreen'
import CollectorScreen from './screens/CollectorScreen'
import BillerScreen from './screens/BillerScreen'
import DeliverScreen from './screens/DeliverScreen'
import AllSaleScreen from './screens/AllSaleScreen'
import Interview from './screens/Interview'
import InboundScreen from './screens/InboundScreen'
import InboundStatusScreen from './screens/InboundStatusScreen'
import IntentScreen from './screens/IntentScreen'
import IntentOrderListScreen from './screens/IntentOrderListScreen'
// import OtpVerification from "./components/OtpVerification";
// import ResetPassword from "./components/ResetPassword";
// import ForgotPassword from "./components/ForgotPassword";
// import LoginSuccessful from "./components/LoginSuccessful";
// import LoginPage from "./components/LoginPage";
import Header from './components/Header';
import NewHeader from './components/NewHeader';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap'


const App = () => {
  return (
    <Router>
      <NewHeader />
        <main className='py-3>'>
        <Container>
          <Routes>
            <Route path='/' element={<LoginScreen />} exact />
            {/*<Route path='/' element={<AnotherLoginScreen />} exact />*/}
            {/*<Route path='/' element={<NewLoginScreen />} exact />*/}
            <Route path='/admin/package' element={<PackageScreen />} exact />
            <Route path='/admin/clientlist' element={<ClientListScreen />} exact />
            <Route path='/admin/user/:id/edit' element={<ClientEditScreen />} exact />
            <Route path='/user/:id/edit' element={<ClientEditScreen />} exact />
            <Route path='/userlist' element={<UserListScreen />} exact />
            <Route path='/profile' element={<ProfileScreen />} exact />
            <Route path='/addUsers' element={<AddClientScreen />} exact />
            <Route path='/manufacturers' element={<ManufacturerScreen />} exact />
            <Route path='/manufacturers/:id/edit' element={<ManufacturerEditScreen />} exact />
            <Route path='/supplier' element={<SupplierScreen />} exact />
            <Route path='/products' element={<ProductScreen />} exact />
            <Route path='/productlist' element={<ProductListScreen />} exact />
            <Route path='/products/:id/edit' element={<ProductEditScreen />} exact />
            <Route path='/supplier/:id/edit' element={<SupplierEditScreen />} exact />
            <Route path='/order' element={<OrderScreen />} exact />
            <Route path='/order/purchase' element={<PurchaseOrderScreen />} exact />
            <Route path='/order/:id' element={<OrderDetailsScreen />} exact />
            <Route path='/order/:id/edit' element={<PurchaseOrderEditScreen />} exact />
            <Route path='/order/:id/approve' element={<VerifyOrderScreen />} exact />
            <Route path='/order/approved' element={<ApprovedPurchaseOrderList />} exact />
            <Route path='/order/approved/:id' element={<VerifyApprovedOrderScreen />} exact />
            <Route path='/order/approved/finance' element={<FinanceApprovalOrderListScreen />} exact />
            <Route path='/order/approved/finance/:id' element={<VerifyFinanceApprovedOrderScreen />} exact />
            <Route path='/order/status' element={<PurchaseOrderStatusScreen />} exact />
            <Route path='/order/list' element={<PurchaseOrderListScreen />} exact />
            <Route path='/sale' element={<SaleScreen />} exact />            
            <Route path='/mysales' element={<MySalesScreen />} exact />
            <Route path='/sale/list' element={<SalesOrderListScreen />} exact />
            <Route path='/sale/billed' element={<BilledOrderListScreen />} exact />
            <Route path='/sale/collected' element={<CollectedOrderListScreen />} exact />
            <Route path='/sale/:id' element={<SaleDetailsScreen />} exact />
            <Route path='/sale/:id/biller' element={<BillerScreen />} exact />
            <Route path='/sale/:id/collector' element={<CollectorScreen />} exact />
            <Route path='/sale/:id/deliver' element={<DeliverScreen />} exact />
            <Route path='/sales' element={<AllSaleScreen />} exact />
            <Route path='/sales/return' element={<SalesReturnScreen />} exact />
            <Route path='/Interview' element={<Interview />} exact />
            <Route path='/inbound' element={<InboundScreen />} exact/>
            <Route path='/inbound/status' element={<InboundStatusScreen />} exact/>
            <Route path='/intent' element={<IntentScreen />} exact/>
            <Route path='/intent/list' element={<IntentOrderListScreen />} exact/>
        </Routes>
          
        </Container>
        </main>
      <Footer />
    </Router>
  )
}

export default App;