import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Profile from "./components/Profile";
import UpdateProfile from "./components/UpdateProfile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path=":currentId/user/:id" element={<Profile />}></Route>
          <Route path=":currentId/user/updateProfile" element={<UpdateProfile />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;