'use strict';

/**
 * user-enrollment service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-enrollment.user-enrollment');
