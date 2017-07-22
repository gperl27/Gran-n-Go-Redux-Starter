module.exports = function (plop) {
  // create your generators here
  plop.setGenerator('basics', {
    description: 'application controller logic',
     prompts: [{
         type: 'input',
         name: 'name',
         message: 'controller name please'
     }],
     actions: [{
         type: 'add',
         path: 'src/{{name}}.js',
         templateFile: 'templates/test.js'
     }]
  });
};