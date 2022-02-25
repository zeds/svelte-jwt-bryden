'use strict';

/**
 * A set of functions called "actions" for `hello`
 */

module.exports = {
  async index(ctx, next) {

    const params = ctx.request.query.email
    console.log('api/hello:'+params);
    strapi.log.info('strapi log info!')

    const email_from = params.split(',')[0]
    const email_to = params.split(',')[1]

    const entries_from = await strapi.db.query('api::message.message').findMany({
      populate: true,
      where: {
        //from: 'tom.zed39@gmail.com',
        //to: 'kawashima@gmail.com'
        from: email_from,
        to: email_to
      },
    })
    const entries_to = await strapi.db.query('api::message.message').findMany({
      populate: true,
      where: {
        from: email_to,
        to: email_from
      },
    })

    //let obj1 = { a: 1, b: 2}
    //let obj2 = { c: 3, d: 4}
    //let array = []
    //array.push(obj1)
    //array.push(obj2)

    ctx.body = entries_from.concat(entries_to);
    //ctx.body = env('MAILGUN_API_KEY')


  }
};
