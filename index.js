import fs from "fs"
import {resolve} from "path"

export function findNodeModules(path){
    const results = [];
    const read = (dir) => {
        const dirs = fs.readdirSync(dir, {withFileTypes: true}).filter(dirent => dirent.isDirectory());
        dirs.forEach(d => {
            const fullpath = resolve(d.parentPath, d.name);
            if(d.name === "node_modules"){
                results.push(fullpath)
            }
            else {
                read(fullpath);
            }
        })
    }
    read(path);
    return results;
}