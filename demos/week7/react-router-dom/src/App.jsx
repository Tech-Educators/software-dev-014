import "./App.css";
import IceCreamContainer from "./pages/IceCreamContainer";
import iceCreamData from "./lib/iceCreamData.json";
import Header from "./components/Header";
import About from "./pages/About";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";

//I am importing Routes and Route to build my navigation
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />

      {/* My Routes component will contain all my individual Route components */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/icescreams"
          element={iceCreamData.map((icecream) => (
            <div key={icecream.id}>
              <IceCreamContainer
                id={icecream.id}
                name={icecream.name}
                flavour={icecream.flavour}
                price={icecream.price}
              />
            </div>
          ))}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
