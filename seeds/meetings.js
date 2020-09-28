const knex = require('../database');
const { LoremIpsum } = require("lorem-ipsum");

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4,
    }
});

exports.seed = function() {
  return knex('meetings').del().then(async () => {
        const meetings = [];
        for (let i = 0; i < 10; i++) {
            meetings.push({
                title: 'Test Meeting #' + i,
                description: lorem.generateParagraphs(Math.max(Math.floor(Math.random() * 10), 1)),
                location: Math.floor(Math.random() * 1000) + ' Main Street',
            })
        }
        
        await knex('meetings').insert(meetings);
  })
}