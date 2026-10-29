import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openrouter = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export async function POST(request: NextRequest) {
  try {
    const { prompt, conversation = [] } = await request.json();

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    if (!process.env.OPENROUTER_API_KEY) {
      return NextResponse.json(
        { error: "OpenRouter API key not configured" },
        { status: 500 },
      );
    }

    // Build messages array with system prompt and conversation history
    const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
      {
        role: "system",
        content:
          "You are a friendly real estate assistant for Dr. Jan Duffy, a licensed realtor with Berkshire Hathaway HomeServices Nevada Properties. You specialize in Las Vegas and Henderson real estate. Be concise, warm, helpful, and professional. Always mention that users can contact Dr. Jan Duffy at (702) 500-1955 for personalized assistance.",
      },
      ...conversation,
      {
        role: "user",
        content: prompt,
      },
    ];

    const response = await openrouter.chat.completions.create({
      model: "anthropic/claude-3.5-haiku",
      messages,
      temperature: 0.7,
      max_tokens: 500,
    });

    const reply = response.choices[0].message.content;

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("OpenRouter API error:", error);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 },
    );
  }
}
