'use strict';

/**
 * A set of functions called "actions" for `hoge`
 */

module.exports = {
  async index(ctx) {

    const sendTo = "tom.zed39@gmail.com"

    try {
      const emailOptions = {
        to: sendTo,
        subject: 'This is a test',
        html: `<h1>Welcome!</h1><p>This is a test HTML email.</p>`,
      }
      await strapi.plugins['email'].services.email.send(emailOptions)
      strapi.log.debug(`Email sent to ${sendTo}`)
      ctx.send({ message: 'Email sent' })
    } catch (err) {
      strapi.log.error(`Error sending email to ${sendTo}`, err)
      ctx.send({ error: 'Error sending email' })
    }

    //strapi.services.sendmail.send(welcome, toEmail, 'Welcome', `A product has been created ${entity.name}`);
    ctx.body = 'hogeでーす'
  }
};
