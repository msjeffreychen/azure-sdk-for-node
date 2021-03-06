/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

var util = require('util');
var msRest = require('../../../../lib/msRest');
var ServiceClient = msRest.ServiceClient;

var models = require('./models');

/**
 * @class
 * Initializes a new instance of the TestClient class.
 * @constructor
 *
 * @param {string} [baseUri] - The base URI of the service.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {bool} [options.noRetryPolicy] - If set to true, turn off default retry policy
 */
function TestClient(baseUri, options) {
  if (!options) options = {};

  TestClient['super_'].call(this, null, options);
  this.baseUri = baseUri;
  if (!this.baseUri) {
    this.baseUri = 'https://management.azure.com';
  }

  if(!this.acceptLanguage) {
    this.acceptLanguage = 'en-US';
  }
  this.models = models;
  msRest.addSerializationMixin(this);
}

util.inherits(TestClient, ServiceClient);

module.exports = TestClient;
