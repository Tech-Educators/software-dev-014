import "./App.css";
import IceCreamContainer from "./pages/IceCreamContainer";
import iceCreamData from "./lib/iceCreamData.json";
import Header from "./components/Header";
import About from "./pages/About";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";

import Comments from "./pages/Comments";

//I am importing Routes and Route to build my navigation
import { Routes, Route } from "react-router-dom";
import UserProfile from "./pages/UserProfile";
import ShopHistory from "./pages/ShopHistory";

export default function App() {
  return (
    <>
      <Header />

      {/* My Routes component will contain all my individual Route components */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* We need to use the Outlet component in the child Route for it to work */}
        <Route path="/about" element={<About />}>
          <Route path="history" element={<ShopHistory />} />
        </Route>
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
        {/* This is a dynamic route because each user needs to see their own data */}
        {/* I need to use :pathname to build a dynamic route */}

        <Route path="/profile/:username" element={<UserProfile />}>
          <Route path="comments" element={<Comments />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
