# SmtpPublicApiOverview.GetAlertDetailsData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | An alert’s type. Currently only “monthly_quota” is supported | [optional] 
**threshold** | **String** | A number which represents a percentage of an account’s monthly quota. Must be decimal between 0 and 1 | [optional] 
**alertId** | **String** | alert ID | [optional] 



## Enum: TypeEnum


* `monthly_quota` (value: `"monthly_quota"`)





## Enum: ThresholdEnum


* `0.5` (value: `"0.5"`)

* `0.75` (value: `"0.75"`)

* `0.9` (value: `"0.9"`)

* `1` (value: `"1"`)




