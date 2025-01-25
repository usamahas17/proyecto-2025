import Server from "./src/index";
import dotenv from "dotenv";


dotenv.config();
const server = new Server();
server.listen();

