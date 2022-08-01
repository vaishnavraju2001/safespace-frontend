import "./App.css";
import Landing from "./components/Landing/Landing";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
