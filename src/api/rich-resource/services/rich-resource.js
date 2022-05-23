'use strict';

/**
 * rich-resource service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rich-resource.rich-resource');
