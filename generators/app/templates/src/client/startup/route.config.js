const App = require('../components/App');
const Main = require('../components/Main');

// todo injector / initialization
const routes = (store) => {

  return {
    path: '/',
    component: App,
    indexRoute: {
      component: Main
    },
    //onEnter: getInitialState,

    childRoutes: [{
      path: '/home',
      component: Main
    }]
  };
};

module.exports = routes;
