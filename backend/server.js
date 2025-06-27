

require('dotenv').config();


console.log("Loaded environment variables:", {
  port: process.env.PORT,
  keyPresent: !!process.env.STABILITY_API_KEY
});  


const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
    origin: ['http://127.0.0.1:5500', 'http://localhost:5500'],
    methods: ['POST']
}));

app.use(express.json());

app.post('/api/generate-image', async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        // Stability AI API call (SDXL 1.0)
        const response = await fetch('https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.STABILITY_API_KEY}`, // Changed to Stability key
                'Content-Type': 'application/json',
                'Accept': 'application/json' // Required for Stability AI
            },
            body: JSON.stringify({
                text_prompts: [{ text: prompt }], // Different prompt structure
                cfg_scale: 7, // Creativity control (4-14)
                height: 1024,
                width: 1024,
                steps: 30, // Generation steps (10-50)
                samples: 1 // Number of images
            })
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Image generation failed');

        res.json(data); // Returns { artifacts: [{ base64: "..." }] }
    } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({
            error: error.message,
            fullError: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});