import { BrowserRouter, Route, Routes } from "react-router-dom";
import ImageGallery from "./ImageGallery";
import LoginForm from "./LoginForm";
import ForgotPassword from "./ForgotPassword";
import PrivateRoute from "./PrivateRoute";
import AuthContext from "./AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContext>
        <div className="p-4 max-w-7xl">
          <Routes>
            <Route path="/" element={<LoginForm />} />;
            <Route path="/login" element={<LoginForm />} />;
            <Route path="/reset" element={<ForgotPassword />} />;
            <Route
              path="/gallery"
              element={
                <PrivateRoute>
                  <ImageGallery />
                </PrivateRoute>
              }
            />
            ;
          </Routes>
        </div>
      </AuthContext>
    </BrowserRouter>
  );
}

export default App;
