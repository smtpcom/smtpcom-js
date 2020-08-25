# SmtpPublicApiOverview.InlineObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **String** | Name of  the channel through which the email will be sent | [optional] 
**recipients** | [**V4MessagesRecipients**](V4MessagesRecipients.md) |  | [optional] 
**originator** | [**V4MessagesOriginator**](V4MessagesOriginator.md) |  | [optional] 
**customHeaders** | **Object** | A name of a header to customize (both standard and non-standard) and its value, which can be either string or array of strings | [optional] 
**subject** | **String** | Email subject. Multiline value is supported, &#x60;998&#x60; characters max | [optional] 
**body** | [**V4MessagesBody**](V4MessagesBody.md) |  | [optional] 


