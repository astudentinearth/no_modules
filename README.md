# no_modules
Finds all `node_modules` directories in your side projects folder so you don't blow up while backing it up to an external drive.

# Usage
Run the script, and run `rm -rf` on each outputted line.

# API
## `findNodeModules(path: string)`
Scans the given directory recursively until it hits node_modules. It will not traverse inside `node_modules`, will stop at the first one it finds.
- `path` to the directory to perform the scan in.