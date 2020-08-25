# SmtpPublicApiOverview.ReportsDataOndemand

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | Current status of a given on-demand report | [optional] 
**name** | **String** | Human readable name of an on-demand report (auto-generated) | [optional] 
**url** | **String** | The unique URL from which to download an on-demand report | [optional] 
**timeReq** | **Number** | Time when a given on-demand report has been requestedi. RFC 2822 or UNIX epoch format | [optional] 
**progress** | **Number** | Percentage of completion for an on-demand report | [optional] 
**channel** | **String** | Name of the channel for which a given report has been defined | [optional] 
**reportId** | **String** | Unique report ID | [optional] 



## Enum: StatusEnum


* `in_progress` (value: `"in_progress"`)

* `done` (value: `"done"`)

* `pending` (value: `"pending"`)




