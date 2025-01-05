import { html, reactive, page } from "https://esm.sh/@quiver-js/core";
import Layout from "./components/layout/Layout.js";

import HomePage from "./pages/home/HomePage.js";
import AboutPage from "./pages/about/AboutPage.js";

export default function App() {
  const state = reactive({ page: "" });

  // For github pages
  const base = location.pathname.includes("core") ? "/core" : "/docs";

  page.redirect(`${base}/index.html`, base);
  page(base, () => {
    state.page = Layout(HomePage, { title: "Home" });
  });
  page(`${base}/about`, () => {
    state.page = Layout(AboutPage, { title: "About" });
  });
  page();

  return html`${() => state.page}`;
}
