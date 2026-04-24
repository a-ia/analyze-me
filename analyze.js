require('dotenv').config();
const Groq = require('groq-sdk');

const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

const sampleText = `
  The team needs to finalize the Q3 roadmap by Friday. 
  Engineering should review the API performance issues flagged last sprint. 
  Marketing is waiting on copy approval before launching the campaign. 
  The client demo is scheduled for next Tuesday and slides need to be ready.
`;

async function analyzeText(text) {
  const response = await client.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    messages: [
      {
        role: 'user',
        content: `Analyze the following text and return a JSON object with exactly two fields:
1. "summary": a short 1-2 sentence summary
2. "action_items": an array of exactly 3 key action items

Return only valid JSON, no extra text.

Text: ${text}`
      }
    ],
    max_tokens: 256
  });

  const raw = response.choices[0].message.content;
  const cleaned = raw.replace(/```json|```/g, '').trim();
  return JSON.parse(cleaned);
}

analyzeText(sampleText)
  .then(result => console.log(JSON.stringify(result, null, 2)))
  .catch(err => console.error('Error:', err.message));