'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('import-csv')
      .service('myService')
      .getWelcomeMessage();
  },
};
