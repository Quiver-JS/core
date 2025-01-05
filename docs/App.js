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

  page.redirect("//core/docs/index.html", "//core/docs");
  page("//core/docs", () => {
    state.page = Layout(HomePage, { title: "Home" });
  });
  page("//core/docs/about", () => {
    state.page = Layout(AboutPage, { title: "About" });
  });
  page();

  return html`${() => state.page}`;
}
