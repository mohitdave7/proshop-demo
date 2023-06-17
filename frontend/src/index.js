import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,Route,RouterProvider,createRoutesFromElements} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
// import reportWebVitals from './reportWebVitals';

const router=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route index={true} path ="/" element={<HomeScreen /> }/>
        <Route index={true} path ="/product/:id" element={<ProductScreen /> }/>
    </Route>
))

console.log("inside index.js")
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
