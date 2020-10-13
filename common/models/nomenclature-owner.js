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
        if (data.owner_ids) {
            data.owner_ids = data.owner_ids.split(',');
        }
        if (data.owner_names) {
            data.owner_names = data.owner_names.split(',');
        }
        next();
    });

};
