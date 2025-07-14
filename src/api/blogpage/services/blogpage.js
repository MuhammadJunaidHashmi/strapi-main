'use strict';

/**
 * blogpage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blogpage.blogpage');
