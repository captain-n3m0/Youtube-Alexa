const Alexa = require('ask-sdk-core');
const request = require('request');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speechText = 'Welcome to YouTube on Alexa. What video would you like to watch?';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

const PlayVideoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PlayVideoIntent';
    },
    handle(handlerInput) {
        const videoQuery = handlerInput.requestEnvelope.request.intent.slots.video.value;
        const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(videoQuery)}&type=video&videoDefinition=high&maxResults=1&key=AIzaSyB5t7oebexArefXyOKZHiaEWOVdZShQGeE`;

        return new Promise((resolve, reject) => {
            request(apiUrl, (error, response, body) => {
                if (!error && response.statusCode === 200) {
                    const videoId = JSON.parse(body).items[0].id.videoId;
                    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

                    const speechText = `Playing ${videoQuery} on YouTube. Enjoy!`;
                    const cardTitle = `Playing ${videoQuery} on YouTube`;
                    const cardContent = `Watch now: ${videoUrl}`;

                    resolve(handlerInput.responseBuilder
                        .speak(speechText)
                        .withStandardCard(cardTitle, cardContent)
                        .addAudioPlayerPlayDirective('REPLACE_ALL', videoUrl, videoUrl, 0, null)
                        .getResponse());
                } else {
                    reject();
                }
            });
        }).catch(() => {
            const speechText = 'Sorry, something went wrong. Please try again later.';
            return handlerInput.responseBuilder
                .speak(speechText)
                .getResponse();
        });
    }
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
    .addRequestHandlers(
        LaunchRequestHandler,
        PlayVideoIntentHandler
    )
    .lambda();