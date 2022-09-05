import GlobalStyle, { Container } from "./styles";
import { HashRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Github from "./components/Github/Github";
import Contacts from "./components/Contacts";

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <Header />
      <Container>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/mypage" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Github />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Container>
    </HashRouter>
  );
}

export default App;
