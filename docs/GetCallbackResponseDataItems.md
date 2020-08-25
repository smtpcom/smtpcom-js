# SmtpPublicApiOverview.GetCallbackResponseDataItems

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**medium** | **String** | Medium by which the callback data is sent. Possible values are one of:   * http   * aws  | [optional] 
**event** | **String** | Event for which the callback has been created. Valid types are:  * delivered -  message delivered * failed - message bounced * complained - complaint received * bounceback - bounce back notification received * received - message received by our system * queued - message in queue (transient) * hard_bounced - hard bounce received * opened - message opened * clicked - URL in message clicked * unsubscribed - unsubscribe received  | [optional] 
**channel** | **String** | Name of the channel for which the callback has been created | [optional] 
**address** | **String** | Address to which the callback data is sent. This will be either a URL for http-based callbacks or the Amazon SQS queue name for SQS-based callbacks | [optional] 
**awsData** | **String** | Amazon SQS settings | [optional] 



## Enum: MediumEnum


* `http` (value: `"http"`)

* `aws` (value: `"aws"`)




