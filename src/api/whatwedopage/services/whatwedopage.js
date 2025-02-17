// @ts-nocheck
'use strict';

/**
 * whatwedopage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::whatwedopage.whatwedopage', ({ strapi }) => ({
  async find(params) {
    return strapi.entityService.findMany('api::whatwedopage.whatwedopage', {
      ...params,
      populate: {
        hero: {
          populate: ['logos']
        },
        introduction: {},
        tabs: {
          populate: ['content']
        },
        coreServices: {
          populate: ['services']
        }
      }
    });
  },

  async update(params) {
    return strapi.entityService.update('api::whatwedopage.whatwedopage', 1, params);
  },

  async delete() {
    return strapi.entityService.delete('api::whatwedopage.whatwedopage', 1);
  }
}));
