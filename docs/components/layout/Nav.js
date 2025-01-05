import { html } from "@quiver/core";
import page from "https://esm.sh/page";
import { layoutStore, login } from "./LayoutStore.js";

export default function Nav() {
  return html`
  <nav>
    <ul>
    <li><strong>Quiver</strong></li>
      <li> <a href="javascript:void(0)" @click="${() =>
        page("/core/docs")}">Home</a> </li>
      <li> <a href="javascript:void(0)" @click="${() =>
        page("/core/docs/about")}">About</a> </li>
    </ul>
    <ul>
      <li> <a href="javascript:void(0)" @click="${() => login()}">${() =>
    layoutStore.loggedIn ? "Logout" : "Login"}</a> </li>
  </nav>
  `;
}
