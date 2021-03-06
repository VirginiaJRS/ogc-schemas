var EOP_ATM_1_0_Module_Factory = function () {
  var EOP_ATM_1_0 = {
    n: 'EOP_ATM_1_0',
    dens: 'http:\/\/earth.esa.int\/atm',
    deps: ['EOP_1_0', 'GML_3_1_1'],
    tis: [{
        ln: 'EarthObservationResultType',
        bti: 'EOP_1_0.EarthObservationResultType',
        ps: [{
            n: 'dataLayers',
            ti: '.DataLayerPropertyType'
          }]
      }, {
        ln: 'DataLayerType',
        ps: [{
            n: 'specy'
          }, {
            n: 'unit'
          }, {
            n: 'highestLocation',
            ti: 'GML_3_1_1.MeasureType'
          }, {
            n: 'lowestLocation',
            ti: 'GML_3_1_1.MeasureType'
          }, {
            n: 'algorithmName'
          }, {
            n: 'algorithmVersion'
          }]
      }, {
        ln: 'EarthObservationType',
        bti: 'EOP_1_0.EarthObservationType'
      }, {
        ln: 'DataLayerPropertyType',
        ps: [{
            n: 'dataLayer',
            rq: true,
            col: true,
            en: 'DataLayer',
            ti: '.DataLayerType'
          }]
      }],
    eis: [{
        en: 'DataLayer',
        ti: '.DataLayerType'
      }, {
        en: 'EarthObservation',
        ti: '.EarthObservationType',
        sh: {
          lp: 'EarthObservation',
          ns: 'http:\/\/earth.esa.int\/eop'
        }
      }, {
        en: 'dataLayers',
        ti: '.DataLayerPropertyType'
      }, {
        en: 'EarthObservationResult',
        ti: '.EarthObservationResultType',
        sh: {
          lp: 'EarthObservationResult',
          ns: 'http:\/\/earth.esa.int\/eop'
        }
      }]
  };
  return {
    EOP_ATM_1_0: EOP_ATM_1_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], EOP_ATM_1_0_Module_Factory);
}
else {
  var EOP_ATM_1_0_Module = EOP_ATM_1_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.EOP_ATM_1_0 = EOP_ATM_1_0_Module.EOP_ATM_1_0;
  }
  else {
    var EOP_ATM_1_0 = EOP_ATM_1_0_Module.EOP_ATM_1_0;
  }
}