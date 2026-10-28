import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

// Created lazily: `next build` imports this module while collecting page
// data, and the OpenAI SDK throws at construction when the key is unset.
let openrouter: OpenAI | null = null;
function getOpenRouter(): OpenAI {
  if (!openrouter) {
    openrouter = new OpenAI({
      apiKey: process.env.OPENROUTER_API_KEY,
      baseURL: "https://openrouter.ai/api/v1",
    });
  }
  return openrouter;
}

export async function POST(request: NextRequest) {
  try {
    const { propertyDetails } = await request.json();

    if (!propertyDetails) {
      return NextResponse.json({ error: "Property details are required" }, { status: 400 });
    }

    if (!process.env.OPENROUTER_API_KEY) {
      return NextResponse.json(
        { error: "OpenRouter API key not configured" },
        { status: 500 },
      );
    }

    const prompt = `Generate a compelling, SEO-friendly property description for a real estate listing in Las Vegas or Henderson, Nevada. 

Property Details:
- Address/Location: ${propertyDetails.location || "Not specified"}
- Bedrooms: ${propertyDetails.bedrooms || "Not specified"}
- Bathrooms: ${propertyDetails.bathrooms || "Not specified"}
- Square Feet: ${propertyDetails.squareFeet || "Not specified"}
- Price: ${propertyDetails.price || "Not specified"}
- Year Built: ${propertyDetails.yearBuilt || "Not specified"}
- Additional Features: ${propertyDetails.features || "None specified"}

Requirements:
- Write 2-3 engaging paragraphs (150-250 words)
- Highlight key features and benefits
- Use natural, appealing language
- Include location benefits (proximity to amenities, schools, etc.)
- Make it compelling for potential buyers
- Keep it professional and accurate`;

    const response = await getOpenRouter().chat.completions.create({
      model: "anthropic/claude-3.5-haiku",
      messages: [
        {
          role: "system",
          content:
            "You are an expert real estate copywriter specializing in Las Vegas and Henderson, Nevada properties. Write compelling, accurate property descriptions that highlight features and benefits.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.8,
      max_tokens: 400,
    });

    const description = response.choices[0].message.content;

    return NextResponse.json({ description });
  } catch (error) {
    console.error("OpenRouter API error:", error);
    return NextResponse.json(
      { error: "Failed to generate property description" },
      { status: 500 },
    );
  }
}
