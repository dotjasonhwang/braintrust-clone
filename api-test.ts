
import { wrapGoogleGenAI, initLogger } from "braintrust";
import * as googleGenAi from "@google/genai";
import * as dotenv from 'dotenv'; // <-- NEW
dotenv.config(); // <-- NEW: Load .env variables

// wrap Google GenAI SDK for automatic tracing
const { GoogleGenAI } = wrapGoogleGenAI(googleGenAi);

// Initialize the Braintrust logging
initLogger({ projectName: "My Project", apiKey: process.env.BRAINTRUST_API_KEY });

// Configure Google AI SDK
const client = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
});

async function main() {
  const response = await client.models.generateContent({
    model: "gemini-2.0-flash-001",
    contents: "What is the capital of France?",
    config: {
      maxOutputTokens: 100,
    },
  });
  console.log(response.text);
}

main();
