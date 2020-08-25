# SmtpPublicApiOverview.APIKeysApi

All URIs are relative to *https://api.smtp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAPIKey**](APIKeysApi.md#getAPIKey) | **GET** /v4/api_keys/{api_key} | Get API Key Details
[**v4ApiKeysApiKeyDelete**](APIKeysApi.md#v4ApiKeysApiKeyDelete) | **DELETE** /v4/api_keys/{api_key} | Delete an API Key
[**v4ApiKeysApiKeyPatch**](APIKeysApi.md#v4ApiKeysApiKeyPatch) | **PATCH** /v4/api_keys/{api_key} | Update API Key
[**v4ApiKeysGet**](APIKeysApi.md#v4ApiKeysGet) | **GET** /v4/api_keys/ | List All API Keys
[**v4ApiKeysPost**](APIKeysApi.md#v4ApiKeysPost) | **POST** /v4/api_keys/ | Create a New API Key



## getAPIKey

> APIKey getAPIKey(apiKey)

Get API Key Details

### Example

```javascript
import SmtpPublicApiOverview from 'smtp_public_api_overview';
let defaultClient = SmtpPublicApiOverview.ApiClient.instance;
// Configure API key authorization: apiID
let apiID = defaultClient.authentications['apiID'];
apiID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiID.apiKeyPrefix = 'Token';
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SmtpPublicApiOverview.APIKeysApi();
let apiKey = "apiKey_example"; // String | API Key Identificator.
apiInstance.getAPIKey(apiKey, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| API Key Identificator. | 

### Return type

[**APIKey**](APIKey.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v4ApiKeysApiKeyDelete

> StatusResponse v4ApiKeysApiKeyDelete(apiKey)

Delete an API Key

### Example

```javascript
import SmtpPublicApiOverview from 'smtp_public_api_overview';
let defaultClient = SmtpPublicApiOverview.ApiClient.instance;
// Configure API key authorization: apiID
let apiID = defaultClient.authentications['apiID'];
apiID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiID.apiKeyPrefix = 'Token';
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SmtpPublicApiOverview.APIKeysApi();
let apiKey = "apiKey_example"; // String | API key value
apiInstance.v4ApiKeysApiKeyDelete(apiKey, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| API key value | 

### Return type

[**StatusResponse**](StatusResponse.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v4ApiKeysApiKeyPatch

> APIKey v4ApiKeysApiKeyPatch(apiKey, opts)

Update API Key

### Example

```javascript
import SmtpPublicApiOverview from 'smtp_public_api_overview';
let defaultClient = SmtpPublicApiOverview.ApiClient.instance;
// Configure API key authorization: apiID
let apiID = defaultClient.authentications['apiID'];
apiID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiID.apiKeyPrefix = 'Token';
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SmtpPublicApiOverview.APIKeysApi();
let apiKey = "apiKey_example"; // String | API key value
let opts = {
  'name': "name_example", // String | Name for API key
  'description': "description_example" // String | Description for API Key
};
apiInstance.v4ApiKeysApiKeyPatch(apiKey, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| API key value | 
 **name** | **String**| Name for API key | [optional] 
 **description** | **String**| Description for API Key | [optional] 

### Return type

[**APIKey**](APIKey.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v4ApiKeysGet

> GetApiKeys v4ApiKeysGet()

List All API Keys

### Example

```javascript
import SmtpPublicApiOverview from 'smtp_public_api_overview';
let defaultClient = SmtpPublicApiOverview.ApiClient.instance;
// Configure API key authorization: apiID
let apiID = defaultClient.authentications['apiID'];
apiID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiID.apiKeyPrefix = 'Token';
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SmtpPublicApiOverview.APIKeysApi();
apiInstance.v4ApiKeysGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetApiKeys**](GetApiKeys.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v4ApiKeysPost

> APIKey v4ApiKeysPost(name, opts)

Create a New API Key

### Example

```javascript
import SmtpPublicApiOverview from 'smtp_public_api_overview';
let defaultClient = SmtpPublicApiOverview.ApiClient.instance;
// Configure API key authorization: apiID
let apiID = defaultClient.authentications['apiID'];
apiID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiID.apiKeyPrefix = 'Token';
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SmtpPublicApiOverview.APIKeysApi();
let name = "name_example"; // String | Name for API key
let opts = {
  'description': "description_example" // String | Description for API key
};
apiInstance.v4ApiKeysPost(name, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name for API key | 
 **description** | **String**| Description for API key | [optional] 

### Return type

[**APIKey**](APIKey.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

