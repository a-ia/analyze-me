# analyze-me

This is a lightweight Node.js script that uses Groq's free tier model (Llama) to analyze text. It takes a block of text, sends it to the Llama language model via the Groq API, and returns a structured JSON response with a summary and 3 key action items.

## Setup
1. Clone the repo
2. Run `npm install`
4. Add Groq API key to `.env`
5. Run `node analyze.js`

## Stack
- JavaScript
- Node.js
- Groq API (free tier)
- model: `llama-3.3-70b-versatile`
- Claude Code used throughout development workflow

## Notes
- Originally planned to build with Anthropic Claude API, but switched to Groq free tier to keep the project within scope.

## Sample Output
```json
{
  "summary": "The team has several pressing tasks to complete, including finalizing the Q3 roadmap and preparing for the client demo. These tasks have deadlines and dependencies that need to be met for successful project progression.",
  "action_items": [
    "Finalize Q3 roadmap by Friday",
    "Review and address API performance issues",
    "Prepare client demo slides for next Tuesday"
  ]
}