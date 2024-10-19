import cowsay from "cowsay";
import dotenv from "dotenv";

dotenv.config();

const message = `Bonjour, je m'appelle ${process.env.NAME} et je viens de ${process.env.CAMPUS}!`;

console.log(cowsay.say({ text: message }));
