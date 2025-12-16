import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";     // Consistente com alias @
import { Home } from "@/pages/Home";
import { Blog } from "@/pages/Blog";
import { PostDetail } from "@/pages/PostDetail";
import { Admin } from "@/pages/Admin";
import { Login } from "@/pages/Login";             // Se tiver página de login
import { Navigate } from "react-router-dom";
import { Contact } from "@/pages/Contact";

// Componente para proteger a rota admin
function PrivateRoute({ children }: { children: React.ReactNode }) {
  const isLogged = localStorage.getItem("isAdminLogged") === "true";
  return isLogged ? children : <Navigate to="/login" replace />;
}


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background flex flex-col font-sans">
        <Header />
        <main className="flex-1">
          <Routes>
            {/* Rotas públicas */}
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<PostDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />

            {/* Rota protegida */}
            <Route
              path="/admin"
              element={
                <PrivateRoute>
                  <Admin />
                </PrivateRoute>
              }
            />

            {/* 404 opcional */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;