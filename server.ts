import express, { Request, Response } from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parser
  app.use(express.json());

  // Health check
  app.get("/api/health", (req: Request, res: Response) => {
    res.json({ status: "healthy", timestamp: new Date().toISOString() });
  });

  // API to handle AI content generation
  app.post("/api/generate-strategy", async (req: Request, res: Response) => {
    const { angle, targetAudience, extraPrompt } = req.body;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({
        error: "GEMINI_API_KEY is not configured in the server environment. Please define it in the Secrets panel."
      });
    }

    try {
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });

      // Construct customized prompt for Rinoka by Summarecon Mutiara Makassar
      const prompt = `
        Tolong rancang Content Strategy & Calendar proposal yang profesional dan sangat elegan untuk kerja sama antara Agency "StayUP" (agensi kreatif modern) dan properti "Rinoka" by Summarecon Mutiara Makassar.
        
        Focus/Angle Kerja Sama: ${angle || "Aesthetic & Modern Tropical Living"}
        Target Audiens Utama: ${targetAudience || "Pasangan Muda, Milenial Makassar, Investor Properti Premium"}
        Info Tambahan: ${extraPrompt || "Menonjolkan brand awareness, desain hunian Jepang modern tropical yang asri, fungsional, dan prestisius."}

        Deliverables yang wajib dirinci secara konkret (total 15 konten + 10 Instagram stories):
        1. 10 DESAIN (bisa berupa Single Feed atau Carousel): Berikan ide visual, judul headline kontemporer/elegan, caption instagram pendek yang memikat, dan tujuan taktis di balik desain tersebut.
        2. 5 VIDEO (Reels/TikTok): Berikan hook detik pertama, brief alur video (storyboard singkat), pilihan audio/musik latar bernuansa modern/aesthetic, dan visual direction-nya.
        3. 10 STORY (Instagram Stories): Berikan ide visual/layout, stiker interaktif yang dipakai (Pool, Q&A, Slider, Countdown), dan Call to Action (CTA) untuk memicu direct message atau registrasi booking.

        Tolong respon dalam format JSON yang valid dengan skema berikut. Pastikan data terisi lengkap untuk semua index (10 desain, 5 video, 10 stories). Gunakan Bahasa Indonesia yang sangat profesional, persuasif, kreatif, mementingkan branding Summarecon:

        {
          "summaryOverview": "Deskripsi naratif singkat tentang konsep campaign ini.",
          "campaignKPIs": {
            "estimatedReach": "Angka estimasi jangkauan, misal: '80K - 120K'",
            "engagementRate": "Estimasi target engagement rate, misal: '6.5%'",
            "kpiGoalDescription": "Penjelasan singkat taktik pencapaian KPI."
          },
          "designs": [
            {
              "id": 1,
              "title": "Headline judul konten desain",
              "format": "Carousel atau Single Feed",
              "visualConcept": "Deskripsi konsep visual, warna, vibe layout",
              "caption": "Copywriting caption Instagram lengkap dengan tag & hashtag",
              "tacticGoal": "Tujuan taktis (misal: Edukasi, Leads, Saveable)",
              "slideBreakdown": ["Slide 1...", "Slide 2..."]
            }
          ],
          "videos": [
            {
              "id": 1,
              "title": "Judul konten video",
              "hook": "Hook detik 1-3 untuk menahan perhatian",
              "storyboard": "Alur cerita/scene demi scene dari awal hingga Call to Action",
              "audio": "Rekomendasi audio (misal: Lofi Chill, Elegant Synth, Upbeat Corporate)",
              "visualDirection": "Cara pengambilan angle kamera atau transisi agar estetik"
            }
          ],
          "stories": [
            {
              "id": 1,
              "title": "Konsep Instagram Story",
              "creativeIdea": "Ide interaksi atau konten cerita",
              "sticker": "Stiker interaktif yang direkomendasikan",
              "cta": "Kata-kata Call to Action untuk klik link/DM"
            }
          ]
        }
      `;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              summaryOverview: { type: Type.STRING },
              campaignKPIs: {
                type: Type.OBJECT,
                properties: {
                  estimatedReach: { type: Type.STRING },
                  engagementRate: { type: Type.STRING },
                  kpiGoalDescription: { type: Type.STRING }
                },
                required: ["estimatedReach", "engagementRate", "kpiGoalDescription"]
              },
              designs: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.INTEGER },
                    title: { type: Type.STRING },
                    format: { type: Type.STRING },
                    visualConcept: { type: Type.STRING },
                    caption: { type: Type.STRING },
                    tacticGoal: { type: Type.STRING },
                    slideBreakdown: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING }
                    }
                  },
                  required: ["id", "title", "format", "visualConcept", "caption", "tacticGoal", "slideBreakdown"]
                }
              },
              videos: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.INTEGER },
                    title: { type: Type.STRING },
                    hook: { type: Type.STRING },
                    storyboard: { type: Type.STRING },
                    audio: { type: Type.STRING },
                    visualDirection: { type: Type.STRING }
                  },
                  required: ["id", "title", "hook", "storyboard", "audio", "visualDirection"]
                }
              },
              stories: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.INTEGER },
                    title: { type: Type.STRING },
                    creativeIdea: { type: Type.STRING },
                    sticker: { type: Type.STRING },
                    cta: { type: Type.STRING }
                  },
                  required: ["id", "title", "creativeIdea", "sticker", "cta"]
                }
              }
            },
            required: ["summaryOverview", "campaignKPIs", "designs", "videos", "stories"]
          }
        }
      });

      const text = response.text;
      if (!text) {
        throw new Error("Empty response received from Gemini");
      }

      const parsedData = JSON.parse(text);
      res.json(parsedData);
    } catch (err: any) {
      console.error("Gemini API Error details:", err);
      res.status(500).json({
        error: "Failed to generate AI content campaign strategy.",
        details: err?.message || err,
      });
    }
  });

  // Vite Integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode.`);
  });
}

startServer();
