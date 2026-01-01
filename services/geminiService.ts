
import { GoogleGenAI, Type } from "@google/genai";
import { CreativeBrief, Language } from "../types";

export class GeminiService {
  async generateProjectConcept(description: string, language: Language = 'en'): Promise<CreativeBrief> {
    // Always use the named parameter and direct process.env.API_KEY for initialization.
    // We create a new instance right before the call to ensure the latest API key is used.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const langPrompt = language === 'de' 
      ? "Bitte antworte auf Deutsch." 
      : "Please respond in English.";

    // Use ai.models.generateContent with a valid Gemini 3 model for reasoning tasks.
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a film/photo creative brief for the following request: "${description}". The company is Peak Productions, based in Munich. Provide a high-end, professional concept. ${langPrompt}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            conceptName: { type: Type.STRING },
            vibe: { type: Type.STRING },
            locations: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            },
            visualStyle: { type: Type.STRING },
            technicalRequirements: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            }
          },
          required: ["conceptName", "vibe", "locations", "visualStyle", "technicalRequirements"]
        }
      }
    });

    try {
      // Access response text as a property, not a method.
      const text = response.text;
      if (!text) {
        throw new Error("No response text received from the model.");
      }
      return JSON.parse(text.trim()) as CreativeBrief;
    } catch (error) {
      console.error("Failed to parse AI response", error);
      throw new Error(language === 'de' ? "Konzept konnte nicht erstellt werden." : "Failed to generate concept. Please try again.");
    }
  }
}

export const geminiService = new GeminiService();
