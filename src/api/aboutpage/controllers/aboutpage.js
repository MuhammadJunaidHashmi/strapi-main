'use strict';

/**
 * aboutpage controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::aboutpage.aboutpage', ({ strapi }) => ({
  async find(ctx) {
    const entity = await strapi.service('api::aboutpage.aboutpage').find(ctx.query);
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },

  async update(ctx) {
    const { data } = ctx.request.body;
    const entity = await strapi.service('api::aboutpage.aboutpage').update({ data });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },

  async delete(ctx) {
    const entity = await strapi.service('api::aboutpage.aboutpage').delete();
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  }
}));
