'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/aboutpage',
      handler: 'aboutpage.find',
      config: {
        policies: [],
        auth: { public: true }
      }
    },
    {
      method: 'PUT',
      path: '/aboutpage',
      handler: 'aboutpage.update',
      config: {
        policies: [],
        auth: { public: true }
      }
    },
    {
      method: 'DELETE',
      path: '/aboutpage',
      handler: 'aboutpage.delete',
      config: {
        policies: [],
        auth: { public: true }
      }
    }
  ]
};
