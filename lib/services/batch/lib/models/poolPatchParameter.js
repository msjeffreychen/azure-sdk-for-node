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

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the PoolPatchParameter class.
 * @constructor
 * @summary The set of changes to be made to a pool.
 *
 * @member {object} [startTask] A task to run on each compute node as it joins
 * the pool. The task runs when the node is added to the pool or when the node
 * is restarted. If omitted, any existing start task is left unchanged.
 * 
 * @member {string} [startTask.commandLine] The command line does not run under
 * a shell, and therefore cannot take advantage of shell features such as
 * environment variable expansion. If you want to take advantage of such
 * features, you should invoke the shell in the command line, for example using
 * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
 * 
 * @member {array} [startTask.resourceFiles]
 * 
 * @member {array} [startTask.environmentSettings]
 * 
 * @member {boolean} [startTask.runElevated]
 * 
 * @member {number} [startTask.maxTaskRetryCount] The Batch service retries a
 * task if its exit code is nonzero. Note that this value specifically controls
 * the number of retries. The Batch service will try the task once, and may
 * then retry up to this limit. For example, if the maximum retry count is 3,
 * Batch tries the task up to 4 times (one initial try and 3 retries). If the
 * maximum retry count is 0, the Batch service does not retry the task. If the
 * maximum retry count is -1, the Batch service retries the task without limit.
 * 
 * @member {boolean} [startTask.waitForSuccess] If true and the start task
 * fails on a compute node, the Batch service retries the start task up to its
 * maximum retry count (maxTaskRetryCount). If the task has still not completed
 * successfully after all retries, then the Batch service marks the compute
 * node unusable, and will not schedule tasks to it. This condition can be
 * detected via the node state and scheduling error detail. If false, the Batch
 * service will not wait for the start task to complete. In this case, other
 * tasks can start executing on the compute node while the start task is still
 * running; and even if the start task fails, new tasks will continue to be
 * scheduled on the node. The default is false.
 * 
 * @member {array} [certificateReferences] A list of certificates to be
 * installed on each compute node in the pool. If omitted, any existing
 * certificate references are left unchanged. For Windows compute nodes, the
 * Batch service installs the certificates to the specified certificate store
 * and location. For Linux compute nodes, the certificates are stored in a
 * directory inside the task working directory and an environment variable
 * AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this
 * location. For certificates with visibility of remoteuser, a certs directory
 * is created in the user's home directory (e.g., /home/<user-name>/certs)
 * where certificates are placed.
 * 
 * @member {array} [applicationPackageReferences] A list of application
 * packages to be installed on each compute node in the pool. Changes to
 * application package references affect all new compute nodes joining the
 * pool, but do not affect compute nodes that are already in the pool until
 * they are rebooted or reimaged. If this element is present, it replaces any
 * existing application package references. If you specify an empty collection,
 * then all application package references are removed from the pool. If
 * omitted, any existing application package references are left unchanged.
 * 
 * @member {array} [metadata] A list of name-value pairs associated with the
 * pool as metadata. If this element is present, it replaces any existing
 * metadata configured on the pool. If you specify an empty collection, any
 * metadata is removed from the pool. If omitted, any existing metadata is left
 * unchanged.
 * 
 */
function PoolPatchParameter() {
}

/**
 * Defines the metadata of PoolPatchParameter
 *
 * @returns {object} metadata of PoolPatchParameter
 *
 */
PoolPatchParameter.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PoolPatchParameter',
    type: {
      name: 'Composite',
      className: 'PoolPatchParameter',
      modelProperties: {
        startTask: {
          required: false,
          serializedName: 'startTask',
          type: {
            name: 'Composite',
            className: 'StartTask'
          }
        },
        certificateReferences: {
          required: false,
          serializedName: 'certificateReferences',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'CertificateReferenceElementType',
                type: {
                  name: 'Composite',
                  className: 'CertificateReference'
                }
            }
          }
        },
        applicationPackageReferences: {
          required: false,
          serializedName: 'applicationPackageReferences',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ApplicationPackageReferenceElementType',
                type: {
                  name: 'Composite',
                  className: 'ApplicationPackageReference'
                }
            }
          }
        },
        metadata: {
          required: false,
          serializedName: 'metadata',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'MetadataItemElementType',
                type: {
                  name: 'Composite',
                  className: 'MetadataItem'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = PoolPatchParameter;