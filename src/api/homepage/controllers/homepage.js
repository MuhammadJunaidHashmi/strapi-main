'use strict';

/**
 * homepage controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::homepage.homepage', ({ strapi }) => ({
  async find(ctx) {
    const entity = await strapi.service('api::homepage.homepage').find(ctx.query);
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },

  async update(ctx) {
    const { data } = ctx.request.body;
    const entity = await strapi.service('api::homepage.homepage').update({
      data
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },

  async delete(ctx) {
    const entity = await strapi.service('api::homepage.homepage').delete();
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  }
}));