var _smtpcom = _interopRequireDefault(require("@smtpcom/smtpcom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var testEmail = "your_email";
var testApiKey = "your_api_key";
var testSender = "your_sender_label";


var defaultClient = _smtpcom.ApiClient.instance;

var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = testApiKey;

var apiInstance = new _smtpcom.MessagesApi();
var opts = {
  'inlineObject': new _smtpcom.InlineObject()
};
var body = opts['inlineObject'];
body.channel = testSender; // Sender label
body.subject = 'Test';
body.recipients = {'to': [{'name': 'test', 'address': testEmail}]};
body.originator = {'from': {'name': 'test', 'address': testEmail}};
body.body = {'parts': [{'content': 'Hello'}]};

apiInstance.v4MessagesPost(opts, function (error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});