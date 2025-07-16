'use strict';

/**
 * servicespage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::servicespage.servicespage', ({ strapi }) => ({
  async find(params) {
    return strapi.entityService.findMany('api::servicespage.servicespage', {
      ...params,
      populate: {
        hero: {
          populate: ['logos']
        },
        introduction: {},
        industries: {
           // adjust if `industries` has nested fields
        },
        services: {
          populate: ['subServices', 'offers'] // adjust if each service has nested items
        }
      }
    });
  },

  async update(params) {
    return strapi.entityService.update('api::servicespage.servicespage', 1, params);
  },

  async delete() {
    return strapi.entityService.delete('api::servicespage.servicespage', 1);
  }
}));
