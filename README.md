# iPhone 3D Experience 📱

An immersive 3D interactive experience showcasing the iPhone using Three.js, featuring realistic 3D models, smooth animations, and engaging visual effects.

---

## 🚀 About

This project creates a stunning 3D visualization of the iPhone, complete with interactive controls, smooth animations, and realistic rendering. Built with Three.js and modern web technologies, it provides an engaging way to showcase product features through 3D web graphics.

---

## ✨ Features

- 🎨 **3D iPhone Model** - High-quality 3D rendering of iPhone
- 🖱️ **Interactive Controls** - Rotate, zoom, and explore the model
- ✨ **Smooth Animations** - Fluid transitions and visual effects
- 📱 **Responsive Design** - Works seamlessly across all devices
- 🎭 **Material Effects** - Realistic glass, metal, and screen materials
- 🌟 **Custom Lighting** - Dynamic lighting setup for photorealistic rendering
- ⚡ **Optimized Performance** - Efficient rendering for smooth 60fps experience

---

## 🛠️ Tech Stack

### Core Technologies

- **Three.js** - 3D graphics library
- **React.js** - UI framework
- **GSAP (GreenSock)** - Advanced animations
- **Vite** - Fast build tool and dev server

### Additional Libraries

- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for R3F
- **Tailwind CSS** - Styling framework

---

## 📂 Project Structure

```
iphone-3js-project/
├── public/
│   ├── models/              # 3D model files
│   ├── textures/            # Material textures
│   └── assets/              # Images and media
├── src/
│   ├── components/
│   │   ├── Canvas.jsx       # Three.js canvas component
│   │   ├── Model.jsx        # iPhone 3D model
│   │   ├── Lights.jsx       # Lighting setup
│   │   └── Controls.jsx     # Camera controls
│   ├── utils/
│   │   ├── animations.js    # GSAP animations
│   │   └── helpers.js       # Utility functions
│   ├── App.jsx              # Main app component
│   └── main.jsx             # Entry point
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 16.0 or higher
- npm or yarn
- Modern web browser with WebGL support

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/ACE-Z666/iphone-3js-project.git
cd iphone-3js-project
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
```
Navigate to http://localhost:5173
```

---

## 🎮 Usage

### Interactive Controls

- **Rotate Model** - Click and drag to rotate the iPhone
- **Zoom** - Use mouse wheel or pinch gesture to zoom in/out
- **Pan** - Right-click and drag to move the model
- **Reset View** - Click reset button to return to default view

### Features Showcase

The 3D experience includes:
- Realistic materials (glass, aluminum, screen)
- Smooth color transitions
- Camera animations showcasing different angles
- Interactive hotspots highlighting key features
- Responsive design adapting to screen size

---

## 🔧 Configuration

### Three.js Scene Setup

```javascript
// Basic scene configuration
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

// Lighting setup
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
```

### Animation Configuration

```javascript
// GSAP timeline for smooth animations
const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.section',
    start: 'top center',
    end: 'bottom center',
    scrub: 1
  }
});
```

---

## 🎨 Customization

### Changing iPhone Model

Replace the model file in `/public/models/` with your preferred 3D model (GLB/GLTF format):

```javascript
const loader = new GLTFLoader();
loader.load('/models/iphone.glb', (gltf) => {
  scene.add(gltf.scene);
});
```

### Adjusting Materials

Modify material properties for different looks:

```javascript
material.metalness = 0.8;
material.roughness = 0.2;
material.envMapIntensity = 1.5;
```

### Custom Animations

Add custom GSAP animations:

```javascript
gsap.to(camera.position, {
  x: 5,
  duration: 2,
  ease: 'power2.inOut'
});
```

---

## 📦 Building for Production

```bash
npm run build
# or
yarn build
```

The optimized build will be created in the `dist/` folder, ready for deployment.

---

## 🚀 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop the dist folder to Netlify
```

### Deploy to GitHub Pages

```bash
npm run build
git subtree push --prefix dist origin gh-pages
```

---

## ⚡ Performance Optimization

### Implemented Optimizations

- **Texture Compression** - Reduced texture sizes for faster loading
- **LOD (Level of Detail)** - Different model complexity based on distance
- **Lazy Loading** - Models loaded on demand
- **Efficient Rendering** - Only render when necessary
- **Asset Optimization** - Compressed 3D models and textures
- **Code Splitting** - Lazy load components

### Performance Tips

```javascript
// Use renderer.setPixelRatio wisely
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Dispose of unused resources
geometry.dispose();
material.dispose();
texture.dispose();

// Use instanced meshes for repeated objects
const instancedMesh = new THREE.InstancedMesh(geometry, material, count);
```

---

## 🐛 Troubleshooting

### Common Issues

**Issue: 3D model not loading**
```bash
# Solution: Check file path and format
# Ensure model is in public/models/ directory
# Verify model format is GLB or GLTF
```

**Issue: Poor performance on mobile**
```javascript
// Solution: Reduce quality for mobile devices
if (window.innerWidth < 768) {
  renderer.setPixelRatio(1);
  // Use simplified materials
}
```

**Issue: Black screen or rendering issues**
```bash
# Solution: Check browser console for WebGL errors
# Verify WebGL is supported: visit get.webgl.org
# Update graphics drivers
```

**Issue: Animations not smooth**
```javascript
// Solution: Use requestAnimationFrame properly
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
```

---

## 🧪 Development

### Run Tests

```bash
npm test
```

### Lint Code

```bash
npm run lint
```

### Format Code

```bash
npm run format
```

---

## 🤝 Contributing

Contributions are welcome! Here's how to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow existing code style and conventions
- Write clean, documented code
- Test your changes thoroughly
- Update documentation as needed
- Optimize performance where possible

---

## 🗺️ Roadmap

### Upcoming Features

- [ ] Multiple iPhone models (Pro, Pro Max, standard)
- [ ] Color selector with smooth transitions
- [ ] AR mode for viewing in real space
- [ ] Video playback on iPhone screen
- [ ] Physics-based interactions
- [ ] Sound effects for interactions
- [ ] VR compatibility
- [ ] Advanced material customization
- [ ] Export 3D views as images
- [ ] Touch gesture improvements for mobile

---

## 📚 Resources

### Learning Resources

- [Three.js Documentation](https://threejs.org/docs/)
- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber/)
- [GSAP Documentation](https://greensock.com/docs/)
- [WebGL Fundamentals](https://webglfundamentals.org/)

### Inspiration

- [Apple Official Website](https://www.apple.com)
- [Three.js Examples](https://threejs.org/examples/)
- [Awwwards - 3D Websites](https://www.awwwards.com/websites/three-js/)

---

## 🔐 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ⚠️ Internet Explorer - Not supported (WebGL required)

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Author

**Abhijith J Nair**

- GitHub: [@ACE-Z666](https://github.com/ACE-Z666)
- Project: [iPhone 3D Project](https://github.com/ACE-Z666/iphone-3js-project)

---

## 🙏 Acknowledgments

- Three.js community for excellent documentation
- Apple for design inspiration
- GSAP for powerful animation tools
- React Three Fiber team for React integration
- Open-source community for tools and resources

---

## 🌟 Show Your Support

If you find this project helpful, please consider giving it a star! ⭐

---

<div align="center">

**Built with ❤️ using Three.js and React**

[⬆ Back to Top](#iphone-3d-experience-)

</div>
