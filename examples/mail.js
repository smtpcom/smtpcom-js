var _smtp_public_api_overview = _interopRequireDefault(require("smtp_public_api_overview"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var testEmail = "your_email";
var testApiKey = "your_api_key";
var testSender = "your_sender_label";


var defaultClient = _smtp_public_api_overview.ApiClient.instance;

var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = testApiKey;

var apiInstance = new _smtp_public_api_overview.MessagesApi();
var opts = {
  'inlineObject': new _smtp_public_api_overview.InlineObject()
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