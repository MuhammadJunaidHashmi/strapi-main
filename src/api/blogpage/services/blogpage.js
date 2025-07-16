'use strict';

/**
 * blogpage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blogpage.blogpage', ({ strapi }) => ({
  async find(params) {
    return strapi.entityService.findMany('api::blogpage.blogpage', {
      ...params,
      populate: {
        hero: {
          populate: ['logos']
        },
        introduction: {},
        blogs: {}
      }
    });
  },

  async update(params) {
    return strapi.entityService.update('api::blogpage.blogpage', 1, params);
  },

  async delete() {
    return strapi.entityService.delete('api::blogpage.blogpage', 1);
  }
}));
