var WPS_2_0_Module_Factory = function () {
  var WPS_2_0 = {
    n: 'WPS_2_0',
    dens: 'http:\/\/www.opengis.net\/wps\/2.0',
    deps: ['OWS_2_0'],
    tis: [{
        ln: 'ComplexDataType',
        bti: '.DataDescriptionType',
        ps: [{
            n: 'any',
            mno: 0,
            col: true,
            mx: false,
            t: 'ae'
          }]
      }, {
        ln: 'WPSCapabilitiesType',
        bti: 'OWS_2_0.CapabilitiesBaseType',
        ps: [{
            n: 'contents',
            rq: true,
            en: 'Contents',
            ti: '.Contents'
          }, {
            n: 'extension',
            en: 'Extension',
            ti: '.WPSCapabilitiesType.Extension'
          }, {
            n: 'service',
            rq: true,
            ti: 'AnySimpleType',
            an: {
              lp: 'service'
            },
            t: 'a'
          }]
      }, {
        ln: 'ExecuteRequestType',
        bti: '.RequestBaseType',
        ps: [{
            n: 'identifier',
            rq: true,
            en: {
              lp: 'Identifier',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            ti: 'OWS_2_0.CodeType'
          }, {
            n: 'input',
            mno: 0,
            col: true,
            en: 'Input',
            ti: '.DataInputType'
          }, {
            n: 'output',
            rq: true,
            col: true,
            en: 'Output',
            ti: '.OutputDefinitionType'
          }, {
            n: 'mode',
            rq: true,
            an: {
              lp: 'mode'
            },
            t: 'a'
          }, {
            n: 'response',
            rq: true,
            an: {
              lp: 'response'
            },
            t: 'a'
          }]
      }, {
        ln: 'GetCapabilitiesType',
        bti: 'OWS_2_0.GetCapabilitiesType',
        ps: [{
            n: 'service',
            rq: true,
            an: {
              lp: 'service'
            },
            t: 'a'
          }]
      }, {
        ln: 'InputDescriptionType',
        bti: '.DescriptionType',
        ps: [{
            n: 'dataDescription',
            rq: true,
            mx: false,
            dom: false,
            en: 'DataDescription',
            ti: '.DataDescriptionType',
            t: 'er'
          }, {
            n: 'input',
            rq: true,
            col: true,
            en: 'Input',
            ti: '.InputDescriptionType'
          }, {
            n: 'minOccurs',
            ti: 'NonNegativeInteger',
            an: {
              lp: 'minOccurs'
            },
            t: 'a'
          }, {
            n: 'maxOccurs',
            an: {
              lp: 'maxOccurs'
            },
            t: 'a'
          }]
      }, {
        ln: 'GetStatus',
        tn: null,
        bti: '.RequestBaseType',
        ps: [{
            n: 'jobID',
            rq: true,
            en: 'JobID'
          }]
      }, {
        ln: 'ProcessSummaryType',
        bti: '.DescriptionType',
        ps: [{
            n: 'jobControlOptions',
            rq: true,
            ti: {
              t: 'l'
            },
            an: {
              lp: 'jobControlOptions'
            },
            t: 'a'
          }, {
            n: 'outputTransmission',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'outputTransmission'
            },
            t: 'a'
          }, {
            n: 'processVersion',
            an: {
              lp: 'processVersion'
            },
            t: 'a'
          }, {
            n: 'processModel',
            an: {
              lp: 'processModel'
            },
            t: 'a'
          }]
      }, {
        ln: 'LiteralDataDomainType',
        ps: [{
            n: 'allowedValues',
            rq: true,
            en: {
              lp: 'AllowedValues',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            ti: 'OWS_2_0.AllowedValues'
          }, {
            n: 'anyValue',
            rq: true,
            en: {
              lp: 'AnyValue',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            ti: 'OWS_2_0.AnyValue'
          }, {
            n: 'valuesReference',
            rq: true,
            en: {
              lp: 'ValuesReference',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            ti: 'OWS_2_0.ValuesReference'
          }, {
            n: 'dataType',
            en: {
              lp: 'DataType',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            ti: 'OWS_2_0.DomainMetadataType'
          }, {
            n: 'uom',
            en: {
              lp: 'UOM',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            ti: 'OWS_2_0.DomainMetadataType'
          }, {
            n: 'defaultValue',
            en: {
              lp: 'DefaultValue',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            ti: 'OWS_2_0.ValueType'
          }]
      }, {
        ln: 'GetResult',
        tn: null,
        bti: '.RequestBaseType',
        ps: [{
            n: 'jobID',
            rq: true,
            en: 'JobID'
          }]
      }, {
        ln: 'StatusInfo',
        tn: null,
        ps: [{
            n: 'jobID',
            rq: true,
            en: 'JobID'
          }, {
            n: 'status',
            rq: true,
            en: 'Status'
          }, {
            n: 'expirationDate',
            en: 'ExpirationDate',
            ti: 'DateTime'
          }, {
            n: 'estimatedCompletion',
            en: 'EstimatedCompletion',
            ti: 'DateTime'
          }, {
            n: 'nextPoll',
            en: 'NextPoll',
            ti: 'DateTime'
          }, {
            n: 'percentCompleted',
            en: 'PercentCompleted',
            ti: 'Int'
          }]
      }, {
        ln: 'DataInputType',
        ps: [{
            n: 'data',
            rq: true,
            en: 'Data',
            ti: '.Data'
          }, {
            n: 'reference',
            rq: true,
            en: 'Reference',
            ti: '.ReferenceType'
          }, {
            n: 'input',
            rq: true,
            col: true,
            en: 'Input',
            ti: '.DataInputType'
          }, {
            n: 'id',
            rq: true,
            an: {
              lp: 'id'
            },
            t: 'a'
          }]
      }, {
        ln: 'SupportedCRS',
        tn: null,
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: '_default',
            ti: 'Boolean',
            an: {
              lp: 'default'
            },
            t: 'a'
          }]
      }, {
        ln: 'LiteralDataType.LiteralDataDomain',
        tn: null,
        bti: '.LiteralDataDomainType',
        ps: [{
            n: '_default',
            ti: 'Boolean',
            an: {
              lp: 'default'
            },
            t: 'a'
          }]
      }, {
        ln: 'Result',
        tn: null,
        ps: [{
            n: 'jobID',
            en: 'JobID'
          }, {
            n: 'expirationDate',
            en: 'ExpirationDate',
            ti: 'DateTime'
          }, {
            n: 'output',
            rq: true,
            col: true,
            en: 'Output',
            ti: '.DataOutputType'
          }]
      }, {
        ln: 'ProcessDescriptionType',
        bti: '.DescriptionType',
        ps: [{
            n: 'input',
            mno: 0,
            col: true,
            en: 'Input',
            ti: '.InputDescriptionType'
          }, {
            n: 'output',
            rq: true,
            col: true,
            en: 'Output',
            ti: '.OutputDescriptionType'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }]
      }, {
        ln: 'GenericOutputType',
        bti: '.DescriptionType',
        ps: [{
            n: 'output',
            mno: 0,
            col: true,
            en: 'Output',
            ti: '.GenericOutputType'
          }]
      }, {
        ln: 'LiteralDataType',
        bti: '.DataDescriptionType',
        ps: [{
            n: 'literalDataDomain',
            rq: true,
            col: true,
            en: {
              lp: 'LiteralDataDomain'
            },
            ti: '.LiteralDataType.LiteralDataDomain'
          }]
      }, {
        ln: 'ReferenceType',
        ps: [{
            n: 'body',
            rq: true,
            en: 'Body',
            ti: 'AnyType'
          }, {
            n: 'bodyReference',
            rq: true,
            en: 'BodyReference',
            ti: '.ReferenceType.BodyReference'
          }, {
            n: 'href',
            rq: true,
            an: {
              lp: 'href',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'mimeType',
            an: {
              lp: 'mimeType'
            },
            t: 'a'
          }, {
            n: 'encoding',
            an: {
              lp: 'encoding'
            },
            t: 'a'
          }, {
            n: 'schema',
            an: {
              lp: 'schema'
            },
            t: 'a'
          }]
      }, {
        ln: 'LiteralValue',
        tn: null,
        bti: 'OWS_2_0.ValueType',
        ps: [{
            n: 'dataType',
            an: {
              lp: 'dataType'
            },
            t: 'a'
          }, {
            n: 'uom',
            an: {
              lp: 'uom'
            },
            t: 'a'
          }]
      }, {
        ln: 'OutputDescriptionType',
        bti: '.DescriptionType',
        ps: [{
            n: 'dataDescription',
            rq: true,
            mx: false,
            dom: false,
            en: 'DataDescription',
            ti: '.DataDescriptionType',
            t: 'er'
          }, {
            n: 'output',
            rq: true,
            col: true,
            en: 'Output',
            ti: '.OutputDescriptionType'
          }]
      }, {
        ln: 'DescriptionType',
        bti: 'OWS_2_0.BasicIdentificationType'
      }, {
        ln: 'ProcessOfferings',
        tn: null,
        ps: [{
            n: 'processOffering',
            rq: true,
            col: true,
            en: 'ProcessOffering',
            ti: '.ProcessOffering'
          }]
      }, {
        ln: 'Format',
        tn: null,
        ps: [{
            n: 'mimeType',
            an: {
              lp: 'mimeType'
            },
            t: 'a'
          }, {
            n: 'encoding',
            an: {
              lp: 'encoding'
            },
            t: 'a'
          }, {
            n: 'schema',
            an: {
              lp: 'schema'
            },
            t: 'a'
          }, {
            n: 'maximumMegabytes',
            ti: 'PositiveInteger',
            an: {
              lp: 'maximumMegabytes'
            },
            t: 'a'
          }, {
            n: '_default',
            ti: 'Boolean',
            an: {
              lp: 'default'
            },
            t: 'a'
          }]
      }, {
        ln: 'GenericInputType',
        bti: '.DescriptionType',
        ps: [{
            n: 'input',
            mno: 0,
            col: true,
            en: 'Input',
            ti: '.GenericInputType'
          }, {
            n: 'minOccurs',
            ti: 'NonNegativeInteger',
            an: {
              lp: 'minOccurs'
            },
            t: 'a'
          }, {
            n: 'maxOccurs',
            an: {
              lp: 'maxOccurs'
            },
            t: 'a'
          }]
      }, {
        ln: 'BoundingBoxData',
        tn: null,
        bti: '.DataDescriptionType',
        ps: [{
            n: 'supportedCRS',
            rq: true,
            col: true,
            en: 'SupportedCRS',
            ti: '.SupportedCRS'
          }]
      }, {
        ln: 'DataOutputType',
        ps: [{
            n: 'data',
            rq: true,
            en: 'Data',
            ti: '.Data'
          }, {
            n: 'reference',
            rq: true,
            en: 'Reference',
            ti: '.ReferenceType'
          }, {
            n: 'output',
            rq: true,
            en: 'Output',
            ti: '.DataOutputType'
          }, {
            n: 'id',
            rq: true,
            an: {
              lp: 'id'
            },
            t: 'a'
          }]
      }, {
        ln: 'GenericProcessType',
        bti: '.DescriptionType',
        ps: [{
            n: 'input',
            mno: 0,
            col: true,
            en: 'Input',
            ti: '.GenericInputType'
          }, {
            n: 'output',
            rq: true,
            col: true,
            en: 'Output',
            ti: '.GenericOutputType'
          }]
      }, {
        ln: 'Dismiss',
        tn: null,
        bti: '.RequestBaseType',
        ps: [{
            n: 'jobID',
            rq: true,
            en: 'JobID'
          }]
      }, {
        ln: 'WPSCapabilitiesType.Extension',
        tn: null,
        ps: [{
            n: 'any',
            mno: 0,
            col: true,
            mx: false,
            t: 'ae'
          }]
      }, {
        ln: 'ReferenceType.BodyReference',
        tn: null,
        ps: [{
            n: 'href',
            rq: true,
            an: {
              lp: 'href',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }]
      }, {
        ln: 'RequestBaseType',
        ps: [{
            n: 'extension',
            mno: 0,
            col: true,
            en: 'Extension',
            ti: 'AnyType'
          }, {
            n: 'service',
            rq: true,
            an: {
              lp: 'service'
            },
            t: 'a'
          }, {
            n: 'version',
            rq: true,
            an: {
              lp: 'version'
            },
            t: 'a'
          }]
      }, {
        ln: 'Data',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            col: true,
            t: 'ae'
          }, {
            n: 'mimeType',
            an: {
              lp: 'mimeType'
            },
            t: 'a'
          }, {
            n: 'encoding',
            an: {
              lp: 'encoding'
            },
            t: 'a'
          }, {
            n: 'schema',
            an: {
              lp: 'schema'
            },
            t: 'a'
          }]
      }, {
        ln: 'OutputDefinitionType',
        ps: [{
            n: 'output',
            en: 'Output',
            ti: '.OutputDefinitionType'
          }, {
            n: 'id',
            rq: true,
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'transmission',
            an: {
              lp: 'transmission'
            },
            t: 'a'
          }, {
            n: 'mimeType',
            an: {
              lp: 'mimeType'
            },
            t: 'a'
          }, {
            n: 'encoding',
            an: {
              lp: 'encoding'
            },
            t: 'a'
          }, {
            n: 'schema',
            an: {
              lp: 'schema'
            },
            t: 'a'
          }]
      }, {
        ln: 'Contents',
        tn: null,
        ps: [{
            n: 'processSummary',
            rq: true,
            col: true,
            en: 'ProcessSummary',
            ti: '.ProcessSummaryType'
          }]
      }, {
        ln: 'ProcessOffering',
        tn: null,
        ps: [{
            n: 'process',
            rq: true,
            en: 'Process',
            ti: '.ProcessDescriptionType'
          }, {
            n: 'any',
            rq: true,
            mx: false,
            t: 'ae'
          }, {
            n: 'jobControlOptions',
            rq: true,
            ti: {
              t: 'l'
            },
            an: {
              lp: 'jobControlOptions'
            },
            t: 'a'
          }, {
            n: 'outputTransmission',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'outputTransmission'
            },
            t: 'a'
          }, {
            n: 'processVersion',
            an: {
              lp: 'processVersion'
            },
            t: 'a'
          }, {
            n: 'processModel',
            an: {
              lp: 'processModel'
            },
            t: 'a'
          }]
      }, {
        ln: 'DescribeProcess',
        tn: null,
        bti: '.RequestBaseType',
        ps: [{
            n: 'identifier',
            rq: true,
            col: true,
            en: {
              lp: 'Identifier',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            ti: 'OWS_2_0.CodeType'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }]
      }, {
        ln: 'DataDescriptionType',
        ps: [{
            n: 'format',
            rq: true,
            col: true,
            en: 'Format',
            ti: '.Format'
          }]
      }, {
        t: 'enum',
        ln: 'DataTransmissionModeType',
        vs: ['value', 'reference']
      }],
    eis: [{
        en: 'GetResult',
        ti: '.GetResult'
      }, {
        en: 'StatusInfo',
        ti: '.StatusInfo'
      }, {
        en: 'Capabilities',
        ti: '.WPSCapabilitiesType'
      }, {
        en: 'LiteralValue',
        ti: '.LiteralValue'
      }, {
        en: 'ComplexData',
        ti: '.ComplexDataType',
        sh: 'DataDescription'
      }, {
        en: 'Result',
        ti: '.Result'
      }, {
        en: 'GenericProcess',
        ti: '.GenericProcessType'
      }, {
        en: 'Format',
        ti: '.Format'
      }, {
        en: 'Dismiss',
        ti: '.Dismiss'
      }, {
        en: 'Reference',
        ti: '.ReferenceType'
      }, {
        en: 'DescribeProcess',
        ti: '.DescribeProcess'
      }, {
        en: 'BoundingBoxData',
        ti: '.BoundingBoxData',
        sh: 'DataDescription'
      }, {
        en: 'ProcessOfferings',
        ti: '.ProcessOfferings'
      }, {
        en: 'ProcessOffering',
        ti: '.ProcessOffering'
      }, {
        en: 'Data',
        ti: '.Data'
      }, {
        en: 'SupportedCRS',
        ti: '.SupportedCRS'
      }, {
        en: 'DataDescription',
        ti: '.DataDescriptionType'
      }, {
        en: 'Execute',
        ti: '.ExecuteRequestType'
      }, {
        en: 'GetStatus',
        ti: '.GetStatus'
      }, {
        en: 'Contents',
        ti: '.Contents'
      }, {
        en: 'JobID'
      }, {
        en: 'LiteralData',
        ti: '.LiteralDataType',
        sh: 'DataDescription'
      }, {
        en: 'ExpirationDate',
        ti: 'DateTime'
      }, {
        en: 'GetCapabilities',
        ti: '.GetCapabilitiesType'
      }, {
        en: 'Process',
        ti: '.ProcessDescriptionType'
      }]
  };
  return {
    WPS_2_0: WPS_2_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], WPS_2_0_Module_Factory);
}
else {
  var WPS_2_0_Module = WPS_2_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.WPS_2_0 = WPS_2_0_Module.WPS_2_0;
  }
  else {
    var WPS_2_0 = WPS_2_0_Module.WPS_2_0;
  }
}