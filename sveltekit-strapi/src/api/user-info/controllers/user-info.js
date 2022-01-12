'use strict';
module.exports = {
    async index(ctx, next) {
      let id = ctx.params.id;
      let data = await strapi.plugins['users-permissions'].services.user.fetch({ id }, ['Avatar']);
      ctx.send(data);
    },
    async me(ctx, next) {
        const user = ctx.state.user;
        if (!user) {
            return ctx.badRequest(user, [{ messages: [{ id: 'No authorization header was found' }] }]);
        }
        let id = user.id;
        let data = await strapi.plugins['users-permissions'].services.user.fetch({ id }, ['Avatar']);
        ctx.send(data);
    },
};