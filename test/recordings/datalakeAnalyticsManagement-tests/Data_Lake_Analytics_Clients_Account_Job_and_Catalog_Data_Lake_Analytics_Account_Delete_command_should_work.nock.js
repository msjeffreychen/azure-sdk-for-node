// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla5327?api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': 'ad06e9e3-c8aa-4869-89ca-9fbe9391c2e8',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '8f89af2b-43c9-430f-9305-49f4c2d751c5',
  'x-ms-routing-request-id': 'CENTRALUS:20161111T004037Z:8f89af2b-43c9-430f-9305-49f4c2d751c5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 11 Nov 2016 00:40:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla5327?api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': 'ad06e9e3-c8aa-4869-89ca-9fbe9391c2e8',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '8f89af2b-43c9-430f-9305-49f4c2d751c5',
  'x-ms-routing-request-id': 'CENTRALUS:20161111T004037Z:8f89af2b-43c9-430f-9305-49f4c2d751c5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 11 Nov 2016 00:40:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla5327?api-version=2016-11-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.DataLakeAnalytics/accounts/xplattestadla5327' under resource group 'xplattestadlarg05' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '1fa32851-d009-4946-b9d0-039affb688d1',
  'x-ms-correlation-request-id': '1fa32851-d009-4946-b9d0-039affb688d1',
  'x-ms-routing-request-id': 'CENTRALUS:20161111T004038Z:1fa32851-d009-4946-b9d0-039affb688d1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 11 Nov 2016 00:40:37 GMT',
  connection: 'close',
  'content-length': '175' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla5327?api-version=2016-11-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.DataLakeAnalytics/accounts/xplattestadla5327' under resource group 'xplattestadlarg05' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '1fa32851-d009-4946-b9d0-039affb688d1',
  'x-ms-correlation-request-id': '1fa32851-d009-4946-b9d0-039affb688d1',
  'x-ms-routing-request-id': 'CENTRALUS:20161111T004038Z:1fa32851-d009-4946-b9d0-039affb688d1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 11 Nov 2016 00:40:37 GMT',
  connection: 'close',
  'content-length': '175' });
 return result; }]];