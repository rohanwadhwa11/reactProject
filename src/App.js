import React from "react";
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import Drawback from "./components/Drawback";
import Courses from "./components/Courses";
import Reviews from "./components/Reviews";
import Need from "./components/Need";
import Features from "./components/features";
import Enroll from "./components/Enroll";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";

function App() {
  let drawbacks = [
    {
      tag: "",
      desc: "Struggle with complex software tools",
    },
    {
      tag: "",
      desc: "Feel stuck without structured learning",
    },
    {
      tag: <i class='fa-solid fa-xmark'></i>,
      desc : "Miss out on monetizing your skills"
    }
  ];
  return (
  <>
  <Navbar />
  <Heading />
  <Drawback drawback={drawbacks}/>
  <Courses />
  <Reviews />
  <Need />
  <Features />
  <Enroll />
  <FAQs />
  <Footer />
  </>
   
  );
}

export default App;
