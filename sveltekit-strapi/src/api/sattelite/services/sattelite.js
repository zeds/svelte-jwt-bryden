'use strict';

/**
 * sattelite service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sattelite.sattelite');
