import { root } from "@lynx-js/react";
import { MemoryRouter, Route, Routes } from "react-router";
import { Landing } from "./pages/auth/Landing.jsx";
import { Chat } from "./pages/internal/chat.jsx";
import { SignIn } from "./pages/auth/SignIn.jsx";
import "./App.css";
root.render(
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth/sign-in" element={<SignIn />} />
      <Route path="internal/chat" element={<Chat />} />
    </Routes>
  </MemoryRouter>
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
