import Server from "./models/index";
import dotenv from "dotenv";


dotenv.config();
const server = new Server();
server.listen();

