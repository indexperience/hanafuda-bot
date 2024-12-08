import figlet from "figlet";
import { ColorTheme } from "./colors.js";

const colors = new ColorTheme();

function displayBanner() {
  const banner = figlet.textSync("Hanafuda BOT", {
    font: "ANSI Shadow",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 100,
  });

  console.log(colors.style(banner, "header"));
  console.log(
  );
}

export default displayBanner;
