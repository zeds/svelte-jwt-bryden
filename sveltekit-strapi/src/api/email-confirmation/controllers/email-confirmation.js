'use strict';

/**
 * A set of functions called "actions" for `email-confirmation`
 */

module.exports = {
  async index(ctx) {

    //const publicRole = await strapi
    //.query("plugin::users-permissions.role")
    //.find({
    //  where: {
    //    type: "public",
    //  },
    //});

    const entry = await strapi.db.query('api::restaurants').findOne({
      select: ['name']
    });
    ctx.body = entry;

  }
};
