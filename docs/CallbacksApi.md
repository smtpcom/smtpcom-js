# SmtpPublicApiOverview.CallbacksApi

All URIs are relative to *https://api.smtp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v4CallbacksDelete**](CallbacksApi.md#v4CallbacksDelete) | **DELETE** /v4/callbacks/ | Delete All Callbacks
[**v4CallbacksEventDelete**](CallbacksApi.md#v4CallbacksEventDelete) | **DELETE** /v4/callbacks/{event} | Delete Callback
[**v4CallbacksEventGet**](CallbacksApi.md#v4CallbacksEventGet) | **GET** /v4/callbacks/{event} | Get Callback Details
[**v4CallbacksEventPatch**](CallbacksApi.md#v4CallbacksEventPatch) | **PATCH** /v4/callbacks/{event} | Update Callback Details
[**v4CallbacksEventPost**](CallbacksApi.md#v4CallbacksEventPost) | **POST** /v4/callbacks/{event} | Create Callback
[**v4CallbacksGet**](CallbacksApi.md#v4CallbacksGet) | **GET** /v4/callbacks/ | List All Callbacks
[**v4CallbacksLogGet**](CallbacksApi.md#v4CallbacksLogGet) | **GET** /v4/callbacks/log | View Callback Logs



## v4CallbacksDelete

> StatusResponse v4CallbacksDelete()

Delete All Callbacks

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

let apiInstance = new SmtpPublicApiOverview.CallbacksApi();
apiInstance.v4CallbacksDelete((error, data, response) => {
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

[**StatusResponse**](StatusResponse.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v4CallbacksEventDelete

> StatusResponse v4CallbacksEventDelete(event, channel)

Delete Callback

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

let apiInstance = new SmtpPublicApiOverview.CallbacksApi();
let event = "event_example"; // String | Event for which the callback has been created. Valid types are:  * delivered -  message delivered * failed - message bounced * complained - complaint received * bounceback - bounce back notification received * received - message received by our system * queued - message in queue (transient) * hard_bounced - hard bounce received * opened - message opened * clicked - URL in message clicked * unsubscribed - unsubscribe received 
let channel = "channel_example"; // String | Name of the channel for which the callback has been created
apiInstance.v4CallbacksEventDelete(event, channel, (error, data, response) => {
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
 **event** | **String**| Event for which the callback has been created. Valid types are:  * delivered -  message delivered * failed - message bounced * complained - complaint received * bounceback - bounce back notification received * received - message received by our system * queued - message in queue (transient) * hard_bounced - hard bounce received * opened - message opened * clicked - URL in message clicked * unsubscribed - unsubscribe received  | 
 **channel** | **String**| Name of the channel for which the callback has been created | 

### Return type

[**StatusResponse**](StatusResponse.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v4CallbacksEventGet

> GetCallbackDetails v4CallbacksEventGet(event, channel)

Get Callback Details

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

let apiInstance = new SmtpPublicApiOverview.CallbacksApi();
let event = "event_example"; // String | Event for which the callback has been created. Valid types are:  * delivered -  message delivered * failed - message bounced * complained - complaint received * bounceback - bounce back notification received * received - message received by our system * queued - message in queue (transient) * hard_bounced - hard bounce received * opened - message opened * clicked - URL in message clicked * unsubscribed - unsubscribe received 
let channel = "channel_example"; // String | Name of the channel for which the callback has been created
apiInstance.v4CallbacksEventGet(event, channel, (error, data, response) => {
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
 **event** | **String**| Event for which the callback has been created. Valid types are:  * delivered -  message delivered * failed - message bounced * complained - complaint received * bounceback - bounce back notification received * received - message received by our system * queued - message in queue (transient) * hard_bounced - hard bounce received * opened - message opened * clicked - URL in message clicked * unsubscribed - unsubscribe received  | 
 **channel** | **String**| Name of the channel for which the callback has been created | 

### Return type

[**GetCallbackDetails**](GetCallbackDetails.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v4CallbacksEventPatch

> StatusResponse v4CallbacksEventPatch(event, channel, opts)

Update Callback Details

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

let apiInstance = new SmtpPublicApiOverview.CallbacksApi();
let event = "event_example"; // String | Event for which the callback should be created. Valid types are:  * delivered -  message delivered * failed - message bounced * complained - complaint received * bounceback - bounce back notification received * received - message received by our system * queued - message in queue (transient) * hard_bounced - hard bounce received * opened - message opened * clicked - URL in message clicked * unsubscribed - unsubscribe received 
let channel = "channel_example"; // String | Name of the channel for which the callback has been created
let opts = {
  'medium': "medium_example", // String | Medium by which the callback data is sent. Possible values are one of:   * http   * aws 
  'address': "address_example", // String | Address to which the callback data is sent. This will be either a URL for http-based callbacks or the Amazon SQS queue name for SQS-based callbacks
  'awsData': "awsData_example" // String | Amazon SQS settings. ``` {key:string, secret:string} ``` must be provided if medium is of type sqs 
};
apiInstance.v4CallbacksEventPatch(event, channel, opts, (error, data, response) => {
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
 **event** | **String**| Event for which the callback should be created. Valid types are:  * delivered -  message delivered * failed - message bounced * complained - complaint received * bounceback - bounce back notification received * received - message received by our system * queued - message in queue (transient) * hard_bounced - hard bounce received * opened - message opened * clicked - URL in message clicked * unsubscribed - unsubscribe received  | 
 **channel** | **String**| Name of the channel for which the callback has been created | 
 **medium** | **String**| Medium by which the callback data is sent. Possible values are one of:   * http   * aws  | [optional] 
 **address** | **String**| Address to which the callback data is sent. This will be either a URL for http-based callbacks or the Amazon SQS queue name for SQS-based callbacks | [optional] 
 **awsData** | **String**| Amazon SQS settings. &#x60;&#x60;&#x60; {key:string, secret:string} &#x60;&#x60;&#x60; must be provided if medium is of type sqs  | [optional] 

### Return type

[**StatusResponse**](StatusResponse.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v4CallbacksEventPost

> CreateCallbackResponse v4CallbacksEventPost(event, channel, medium, address, opts)

Create Callback

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

let apiInstance = new SmtpPublicApiOverview.CallbacksApi();
let event = "event_example"; // String | Event for which the callback should be created. Valid types are:  * delivered -  message delivered * failed - message bounced * complained - complaint received * bounceback - bounce back notification received * received - message received by our system * queued - message in queue (transient) * hard_bounced - hard bounce received * opened - message opened * clicked - URL in message clicked * unsubscribed - unsubscribe received 
let channel = "channel_example"; // String | Name of the channel for which the callback has been created.
let medium = "medium_example"; // String | Medium to send callback data. Valid values are one of:   * http   * sqs 
let address = "address_example"; // String | Address of where the callback data should be sent. This will be either a URL for http-based callbacks or the Amazon SQS queue name for SQS-based callbacks.
let opts = {
  'awsData': "awsData_example" // String | Amazon SQS settings. ``` {key:string, secret:string} ``` must be provided if medium is of type sqs 
};
apiInstance.v4CallbacksEventPost(event, channel, medium, address, opts, (error, data, response) => {
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
 **event** | **String**| Event for which the callback should be created. Valid types are:  * delivered -  message delivered * failed - message bounced * complained - complaint received * bounceback - bounce back notification received * received - message received by our system * queued - message in queue (transient) * hard_bounced - hard bounce received * opened - message opened * clicked - URL in message clicked * unsubscribed - unsubscribe received  | 
 **channel** | **String**| Name of the channel for which the callback has been created. | 
 **medium** | **String**| Medium to send callback data. Valid values are one of:   * http   * sqs  | 
 **address** | **String**| Address of where the callback data should be sent. This will be either a URL for http-based callbacks or the Amazon SQS queue name for SQS-based callbacks. | 
 **awsData** | **String**| Amazon SQS settings. &#x60;&#x60;&#x60; {key:string, secret:string} &#x60;&#x60;&#x60; must be provided if medium is of type sqs  | [optional] 

### Return type

[**CreateCallbackResponse**](CreateCallbackResponse.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v4CallbacksGet

> GetCallbackResponse v4CallbacksGet()

List All Callbacks

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

let apiInstance = new SmtpPublicApiOverview.CallbacksApi();
apiInstance.v4CallbacksGet((error, data, response) => {
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

[**GetCallbackResponse**](GetCallbackResponse.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v4CallbacksLogGet

> GetCallbackLogs v4CallbacksLogGet(channel, opts)

View Callback Logs

Review all callback logs for a specific channel. It may help debug issues related to receiving callbacks on a user&#39;s side.

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

let apiInstance = new SmtpPublicApiOverview.CallbacksApi();
let channel = "channel_example"; // String | Name of the channel for which the given callback has been created
let opts = {
  'limit': 56 // Number | Number of items to return in the response. Default is 20
};
apiInstance.v4CallbacksLogGet(channel, opts, (error, data, response) => {
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
 **channel** | **String**| Name of the channel for which the given callback has been created | 
 **limit** | **Number**| Number of items to return in the response. Default is 20 | [optional] 

### Return type

[**GetCallbackLogs**](GetCallbackLogs.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

