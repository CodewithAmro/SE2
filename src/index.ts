
import dotenv from "dotenv"
import path from "path";

dotenv.config({path: path.join(__dirname, "../.env")});
const userName = "assem";

console.log(`Hello, ${userName}!`);
console.log(`Hello, ${process.env.secret}!`);





