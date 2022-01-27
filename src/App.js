import GlobalStyle, { Container } from "./styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Header/Home";
import About from "./components/About";
import Github from "./components/Github/Github";
import Contacts from "./components/Contacts";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Container>
        <Home />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Github />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
