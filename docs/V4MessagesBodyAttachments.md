# SmtpPublicApiOverview.V4MessagesBodyAttachments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **String** | MIME version. By default set to &#x60;1.0&#x60; | [optional] 
**type** | **String** | MIME type. By default set to &#x60;application/octet-stream&#x60; | [optional] 
**disposition** | **String** | Content-disposition, either &#x60;inline&#x60; or &#x60;attachment&#x60;. By default set to &#x60;attachment&#x60; | [optional] 
**filename** | **String** | Name of attached file | [optional] 
**cid** | **String** | Content ID for inline dispositions. By default this is equal to the filename. Can be used in HTML content to address an attached image using “cid:” URL scheme. | [optional] 
**content** | **String** | Actual attachment content in its raw form | [optional] 


