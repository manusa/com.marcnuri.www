#!/usr/bin/env node

const PACKAGE_JSON_PATH = 'package.json';
const fs = require('fs');

console.log('Replacing dependencies');
if (fs.existsSync(PACKAGE_JSON_PATH)) {
  const packageJson = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH));
  packageJson.dependencies = {
    express: '^4.16.4'
  };
  fs.writeFileSync(PACKAGE_JSON_PATH, JSON.stringify(packageJson));
  console.log('Dependencies succesfully replaced');
}
