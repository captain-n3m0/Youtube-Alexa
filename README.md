
# Youtube-Alexa Audio
In this code, the PlayVideoIntentHandler handles the intent to play a YouTube video. It first retrieves the video ID from the YouTube API using the request library, and then constructs a URL to the video. It then uses the addAudioPlayerPlayDirective method to play the video on the Alexa-enabled device.

Note: You'll need to replace YOUR_API_KEY in the apiUrl with your own YouTube Data API v3 key.


## Deployment

To deploy the Alexa skill that plays YouTube videos, you'll need to follow these steps:

1) Zip the code: Create a ZIP file of the code, including the node_modules directory and any other files or assets that are necessary for the skill to run.

2) Create an AWS Lambda function: Go to the AWS Management Console and create a new Lambda function. Choose "Author from scratch" and select "Node.js 14.x" as the runtime. Upload the ZIP file you created in step 1 and set the handler to index.handler.

3) Set up an Alexa skill: Go to the Alexa Developer Console and create a new skill. Give it a name and invocation name, and choose "Custom" as the model type. On the "Invocation" page, connect the skill to the AWS Lambda function you created in step 2.

4) Add the interaction model: On the "Build" page of the Alexa Developer Console, add the intent schema and sample utterances for the skill. In this case, you'll need to add the PlayVideoIntent intent and sample utterances like "Play a video called funny cats" or "Play a video on YouTube".

5) Test the skill: Use the Alexa Developer Console or an Alexa-enabled device to test the skill. Make sure the skill is working as expected and that it can play YouTube videos correctly.

6) Submit the skill for certification: Once you're satisfied with the skill, submit it for certification by Amazon. Amazon will review the skill to ensure that it meets their guidelines, and if it passes, it will be available to the public in the Alexa Skills Store.

Note that there may be additional steps or configuration options required depending on the specifics of your skill and deployment environment. These steps provide a general overview of the process.

## LICENSE

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## License

[MIT](https://choosealicense.com/licenses/mit/)
[GNU GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)
