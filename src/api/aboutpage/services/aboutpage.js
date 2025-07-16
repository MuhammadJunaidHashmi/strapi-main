'use strict';

/**
 * aboutpage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::aboutpage.aboutpage', ({ strapi }) => ({
  async find(params) {
    return strapi.entityService.findMany('api::aboutpage.aboutpage', {
      ...params,
      populate: {
        hero: {
          populate: ['logos']
        },
        offerings: {
          populate: ['items'] // Adjust if there are nested fields
        }
      }
    });
  },

  async update(params) {
    return strapi.entityService.update('api::aboutpage.aboutpage', 1, params);
  },

  async delete() {
    return strapi.entityService.delete('api::aboutpage.aboutpage', 1);
  }
}));
