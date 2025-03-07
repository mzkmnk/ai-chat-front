import { root } from "@lynx-js/react";

import { App } from "./App.js";
import { MemoryRouter, Route, Routes } from "react-router";
import { SignIn } from "./pages/auth/SignIn.jsx";

root.render(
  <MemoryRouter>
    <Routes>
      <Route path="" element={<SignIn />} />
    </Routes>
  </MemoryRouter>
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
