//module.exports = {
module.exports = ({ env }) => ({

  // ...
  'import-csv': {
    enabled: true,
    resolve: './src/plugins/import-csv'
  },
  email: {
    config: {
      provider: "mailgun",
      providerOptions: {
        apiKey: env("MAILGUN_API_KEY"),
        domain: env("MAILGUN_DOMAIN"), //Required if you have an account with multiple domains
        host: env("MAILGUN_HOST"), // we have only 2 options here. api.mailgun.net for US servers, api.eu.mailgun.net for EU Servers.
      },
      settings: {
        defaultFrom: env("EMAIL_DEFAULT_FROM"),
        defaultReplyTo: env("EMAIL_DEFAULT_REPLY_TO"),
        testAddress: env("EMAIL_TEST_ADDRESS"),
      },
    },
  },
  // ...
});
