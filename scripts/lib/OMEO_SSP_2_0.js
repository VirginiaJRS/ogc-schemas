var OMEO_SSP_2_0_Module_Factory = function () {
  var OMEO_SSP_2_0 = {
    n: 'OMEO_SSP_2_0',
    dens: 'http:\/\/www.opengis.net\/ssp\/2.0',
    dans: 'http:\/\/www.w3.org\/1999\/xlink',
    deps: ['OMEO_EOP_2_0', 'XLink_1_0', 'GML_3_2_1'],
    tis: [{
        ln: 'FootprintType',
        bti: 'OMEO_EOP_2_0.FootprintType',
        ps: [{
            n: 'locationName',
            rq: true,
            en: {
              lp: 'locationName',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            ti: 'GML_3_2_1.CodeType'
          }]
      }, {
        ln: 'EarthObservationMetadataType',
        bti: 'OMEO_EOP_2_0.EarthObservationMetaDataType',
        ps: [{
            n: 'derivedFrom',
            mno: 0,
            col: true
          }, {
            n: 'nominalDate'
          }]
      }, {
        ln: 'EarthObservationResultType',
        bti: 'OMEO_EOP_2_0.EarthObservationResultType',
        ps: [{
            n: 'cloudCoverPercentage',
            ti: 'GML_3_2_1.MeasureType'
          }, {
            n: 'cloudCoverPercentageAssessmentConfidence',
            ti: 'GML_3_2_1.MeasureType'
          }, {
            n: 'cloudCoverPercentageQuotationMode'
          }, {
            n: 'snowCoverPercentage',
            ti: 'GML_3_2_1.MeasureType'
          }, {
            n: 'snowCoverPercentageAssessmentConfidence',
            ti: 'GML_3_2_1.MeasureType'
          }, {
            n: 'snowCoverPercentageQuotationMode'
          }]
      }, {
        ln: 'EarthObservationType',
        bti: 'OMEO_EOP_2_0.EarthObservationType'
      }, {
        ln: 'FootprintPropertyType',
        ps: [{
            n: 'footprint',
            rq: true,
            en: 'Footprint',
            ti: '.FootprintType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }, {
            n: 'owns',
            ti: 'Boolean',
            an: {
              lp: 'owns'
            },
            t: 'a'
          }]
      }, {
        ln: 'EarthObservationMetadataPropertyType',
        ps: [{
            n: 'earthObservationMetadata',
            rq: true,
            en: 'EarthObservationMetadata',
            ti: '.EarthObservationMetadataType'
          }, {
            n: 'owns',
            ti: 'Boolean',
            an: {
              lp: 'owns'
            },
            t: 'a'
          }]
      }, {
        ln: 'EarthObservationEquipmentPropertyType',
        ps: [{
            n: 'earthObservationEquipment',
            rq: true,
            en: 'EarthObservationEquipment',
            ti: '.EarthObservationEquipmentType'
          }, {
            n: 'owns',
            ti: 'Boolean',
            an: {
              lp: 'owns'
            },
            t: 'a'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'EarthObservationPropertyType',
        ps: [{
            n: 'earthObservation',
            rq: true,
            en: 'EarthObservation',
            ti: '.EarthObservationType'
          }, {
            n: 'owns',
            ti: 'Boolean',
            an: {
              lp: 'owns'
            },
            t: 'a'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'EarthObservationResultPropertyType',
        ps: [{
            n: 'earthObservationResult',
            rq: true,
            en: 'EarthObservationResult',
            ti: '.EarthObservationResultType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }, {
            n: 'owns',
            ti: 'Boolean',
            an: {
              lp: 'owns'
            },
            t: 'a'
          }]
      }, {
        ln: 'EarthObservationEquipmentType',
        bti: 'OMEO_EOP_2_0.EarthObservationEquipmentType',
        ps: [{
            n: 'rest',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: 'platform',
                ti: 'OMEO_EOP_2_0.PlatformPropertyType'
              }, {
                en: 'instrument',
                ti: 'OMEO_EOP_2_0.InstrumentPropertyType'
              }],
            t: 'ers'
          }]
      }, {
        t: 'enum',
        ln: 'PercentageCoverQuotationModeValueEnumerationType',
        vs: ['AUTOMATIC', 'MANUAL']
      }],
    eis: [{
        en: 'EarthObservationMetadata',
        ti: '.EarthObservationMetadataType',
        sh: {
          lp: 'EarthObservationMetaData',
          ns: 'http:\/\/www.opengis.net\/eop\/2.0'
        }
      }, {
        en: 'EarthObservation',
        ti: '.EarthObservationType',
        sh: {
          lp: 'EarthObservation',
          ns: 'http:\/\/www.opengis.net\/eop\/2.0'
        }
      }, {
        en: 'Footprint',
        ti: '.FootprintType',
        sh: {
          lp: 'Footprint',
          ns: 'http:\/\/www.opengis.net\/eop\/2.0'
        }
      }, {
        en: 'EarthObservationEquipment',
        ti: '.EarthObservationEquipmentType',
        sh: {
          lp: 'EarthObservationEquipment',
          ns: 'http:\/\/www.opengis.net\/eop\/2.0'
        }
      }, {
        en: 'instrument',
        ti: 'OMEO_EOP_2_0.InstrumentPropertyType',
        sc: '.EarthObservationEquipmentType'
      }, {
        en: 'platform',
        ti: 'OMEO_EOP_2_0.PlatformPropertyType',
        sc: '.EarthObservationEquipmentType'
      }, {
        en: 'EarthObservationResult',
        ti: '.EarthObservationResultType',
        sh: {
          lp: 'EarthObservationResult',
          ns: 'http:\/\/www.opengis.net\/eop\/2.0'
        }
      }]
  };
  return {
    OMEO_SSP_2_0: OMEO_SSP_2_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], OMEO_SSP_2_0_Module_Factory);
}
else {
  var OMEO_SSP_2_0_Module = OMEO_SSP_2_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.OMEO_SSP_2_0 = OMEO_SSP_2_0_Module.OMEO_SSP_2_0;
  }
  else {
    var OMEO_SSP_2_0 = OMEO_SSP_2_0_Module.OMEO_SSP_2_0;
  }
}