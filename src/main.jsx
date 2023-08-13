import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductProvider from "./context/ProductContext.jsx";
import SidebarProvider from "./context/SidebarContext.jsx";
import CartContext from "./context/CartContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <SidebarProvider>
      <CartContext>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </CartContext>
    </SidebarProvider>
  </ProductProvider>
);
