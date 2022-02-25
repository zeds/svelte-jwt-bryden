module.exports = {
  routes: [
     {
      method: 'GET',
      path: '/hogehoge',
      handler: 'hogehoge.exampleAction',
      config: {
        policies: [],
        middlewares: [],
      },
     },
  ],
};
