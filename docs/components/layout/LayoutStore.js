import { reactive } from "https://esm.sh/@quiver-js/core";

export const layoutStore = reactive({
  loggedIn: false,
});

export function login() {
  layoutStore.loggedIn = true;
}
