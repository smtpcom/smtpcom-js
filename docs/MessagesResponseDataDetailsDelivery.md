# SmtpPublicApiOverview.MessagesResponseDataDetailsDelivery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**finished** | **String** | Timestamp of when the message was delivered | [optional] 
**retries** | **Number** | Number of retries after the initial delivery attempt | [optional] 
**event** | **String** | One of:    * delivered   * failed   * queued  | [optional] 
**code** | **String** | The last SMTP response code received from a peer | [optional] 
**status** | **String** | The last SMTP response message received from a peer | [optional] 


