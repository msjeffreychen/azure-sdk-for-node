/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ServiceGroupMemberDescription class.
 * @constructor
 * The description of the service group member
 * @member {string} [serviceName]
 * 
 * @member {string} [serviceTypeName]
 * 
 * @member {string} [serviceKind] Possible values include: 'Invalid',
 * 'Stateless', 'Stateful'
 * 
 */
function ServiceGroupMemberDescription() {
}

/**
 * Defines the metadata of ServiceGroupMemberDescription
 *
 * @returns {object} metadata of ServiceGroupMemberDescription
 *
 */
ServiceGroupMemberDescription.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ServiceGroupMemberDescription',
    type: {
      name: 'Composite',
      className: 'ServiceGroupMemberDescription',
      modelProperties: {
        serviceName: {
          required: false,
          serializedName: 'ServiceName',
          type: {
            name: 'String'
          }
        },
        serviceTypeName: {
          required: false,
          serializedName: 'ServiceTypeName',
          type: {
            name: 'String'
          }
        },
        serviceKind: {
          required: false,
          serializedName: 'ServiceKind',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ServiceGroupMemberDescription;