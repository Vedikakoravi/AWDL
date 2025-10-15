import figlet from "figlet";

async function doStuff() {
  const text = await figlet.text("Hello Vedika!");
  console.log(text);
}

doStuff();