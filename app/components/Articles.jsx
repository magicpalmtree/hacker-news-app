var React = require('react');
var Component = require('component');
var NestedViewList = require('reapp-ui/views/NestedViewList');
var View = require('reapp-ui/views/View');
var ArticlesHome = require('./articles/ArticlesHome');
var Actions = require('actions');

var {
  storeRefreshMixin,
  storePromise,
  RoutedViewListMixin } = require('reapp-platform');

var {
  ArticlesStore,
  HotArticlesStore,
  SavedArticlesStore } = require('stores');

require('./Articles.styl');

module.exports = Component({
  statics: {
    fetchData: Actions.articlesHotLoad
  },

  mixins: [
    RoutedViewListMixin,
    storeRefreshMixin(ArticlesStore)
  ],

  render() {
    return (
      <NestedViewList {...this.routedViewListProps()} titleBarProps={{height:48}}>
        <View>
          <ArticlesHome
            savedArticlesStore={SavedArticlesStore()}
            hotArticlesStore={HotArticlesStore()}
            articlesStore={ArticlesStore()}
            disable={this.numActiveRoutes() > 2}
            handle={this.props.handle} />
        </View>

        {this.routedSubRoute()}
      </NestedViewList>
    );
  }
});