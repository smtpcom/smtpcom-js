# SmtpComApi.MessagesApi

All URIs are relative to *https://api.smtp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v4MessagesGet**](MessagesApi.md#v4MessagesGet) | **GET** /v4/messages | Get Detailed Messages Info
[**v4MessagesMimePost**](MessagesApi.md#v4MessagesMimePost) | **POST** /v4/messages/mime | Send MIME Message
[**v4MessagesPost**](MessagesApi.md#v4MessagesPost) | **POST** /v4/messages | Send a Message



## v4MessagesGet

> MessagesResponse v4MessagesGet(start, limit, offset, channel, opts)

Get Detailed Messages Info

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

let apiInstance = new SmtpComApi.MessagesApi();
let start = "start_example"; // String | The starting time. RFC 2822 or UNIX epoch format
let limit = 56; // Number | Maximum number of items to return.
let offset = 56; // Number | Number of items to skip before returning the results.
let channel = "channel_example"; // String | Name of  the channel used to send messages
let opts = {
  'end': "end_example", // String | The ending time. If not specified, defaults to now. RFC 2822 or UNIX epoch format.
  'event': "event_example", // String | Array of any event names for which stats has been requested ('accepted', 'failed', 'delivered').
  'msgId': "msgId_example" // String | Unique message ID
};
apiInstance.v4MessagesGet(start, limit, offset, channel, opts, (error, data, response) => {
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
 **start** | **String**| The starting time. RFC 2822 or UNIX epoch format | 
 **limit** | **Number**| Maximum number of items to return. | 
 **offset** | **Number**| Number of items to skip before returning the results. | 
 **channel** | **String**| Name of  the channel used to send messages | 
 **end** | **String**| The ending time. If not specified, defaults to now. RFC 2822 or UNIX epoch format. | [optional] 
 **event** | **String**| Array of any event names for which stats has been requested (&#39;accepted&#39;, &#39;failed&#39;, &#39;delivered&#39;). | [optional] 
 **msgId** | **String**| Unique message ID | [optional] 

### Return type

[**MessagesResponse**](MessagesResponse.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v4MessagesMimePost

> MimeResponse v4MessagesMimePost(inlineObject1)

Send MIME Message

This method will send a prepared RFC compliant MIME message via a specified channel **Note:** All restrictions from the section entitled &#x60;Send a Message&#x60; are implied here. 

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

let apiInstance = new SmtpComApi.MessagesApi();
let inlineObject1 = new SmtpComApi.InlineObject1(); // InlineObject1 | 
apiInstance.v4MessagesMimePost(inlineObject1, (error, data, response) => {
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
 **inlineObject1** | [**InlineObject1**](InlineObject1.md)|  | 

### Return type

[**MimeResponse**](MimeResponse.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v4MessagesPost

> PostMessageResponse v4MessagesPost(opts)

Send a Message

Send a message over HTTP/HTTPS protocol using a specified channel. The request can generate only an HTTP 400 error and will return validation error data. The actual suppression, delivery attempt or SMTP error can be received via callbacks. See the section on Callbacks for more details.  &lt;br&gt; **Limitations:** * The number of recipients in a single email request is limited to &#x60;1000&#x60; (including to, cc and bcc) * The total payload of the generated MIME message cannot exceed &#x60;10Mb&#x60; in size  &lt;br&gt; **Notes:** * When JUST two parts provided with &#x60;text/plain&#x60; and &#x60;text/html&#x60; types, they are automatically wrapped into a &#x60;mime/alternative&#x60; container * Adding any other part or attachment to either a single part or attachment or &#x60;mime/alternative&#x60; automatically wraps all mime containers into a &#x60;mime/mixed&#x60; container * Content type message/rfc822 is prohibited 

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

let apiInstance = new SmtpComApi.MessagesApi();
let opts = {
  'inlineObject': new SmtpComApi.InlineObject() // InlineObject | 
};
apiInstance.v4MessagesPost(opts, (error, data, response) => {
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
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | [optional] 

### Return type

[**PostMessageResponse**](PostMessageResponse.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

