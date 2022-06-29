import { BrowserRouter, Routes, Route } from "react-router-dom";

// layouts
import View from "layouts/View/View";

// views
import Home from "views/Home/Home";
import Culture from "views/Culture/Culture";
import Economy from "views/Economy/Economy";
import Geography from "views/Geography/Geography";
import History from "views/History/History";

import "./App.css";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<View />}>
          <Route index element={<Home />} />
          <Route exact path="/history" element={<History />} />
          <Route exact path="/geography" element={<Geography />} />
          <Route exact path="/develop" element={<Economy />} />
          <Route exact path="/culture" element={<Culture />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
