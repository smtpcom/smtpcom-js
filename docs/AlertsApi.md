# SmtpPublicApiOverview.AlertsApi

All URIs are relative to *https://api.smtp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v4AlertsAlertIdDelete**](AlertsApi.md#v4AlertsAlertIdDelete) | **DELETE** /v4/alerts/{alert_id} | Delete Alert
[**v4AlertsAlertIdGet**](AlertsApi.md#v4AlertsAlertIdGet) | **GET** /v4/alerts/{alert_id} | Get Alert Details
[**v4AlertsAlertIdPatch**](AlertsApi.md#v4AlertsAlertIdPatch) | **PATCH** /v4/alerts/{alert_id} | Update Alert Details
[**v4AlertsGet**](AlertsApi.md#v4AlertsGet) | **GET** /v4/alerts/ | List All Allerts
[**v4AlertsPost**](AlertsApi.md#v4AlertsPost) | **POST** /v4/alerts/ | Create New Alert



## v4AlertsAlertIdDelete

> StatusResponse v4AlertsAlertIdDelete(alertId)

Delete Alert

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

let apiInstance = new SmtpPublicApiOverview.AlertsApi();
let alertId = "alertId_example"; // String | Id of a given alert
apiInstance.v4AlertsAlertIdDelete(alertId, (error, data, response) => {
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
 **alertId** | **String**| Id of a given alert | 

### Return type

[**StatusResponse**](StatusResponse.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v4AlertsAlertIdGet

> GetAlertDetails v4AlertsAlertIdGet(alertId)

Get Alert Details

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

let apiInstance = new SmtpPublicApiOverview.AlertsApi();
let alertId = "alertId_example"; // String | Id of a given alert
apiInstance.v4AlertsAlertIdGet(alertId, (error, data, response) => {
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
 **alertId** | **String**| Id of a given alert | 

### Return type

[**GetAlertDetails**](GetAlertDetails.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v4AlertsAlertIdPatch

> StatusResponse v4AlertsAlertIdPatch(alertId, opts)

Update Alert Details

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

let apiInstance = new SmtpPublicApiOverview.AlertsApi();
let alertId = "alertId_example"; // String | Id of a given alert
let opts = {
  'threshold': 3.4 // Number | A number which represents a percentage of an account’s monthly quota. Must be decimal between 0 and 1
};
apiInstance.v4AlertsAlertIdPatch(alertId, opts, (error, data, response) => {
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
 **alertId** | **String**| Id of a given alert | 
 **threshold** | **Number**| A number which represents a percentage of an account’s monthly quota. Must be decimal between 0 and 1 | [optional] 

### Return type

[**StatusResponse**](StatusResponse.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v4AlertsGet

> GetAlertResponse v4AlertsGet()

List All Allerts

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

let apiInstance = new SmtpPublicApiOverview.AlertsApi();
apiInstance.v4AlertsGet((error, data, response) => {
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

[**GetAlertResponse**](GetAlertResponse.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v4AlertsPost

> StatusResponse v4AlertsPost(type, opts)

Create New Alert

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

let apiInstance = new SmtpPublicApiOverview.AlertsApi();
let type = "type_example"; // String | An alert’s type. Currently only “monthly_quota” is supported
let opts = {
  'threshold': 3.4 // Number | A number which represents a percentage of an account’s monthly quota. Must be decimal between 0 and 1
};
apiInstance.v4AlertsPost(type, opts, (error, data, response) => {
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
 **type** | **String**| An alert’s type. Currently only “monthly_quota” is supported | 
 **threshold** | **Number**| A number which represents a percentage of an account’s monthly quota. Must be decimal between 0 and 1 | [optional] 

### Return type

[**StatusResponse**](StatusResponse.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

