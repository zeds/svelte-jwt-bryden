'use strict';

/**
 * room-status service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::room-status.room-status');
