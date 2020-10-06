# SmtpComApi.ChannelsApi

All URIs are relative to *https://api.smtp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSender**](ChannelsApi.md#getSender) | **GET** /v4/channels/{name} | Get Channel Details
[**v4ChannelsGet**](ChannelsApi.md#v4ChannelsGet) | **GET** /v4/channels/ | Get All Channels
[**v4ChannelsNameDelete**](ChannelsApi.md#v4ChannelsNameDelete) | **DELETE** /v4/channels/{name} | Delete a Channel
[**v4ChannelsNamePatch**](ChannelsApi.md#v4ChannelsNamePatch) | **PATCH** /v4/channels/{name} | Update Channel Details
[**v4ChannelsPost**](ChannelsApi.md#v4ChannelsPost) | **POST** /v4/channels/ | Create a New Channel



## getSender

> Channel getSender(name)

Get Channel Details

**Note:** This method doesn&#39;t return archived channels. 

### Example

```javascript
import SmtpComApi from 'smtpcom';
let defaultClient = SmtpComApi.ApiClient.instance;
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

let apiInstance = new SmtpComApi.ChannelsApi();
let name = "name_example"; // String | Name of the channel (sender)
apiInstance.getSender(name, (error, data, response) => {
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
 **name** | **String**| Name of the channel (sender) | 

### Return type

[**Channel**](Channel.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v4ChannelsGet

> Channels v4ChannelsGet()

Get All Channels

**Note:** This method does not return archived channels. 

### Example

```javascript
import SmtpComApi from 'smtpcom';
let defaultClient = SmtpComApi.ApiClient.instance;
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

let apiInstance = new SmtpComApi.ChannelsApi();
apiInstance.v4ChannelsGet((error, data, response) => {
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

[**Channels**](Channels.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v4ChannelsNameDelete

> Channel v4ChannelsNameDelete(name)

Delete a Channel

**Note:** This method doesn’t permanently delete the channel but rather sets the status to “canceled”. 

### Example

```javascript
import SmtpComApi from 'smtpcom';
let defaultClient = SmtpComApi.ApiClient.instance;
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

let apiInstance = new SmtpComApi.ChannelsApi();
let name = "name_example"; // String | Name of the channel (sender)
apiInstance.v4ChannelsNameDelete(name, (error, data, response) => {
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
 **name** | **String**| Name of the channel (sender) | 

### Return type

[**Channel**](Channel.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v4ChannelsNamePatch

> Channel v4ChannelsNamePatch(name, opts)

Update Channel Details

### Example

```javascript
import SmtpComApi from 'smtpcom';
let defaultClient = SmtpComApi.ApiClient.instance;
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

let apiInstance = new SmtpComApi.ChannelsApi();
let name = "name_example"; // String | Name of the channel (sender)
let opts = {
  'smtpUsername': "smtpUsername_example", // String | Username for the channel
  'smtpPassword': "smtpPassword_example", // String | Password for the channel
  'quota': 56 // Number | Quota for the channel
};
apiInstance.v4ChannelsNamePatch(name, opts, (error, data, response) => {
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
 **name** | **String**| Name of the channel (sender) | 
 **smtpUsername** | **String**| Username for the channel | [optional] 
 **smtpPassword** | **String**| Password for the channel | [optional] 
 **quota** | **Number**| Quota for the channel | [optional] 

### Return type

[**Channel**](Channel.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v4ChannelsPost

> Channel v4ChannelsPost(name, smtpUsername, smtpPassword, quota)

Create a New Channel

### Example

```javascript
import SmtpComApi from 'smtpcom';
let defaultClient = SmtpComApi.ApiClient.instance;
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

let apiInstance = new SmtpComApi.ChannelsApi();
let name = "name_example"; // String | Name of the channel (sender)
let smtpUsername = "smtpUsername_example"; // String | Username for the channel
let smtpPassword = "smtpPassword_example"; // String | Password for the channel
let quota = 56; // Number | Quota for the channel
apiInstance.v4ChannelsPost(name, smtpUsername, smtpPassword, quota, (error, data, response) => {
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
 **name** | **String**| Name of the channel (sender) | 
 **smtpUsername** | **String**| Username for the channel | 
 **smtpPassword** | **String**| Password for the channel | 
 **quota** | **Number**| Quota for the channel | 

### Return type

[**Channel**](Channel.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

