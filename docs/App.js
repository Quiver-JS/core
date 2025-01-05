import { html, reactive, page } from "@quiver-js";
import Layout from "./components/layout/Layout.js";

import HomePage from "./pages/home/HomePage.js";
import AboutPage from "./pages/about/AboutPage.js";

export default function App() {
  const state = reactive({ page: "" });

  // For github pages
  if (location.pathname.includes("quiver")) {
    page.base("/quiver");
  }

  page.redirect("/docs/index.html", "/docs");
  page("/docs", () => {
    state.page = Layout(HomePage, { title: "Home" });
  });
  page("/docs/about", () => {
    state.page = Layout(AboutPage, { title: "About" });
  });
  page();

  return html`${() => state.page}`;
}
