'use strict';

/**
 * homepage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::homepage.homepage', ({ strapi }) => ({
  async find(params) {
    return strapi.entityService.findMany('api::homepage.homepage', {
      ...params,
      populate: {
        hero: {
          populate: ['logos']
        },
        about: {
          populate: ['stats']
        },
        howWeWork: {
          populate: ['stats']
        },
        pillars: {
          populate: ['sections']
        },
        augmentation:{},
        poweredBy: {
          populate: ['logos']
        },
        testimonials: {
          populate: ['logo', 'author']
        },
        blogSection: {
          populate: ['posts']
        },
        contactForm: {
          populate: ['contactDetails']
        },
        OurClient:{
           populate:['Images']
        },
        getStarted:{}
      }
    });
  },

  async update(params) {
    return strapi.entityService.update('api::homepage.homepage', 1, params);
  },

  async delete() {
    return strapi.entityService.delete('api::homepage.homepage', 1);
  }
}));