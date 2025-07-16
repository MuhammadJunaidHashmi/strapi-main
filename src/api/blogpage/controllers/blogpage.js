'use strict';

/**
 * blogpage controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blogpage.blogpage', ({ strapi }) => ({
  async find(ctx) {
    const entity = await strapi.service('api::blogpage.blogpage').find(ctx.query);
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },

  async update(ctx) {
    const { data } = ctx.request.body;
    const entity = await strapi.service('api::blogpage.blogpage').update({ data });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },

  async delete(ctx) {
    const entity = await strapi.service('api::blogpage.blogpage').delete();
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  }
}));
