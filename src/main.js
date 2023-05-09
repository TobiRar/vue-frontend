import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
const beforeUnloadListener = (event) => {
  event.preventDefault();
  return (event.returnValue = "");
};

const nameInput = document.querySelector("body");

nameInput.addEventListener("input", (event) => {
  if (event.target.value !== "") {
    addEventListener("beforeunload", beforeUnloadListener, { capture: true });
  } else {
    removeEventListener("beforeunload", beforeUnloadListener, {
      capture: true,
    });
  }
});

const app = createApp(App);
app.use(router);
app.mount("#app");
