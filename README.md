Audio Visualizer using Three.js and Web Audio API:

This project is a 3D audio visualizer built using TypeScript, Three.js, and the Web Audio API. It generates dynamic visual effects that respond when clicked in real-time to the frequency and amplitude of the audio being played.

Features:

3D Visualization: The visualizer uses a 3D Icosahedron as the primary object, which reacts dynamically to the audio frequency.
Real-time Audio Analysis: It leverages the Web Audio API to analyze audio input and convert it into visual effects.
Post-processing Effects: Includes Bloom post-processing for a glowing effect, giving the scene a visually appealing shine.
Interactive Controls: The user can explore the scene with mouse movements using OrbitControls for a more interactive experience.
Responsive Design: The scene resizes dynamically to match the window size for an optimal viewing experience.

Technologies Used:

Three.js: For rendering the 3D scene.
Web Audio API: For real-time audio processing.
TypeScript: For strong type checking and maintaining code quality.
ShaderMaterial: For custom shaders used in the visualization.
Post-processing Effects: UnrealBloomPass, RenderPass, and OutputPass for visual effects.

Installation and Usage:
Clone the repository:

git clone https://github.com/abhisheksahani129/Audio_Visualiser.git
Navigate into the project directory:
cd Dancing_Sun

Install dependencies:

npm install

Run the project:

npm run dev

Open http://localhost:3000 in your browser to view the audio visualizer.
