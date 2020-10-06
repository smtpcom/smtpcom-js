# SmtpComApi.DKIMsApi

All URIs are relative to *https://api.smtp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v4DomainsDomainNameDelete**](DKIMsApi.md#v4DomainsDomainNameDelete) | **DELETE** /v4/domains/{domain_name} | Delete Domain
[**v4DomainsDomainNameDkimKeysDelete**](DKIMsApi.md#v4DomainsDomainNameDkimKeysDelete) | **DELETE** /v4/domains/{domain_name}/dkim_keys | Delete DKIM for Domain
[**v4DomainsDomainNameDkimKeysGet**](DKIMsApi.md#v4DomainsDomainNameDkimKeysGet) | **GET** /v4/domains/{domain_name}/dkim_keys | Get DKIM for Domain
[**v4DomainsDomainNameDkimKeysPatch**](DKIMsApi.md#v4DomainsDomainNameDkimKeysPatch) | **PATCH** /v4/domains/{domain_name}/dkim_keys | Update DKIM Key Details
[**v4DomainsDomainNameDkimKeysPost**](DKIMsApi.md#v4DomainsDomainNameDkimKeysPost) | **POST** /v4/domains/{domain_name}/dkim_keys | Add DKIM for Domain
[**v4DomainsDomainNameGet**](DKIMsApi.md#v4DomainsDomainNameGet) | **GET** /v4/domains/{domain_name} | Get Domain Details
[**v4DomainsDomainNamePatch**](DKIMsApi.md#v4DomainsDomainNamePatch) | **PATCH** /v4/domains/{domain_name} | Update Domain Details
[**v4DomainsGet**](DKIMsApi.md#v4DomainsGet) | **GET** /v4/domains/ | Get All Registered Domains
[**v4DomainsPost**](DKIMsApi.md#v4DomainsPost) | **POST** /v4/domains/ | Register a Domain



## v4DomainsDomainNameDelete

> StatusResponse v4DomainsDomainNameDelete(domainName)

Delete Domain

Deletes a domain that was previously registered by the current account.

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

let apiInstance = new SmtpComApi.DKIMsApi();
let domainName = "domainName_example"; // String | Domain name of interest
apiInstance.v4DomainsDomainNameDelete(domainName, (error, data, response) => {
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
 **domainName** | **String**| Domain name of interest | 

### Return type

[**StatusResponse**](StatusResponse.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v4DomainsDomainNameDkimKeysDelete

> StatusResponse v4DomainsDomainNameDkimKeysDelete(domainName)

Delete DKIM for Domain

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

let apiInstance = new SmtpComApi.DKIMsApi();
let domainName = "domainName_example"; // String | Domain name of interest
apiInstance.v4DomainsDomainNameDkimKeysDelete(domainName, (error, data, response) => {
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
 **domainName** | **String**| Domain name of interest | 

### Return type

[**StatusResponse**](StatusResponse.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v4DomainsDomainNameDkimKeysGet

> GetDomainDetails v4DomainsDomainNameDkimKeysGet(domainName)

Get DKIM for Domain

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

let apiInstance = new SmtpComApi.DKIMsApi();
let domainName = "domainName_example"; // String | Domain name of interest
apiInstance.v4DomainsDomainNameDkimKeysGet(domainName, (error, data, response) => {
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
 **domainName** | **String**| Domain name of interest | 

### Return type

[**GetDomainDetails**](GetDomainDetails.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v4DomainsDomainNameDkimKeysPatch

> StatusResponse v4DomainsDomainNameDkimKeysPatch(domainName, selector, privateKey)

Update DKIM Key Details

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

let apiInstance = new SmtpComApi.DKIMsApi();
let domainName = "domainName_example"; // String | Domain name of interest
let selector = "selector_example"; // String | Name of DKIM selector for this domain
let privateKey = "privateKey_example"; // String | Private key of the DKIM record
apiInstance.v4DomainsDomainNameDkimKeysPatch(domainName, selector, privateKey, (error, data, response) => {
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
 **domainName** | **String**| Domain name of interest | 
 **selector** | **String**| Name of DKIM selector for this domain | 
 **privateKey** | **String**| Private key of the DKIM record | 

### Return type

[**StatusResponse**](StatusResponse.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v4DomainsDomainNameDkimKeysPost

> CreateDkimKey v4DomainsDomainNameDkimKeysPost(domainName, selector, privateKey)

Add DKIM for Domain

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

let apiInstance = new SmtpComApi.DKIMsApi();
let domainName = "domainName_example"; // String | Domain name of interest
let selector = "selector_example"; // String | Name of DKIM selector for this domain
let privateKey = "privateKey_example"; // String | Private key of the DKIM record
apiInstance.v4DomainsDomainNameDkimKeysPost(domainName, selector, privateKey, (error, data, response) => {
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
 **domainName** | **String**| Domain name of interest | 
 **selector** | **String**| Name of DKIM selector for this domain | 
 **privateKey** | **String**| Private key of the DKIM record | 

### Return type

[**CreateDkimKey**](CreateDkimKey.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v4DomainsDomainNameGet

> GetDomainDetailsResponse v4DomainsDomainNameGet(domainName)

Get Domain Details

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

let apiInstance = new SmtpComApi.DKIMsApi();
let domainName = "domainName_example"; // String | Domain name of interest
apiInstance.v4DomainsDomainNameGet(domainName, (error, data, response) => {
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
 **domainName** | **String**| Domain name of interest | 

### Return type

[**GetDomainDetailsResponse**](GetDomainDetailsResponse.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v4DomainsDomainNamePatch

> StatusResponse v4DomainsDomainNamePatch(domainName, enabled)

Update Domain Details

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

let apiInstance = new SmtpComApi.DKIMsApi();
let domainName = "domainName_example"; // String | Domain name of interest
let enabled = true; // Boolean | Whether the domain is enabled
apiInstance.v4DomainsDomainNamePatch(domainName, enabled, (error, data, response) => {
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
 **domainName** | **String**| Domain name of interest | 
 **enabled** | **Boolean**| Whether the domain is enabled | 

### Return type

[**StatusResponse**](StatusResponse.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v4DomainsGet

> GetDomainsResponse v4DomainsGet()

Get All Registered Domains

Returns all domains registered by this account

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

let apiInstance = new SmtpComApi.DKIMsApi();
apiInstance.v4DomainsGet((error, data, response) => {
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

[**GetDomainsResponse**](GetDomainsResponse.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v4DomainsPost

> CreateDomainResponse v4DomainsPost(domainName)

Register a Domain

Add a new domain to the list of account&#39;s registered domains

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

let apiInstance = new SmtpComApi.DKIMsApi();
let domainName = "domainName_example"; // String | Domain name to add
apiInstance.v4DomainsPost(domainName, (error, data, response) => {
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
 **domainName** | **String**| Domain name to add | 

### Return type

[**CreateDomainResponse**](CreateDomainResponse.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

