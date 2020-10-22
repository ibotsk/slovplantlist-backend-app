'use strict';

module.exports = function (Nomenclatureowner) {
  Nomenclatureowner.disableRemoteMethodByName('create');     // Removes (POST) /products
  Nomenclatureowner.disableRemoteMethodByName('upsert');     // Removes (PUT) /products
  Nomenclatureowner.disableRemoteMethodByName('deleteById'); // Removes (DELETE) /products/:id
  Nomenclatureowner.disableRemoteMethodByName('updateAll');  // Removes (POST) /products/update
  Nomenclatureowner.disableRemoteMethodByName('prototype.updateAttributes');
  // Removes (PUT) /products/:id
  Nomenclatureowner.disableRemoteMethodByName('createChangeStream');
  // Removes (GET|POST) /products/change-stream

  Nomenclatureowner.observe('loaded', (ctx, next) => {
    const data = ctx.data;
    if (data) {
      const { ownerIds, ownerNames } = data;
      if (ownerIds) {
        data.ownerIds = ownerIds.split(',');
      }
      if (ownerNames) {
        data.ownerNames = ownerNames.split(',');
      }
    }
    next();
  });
};
