// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { ActivityHandler, MessageFactory } = require('botbuilder');
const { QuestionUnderstanding } = require('./bot/QuestionUnderstanding');
const { GraphdbHelper } = require('./bot/GraphdbHelper');
const { ViewHelper } = require('./bot/ViewHelper');

class EchoBot extends ActivityHandler {
    constructor() {
        super();
        
        this.onMessage(async (context, next) => {

            var replyText = `You said: ${ context.activity.text }`;
            const qu = new QuestionUnderstanding(context.activity.text);
            const Graphdb = new GraphdbHelper(qu.findKeyWord(), qu.getQueryNumber());
            // console.log(qu.KeyWord + " " + qu.getQueryNumber)

            replyText = "Түр хүлээн үү " + Graphdb.KeyWord + "-н мэдээллийг хайж байна.";

            console.log("-----------------blaa");
            var responseBody = await Graphdb.responseBack();
            console.log("-----------------blaa");

            if(!(responseBody===undefined)){
                const view = new ViewHelper(responseBody);
                 if(qu.getQueryNumber() == 20) {
                    await context.sendActivity({ 
                        attachments: view.searchAll()
                    });
                }
                else if(qu.getQueryNumber() == 21){
                    await context.sendActivities({
                        attachments: view.searchHigherPrice()
                    });
                }
                else if(qu.getQueryNumber() == 24){
                    await context.sendActivities({
                        attachments: view.seachBrand()
                    });
                }
                // else if(qu.getQueryNumber() == 22){
                //     await context.sendActivities({
                //         attachments: [view.searchLowerPrice()]
                //     });
                // }
                else if(qu.getQueryNumber() == 911) {
                     await context.sendActivity({ 
                        attachments: [view.QuestionList()] 
                    });
                }
                else if(qu.getQueryNumber() == 404) {
                     await context.sendActivity({ 
                        attachments: [view.ErrorList()] 
                    });
                }
            }
            else{
                await context.sendActivity(MessageFactory.text(replyText, replyText));
            }
           
            await next();
        });

        this.onMembersAdded(async (context, next) => {
            const membersAdded = context.activity.membersAdded;
            const welcomeText = 'Сайн байна уу.\n' + 
            'Манай гал тогооны цахилгаан барааны нэгдсэн чатботонд тавтай морил нуу.\n' + 
            'Таны хайж буй цахилгаан барааны мэдээллийг бид танд хурдан шуурхай олоход туслах нь манай ботны гол зорилго билээ.\n' +
            'Одоогоор манай чат бот нь доорх асуултад хариулж байна.\n' +
            'Брендийн бүтээгдэхүүнийг харахын тулд брендийн нэр "мэдээлэл" гэж бичихэд харагдах болно.\n' +
            'Брендүүд:\n' + 
            '- Nomin\n' +
            '- BSB \n' +
            '- Haier\n' +
            '- Enjoy\n' +
            '- Rotenzo\n' + 
            '- LG\n' + 
            'Enjoy';

            for (let cnt = 0; cnt < membersAdded.length; ++cnt) {
                if (membersAdded[cnt].id !== context.activity.recipient.id) {
                    await context.sendActivity(MessageFactory.text(welcomeText, welcomeText));
                }
            }
            // By calling next() you ensure that the next BotHandler is run.
            await next();
        });
    }
}

module.exports.EchoBot = EchoBot;
