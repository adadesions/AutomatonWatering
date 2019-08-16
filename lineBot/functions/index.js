const functions = require('firebase-functions');
const request = require('request-promise');

const LINE_MESSAGING_API = 'https://api.line.me/v2/bot/message';
const LINE_HEADER = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer chPYlYpN4mgqmVwnt1sIAFvie4FVi8wqIF/4KcbZLEeK9H++Fs+0Oth0P1+uOPvio2FaPnyfNYyiMp2gkZCwgX8v7KP3tJ2ps3scj6FEDx58sVXWIASsOs99ZPMUFhIvRxeP0pba2JQyYAC18HTYVwdB04t89/1O/w1cDnyilFU=`
};

const reply = (bodyRequest) => {
    const command = bodyRequest.events[0].message.text
    let resMsg = ''
    if(command.includes('รด')) {
        resMsg = 'กำลังดำเนินการรดน้ำต้นไม้ให้ครับ^^'
    }
    else {
        resMsg = "ณ ขณะนี้เราทำได้แค่คำสั่ง 'รด' น้ำต้นไม้ครับ!"
    }
    return request({
        method: `POST`,
        uri: `${LINE_MESSAGING_API}/reply`,
        headers: LINE_HEADER,
        body: JSON.stringify({
            replyToken: bodyRequest.events[0].replyToken,
            messages: [
                {
                    type: `text`,
                    text: resMsg
                }
            ]
        })
    });
}


exports.LineBot = functions.https.onRequest((req, res) => {
    if (req.body.events[0].message.type !== 'text') {
        return;
    }
    reply(req.body)
});

