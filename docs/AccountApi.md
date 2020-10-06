# SmtpComApi.AccountApi

All URIs are relative to *https://api.smtp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v4AccountContactPatch**](AccountApi.md#v4AccountContactPatch) | **PATCH** /v4/account/contact | Update Account Details
[**v4AccountGet**](AccountApi.md#v4AccountGet) | **GET** /v4/account/ | Get Account Details



## v4AccountContactPatch

> UpdateAccountResponse v4AccountContactPatch(opts)

Update Account Details

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

let apiInstance = new SmtpComApi.AccountApi();
let opts = {
  'firstName': "firstName_example", // String | First name of account owner
  'lastName': "lastName_example", // String | Last name of account owner
  'email': "email_example", // String | Email address of account owner
  'companyName': "companyName_example", // String | Account owner’s company name
  'phone': "phone_example", // String | Phone number of account owner
  'website': "website_example", // String | Website of account owner
  'addressStreet': "addressStreet_example", // String | Account owner’s street address
  'addressCity': "addressCity_example", // String | Account owner’s city
  'addressState': "addressState_example", // String | Account owner’s state
  'addressCountry': "addressCountry_example" // String | Account owner’s country
};
apiInstance.v4AccountContactPatch(opts, (error, data, response) => {
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
 **firstName** | **String**| First name of account owner | [optional] 
 **lastName** | **String**| Last name of account owner | [optional] 
 **email** | **String**| Email address of account owner | [optional] 
 **companyName** | **String**| Account owner’s company name | [optional] 
 **phone** | **String**| Phone number of account owner | [optional] 
 **website** | **String**| Website of account owner | [optional] 
 **addressStreet** | **String**| Account owner’s street address | [optional] 
 **addressCity** | **String**| Account owner’s city | [optional] 
 **addressState** | **String**| Account owner’s state | [optional] 
 **addressCountry** | **String**| Account owner’s country | [optional] 

### Return type

[**UpdateAccountResponse**](UpdateAccountResponse.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v4AccountGet

> Account v4AccountGet()

Get Account Details

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

let apiInstance = new SmtpComApi.AccountApi();
apiInstance.v4AccountGet((error, data, response) => {
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

[**Account**](Account.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

