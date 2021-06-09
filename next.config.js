const fs = require('fs');
const glob = require('glob');

const project = process.env.PROJECT ?? 'default';

console.log(`Project is ${project}.`);

const app = JSON.parse(fs.readFileSync(`./config/${project}/app/app.json`, 'utf8'));
const menu = JSON.parse(fs.readFileSync(`./config/${project}/app/menu.json`, 'utf8'));

let entity = {};

const paths = glob.sync(`./config/${project}/entity/*.json`);
for (let index = 0; index < paths.length; index++) {
  const path = paths[index];
  const field = path
    .split('/')
    .pop()
    .replace(/\.json/, '');
  entity = Object.assign(entity, {
    [field]: JSON.parse(fs.readFileSync(path, 'utf8')),
  });
}

const config = {
  app,
  menu,
  entity,
};

const removeImports = require('next-remove-imports')();

module.exports = removeImports({
  publicRuntimeConfig: {
    ...config,
  },
});
