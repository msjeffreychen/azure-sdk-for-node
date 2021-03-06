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

var util = require('util');

/**
 * @class
 * Initializes a new instance of the USqlTableTypeList class.
 * @constructor
 * A Data Lake Analytics catalog U-SQL table type item list.
 *
 */
function USqlTableTypeList() {
}

util.inherits(USqlTableTypeList, Array);

/**
 * Defines the metadata of USqlTableTypeList
 *
 * @returns {object} metadata of USqlTableTypeList
 *
 */
USqlTableTypeList.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'USqlTableTypeList',
    type: {
      name: 'Composite',
      className: 'USqlTableTypeList',
      modelProperties: {
        nextLink: {
          required: false,
          serializedName: 'nextLink',
          type: {
            name: 'String'
          }
        },
        value: {
          required: false,
          readOnly: true,
          serializedName: '',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'USqlTableTypeElementType',
                type: {
                  name: 'Composite',
                  className: 'USqlTableType'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = USqlTableTypeList;
