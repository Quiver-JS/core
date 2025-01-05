import { html } from "https://esm.sh/@quiver-js/core";
import Nav from "./Nav.js";

export default function Layout(Page, { title }) {
  return html`
    <header>${Nav()}</header>
    <hr />
    <main>
      <h2>${title}</h2>
      ${Page()}
    </main>
  `;
}
