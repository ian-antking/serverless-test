'use strict';

const fetch = require("node-fetch")

module.exports.run = async () => {
  try {
    const response = await fetch(process.env.API_URL)
    const payload = await response.json()
    return {
      statusCode: 200,
      body: JSON.stringify({
          payload
        }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "something went wrong"
      })
    }
  }
};
