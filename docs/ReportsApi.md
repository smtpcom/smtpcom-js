# SmtpComApi.ReportsApi

All URIs are relative to *https://api.smtp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v4ReportsGet**](ReportsApi.md#v4ReportsGet) | **GET** /v4/reports/ | Get All Reports
[**v4ReportsOndemandPost**](ReportsApi.md#v4ReportsOndemandPost) | **POST** /v4/reports/ondemand | Create On-Demand Report
[**v4ReportsPeriodicPost**](ReportsApi.md#v4ReportsPeriodicPost) | **POST** /v4/reports/periodic | Create Periodic Report
[**v4ReportsPeriodicReportIdDelete**](ReportsApi.md#v4ReportsPeriodicReportIdDelete) | **DELETE** /v4/reports/periodic/{report_id} | Delete a Periodic Report
[**v4ReportsPeriodicReportIdPatch**](ReportsApi.md#v4ReportsPeriodicReportIdPatch) | **PATCH** /v4/reports/periodic/{report_id} | Update Periodic Report
[**v4ReportsReportIdGet**](ReportsApi.md#v4ReportsReportIdGet) | **GET** /v4/reports/{report_id} | Get Report Details



## v4ReportsGet

> Reports v4ReportsGet()

Get All Reports

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

let apiInstance = new SmtpComApi.ReportsApi();
apiInstance.v4ReportsGet((error, data, response) => {
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

[**Reports**](Reports.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v4ReportsOndemandPost

> StatusResponse v4ReportsOndemandPost(start, opts)

Create On-Demand Report

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

let apiInstance = new SmtpComApi.ReportsApi();
let start = 56; // Number | Start date/time of the report in RFC 2822 or UNIX epoch format
let opts = {
  'channel': "channel_example", // String | Name of the channel for which a given report has been defined
  'type': "type_example", // String | Type or report format. If not specified defaults to “csv” - currently the only supported type
  'end': "end_example", // String | End date/time of the report in RFC 2822 or UNIX epoch format (default - now)
  'domain': "domain_example", // String | Filter by the “from” domain of emails
  'rcptDomain': "rcptDomain_example", // String | Filter by the “to” domain of emails
  'events': "events_example", // String | Filter by event type. Valid event are:  * hard_bounced - just hard bounces * failed - all failed messages, i.e. hard_bounced + the rest of failed * delivered - delivered messages * sent - delivered+failed (default events value) * pending - pending messages * total - all messages, i.e. sent+pending * abuse - spam complaints 
  'columns': "columns_example" // String | Array of columns to be specified in the report. These can differ based on any specified event type filter.   Possible column values for all reports are: * `message_id` - Unique message ID * from - From Address * to - Recipient Address * time_rcv - Date Received in RFC 2822 or UNIX epoch format * time_snt - Date Delivered in RFC 2822 or UNIX epoch format * channel - Name of a channel  Additional column values for message reports (hard_bounced, failed, delivered, total) include: * status - Status of delivery * code - SMTP Response Code * message - SMTP Response message * tries - Amount of re-tries (deferred states before final)  Additional column values for spam reports include:  * report_time - Date when an abuse complaint has been reported, RFC 2822 or UNIX epoch format * subject - Email Subject  Additional column values for pending reports include:  * status - Current email status  If not specified all relevant columns are included. 
};
apiInstance.v4ReportsOndemandPost(start, opts, (error, data, response) => {
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
 **start** | **Number**| Start date/time of the report in RFC 2822 or UNIX epoch format | 
 **channel** | **String**| Name of the channel for which a given report has been defined | [optional] 
 **type** | **String**| Type or report format. If not specified defaults to “csv” - currently the only supported type | [optional] 
 **end** | **String**| End date/time of the report in RFC 2822 or UNIX epoch format (default - now) | [optional] 
 **domain** | **String**| Filter by the “from” domain of emails | [optional] 
 **rcptDomain** | **String**| Filter by the “to” domain of emails | [optional] 
 **events** | **String**| Filter by event type. Valid event are:  * hard_bounced - just hard bounces * failed - all failed messages, i.e. hard_bounced + the rest of failed * delivered - delivered messages * sent - delivered+failed (default events value) * pending - pending messages * total - all messages, i.e. sent+pending * abuse - spam complaints  | [optional] 
 **columns** | **String**| Array of columns to be specified in the report. These can differ based on any specified event type filter.   Possible column values for all reports are: * &#x60;message_id&#x60; - Unique message ID * from - From Address * to - Recipient Address * time_rcv - Date Received in RFC 2822 or UNIX epoch format * time_snt - Date Delivered in RFC 2822 or UNIX epoch format * channel - Name of a channel  Additional column values for message reports (hard_bounced, failed, delivered, total) include: * status - Status of delivery * code - SMTP Response Code * message - SMTP Response message * tries - Amount of re-tries (deferred states before final)  Additional column values for spam reports include:  * report_time - Date when an abuse complaint has been reported, RFC 2822 or UNIX epoch format * subject - Email Subject  Additional column values for pending reports include:  * status - Current email status  If not specified all relevant columns are included.  | [optional] 

### Return type

[**StatusResponse**](StatusResponse.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v4ReportsPeriodicPost

> StatusResponse v4ReportsPeriodicPost(frequency, reportTime, opts)

Create Periodic Report

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

let apiInstance = new SmtpComApi.ReportsApi();
let frequency = "frequency_example"; // String | Report frequency – one of:   * daily - every day at a specified hour   * weekly  - Mondays at a specified hour   * monthly - 1st day of the month at a specified hour 
let reportTime = 56; // Number | The hour at which the report should be sent. Value values range from 0 to 23
let opts = {
  'channel': "channel_example", // String | Name of the channel for which a given report has been defined
  'notifyMethod': "notifyMethod_example", // String | Notification method to be used when report is completed and can be downloaded
  'notifyDest': "notifyDest_example", // String | A valid URL which will accept the report completion notification. The payload will be ```   {\"message\": \"success\", \"id\": string} ``` where `id` is a Unique report ID 
  'domain': "domain_example", // String | Filter by the “From” domain of emails
  'rcptDomain': "rcptDomain_example", // String | Filter by the “To” domain of emails
  'events': "events_example", // String | Filter by event type. Valid event are:  * hard_bounced - just hard bounces * failed - all failed messages, i.e. hard_bounced + the rest of failed * delivered - delivered messages * sent - delivered+failed (default events value) * pending - pending messages * total - all messages, i.e. sent+pending * abuse - spam complaints 
  'columns': "columns_example" // String | Array of columns to be specified in the report. These can differ based on any specified event type filter.   Possible column values are: * `message_id` - Unique message ID * from - From Address * to - Recipient Address * time_rcv - Date Received in RFC 2822 or UNIX epoch format * time_snt - Date Delivered in RFC 2822 or UNIX epoch format * channel - Name of a channel  Additional column values for message reports (hard_bounced, failed, delivered, total) include: * status - Status of delivery * code - SMTP Response Code * message - SMTP Response message * tries - Amount of re-tries (deferred states before final)  Additional column values for spam reports include:  * report_time - Date when an abuse complaint has been reported, RFC 2822 or UNIX epoch format * subject - Email Subject  Additional column values for pending reports include:  * status - Current email status  If not specified all relevant columns are included. 
};
apiInstance.v4ReportsPeriodicPost(frequency, reportTime, opts, (error, data, response) => {
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
 **frequency** | **String**| Report frequency – one of:   * daily - every day at a specified hour   * weekly  - Mondays at a specified hour   * monthly - 1st day of the month at a specified hour  | 
 **reportTime** | **Number**| The hour at which the report should be sent. Value values range from 0 to 23 | 
 **channel** | **String**| Name of the channel for which a given report has been defined | [optional] 
 **notifyMethod** | **String**| Notification method to be used when report is completed and can be downloaded | [optional] 
 **notifyDest** | **String**| A valid URL which will accept the report completion notification. The payload will be &#x60;&#x60;&#x60;   {\&quot;message\&quot;: \&quot;success\&quot;, \&quot;id\&quot;: string} &#x60;&#x60;&#x60; where &#x60;id&#x60; is a Unique report ID  | [optional] 
 **domain** | **String**| Filter by the “From” domain of emails | [optional] 
 **rcptDomain** | **String**| Filter by the “To” domain of emails | [optional] 
 **events** | **String**| Filter by event type. Valid event are:  * hard_bounced - just hard bounces * failed - all failed messages, i.e. hard_bounced + the rest of failed * delivered - delivered messages * sent - delivered+failed (default events value) * pending - pending messages * total - all messages, i.e. sent+pending * abuse - spam complaints  | [optional] 
 **columns** | **String**| Array of columns to be specified in the report. These can differ based on any specified event type filter.   Possible column values are: * &#x60;message_id&#x60; - Unique message ID * from - From Address * to - Recipient Address * time_rcv - Date Received in RFC 2822 or UNIX epoch format * time_snt - Date Delivered in RFC 2822 or UNIX epoch format * channel - Name of a channel  Additional column values for message reports (hard_bounced, failed, delivered, total) include: * status - Status of delivery * code - SMTP Response Code * message - SMTP Response message * tries - Amount of re-tries (deferred states before final)  Additional column values for spam reports include:  * report_time - Date when an abuse complaint has been reported, RFC 2822 or UNIX epoch format * subject - Email Subject  Additional column values for pending reports include:  * status - Current email status  If not specified all relevant columns are included.  | [optional] 

### Return type

[**StatusResponse**](StatusResponse.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v4ReportsPeriodicReportIdDelete

> StatusResponse v4ReportsPeriodicReportIdDelete(reportId)

Delete a Periodic Report

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

let apiInstance = new SmtpComApi.ReportsApi();
let reportId = "reportId_example"; // String | Id of a given report
apiInstance.v4ReportsPeriodicReportIdDelete(reportId, (error, data, response) => {
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
 **reportId** | **String**| Id of a given report | 

### Return type

[**StatusResponse**](StatusResponse.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v4ReportsPeriodicReportIdPatch

> StatusResponse v4ReportsPeriodicReportIdPatch(reportId, frequency, reportTime, opts)

Update Periodic Report

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

let apiInstance = new SmtpComApi.ReportsApi();
let reportId = "reportId_example"; // String | Id of the report to be updated
let frequency = "frequency_example"; // String | Report frequency – one of:  * daily - every day at a specified hour  * weekly  - Mondays at a specified hour  * monthly - first day of the month at a specified hour. 
let reportTime = 56; // Number | The hour at which the report should be sent. Value values range from 0 to 23
let opts = {
  'channel': "channel_example", // String | Name of channel (sender). If not specified all channels will be reported
  'events': "events_example" // String | Filter by event type. Valid event are: * hard_bounced - just hard bounces * failed - all failed messages, i.e. hard_bounced + the rest of failed * delivered - delivered messages * sent - delivered+failed (default events value) * pending - pending messages * total - all messages, i.e. sent+pending * abuse - spam complaints  If not specified all events are included. 
};
apiInstance.v4ReportsPeriodicReportIdPatch(reportId, frequency, reportTime, opts, (error, data, response) => {
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
 **reportId** | **String**| Id of the report to be updated | 
 **frequency** | **String**| Report frequency – one of:  * daily - every day at a specified hour  * weekly  - Mondays at a specified hour  * monthly - first day of the month at a specified hour.  | 
 **reportTime** | **Number**| The hour at which the report should be sent. Value values range from 0 to 23 | 
 **channel** | **String**| Name of channel (sender). If not specified all channels will be reported | [optional] 
 **events** | **String**| Filter by event type. Valid event are: * hard_bounced - just hard bounces * failed - all failed messages, i.e. hard_bounced + the rest of failed * delivered - delivered messages * sent - delivered+failed (default events value) * pending - pending messages * total - all messages, i.e. sent+pending * abuse - spam complaints  If not specified all events are included.  | [optional] 

### Return type

[**StatusResponse**](StatusResponse.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v4ReportsReportIdGet

> Report v4ReportsReportIdGet(reportId)

Get Report Details

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

let apiInstance = new SmtpComApi.ReportsApi();
let reportId = "reportId_example"; // String | ID of a given report
apiInstance.v4ReportsReportIdGet(reportId, (error, data, response) => {
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
 **reportId** | **String**| ID of a given report | 

### Return type

[**Report**](Report.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

