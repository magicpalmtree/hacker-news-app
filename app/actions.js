var Fynx = require('fynx');

var actions = Fynx.createActions([
  'articlesHotLoad',
  'articlesHotLoadDone',
  'articlesHotLoadMore',
  'articlesHotLoadMoreDone',
  'articleLoad',
  'articleLoadDone',
  'articleSave',
  'userLoad'
]);

module.exports = actions;

// Required here so actions are bundled with the app
require('actions/ArticlesActions');
require('actions/UsersActions');