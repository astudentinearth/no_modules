import { scanDir } from "./index.js";
import process from "process"
const result = scanDir(process.cwd());
result.forEach(i=>console.log(i))