var SLD_1_1_0_Module_Factory = function () {
  var SLD_1_1_0 = {
    n: 'SLD_1_1_0',
    dens: 'http:\/\/www.opengis.net\/sld',
    deps: ['WMS_1_3_0', 'OWS_1_0_0', 'SE_1_1_0', 'Filter_1_1_0', 'GML_3_1_1'],
    tis: [{
        ln: 'OutputType',
        ps: [{
            n: 'size',
            en: 'Size',
            ti: '.OutputType.Size'
          }, {
            n: 'format',
            en: {
              lp: 'Format',
              ns: 'http:\/\/www.opengis.net\/wms'
            }
          }, {
            n: 'transparent',
            en: 'Transparent',
            ti: 'Boolean'
          }, {
            n: 'bGcolor',
            en: 'BGcolor'
          }]
      }, {
        ln: 'TypeNameType',
        ps: [{
            n: 'featureTypeName',
            en: {
              lp: 'FeatureTypeName',
              ns: 'http:\/\/www.opengis.net\/se'
            },
            ti: 'QName'
          }, {
            n: 'coverageName',
            en: {
              lp: 'CoverageName',
              ns: 'http:\/\/www.opengis.net\/se'
            }
          }]
      }, {
        ln: 'CoverageConstraint',
        tn: null,
        ps: [{
            n: 'coverageName',
            en: {
              lp: 'CoverageName',
              ns: 'http:\/\/www.opengis.net\/se'
            }
          }, {
            n: 'coverageExtent',
            en: 'CoverageExtent',
            ti: '.CoverageExtent'
          }]
      }, {
        ln: 'NamedLayer',
        tn: null,
        ps: [{
            n: 'name',
            en: {
              lp: 'Name',
              ns: 'http:\/\/www.opengis.net\/se'
            }
          }, {
            n: 'description',
            en: {
              lp: 'Description',
              ns: 'http:\/\/www.opengis.net\/se'
            },
            ti: 'SE_1_1_0.DescriptionType'
          }, {
            n: 'layerFeatureConstraints',
            en: 'LayerFeatureConstraints',
            ti: '.LayerFeatureConstraints'
          }, {
            n: 'namedStyleOrUserStyle',
            col: true,
            etis: [{
                en: 'NamedStyle',
                ti: '.NamedStyle'
              }, {
                en: 'UserStyle',
                ti: '.UserStyle'
              }],
            t: 'es'
          }]
      }, {
        ln: 'OutputType.Size',
        tn: null,
        ps: [{
            n: 'width',
            en: 'Width',
            ti: 'Integer'
          }, {
            n: 'height',
            en: 'Height',
            ti: 'Integer'
          }]
      }, {
        ln: 'LayerCoverageConstraints',
        tn: null,
        ps: [{
            n: 'coverageConstraint',
            col: true,
            en: 'CoverageConstraint',
            ti: '.CoverageConstraint'
          }]
      }, {
        ln: 'InlineFeature',
        tn: null,
        ps: [{
            n: 'featureCollection',
            col: true,
            en: {
              lp: 'FeatureCollection',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.FeatureCollectionType'
          }]
      }, {
        ln: 'UserLayer',
        tn: null,
        ps: [{
            n: 'name',
            en: {
              lp: 'Name',
              ns: 'http:\/\/www.opengis.net\/se'
            }
          }, {
            n: 'description',
            en: {
              lp: 'Description',
              ns: 'http:\/\/www.opengis.net\/se'
            },
            ti: 'SE_1_1_0.DescriptionType'
          }, {
            n: 'remoteOWS',
            en: 'RemoteOWS',
            ti: '.RemoteOWS'
          }, {
            n: 'inlineFeature',
            en: 'InlineFeature',
            ti: '.InlineFeature'
          }, {
            n: 'layerFeatureConstraints',
            en: 'LayerFeatureConstraints',
            ti: '.LayerFeatureConstraints'
          }, {
            n: 'layerCoverageConstraints',
            en: 'LayerCoverageConstraints',
            ti: '.LayerCoverageConstraints'
          }, {
            n: 'userStyle',
            col: true,
            en: 'UserStyle',
            ti: '.UserStyle'
          }]
      }, {
        ln: 'DescribeLayerResponseType',
        ps: [{
            n: 'version',
            en: 'Version'
          }, {
            n: 'layerDescription',
            col: true,
            en: 'LayerDescription',
            ti: '.LayerDescriptionType'
          }]
      }, {
        ln: 'UseSLDLibrary',
        tn: null,
        ps: [{
            n: 'onlineResource',
            en: {
              lp: 'OnlineResource',
              ns: 'http:\/\/www.opengis.net\/se'
            },
            ti: 'SE_1_1_0.OnlineResourceType'
          }]
      }, {
        ln: 'Extent',
        tn: null,
        ps: [{
            n: 'name',
            en: {
              lp: 'Name',
              ns: 'http:\/\/www.opengis.net\/se'
            }
          }, {
            n: 'value',
            en: 'Value'
          }]
      }, {
        ln: 'GetMapType',
        ps: [{
            n: 'styledLayerDescriptor',
            en: 'StyledLayerDescriptor',
            ti: '.StyledLayerDescriptor'
          }, {
            n: 'crs',
            en: 'CRS'
          }, {
            n: 'boundingBox',
            en: 'BoundingBox',
            ti: 'OWS_1_0_0.BoundingBoxType'
          }, {
            n: 'output',
            en: 'Output',
            ti: '.OutputType'
          }, {
            n: 'exceptions',
            en: 'Exceptions'
          }, {
            n: 'time',
            en: 'Time',
            ti: 'Calendar'
          }, {
            n: 'elevation',
            en: 'Elevation',
            ti: '.ElevationType'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }]
      }, {
        ln: 'RangeAxis',
        tn: null,
        ps: [{
            n: 'name',
            en: {
              lp: 'Name',
              ns: 'http:\/\/www.opengis.net\/se'
            }
          }, {
            n: 'value',
            en: 'Value'
          }]
      }, {
        ln: 'ElevationType',
        ps: [{
            n: 'value',
            col: true,
            en: 'Value',
            ti: 'Double'
          }, {
            n: 'interval',
            en: 'Interval',
            ti: '.IntervalType'
          }]
      }, {
        ln: 'UserDefinedSymbolization',
        tn: null,
        ps: [{
            n: 'supportSLD',
            ti: 'Boolean',
            an: {
              lp: 'SupportSLD'
            },
            t: 'a'
          }, {
            n: 'userLayer',
            ti: 'Boolean',
            an: {
              lp: 'UserLayer'
            },
            t: 'a'
          }, {
            n: 'userStyle',
            ti: 'Boolean',
            an: {
              lp: 'UserStyle'
            },
            t: 'a'
          }, {
            n: 'remoteWFS',
            ti: 'Boolean',
            an: {
              lp: 'RemoteWFS'
            },
            t: 'a'
          }, {
            n: 'inlineFeature',
            ti: 'Boolean',
            an: {
              lp: 'InlineFeature'
            },
            t: 'a'
          }, {
            n: 'remoteWCS',
            ti: 'Boolean',
            an: {
              lp: 'RemoteWCS'
            },
            t: 'a'
          }]
      }, {
        ln: 'CoverageExtent',
        tn: null,
        ps: [{
            n: 'rangeAxis',
            col: true,
            en: 'RangeAxis',
            ti: '.RangeAxis'
          }, {
            n: 'timePeriod',
            en: 'TimePeriod'
          }]
      }, {
        ln: 'LayerFeatureConstraints',
        tn: null,
        ps: [{
            n: 'featureTypeConstraint',
            col: true,
            en: 'FeatureTypeConstraint',
            ti: '.FeatureTypeConstraint'
          }]
      }, {
        ln: 'RemoteOWS',
        tn: null,
        ps: [{
            n: 'service',
            en: 'Service'
          }, {
            n: 'onlineResource',
            en: {
              lp: 'OnlineResource',
              ns: 'http:\/\/www.opengis.net\/se'
            },
            ti: 'SE_1_1_0.OnlineResourceType'
          }]
      }, {
        ln: 'IntervalType',
        ps: [{
            n: 'min',
            en: 'Min',
            ti: 'Double'
          }, {
            n: 'max',
            en: 'Max',
            ti: 'Double'
          }]
      }, {
        ln: 'FeatureTypeConstraint',
        tn: null,
        ps: [{
            n: 'featureTypeName',
            en: {
              lp: 'FeatureTypeName',
              ns: 'http:\/\/www.opengis.net\/se'
            },
            ti: 'QName'
          }, {
            n: 'filter',
            en: {
              lp: 'Filter',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'Filter_1_1_0.FilterType'
          }, {
            n: 'extent',
            col: true,
            en: 'Extent',
            ti: '.Extent'
          }]
      }, {
        ln: 'LayerDescriptionType',
        ps: [{
            n: 'owsType'
          }, {
            n: 'onlineResource',
            en: {
              lp: 'OnlineResource',
              ns: 'http:\/\/www.opengis.net\/se'
            },
            ti: 'SE_1_1_0.OnlineResourceType'
          }, {
            n: 'typeName',
            col: true,
            en: 'TypeName',
            ti: '.TypeNameType'
          }]
      }, {
        ln: 'UserStyle',
        tn: null,
        ps: [{
            n: 'name',
            en: {
              lp: 'Name',
              ns: 'http:\/\/www.opengis.net\/se'
            }
          }, {
            n: 'description',
            en: {
              lp: 'Description',
              ns: 'http:\/\/www.opengis.net\/se'
            },
            ti: 'SE_1_1_0.DescriptionType'
          }, {
            n: 'isDefault',
            en: 'IsDefault',
            ti: 'Boolean'
          }, {
            n: 'featureTypeStyleOrCoverageStyleOrOnlineResource',
            col: true,
            etis: [{
                en: {
                  lp: 'FeatureTypeStyle',
                  ns: 'http:\/\/www.opengis.net\/se'
                },
                ti: 'SE_1_1_0.FeatureTypeStyleType'
              }, {
                en: {
                  lp: 'CoverageStyle',
                  ns: 'http:\/\/www.opengis.net\/se'
                },
                ti: 'SE_1_1_0.CoverageStyleType'
              }, {
                en: {
                  lp: 'OnlineResource',
                  ns: 'http:\/\/www.opengis.net\/se'
                },
                ti: 'SE_1_1_0.OnlineResourceType'
              }],
            t: 'es'
          }]
      }, {
        ln: 'StyledLayerDescriptor',
        tn: null,
        ps: [{
            n: 'name',
            en: {
              lp: 'Name',
              ns: 'http:\/\/www.opengis.net\/se'
            }
          }, {
            n: 'description',
            en: {
              lp: 'Description',
              ns: 'http:\/\/www.opengis.net\/se'
            },
            ti: 'SE_1_1_0.DescriptionType'
          }, {
            n: 'useSLDLibrary',
            col: true,
            en: 'UseSLDLibrary',
            ti: '.UseSLDLibrary'
          }, {
            n: 'namedLayerOrUserLayer',
            col: true,
            etis: [{
                en: 'NamedLayer',
                ti: '.NamedLayer'
              }, {
                en: 'UserLayer',
                ti: '.UserLayer'
              }],
            t: 'es'
          }, {
            n: 'version',
            ti: 'SE_1_1_0.VersionType',
            an: {
              lp: 'version'
            },
            t: 'a'
          }]
      }, {
        ln: 'NamedStyle',
        tn: null,
        ps: [{
            n: 'name',
            en: {
              lp: 'Name',
              ns: 'http:\/\/www.opengis.net\/se'
            }
          }, {
            n: 'description',
            en: {
              lp: 'Description',
              ns: 'http:\/\/www.opengis.net\/se'
            },
            ti: 'SE_1_1_0.DescriptionType'
          }]
      }, {
        t: 'enum',
        ln: 'ExceptionsType',
        vs: ['XML', 'INIMAGE', 'BLANK']
      }, {
        t: 'enum',
        ln: 'OwsTypeType',
        vs: ['wfs', 'wcs']
      }],
    eis: [{
        en: 'RangeAxis',
        ti: '.RangeAxis'
      }, {
        en: 'LayerFeatureConstraints',
        ti: '.LayerFeatureConstraints'
      }, {
        en: 'LayerCoverageConstraints',
        ti: '.LayerCoverageConstraints'
      }, {
        en: 'DescribeLayerResponse',
        ti: '.DescribeLayerResponseType'
      }, {
        en: 'NamedLayer',
        ti: '.NamedLayer'
      }, {
        en: 'GetMap',
        ti: '.GetMapType'
      }, {
        en: 'UserLayer',
        ti: '.UserLayer'
      }, {
        en: 'Value'
      }, {
        en: 'TimePeriod'
      }, {
        en: 'StyledLayerDescriptor',
        ti: '.StyledLayerDescriptor'
      }, {
        en: 'DescribeLayer',
        ti: 'WMS_1_3_0.OperationType',
        sh: {
          lp: '_ExtendedOperation',
          ns: 'http:\/\/www.opengis.net\/wms'
        }
      }, {
        en: 'UserDefinedSymbolization',
        ti: '.UserDefinedSymbolization',
        sh: {
          lp: '_ExtendedCapabilities',
          ns: 'http:\/\/www.opengis.net\/wms'
        }
      }, {
        en: 'NamedStyle',
        ti: '.NamedStyle'
      }, {
        en: 'IsDefault',
        ti: 'Boolean'
      }, {
        en: 'FeatureTypeConstraint',
        ti: '.FeatureTypeConstraint'
      }, {
        en: 'UseSLDLibrary',
        ti: '.UseSLDLibrary'
      }, {
        en: 'CoverageExtent',
        ti: '.CoverageExtent'
      }, {
        en: 'Extent',
        ti: '.Extent'
      }, {
        en: 'RemoteOWS',
        ti: '.RemoteOWS'
      }, {
        en: 'CoverageConstraint',
        ti: '.CoverageConstraint'
      }, {
        en: 'InlineFeature',
        ti: '.InlineFeature'
      }, {
        en: 'Service'
      }, {
        en: 'GetLegendGraphic',
        ti: 'WMS_1_3_0.OperationType',
        sh: {
          lp: '_ExtendedOperation',
          ns: 'http:\/\/www.opengis.net\/wms'
        }
      }, {
        en: 'UserStyle',
        ti: '.UserStyle'
      }]
  };
  return {
    SLD_1_1_0: SLD_1_1_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], SLD_1_1_0_Module_Factory);
}
else {
  var SLD_1_1_0_Module = SLD_1_1_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.SLD_1_1_0 = SLD_1_1_0_Module.SLD_1_1_0;
  }
  else {
    var SLD_1_1_0 = SLD_1_1_0_Module.SLD_1_1_0;
  }
}