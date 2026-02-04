import './index.css'
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
    <Layout>
      <Home />
    </Layout>
    </LanguageProvider>
  );
}

export default App;
