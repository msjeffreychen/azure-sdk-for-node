/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ServiceManifest class.
 * @constructor
 * The manifest of the service
 * @member {string} [manifest]
 * 
 */
function ServiceManifest() {
}

/**
 * Defines the metadata of ServiceManifest
 *
 * @returns {object} metadata of ServiceManifest
 *
 */
ServiceManifest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ServiceManifest',
    type: {
      name: 'Composite',
      className: 'ServiceManifest',
      modelProperties: {
        manifest: {
          required: false,
          serializedName: 'Manifest',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ServiceManifest;
