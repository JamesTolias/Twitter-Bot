const {TwitterApi} = require('twitter-api-v2');

const client = new TwitterApi({ 
    appKey: '5AH93QWWtmd0GyIQ5dtHeLMMV',
    appSecret: 'CAthSDVaHQI4jI5rcYvYZldRzaYhuzune3CzsB12menZiX3E4L',
    accessToken: '1585204622402240513-cV4uyCcb9bKLPloeHQuQ1mvEHZ69QR',
    accessSecret: 'ptWtzmPPt4H5efnzdmI01bxSKqoxxx1lduqnUGdjUnozl'
})

const rwClient = client.readWrite

module.exports = rwClient