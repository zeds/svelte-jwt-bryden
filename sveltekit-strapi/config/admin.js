module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0f6f9d736883c67d7f792c94fdde0fe9'),
  },
});
