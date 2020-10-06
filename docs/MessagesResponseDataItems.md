# SmtpComApi.MessagesResponseDataItems

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**msgId** | **String** | Unique message ID | [optional] 
**msgTime** | **Number** | Time at which the message was sent | [optional] 
**channel** | **String** | Name of the channel on which the message was sent | [optional] 
**smtpVars** | **Object** | Custom parameters and their value echoed back from &#x60;X-SMTPAPI&#x60; header&#39;s &#x60;unique_args&#x60; parameter | [optional] 
**msgData** | [**MessagesResponseDataMsgData**](MessagesResponseDataMsgData.md) |  | [optional] 
**details** | [**MessagesResponseDataDetails**](MessagesResponseDataDetails.md) |  | [optional] 
**opens** | [**MessagesResponseDataOpens**](MessagesResponseDataOpens.md) |  | [optional] 
**clicks** | [**MessagesResponseDataClicks**](MessagesResponseDataClicks.md) |  | [optional] 
**abuse** | [**MessagesResponseDataAbuse**](MessagesResponseDataAbuse.md) |  | [optional] 
**unsubs** | [**MessagesResponseDataUnsubs**](MessagesResponseDataUnsubs.md) |  | [optional] 


