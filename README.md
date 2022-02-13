## This project is for learning TypeScript with Express.js

### :rocket: Initialize project.
1. Create TypeScript config file: ```tsc --init```
2. Create package.json file: ```yarn init -y```

### :construction: Install packages.
- Dependencies: ```yarn add express```
- Dev dependencies: ```yarn add -D @types/express ts-node-dev tsconfig-paths typescript```

### :raised_eyebrow: About packages
- **@types/express** : Express package type. (In dependencies, we use express for application, so we need to install type of express.)
- **ts-node-dev** : Directly execute TypeScript on Node.js without precompiling. (Also use in scripts in package.json like nodemon to recompile when files change.)
- **tsconfig-paths** : Required if you config paths in tsconfig.json and want to use ts-node-dev

### :wrench: Config dev scripts
1. Go to package.json
2. Create dev script: ```"ts-node-dev --respawn --transpile-only --watch src -r tsconfig-paths/register src/index.ts"```
3. To run application (in terminal) using command: ```yarn dev```

### :raised_eyebrow: About flags in ts-node-dev
- **--respawn** : Keep watching for change after executed.
- **--watch src** : Hot reload all files in src.
- **-r tsconfig-paths/register** : Require tsconfig.json and use this config file.
- **src/index.ts** : Last arguments is main file to compile.


