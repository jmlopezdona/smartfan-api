'use strict';

let clientMQTT = require('./src/clientMQTT');

module.exports.sendMQTT = async (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };
  
  try {
    await clientMQTT.sendMessage(event.body);
  }
  catch (err) {
    console.log(err);
    return err;
  }
  return response;

};