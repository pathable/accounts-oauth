Package.describe({
  summary: "Common code for OAuth-based login services",
  version: '1.3.3',
  name: 'pathable:accounts-oauth',
  git: 'https://github.com/pathable/accounts-oauth',
});

Package.onUse(api => {
  api.versionsFrom('1.11');

  api.use('check', 'server');
  api.use('webapp', 'server');
  api.use(['accounts-base', 'ecmascript'], ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('pathable:oauth@1.3.2');

  api.addFiles('oauth_common.js');
  api.addFiles('oauth_client.js', 'client');
  api.addFiles('oauth_server.js', 'server');
});


Package.onTest(api => {
  api.addFiles("oauth_tests.js", 'server');
});
