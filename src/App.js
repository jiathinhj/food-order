import "./App.css";
import { CartProvider } from "./components/context/CartContext";
import Home from "./components/pages/home";

function App() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
}

export default App;
