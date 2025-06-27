document.addEventListener('DOMContentLoaded', function () {
    const generateBtn = document.getElementById('generate-btn');
    const downloadBtn = document.getElementById('download-btn');
    const promptInput = document.getElementById('prompt-input');
    const imageContainer = document.getElementById('image-container');
    const loadingElement = document.getElementById('loading');

    const API_URL = 'http://localhost:3001/api/generate-image';

    let generatedImageUrl = null;

    generateBtn.addEventListener('click', generateImage);
    downloadBtn.addEventListener('click', downloadImage);

    async function generateImage() {
        const prompt = promptInput.value.trim();

        if (!prompt) {
            alert('Please enter a prompt to generate an image');
            return;
        }

        // Show loading state
        generateBtn.disabled = true;
        loadingElement.style.display = 'block';
        imageContainer.innerHTML = '<p>Your generated image will appear here</p>';
        downloadBtn.disabled = true;

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to generate image');
            }

            // Replace your current response handling with:
            const data = await response.json();
            if (data.artifacts && data.artifacts[0]?.base64) {
                // Convert base64 to displayable image
                generatedImageUrl = `data:image/png;base64,${data.artifacts[0].base64}`;
                imageContainer.innerHTML = `<img src="${generatedImageUrl}" alt="Generated image">`;
                downloadBtn.disabled = false;
            } else {
                throw new Error('No image data received');
            }




        } catch (error) {
            console.error('Error generating image:', error);
            imageContainer.innerHTML = `<p class="error">Error: ${error.message}</p>`;
        } finally {
            generateBtn.disabled = false;
            loadingElement.style.display = 'none';
        }
    }

    function downloadImage() {
        if (!generatedImageUrl) return;

        const link = document.createElement('a');
        link.href = generatedImageUrl;
        link.download = 'generated-image.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
});