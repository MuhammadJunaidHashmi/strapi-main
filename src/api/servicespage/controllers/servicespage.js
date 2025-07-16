'use strict';

/**
 * servicespage controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::servicespage.servicespage', ({ strapi }) => ({
  async find(ctx) {
    const entity = await strapi.service('api::servicespage.servicespage').find(ctx.query);
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },

  async update(ctx) {
    const { data } = ctx.request.body;
    const entity = await strapi.service('api::servicespage.servicespage').update({ data });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },

  async delete(ctx) {
    const entity = await strapi.service('api::servicespage.servicespage').delete();
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  }
}));
