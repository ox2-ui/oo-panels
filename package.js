Package.describe({
  name: 'ox2:panels',
  summary: 'Sliding overlay panels',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.export('ooPanelCallbacks');
  // Core
  api.use([
    'templating'
    ]);
  // 3rd party
  api.use([
    'lauricio:less-autoprefixer@1.0.7','mquandalle:jade@0.4.1'
    ]);
  api.addFiles('lib/oo-panels.jade', C);
  api.addFiles('lib/oo-panels.js', C);
  api.addFiles('lib/oo-panels.less', C);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ox2:panels');
  api.addFiles('tests/oo-panels-tests.js');
});
