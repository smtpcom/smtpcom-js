# SmtpComApi.Report

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frequency** | **String** | Report frequency – one of:   * daily - every day at a specified hour   * weekly - Mondays at a specified hour   * monthly - 1st day of the month at a specified hour  | [optional] 
**reportId** | **String** | Unique report ID | [optional] 
**events** | **String** | Preset of events returned in a report:    * hard_bounced   * failed   * delivered   * sent   * pending   * total   * abuse If not specified all events are included.  | [optional] 
**channel** | **String** | Name of channel (sender). If not specified all channels will be reported | [optional] 
**reportTime** | **String** | The hour at which the report should be sent, values range from 0 to 23 | [optional] 
**status** | **String** | Current status of a given on-demand report | [optional] 
**name** | **String** | Human readable name of an on-demand report (auto-generated) | [optional] 
**url** | **String** | The unique URL from which to download an on-demand report from | [optional] 
**timeReq** | **Number** | Time when a given on-demand report has been requestedi. RFC 2822 or UNIX epoch format | [optional] 
**progress** | **Number** | Percentage of completion for an on-demand report | [optional] 



## Enum: FrequencyEnum


* `monthly` (value: `"monthly"`)

* `weekly` (value: `"weekly"`)

* `daily` (value: `"daily"`)





## Enum: StatusEnum


* `in_progress` (value: `"in_progress"`)

* `done` (value: `"done"`)

* `pending` (value: `"pending"`)




