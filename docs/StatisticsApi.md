# SmtpComApi.StatisticsApi

All URIs are relative to *https://api.smtp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v4StatsDurationSliceSliceSpecifierGroupByGet**](StatisticsApi.md#v4StatsDurationSliceSliceSpecifierGroupByGet) | **GET** /v4/stats/{duration}/{slice}/{slice_specifier}/{group_by} | Return event aggregates for the specified slices and duration. Slices can be chained.



## v4StatsDurationSliceSliceSpecifierGroupByGet

> StatsResponse v4StatsDurationSliceSliceSpecifierGroupByGet(start, duration, slice, sliceSpecifier, groupBy, limit, offset, opts)

Return event aggregates for the specified slices and duration. Slices can be chained.

**Get stats for a period**&lt;br&gt; Request:&lt;br&gt; *_/v4/stats/last_day*&lt;br&gt; *_/v4/stats?start&#x3D;Tue%2C%2016%20Jan%2015%3A14%3A29%20%2B0000*&lt;br&gt; Response:&lt;br&gt; &#x60;&#x60;&#x60; {\&quot;accepted\&quot;: 300, \&quot;delivered\&quot;: 100, \&quot;complained\&quot;: 0, \&quot;failed\&quot;: 50, \&quot;bounced\&quot;: 150, \&quot;queued\&quot;: 0} &#x60;&#x60;&#x60; &lt;br&gt;&lt;br&gt; **Get stats for a period, grouped by channel**&lt;br&gt; Request:&lt;br&gt; *_/v4/stats/last_day/channel*&lt;br&gt; Response:&lt;br&gt; &#x60;&#x60;&#x60; {\&quot;channel1\&quot;: {\&quot;accepted\&quot;: 30, \&quot;delivered\&quot;: 10, \&quot;complained\&quot;: 0, \&quot;failed\&quot;: 5, \&quot;bounced\&quot;: 15, \&quot;queued\&quot;: 0}, \&quot;channel2\&quot;: {\&quot;accepted\&quot;: 0, \&quot;delivered\&quot;: 0, \&quot;complained\&quot;: 0, \&quot;failed\&quot;: 0, \&quot;bounced\&quot;: 0, \&quot;queued\&quot;: 0}} &#x60;&#x60;&#x60; &lt;br&gt;&lt;br&gt; **Get stats for specific sending domain and channel (sender) and period, grouped by ISP**&lt;br&gt; Request:&lt;br&gt; *_/v4/stats/last_day/channel/marketing/domain/smtp.com/rcpt_isp*&lt;br&gt; Response:&lt;br&gt; &#x60;&#x60;&#x60; {\&quot;yahoo\&quot;: {\&quot;accepted\&quot;: 30, \&quot;delivered\&quot;: 10, \&quot;complained\&quot;: 0, \&quot;failed\&quot;: 5, \&quot;bounced\&quot;: 15, \&quot;queued\&quot;: 0}, \&quot;google\&quot;: {\&quot;accepted\&quot;: 0, \&quot;delivered\&quot;: 0, \&quot;complained\&quot;: 0, \&quot;failed\&quot;: 0, \&quot;bounced\&quot;: 0, \&quot;queued\&quot;: 0}} &#x60;&#x60;&#x60; 

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

let apiInstance = new SmtpComApi.StatisticsApi();
let start = "start_example"; // String | The starting time. Required if the `{duration}` path parameter is not specified. RFC 2822 or UNIX epoch format.
let duration = "duration_example"; // String | A standardized shorthand for a known start/end bracket. Duration automatically supersedes start/end values provided as query string parameters. One of either the `{duration}` path parameter or the `start` query parameter must be specified.  <table>  <tr><th>Value</th><th>Start</th><th>End</th><th>Slicable</th></tr>  <tr><td>last_24hrs</td><td>84,400 seconds ago</td><td>Now</td><td>yes</td></tr>  <tr><td>last_30days</td><td>18,144,000 seconds ago</td><td>Now</td><td>yes</td></tr>  <tr><td>last_7days</td><td>604,800 seconds ago</td><td>Now</td><td>yes</td></tr>  <tr><td>last_day</td><td>00:00:00 of the previous day</td><td>23:59:59 of the previous day</td><td>yes</td></tr>  <tr><td>last_hour</td><td>00:00 of the previous hour</td><td>59:59 of the previous hour</td><td>yes</td></tr>  <tr><td>last_month or mtd</td><td>1st day 00:00:00 of previous month</td><td>23:59:59 last day of previous month</td><td>yes</td></tr>  <tr><td>last_week</td><td>Monday 00:00:00 of previous week</td><td>Sunday 23:59:59 of previous week</td><td>yes</td></tr>  <tr><td>this_day</td><td>00:00:00 of current day</td><td>Now</td><td>yes</td></tr>  <tr><td>this_hour</td><td>00:00 of current clock hour</td><td>Now</td><td>yes</td></tr>  <tr><td>this_month</td><td>1st day 00:00:00 of current month</td><td>Now</td><td>yes</td></tr>  <tr><td>this_week</td><td>Monday 00:00:00 of current week</td><td>Now</td><td>yes</td></tr>  <tr><td>last_year</td><td> Jan 1st 00:00:00 of previous year</td><td>Dec 31st 23:59:59 of previous year</td><td>no</td></tr>  <tr><td>this_year or ytd</td><td>Jan 1st  00:00:0 of current year</td><td>Now</td><td>no</td></tr>  <tr><td>total</td><td>Account creation date</td><td>Now</td><td>no</td></tr>  </table> 
let slice = "slice_example"; // String | A reducing method which can be applied to the requested duration. A final slice without an optional slice specifier will define a grouping.  Possible Values:  * `channel`: (optional) A given account's sender  * `domain`: (optional) Sending domain  * `rcpt_domain`: (optional) Recieving domain  * `rcpt_isp`: (optional) Receiving ISP     Slices can be chained in a meaningful way – for example:   ```   /last_month/channel/marketing/domain/smtp.com/rcpt_domain?event=complained   ``` would produce an aggregate of complaints for a current account’s channel (sender) called “marketing” which were:   * sent from the registered email domain “smtp.com”, and    * are grouped by receiving domains       The response would look something like:   ```   {“google.com”: {“complained”: 5}, “yahoo.com”: {“complained”:1}, “aol.com”: {“complained”:1}}   ``` 
let sliceSpecifier = "sliceSpecifier_example"; // String | slice value (smtp.com, sender1)
let groupBy = "groupBy_example"; // String | Define a grouping:  * `channel` - optionally to be followed by a channel ID or name specifier  * `domain`  - optionally to be followed by a registered domain name  * `rcpt_domain` - optionally to be followed by a registered domain name  * `rcpt_isp` - optionally to be followed by a registered domain name 
let limit = 56; // Number | Maximum number of items to return.
let offset = 56; // Number | Number of items to skip before returning the results.
let opts = {
  'end': "end_example", // String | The ending time. If not specified, defaults to now. RFC 2822 or UNIX epoch format.
  'event': "event_example" // String | Array of any event names for which stats has been requested.
};
apiInstance.v4StatsDurationSliceSliceSpecifierGroupByGet(start, duration, slice, sliceSpecifier, groupBy, limit, offset, opts, (error, data, response) => {
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
 **start** | **String**| The starting time. Required if the &#x60;{duration}&#x60; path parameter is not specified. RFC 2822 or UNIX epoch format. | 
 **duration** | **String**| A standardized shorthand for a known start/end bracket. Duration automatically supersedes start/end values provided as query string parameters. One of either the &#x60;{duration}&#x60; path parameter or the &#x60;start&#x60; query parameter must be specified.  &lt;table&gt;  &lt;tr&gt;&lt;th&gt;Value&lt;/th&gt;&lt;th&gt;Start&lt;/th&gt;&lt;th&gt;End&lt;/th&gt;&lt;th&gt;Slicable&lt;/th&gt;&lt;/tr&gt;  &lt;tr&gt;&lt;td&gt;last_24hrs&lt;/td&gt;&lt;td&gt;84,400 seconds ago&lt;/td&gt;&lt;td&gt;Now&lt;/td&gt;&lt;td&gt;yes&lt;/td&gt;&lt;/tr&gt;  &lt;tr&gt;&lt;td&gt;last_30days&lt;/td&gt;&lt;td&gt;18,144,000 seconds ago&lt;/td&gt;&lt;td&gt;Now&lt;/td&gt;&lt;td&gt;yes&lt;/td&gt;&lt;/tr&gt;  &lt;tr&gt;&lt;td&gt;last_7days&lt;/td&gt;&lt;td&gt;604,800 seconds ago&lt;/td&gt;&lt;td&gt;Now&lt;/td&gt;&lt;td&gt;yes&lt;/td&gt;&lt;/tr&gt;  &lt;tr&gt;&lt;td&gt;last_day&lt;/td&gt;&lt;td&gt;00:00:00 of the previous day&lt;/td&gt;&lt;td&gt;23:59:59 of the previous day&lt;/td&gt;&lt;td&gt;yes&lt;/td&gt;&lt;/tr&gt;  &lt;tr&gt;&lt;td&gt;last_hour&lt;/td&gt;&lt;td&gt;00:00 of the previous hour&lt;/td&gt;&lt;td&gt;59:59 of the previous hour&lt;/td&gt;&lt;td&gt;yes&lt;/td&gt;&lt;/tr&gt;  &lt;tr&gt;&lt;td&gt;last_month or mtd&lt;/td&gt;&lt;td&gt;1st day 00:00:00 of previous month&lt;/td&gt;&lt;td&gt;23:59:59 last day of previous month&lt;/td&gt;&lt;td&gt;yes&lt;/td&gt;&lt;/tr&gt;  &lt;tr&gt;&lt;td&gt;last_week&lt;/td&gt;&lt;td&gt;Monday 00:00:00 of previous week&lt;/td&gt;&lt;td&gt;Sunday 23:59:59 of previous week&lt;/td&gt;&lt;td&gt;yes&lt;/td&gt;&lt;/tr&gt;  &lt;tr&gt;&lt;td&gt;this_day&lt;/td&gt;&lt;td&gt;00:00:00 of current day&lt;/td&gt;&lt;td&gt;Now&lt;/td&gt;&lt;td&gt;yes&lt;/td&gt;&lt;/tr&gt;  &lt;tr&gt;&lt;td&gt;this_hour&lt;/td&gt;&lt;td&gt;00:00 of current clock hour&lt;/td&gt;&lt;td&gt;Now&lt;/td&gt;&lt;td&gt;yes&lt;/td&gt;&lt;/tr&gt;  &lt;tr&gt;&lt;td&gt;this_month&lt;/td&gt;&lt;td&gt;1st day 00:00:00 of current month&lt;/td&gt;&lt;td&gt;Now&lt;/td&gt;&lt;td&gt;yes&lt;/td&gt;&lt;/tr&gt;  &lt;tr&gt;&lt;td&gt;this_week&lt;/td&gt;&lt;td&gt;Monday 00:00:00 of current week&lt;/td&gt;&lt;td&gt;Now&lt;/td&gt;&lt;td&gt;yes&lt;/td&gt;&lt;/tr&gt;  &lt;tr&gt;&lt;td&gt;last_year&lt;/td&gt;&lt;td&gt; Jan 1st 00:00:00 of previous year&lt;/td&gt;&lt;td&gt;Dec 31st 23:59:59 of previous year&lt;/td&gt;&lt;td&gt;no&lt;/td&gt;&lt;/tr&gt;  &lt;tr&gt;&lt;td&gt;this_year or ytd&lt;/td&gt;&lt;td&gt;Jan 1st  00:00:0 of current year&lt;/td&gt;&lt;td&gt;Now&lt;/td&gt;&lt;td&gt;no&lt;/td&gt;&lt;/tr&gt;  &lt;tr&gt;&lt;td&gt;total&lt;/td&gt;&lt;td&gt;Account creation date&lt;/td&gt;&lt;td&gt;Now&lt;/td&gt;&lt;td&gt;no&lt;/td&gt;&lt;/tr&gt;  &lt;/table&gt;  | 
 **slice** | **String**| A reducing method which can be applied to the requested duration. A final slice without an optional slice specifier will define a grouping.  Possible Values:  * &#x60;channel&#x60;: (optional) A given account&#39;s sender  * &#x60;domain&#x60;: (optional) Sending domain  * &#x60;rcpt_domain&#x60;: (optional) Recieving domain  * &#x60;rcpt_isp&#x60;: (optional) Receiving ISP     Slices can be chained in a meaningful way – for example:   &#x60;&#x60;&#x60;   /last_month/channel/marketing/domain/smtp.com/rcpt_domain?event&#x3D;complained   &#x60;&#x60;&#x60; would produce an aggregate of complaints for a current account’s channel (sender) called “marketing” which were:   * sent from the registered email domain “smtp.com”, and    * are grouped by receiving domains       The response would look something like:   &#x60;&#x60;&#x60;   {“google.com”: {“complained”: 5}, “yahoo.com”: {“complained”:1}, “aol.com”: {“complained”:1}}   &#x60;&#x60;&#x60;  | 
 **sliceSpecifier** | **String**| slice value (smtp.com, sender1) | 
 **groupBy** | **String**| Define a grouping:  * &#x60;channel&#x60; - optionally to be followed by a channel ID or name specifier  * &#x60;domain&#x60;  - optionally to be followed by a registered domain name  * &#x60;rcpt_domain&#x60; - optionally to be followed by a registered domain name  * &#x60;rcpt_isp&#x60; - optionally to be followed by a registered domain name  | 
 **limit** | **Number**| Maximum number of items to return. | 
 **offset** | **Number**| Number of items to skip before returning the results. | 
 **end** | **String**| The ending time. If not specified, defaults to now. RFC 2822 or UNIX epoch format. | [optional] 
 **event** | **String**| Array of any event names for which stats has been requested. | [optional] 

### Return type

[**StatsResponse**](StatsResponse.md)

### Authorization

[apiID](../README.md#apiID), [apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

