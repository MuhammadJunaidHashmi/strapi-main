module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/homepage',
      handler: 'homepage.find',
      config: {
        policies: [],
        auth: { public: true }
      }
    },
    {
      method: 'PUT',
      path: '/homepage',
      handler: 'homepage.update',
      config: {
        policies: [],
        auth: { public: true }
      }
    },
    {
      method: 'DELETE',
      path: '/homepage',
      handler: 'homepage.delete',
      config: {
        policies: [],
        auth: { public: true }
      }
    }
  ]
}