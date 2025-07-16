'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/blogpage',
      handler: 'blogpage.find',
      config: {
        policies: [],
        auth: { public: true }
      }
    },
    {
      method: 'PUT',
      path: '/blogpage',
      handler: 'blogpage.update',
      config: {
        policies: [],
        auth: { public: true }
      }
    },
    {
      method: 'DELETE',
      path: '/blogpage',
      handler: 'blogpage.delete',
      config: {
        policies: [],
        auth: { public: true }
      }
    }
  ]
};
