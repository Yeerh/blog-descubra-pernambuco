import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/components/Footer";
import { Home } from "@/pages/Home";
import { Blog } from "@/pages/Blog";
import { PostDetail } from "@/pages/PostDetail";
import { Colunists } from "@/pages/Colunists";
import { ColunistDetail } from "@/pages/ColunistDetail";
import { Admin } from "@/pages/Admin";
import { Login } from "@/pages/Login";
import { Contact } from "@/pages/Contact";

function App() {
  return (
    <Router>
      {/* Wrapper principal com fundo translúcido compatível com iPhone */}
      <div
        className="min-h-screen flex flex-col bg-background text-foreground antialiased"
        style={{
          backgroundColor: "rgba(var(--background-rgb), 0.95)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)", // Essencial para Safari/iOS
        }}
      >
        <Header />

        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes>
              <Route
                path="/"
                element={
                  <PageTransition>
                    <Home />
                  </PageTransition>
                }
              />
              <Route
                path="/blog"
                element={
                  <PageTransition>
                    <Blog />
                  </PageTransition>
                }
              />
              <Route
                path="/blog/:slug"
                element={
                  <PageTransition>
                    <PostDetail />
                  </PageTransition>
                }
              />
              <Route
                path="/colunistas"
                element={
                  <PageTransition>
                    <Colunists />
                  </PageTransition>
                }
              />
              <Route
                path="/colunistas/:slug"
                element={
                  <PageTransition>
                    <ColunistDetail />
                  </PageTransition>
                }
              />
              <Route
                path="/contact"
                element={
                  <PageTransition>
                    <Contact />
                  </PageTransition>
                }
              />
              <Route
                path="/login"
                element={
                  <PageTransition>
                    <Login />
                  </PageTransition>
                }
              />
              <Route
                path="/admin"
                element={
                  <PageTransition>
                    <Admin />
                  </PageTransition>
                }
              />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

// Componente de transição suave entre páginas
const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

export default App;