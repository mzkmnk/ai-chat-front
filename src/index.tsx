import { root } from "@lynx-js/react";
import { MemoryRouter, Route, Routes } from "react-router";
import { SignIn } from "./pages/auth/SignIn.jsx";
import { Chat } from "./pages/internal/chat.jsx";

import "./App.css";
root.render(
  <MemoryRouter>
    <Routes>
      <Route path="" element={<SignIn />} />
      <Route path="internal/chat" element={<Chat />} />
    </Routes>
  </MemoryRouter>
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
