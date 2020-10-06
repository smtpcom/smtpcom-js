![Tests](https://github.com/smtpcom/smtpcom-js/workflows/Tests/badge.svg)
[![codecov](https://codecov.io/gh/smtpcom/smtpcom-js/branch/master/graph/badge.svg?token=G0JCKAWYOZ)](https://codecov.io/gh/smtpcom/smtpcom-js)

# SMTP.com API

JavaScript client for SMTP.com API V4

## Installation

```shell
npm install smtpcom 
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SmtpComApi = require('@smtpcom/smtpcom');

var defaultClient = SmtpComApi.ApiClient.instance;
// Configure API key authorization: apiID
var apiID = defaultClient.authentications['apiID'];
apiID.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiID.apiKeyPrefix['api_key'] = "Token"
// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix['X-SMTPCOM-API'] = "Token"
// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var api = new SmtpComApi.APIKeysApi()
var apiKey = "apiKey_example"; // {String} API Key Identificator.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getAPIKey(apiKey, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.smtp.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SmtpComApi.APIKeysApi* | [**getAPIKey**](docs/APIKeysApi.md#getAPIKey) | **GET** /v4/api_keys/{api_key} | Get API Key Details
*SmtpComApi.APIKeysApi* | [**v4ApiKeysApiKeyDelete**](docs/APIKeysApi.md#v4ApiKeysApiKeyDelete) | **DELETE** /v4/api_keys/{api_key} | Delete an API Key
*SmtpComApi.APIKeysApi* | [**v4ApiKeysApiKeyPatch**](docs/APIKeysApi.md#v4ApiKeysApiKeyPatch) | **PATCH** /v4/api_keys/{api_key} | Update API Key
*SmtpComApi.APIKeysApi* | [**v4ApiKeysGet**](docs/APIKeysApi.md#v4ApiKeysGet) | **GET** /v4/api_keys/ | List All API Keys
*SmtpComApi.APIKeysApi* | [**v4ApiKeysPost**](docs/APIKeysApi.md#v4ApiKeysPost) | **POST** /v4/api_keys/ | Create a New API Key
*SmtpComApi.AccountApi* | [**v4AccountContactPatch**](docs/AccountApi.md#v4AccountContactPatch) | **PATCH** /v4/account/contact | Update Account Details
*SmtpComApi.AccountApi* | [**v4AccountGet**](docs/AccountApi.md#v4AccountGet) | **GET** /v4/account/ | Get Account Details
*SmtpComApi.AlertsApi* | [**v4AlertsAlertIdDelete**](docs/AlertsApi.md#v4AlertsAlertIdDelete) | **DELETE** /v4/alerts/{alert_id} | Delete Alert
*SmtpComApi.AlertsApi* | [**v4AlertsAlertIdGet**](docs/AlertsApi.md#v4AlertsAlertIdGet) | **GET** /v4/alerts/{alert_id} | Get Alert Details
*SmtpComApi.AlertsApi* | [**v4AlertsAlertIdPatch**](docs/AlertsApi.md#v4AlertsAlertIdPatch) | **PATCH** /v4/alerts/{alert_id} | Update Alert Details
*SmtpComApi.AlertsApi* | [**v4AlertsGet**](docs/AlertsApi.md#v4AlertsGet) | **GET** /v4/alerts/ | List All Allerts
*SmtpComApi.AlertsApi* | [**v4AlertsPost**](docs/AlertsApi.md#v4AlertsPost) | **POST** /v4/alerts/ | Create New Alert
*SmtpComApi.CallbacksApi* | [**v4CallbacksDelete**](docs/CallbacksApi.md#v4CallbacksDelete) | **DELETE** /v4/callbacks/ | Delete All Callbacks
*SmtpComApi.CallbacksApi* | [**v4CallbacksEventDelete**](docs/CallbacksApi.md#v4CallbacksEventDelete) | **DELETE** /v4/callbacks/{event} | Delete Callback
*SmtpComApi.CallbacksApi* | [**v4CallbacksEventGet**](docs/CallbacksApi.md#v4CallbacksEventGet) | **GET** /v4/callbacks/{event} | Get Callback Details
*SmtpComApi.CallbacksApi* | [**v4CallbacksEventPatch**](docs/CallbacksApi.md#v4CallbacksEventPatch) | **PATCH** /v4/callbacks/{event} | Update Callback Details
*SmtpComApi.CallbacksApi* | [**v4CallbacksEventPost**](docs/CallbacksApi.md#v4CallbacksEventPost) | **POST** /v4/callbacks/{event} | Create Callback
*SmtpComApi.CallbacksApi* | [**v4CallbacksGet**](docs/CallbacksApi.md#v4CallbacksGet) | **GET** /v4/callbacks/ | List All Callbacks
*SmtpComApi.CallbacksApi* | [**v4CallbacksLogGet**](docs/CallbacksApi.md#v4CallbacksLogGet) | **GET** /v4/callbacks/log | View Callback Logs
*SmtpComApi.ChannelsApi* | [**getSender**](docs/ChannelsApi.md#getSender) | **GET** /v4/channels/{name} | Get Channel Details
*SmtpComApi.ChannelsApi* | [**v4ChannelsGet**](docs/ChannelsApi.md#v4ChannelsGet) | **GET** /v4/channels/ | Get All Channels
*SmtpComApi.ChannelsApi* | [**v4ChannelsNameDelete**](docs/ChannelsApi.md#v4ChannelsNameDelete) | **DELETE** /v4/channels/{name} | Delete a Channel
*SmtpComApi.ChannelsApi* | [**v4ChannelsNamePatch**](docs/ChannelsApi.md#v4ChannelsNamePatch) | **PATCH** /v4/channels/{name} | Update Channel Details
*SmtpComApi.ChannelsApi* | [**v4ChannelsPost**](docs/ChannelsApi.md#v4ChannelsPost) | **POST** /v4/channels/ | Create a New Channel
*SmtpComApi.DKIMsApi* | [**v4DomainsDomainNameDelete**](docs/DKIMsApi.md#v4DomainsDomainNameDelete) | **DELETE** /v4/domains/{domain_name} | Delete Domain
*SmtpComApi.DKIMsApi* | [**v4DomainsDomainNameDkimKeysDelete**](docs/DKIMsApi.md#v4DomainsDomainNameDkimKeysDelete) | **DELETE** /v4/domains/{domain_name}/dkim_keys | Delete DKIM for Domain
*SmtpComApi.DKIMsApi* | [**v4DomainsDomainNameDkimKeysGet**](docs/DKIMsApi.md#v4DomainsDomainNameDkimKeysGet) | **GET** /v4/domains/{domain_name}/dkim_keys | Get DKIM for Domain
*SmtpComApi.DKIMsApi* | [**v4DomainsDomainNameDkimKeysPatch**](docs/DKIMsApi.md#v4DomainsDomainNameDkimKeysPatch) | **PATCH** /v4/domains/{domain_name}/dkim_keys | Update DKIM Key Details
*SmtpComApi.DKIMsApi* | [**v4DomainsDomainNameDkimKeysPost**](docs/DKIMsApi.md#v4DomainsDomainNameDkimKeysPost) | **POST** /v4/domains/{domain_name}/dkim_keys | Add DKIM for Domain
*SmtpComApi.DKIMsApi* | [**v4DomainsDomainNameGet**](docs/DKIMsApi.md#v4DomainsDomainNameGet) | **GET** /v4/domains/{domain_name} | Get Domain Details
*SmtpComApi.DKIMsApi* | [**v4DomainsDomainNamePatch**](docs/DKIMsApi.md#v4DomainsDomainNamePatch) | **PATCH** /v4/domains/{domain_name} | Update Domain Details
*SmtpComApi.DKIMsApi* | [**v4DomainsGet**](docs/DKIMsApi.md#v4DomainsGet) | **GET** /v4/domains/ | Get All Registered Domains
*SmtpComApi.DKIMsApi* | [**v4DomainsPost**](docs/DKIMsApi.md#v4DomainsPost) | **POST** /v4/domains/ | Register a Domain
*SmtpComApi.MessagesApi* | [**v4MessagesGet**](docs/MessagesApi.md#v4MessagesGet) | **GET** /v4/messages | Get Detailed Messages Info
*SmtpComApi.MessagesApi* | [**v4MessagesMimePost**](docs/MessagesApi.md#v4MessagesMimePost) | **POST** /v4/messages/mime | Send MIME Message
*SmtpComApi.MessagesApi* | [**v4MessagesPost**](docs/MessagesApi.md#v4MessagesPost) | **POST** /v4/messages | Send a Message
*SmtpComApi.ReportsApi* | [**v4ReportsGet**](docs/ReportsApi.md#v4ReportsGet) | **GET** /v4/reports/ | Get All Reports
*SmtpComApi.ReportsApi* | [**v4ReportsOndemandPost**](docs/ReportsApi.md#v4ReportsOndemandPost) | **POST** /v4/reports/ondemand | Create On-Demand Report
*SmtpComApi.ReportsApi* | [**v4ReportsPeriodicPost**](docs/ReportsApi.md#v4ReportsPeriodicPost) | **POST** /v4/reports/periodic | Create Periodic Report
*SmtpComApi.ReportsApi* | [**v4ReportsPeriodicReportIdDelete**](docs/ReportsApi.md#v4ReportsPeriodicReportIdDelete) | **DELETE** /v4/reports/periodic/{report_id} | Delete a Periodic Report
*SmtpComApi.ReportsApi* | [**v4ReportsPeriodicReportIdPatch**](docs/ReportsApi.md#v4ReportsPeriodicReportIdPatch) | **PATCH** /v4/reports/periodic/{report_id} | Update Periodic Report
*SmtpComApi.ReportsApi* | [**v4ReportsReportIdGet**](docs/ReportsApi.md#v4ReportsReportIdGet) | **GET** /v4/reports/{report_id} | Get Report Details
*SmtpComApi.StatisticsApi* | [**v4StatsDurationSliceSliceSpecifierGroupByGet**](docs/StatisticsApi.md#v4StatsDurationSliceSliceSpecifierGroupByGet) | **GET** /v4/stats/{duration}/{slice}/{slice_specifier}/{group_by} | Return event aggregates for the specified slices and duration. Slices can be chained.


## Documentation for Models

 - [SmtpComApi.APIKey](docs/APIKey.md)
 - [SmtpComApi.Account](docs/Account.md)
 - [SmtpComApi.AccountData](docs/AccountData.md)
 - [SmtpComApi.AccountDataAddress](docs/AccountDataAddress.md)
 - [SmtpComApi.BadRequestSchema](docs/BadRequestSchema.md)
 - [SmtpComApi.BadRequestSchemaData](docs/BadRequestSchemaData.md)
 - [SmtpComApi.Channel](docs/Channel.md)
 - [SmtpComApi.ChannelData](docs/ChannelData.md)
 - [SmtpComApi.Channels](docs/Channels.md)
 - [SmtpComApi.ChannelsData](docs/ChannelsData.md)
 - [SmtpComApi.ChannelsDataItems](docs/ChannelsDataItems.md)
 - [SmtpComApi.CreateCallbackResponse](docs/CreateCallbackResponse.md)
 - [SmtpComApi.CreateDkimKey](docs/CreateDkimKey.md)
 - [SmtpComApi.CreateDkimKeyData](docs/CreateDkimKeyData.md)
 - [SmtpComApi.CreateDomainResponse](docs/CreateDomainResponse.md)
 - [SmtpComApi.CreateDomainResponseData](docs/CreateDomainResponseData.md)
 - [SmtpComApi.DurationValue](docs/DurationValue.md)
 - [SmtpComApi.GetAlertDetails](docs/GetAlertDetails.md)
 - [SmtpComApi.GetAlertDetailsData](docs/GetAlertDetailsData.md)
 - [SmtpComApi.GetAlertResponse](docs/GetAlertResponse.md)
 - [SmtpComApi.GetAlertResponseData](docs/GetAlertResponseData.md)
 - [SmtpComApi.GetAlertResponseDataItems](docs/GetAlertResponseDataItems.md)
 - [SmtpComApi.GetApiKeys](docs/GetApiKeys.md)
 - [SmtpComApi.GetApiKeysData](docs/GetApiKeysData.md)
 - [SmtpComApi.GetApiKeysDataItems](docs/GetApiKeysDataItems.md)
 - [SmtpComApi.GetCallbackDetails](docs/GetCallbackDetails.md)
 - [SmtpComApi.GetCallbackDetailsData](docs/GetCallbackDetailsData.md)
 - [SmtpComApi.GetCallbackLogs](docs/GetCallbackLogs.md)
 - [SmtpComApi.GetCallbackLogsData](docs/GetCallbackLogsData.md)
 - [SmtpComApi.GetCallbackLogsDataItems](docs/GetCallbackLogsDataItems.md)
 - [SmtpComApi.GetCallbackResponse](docs/GetCallbackResponse.md)
 - [SmtpComApi.GetCallbackResponseData](docs/GetCallbackResponseData.md)
 - [SmtpComApi.GetCallbackResponseDataItems](docs/GetCallbackResponseDataItems.md)
 - [SmtpComApi.GetDomainDetails](docs/GetDomainDetails.md)
 - [SmtpComApi.GetDomainDetailsData](docs/GetDomainDetailsData.md)
 - [SmtpComApi.GetDomainDetailsResponse](docs/GetDomainDetailsResponse.md)
 - [SmtpComApi.GetDomainDetailsResponseData](docs/GetDomainDetailsResponseData.md)
 - [SmtpComApi.GetDomainsResponse](docs/GetDomainsResponse.md)
 - [SmtpComApi.GetDomainsResponseData](docs/GetDomainsResponseData.md)
 - [SmtpComApi.GetDomainsResponseDataItems](docs/GetDomainsResponseDataItems.md)
 - [SmtpComApi.InlineObject](docs/InlineObject.md)
 - [SmtpComApi.InlineObject1](docs/InlineObject1.md)
 - [SmtpComApi.InvalidKey](docs/InvalidKey.md)
 - [SmtpComApi.InvalidKeyData](docs/InvalidKeyData.md)
 - [SmtpComApi.InvalidKeyDataErrors](docs/InvalidKeyDataErrors.md)
 - [SmtpComApi.MessagesResponse](docs/MessagesResponse.md)
 - [SmtpComApi.MessagesResponseData](docs/MessagesResponseData.md)
 - [SmtpComApi.MessagesResponseDataAbuse](docs/MessagesResponseDataAbuse.md)
 - [SmtpComApi.MessagesResponseDataAbuseComplaints](docs/MessagesResponseDataAbuseComplaints.md)
 - [SmtpComApi.MessagesResponseDataClicks](docs/MessagesResponseDataClicks.md)
 - [SmtpComApi.MessagesResponseDataClicksItems](docs/MessagesResponseDataClicksItems.md)
 - [SmtpComApi.MessagesResponseDataDetails](docs/MessagesResponseDataDetails.md)
 - [SmtpComApi.MessagesResponseDataDetailsDelivery](docs/MessagesResponseDataDetailsDelivery.md)
 - [SmtpComApi.MessagesResponseDataItems](docs/MessagesResponseDataItems.md)
 - [SmtpComApi.MessagesResponseDataMsgData](docs/MessagesResponseDataMsgData.md)
 - [SmtpComApi.MessagesResponseDataOpens](docs/MessagesResponseDataOpens.md)
 - [SmtpComApi.MessagesResponseDataOpensItems](docs/MessagesResponseDataOpensItems.md)
 - [SmtpComApi.MessagesResponseDataUnsubs](docs/MessagesResponseDataUnsubs.md)
 - [SmtpComApi.MessagesResponseDataUnsubsItems](docs/MessagesResponseDataUnsubsItems.md)
 - [SmtpComApi.MimeResponse](docs/MimeResponse.md)
 - [SmtpComApi.PostMessageResponse](docs/PostMessageResponse.md)
 - [SmtpComApi.PostMessageResponseData](docs/PostMessageResponseData.md)
 - [SmtpComApi.Report](docs/Report.md)
 - [SmtpComApi.Reports](docs/Reports.md)
 - [SmtpComApi.ReportsData](docs/ReportsData.md)
 - [SmtpComApi.ReportsDataOndemand](docs/ReportsDataOndemand.md)
 - [SmtpComApi.ReportsDataPeriodic](docs/ReportsDataPeriodic.md)
 - [SmtpComApi.SliceValue](docs/SliceValue.md)
 - [SmtpComApi.StatsResponse](docs/StatsResponse.md)
 - [SmtpComApi.StatsResponseData](docs/StatsResponseData.md)
 - [SmtpComApi.StatsResponseDataItems](docs/StatsResponseDataItems.md)
 - [SmtpComApi.StatusResponse](docs/StatusResponse.md)
 - [SmtpComApi.UpdateAccountResponse](docs/UpdateAccountResponse.md)
 - [SmtpComApi.UpdateAccountResponseData](docs/UpdateAccountResponseData.md)
 - [SmtpComApi.V4MessagesBody](docs/V4MessagesBody.md)
 - [SmtpComApi.V4MessagesBodyAttachments](docs/V4MessagesBodyAttachments.md)
 - [SmtpComApi.V4MessagesBodyParts](docs/V4MessagesBodyParts.md)
 - [SmtpComApi.V4MessagesMimeRecipients](docs/V4MessagesMimeRecipients.md)
 - [SmtpComApi.V4MessagesOriginator](docs/V4MessagesOriginator.md)
 - [SmtpComApi.V4MessagesRecipients](docs/V4MessagesRecipients.md)
 - [SmtpComApi.V4MessagesRecipientsTo](docs/V4MessagesRecipientsTo.md)


## Documentation for Authorization



### apiID


- **Type**: API key
- **API key parameter name**: api_key
- **Location**: URL query string



### apiKey


- **Type**: API key
- **API key parameter name**: X-SMTPCOM-API
- **Location**: HTTP header



### basicAuth

- **Type**: HTTP basic authentication

