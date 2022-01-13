'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('hello-v4')
      .service('myService')
      .getWelcomeMessage();
  },
};
