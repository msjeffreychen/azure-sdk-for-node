// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlsrg01';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls3113?api-version=2016-11-01', '*')
  .reply(201, "{\"properties\":{\"provisioningState\":\"Creating\",\"state\":null,\"endpoint\":null,\"accountId\":\"b8dfd0da-1be0-4a39-b60d-6b60234a5d13\",\"creationTime\":null,\"lastModifiedTime\":null},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls3113\",\"name\":\"xplattestadls3113\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '471',
  'content-type': 'application/json',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourcegroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls3113/operationresults/0?api-version=2016-11-01',
  'retry-after': '10',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/locations/eastus2/operationResults/b8dfd0da-1be0-4a39-b60d-6b60234a5d130?api-version=2016-11-01&expanded=true',
  'x-ms-request-id': 'a0f08393-fadc-451b-b3b9-541ede55ed45',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'ae4f8671-2820-4d8d-8204-0d71f4f5a66e',
  'x-ms-routing-request-id': 'WESTUS2:20161111T215510Z:ae4f8671-2820-4d8d-8204-0d71f4f5a66e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 11 Nov 2016 21:55:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls3113?api-version=2016-11-01', '*')
  .reply(201, "{\"properties\":{\"provisioningState\":\"Creating\",\"state\":null,\"endpoint\":null,\"accountId\":\"b8dfd0da-1be0-4a39-b60d-6b60234a5d13\",\"creationTime\":null,\"lastModifiedTime\":null},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls3113\",\"name\":\"xplattestadls3113\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '471',
  'content-type': 'application/json',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourcegroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls3113/operationresults/0?api-version=2016-11-01',
  'retry-after': '10',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/locations/eastus2/operationResults/b8dfd0da-1be0-4a39-b60d-6b60234a5d130?api-version=2016-11-01&expanded=true',
  'x-ms-request-id': 'a0f08393-fadc-451b-b3b9-541ede55ed45',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'ae4f8671-2820-4d8d-8204-0d71f4f5a66e',
  'x-ms-routing-request-id': 'WESTUS2:20161111T215510Z:ae4f8671-2820-4d8d-8204-0d71f4f5a66e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 11 Nov 2016 21:55:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/locations/eastus2/operationResults/b8dfd0da-1be0-4a39-b60d-6b60234a5d130?api-version=2016-11-01&expanded=true')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c33ad754-ea85-4053-9a25-cb2915d940a4',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '7f083086-7e55-456f-a584-12104365964d',
  'x-ms-routing-request-id': 'WESTUS2:20161111T215541Z:7f083086-7e55-456f-a584-12104365964d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 11 Nov 2016 21:55:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/locations/eastus2/operationResults/b8dfd0da-1be0-4a39-b60d-6b60234a5d130?api-version=2016-11-01&expanded=true')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c33ad754-ea85-4053-9a25-cb2915d940a4',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '7f083086-7e55-456f-a584-12104365964d',
  'x-ms-routing-request-id': 'WESTUS2:20161111T215541Z:7f083086-7e55-456f-a584-12104365964d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 11 Nov 2016 21:55:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls3113?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"trustedIdProviderState\":\"Disabled\",\"trustedIdProviders\":[],\"encryptionState\":\"Enabled\",\"encryptionConfig\":{\"type\":\"ServiceManaged\"},\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls3113.azuredatalakestore.net\",\"accountId\":\"b8dfd0da-1be0-4a39-b60d-6b60234a5d13\",\"creationTime\":\"2016-11-11T21:55:15.0555195Z\",\"lastModifiedTime\":\"2016-11-11T21:55:15.0555195Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls3113\",\"name\":\"xplattestadls3113\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '745',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c0fe2246-6e28-40d9-b9c0-bb29f25e0009',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'efe19fd6-4442-4a6c-9d80-334651d16aa9',
  'x-ms-routing-request-id': 'WESTUS2:20161111T215541Z:efe19fd6-4442-4a6c-9d80-334651d16aa9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 11 Nov 2016 21:55:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls3113?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"trustedIdProviderState\":\"Disabled\",\"trustedIdProviders\":[],\"encryptionState\":\"Enabled\",\"encryptionConfig\":{\"type\":\"ServiceManaged\"},\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls3113.azuredatalakestore.net\",\"accountId\":\"b8dfd0da-1be0-4a39-b60d-6b60234a5d13\",\"creationTime\":\"2016-11-11T21:55:15.0555195Z\",\"lastModifiedTime\":\"2016-11-11T21:55:15.0555195Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls3113\",\"name\":\"xplattestadls3113\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '745',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c0fe2246-6e28-40d9-b9c0-bb29f25e0009',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'efe19fd6-4442-4a6c-9d80-334651d16aa9',
  'x-ms-routing-request-id': 'WESTUS2:20161111T215541Z:efe19fd6-4442-4a6c-9d80-334651d16aa9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 11 Nov 2016 21:55:40 GMT',
  connection: 'close' });
 return result; }]];