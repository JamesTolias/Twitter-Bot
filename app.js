const rwClient = require('./twitterClient.js');
const CronJob = require('cron').CronJob;

const tweet = async () => {
    try {
        await rwClient.v2.tweet('Rise and Shine friends! What a beautiful day to be creative :)')
    } catch (e) {
        console.log(e)
    }
}

const job = new CronJob('0 6 * * *', () => {
    console.log('cron job starting!')
    tweet()
})

job.start();