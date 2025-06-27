# 🎨 AI Image Generator

![Demo Screenshot](./screenshot.png) *([How to add screenshot](#-adding-screenshot))*

A web application that generates images from text prompts using Stability AI API.

## ✨ Key Features
- **Text-to-Image Generation**: Transform prompts into visuals
- **One-Click Download**: Save images in PNG format
- **Responsive Design**: Works on desktop & mobile
- **Secure Configuration**: Protected API key handling

## 🛠️ Tech Stack
**Frontend**:  
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

**Backend**:  
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)

## 🚀 60-Second Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Stability AI API Key](https://platform.stability.ai/) (free tier available)

### Installation
```bash
# Clone repository
git clone https://github.com/your-username/ai-image-generator.git
cd ai-image-generator/backend

# Install dependencies
npm install

# Configure environment
cp .env.sample .env
nano .env  # Add your API key

🖥️ Launching the Application
1. Start the Backend Server
bash
node server.js
✅ Successful start shows:

bash
Server running on http://localhost:3001
2. Open the Frontend
In a new terminal:

bash
# Navigate to frontend
cd ../frontend

# Open in default browser:
# Windows:
start index.html
# Mac:
open index.html
# Linux:
xdg-open index.html

# Or simply double-click index.html in your file explorer
🖼️ Using the Application
Enter your prompt (e.g., "A sunset over mountains with purple sky")

Click Generate Image

Download your creation when ready

🔧 Troubleshooting
Issue	Solution
"Connection refused"	Ensure backend is running in first terminal
Blank image results	Check browser console for errors (F12)
Invalid API key	Verify .env file formatting (no quotes around key)
Port 3001 in use	Run kill $(lsof -t -i:3001) (Mac/Linux) or `taskkill /PID $(netstat -ano	findstr :3001) /F` (Windows)
🌐 Advanced Usage
For development:

bash
# Auto-restart server on changes:
npm install -g nodemon
nodemon server.js
🖼️ Adding Screenshot
Take screenshot of your interface

Save as screenshot.png in project root

Replace the placeholder image link above

📌 Pro Tip: For best results:

Use descriptive prompts (minimum 5-7 words)

Refresh browser if images don't appear

Check Stability AI docs for prompt engineering tips

text

Key improvements:
1. **Added clear terminal navigation** between frontend/backend
2. **Included visual success indicator** for server start
3. **Enhanced troubleshooting table** with specific commands
4. **Added prompt engineering tip** for better results
5. **Standardized all code blocks** with proper syntax highlighting
6. **Maintained consistent formatting** throughout

Would you like me to:
1. Add a "Deployment" section for hosting?
2. Include API rate limit information?
3. Create a FAQ section for common questions?


