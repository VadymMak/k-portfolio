import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import ChildrensBooks from './pages/ChildrensBooks'
import BookProject from './pages/BookProject'
import LabelDesign from './pages/LabelDesign'
import Logos from './pages/Logos'
import Branding from './pages/Branding'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="childrens-books" element={<ChildrensBooks />} />
            <Route path="childrens-books/:projectId" element={<BookProject />} />
            <Route path="label-design" element={<LabelDesign />} />
            <Route path="logos" element={<Logos />} />
            <Route path="branding" element={<Branding />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Router>
  )
}

export default App
