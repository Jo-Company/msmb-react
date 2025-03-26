import "./index.scss";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Responsive } from "./responsive";

window.addEventListener("resize", Responsive);
Responsive();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
