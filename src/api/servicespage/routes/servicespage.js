'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/servicespage',
      handler: 'servicespage.find',
      config: {
        policies: [],
        auth: { public: true }
      }
    },
    {
      method: 'PUT',
      path: '/servicespage',
      handler: 'servicespage.update',
      config: {
        policies: [],
        auth: { public: true }
      }
    },
    {
      method: 'DELETE',
      path: '/servicespage',
      handler: 'servicespage.delete',
      config: {
        policies: [],
        auth: { public: true }
      }
    }
  ]
};
