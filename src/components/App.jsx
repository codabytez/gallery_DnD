import ImageGallery from "./ImageGallery";
import LoginForm from "./LoginForm";
import { Route, Routes } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
function App() {
  return (
    <div className="p-4 max-w-7xl">
      {/* <Loading /> */}
      {/* <LoginForm /> */}
      {/* <ImageGallery /> */}
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/gallery" element={<ImageGallery />} />
      </Routes>
    </div>
  );
}

export default App;
