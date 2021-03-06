/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the SourceVault class.
 * @constructor
 * The vault id is an Azure Resource Manager Resoure id in the form
 * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}
 *
 * @member {string} [id] Resource Id
 *
 */
function SourceVault() {
}

/**
 * Defines the metadata of SourceVault
 *
 * @returns {object} metadata of SourceVault
 *
 */
SourceVault.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'SourceVault',
    type: {
      name: 'Composite',
      className: 'SourceVault',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = SourceVault;
