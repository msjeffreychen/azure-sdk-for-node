/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the VirtualNetworkGatewaySku class.
 * @constructor
 * VirtualNetworkGatewaySku details
 * @member {string} [name] Gateway sku name -Basic/HighPerformance/Standard.
 * Possible values for this property include: 'Basic', 'HighPerformance',
 * 'Standard'.
 * 
 * @member {string} [tier] Gateway sku tier -Basic/HighPerformance/Standard.
 * Possible values for this property include: 'Basic', 'HighPerformance',
 * 'Standard'.
 * 
 * @member {number} [capacity] The capacity
 * 
 */
function VirtualNetworkGatewaySku(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.name !== undefined) {
      this.name = parameters.name;
    }
    if (parameters.tier !== undefined) {
      this.tier = parameters.tier;
    }
    if (parameters.capacity !== undefined) {
      this.capacity = parameters.capacity;
    }
  }    
}


/**
 * Validate the payload against the VirtualNetworkGatewaySku schema
 *
 * @param {JSON} payload
 *
 */
VirtualNetworkGatewaySku.prototype.serialize = function () {
  var payload = {};
  if (this['name'] !== null && this['name'] !== undefined) {
    if (typeof this['name'].valueOf() !== 'string') {
      throw new Error('this[\'name\'] must be of type string.');
    }
    payload['name'] = this['name'];
  }

  if (this['tier'] !== null && this['tier'] !== undefined) {
    if (typeof this['tier'].valueOf() !== 'string') {
      throw new Error('this[\'tier\'] must be of type string.');
    }
    payload['tier'] = this['tier'];
  }

  if (this['capacity'] !== null && this['capacity'] !== undefined) {
    if (typeof this['capacity'] !== 'number') {
      throw new Error('this[\'capacity\'] must be of type number.');
    }
    payload['capacity'] = this['capacity'];
  }

  return payload;
};

/**
 * Deserialize the instance to VirtualNetworkGatewaySku schema
 *
 * @param {JSON} instance
 *
 */
VirtualNetworkGatewaySku.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['name'] !== undefined) {
      this['name'] = instance['name'];
    }

    if (instance['tier'] !== undefined) {
      this['tier'] = instance['tier'];
    }

    if (instance['capacity'] !== undefined) {
      this['capacity'] = instance['capacity'];
    }
  }

  return this;
};

module.exports = VirtualNetworkGatewaySku;