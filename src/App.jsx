import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import ChildrensBooksLayout from "./components/ChildrensBooksLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import ChildrensBooksContent from "./pages/ChildrensBooksContent";
import BookProject from "./pages/BookProject";
import LabelDesign from "./pages/LabelDesign";
import Logos from "./pages/Logos";
import Branding from "./pages/Branding";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

            {/* Children's Books with nested layout for sticky submenu */}
            <Route path="childrens-books" element={<ChildrensBooksLayout />}>
              <Route index element={<ChildrensBooksContent />} />
              <Route path=":projectId" element={<BookProject />} />
            </Route>

            <Route path="label-design" element={<LabelDesign />} />
            <Route path="logos" element={<Logos />} />
            <Route path="branding" element={<Branding />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
