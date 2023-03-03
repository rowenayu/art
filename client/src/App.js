import {BrowserRouter, Routes, Route } from "react-router-dom"
import Error from "./pages/Error";
import {ContactMe, AllArt, Landing, SharedLayout} from "./pages/home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Landing/>}/>
          <Route path="all-art" element={<AllArt/>}/>
          <Route path="contact-me" element={<ContactMe/>}/>
        </Route>
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
