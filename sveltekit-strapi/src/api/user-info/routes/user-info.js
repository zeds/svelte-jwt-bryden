'use strict';
module.exports = {
    routes: [
    {
        method: 'GET',
        path: '/user-info/:id',
        handler: 'user-info.index'
        },
      {
        method: 'GET',
        path: '/user-info',
        handler: 'user-info.me'
      }
    ]
  }