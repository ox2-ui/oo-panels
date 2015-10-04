Package.describe({
  name: 'ox2:panels',
  summary: 'TESTING_DO_NOT_USE Sliding overlay panels',
  version: '1.1.0',
  git: ' /* Fill me in! */ '
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.export('ooPanelCallbacks');
  api.export('ooPanelClose');
  // Core
  api.use([
    'templating'
    ]);
  // 3rd party
  api.use([
    'lauricio:less-autoprefixer@2.5.0_3','mquandalle:jade@0.4.1', 'ox2:detective@1.0.0'
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
