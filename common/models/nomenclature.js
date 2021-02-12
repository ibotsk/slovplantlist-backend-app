'use strict';

const ntypeOrderMap = (ntype) => {
  switch (ntype) {
    case 'A':
    case 'PA':
      return 1;
    case 'S':
    case 'DS':
      return 3;
    case 'I':
      return 4;
    case 'U':
      return 5;
    case 'PC':
      return 6;
    case 'TP':
      return 7;
    default:
      return 8;
  }
};

const checkHybrid = (instance) => {
  const {
    genusH, speciesH, subspH, varH, subvarH,
    formaH, nothosubspH, nothoformaH, authorsH,
  } = instance;
  const notEmptyFields = [genusH, speciesH, subspH, varH, subspH, subvarH,
    formaH, nothosubspH, nothoformaH, authorsH].filter((e) => !!e);
  return notEmptyFields.length > 0;
};

module.exports = function(Nomenclature) {
  Nomenclature.observe('before save', (ctx, next) => {
    ctx.instance.ntypeOrder = ntypeOrderMap(ctx.instance.ntype);
    ctx.instance.hybrid = checkHybrid(ctx.instance);
    next();
  });
};
