import Navbar from "./components/Navbar";
import Section from "./components/Section";

export default function App() {
  return (
    <>
      <Navbar />
      <Section
        subtitle="RECENT LAUNCH"
        mainTitle="SHIPFLIGHT VIDEO"
        src="image1.jpg"
      />
      <Section
        subtitle="BUY TICKETS"
        mainTitle="YOU CAN GO TO SPACE!"
        src="image2.jpg"
      />
      <Section
        subtitle="SPACE TRAVEL DEALS"
        mainTitle="YOU MIGHT NOT HAVE TO SELL A KIDNEY!"
        src="image3.jpg"
      />
    </>
  );
}
