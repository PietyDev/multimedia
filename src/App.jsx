import { BrowserRouter, Routes, Route } from "react-router-dom";

// layouts
import View from "layouts/View/View";

// views
import Home from "views/Home/Home";

import "./App.css";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<View />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
