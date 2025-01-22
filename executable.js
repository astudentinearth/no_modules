import { findNodeModules } from "./index.js";
import process from "process"
const result = findNodeModules(process.cwd());
result.forEach(i=>console.log(i))