# Portfolio - MERN Stack

A modern, full-stack portfolio website built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and styled with Tailwind CSS.

## 🚀 Tech Stack

### Frontend (Client)
- **React.js 18** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Axios** - HTTP client
- **Lucide React** - Icon library

### Backend (Server)
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **Helmet** - Security middleware
- **CORS** - Cross-origin resource sharing
- **Express Rate Limit** - Rate limiting middleware

## 📁 Project Structure

```
portfolio.me/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.jsx       # Main App component
│   │   ├── main.jsx      # Entry point
│   │   └── index.css     # Global styles
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── server/                # Express backend
│   ├── config/           # Configuration files
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── server.js         # Entry point
│   ├── package.json
│   └── .env.example
│
└── README-MERN.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas cloud)
- npm or yarn

### 1. Clone the repository
```bash
cd d:\portfolio.me
```

### 2. Setup Server
```bash
cd server
npm install

# Create .env file
copy .env.example .env

# Update .env with your MongoDB connection string
# MONGODB_URI=mongodb://localhost:27017/portfolio
# or use MongoDB Atlas connection string
```

### 3. Setup Client
```bash
cd ../client
npm install
```

### 4. Start MongoDB
Make sure MongoDB is running on your system:
```bash
# If using local MongoDB
mongod
```

### 5. Run the Application

**Terminal 1 - Start Backend Server:**
```bash
cd server
npm run dev
```
Server will run on: `http://localhost:5000`

**Terminal 2 - Start Frontend:**
```bash
cd client
npm run dev
```
Client will run on: `http://localhost:3000`

## 📡 API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project (admin)
- `PUT /api/projects/:id` - Update project (admin)
- `DELETE /api/projects/:id` - Delete project (admin)

### Certifications
- `GET /api/certifications` - Get all certifications
- `GET /api/certifications/:id` - Get single certification
- `POST /api/certifications` - Create certification (admin)
- `PUT /api/certifications/:id` - Update certification (admin)
- `DELETE /api/certifications/:id` - Delete certification (admin)

### Contact
- `GET /api/contact` - Get all messages (admin)
- `POST /api/contact` - Submit contact form
- `PATCH /api/contact/:id/status` - Update message status (admin)

## 🎨 Features

- ✅ Responsive design with Tailwind CSS
- ✅ Smooth animations with Framer Motion
- ✅ Interactive background with gradient orbs
- ✅ Scroll-based navigation highlighting
- ✅ Mobile-friendly navigation
- ✅ RESTful API architecture
- ✅ MongoDB database integration
- ✅ Security middleware (Helmet, CORS, Rate Limiting)
- ✅ Error handling
- ✅ Environment variables

## 🔒 Security Features

- Helmet.js for HTTP headers security
- CORS configuration
- Rate limiting (100 requests per 15 minutes)
- Input validation with Mongoose schemas
- Environment variables for sensitive data

## 📱 Component Structure

### Client Components
- **BackgroundAnimation** - Animated gradient orbs
- **Navbar** - Responsive navigation
- **Hero** - Landing section
- **About** - About me section
- **Skills** - Technical skills showcase
- **Projects** - Projects portfolio
- **Certifications** - Certifications list
- **Resume** - Resume download section
- **Contact** - Contact information
- **Footer** - Footer section

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd client
npm run build
# Deploy the 'dist' folder
```

### Backend (Render/Railway/Heroku)
```bash
cd server
# Set environment variables in deployment platform
# Deploy with Node.js runtime
```

### Database
- Use MongoDB Atlas for cloud database
- Update MONGODB_URI in production environment

## 📝 Environment Variables

### Server (.env)
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=production
```

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

MIT License - feel free to use this project for your portfolio

## 👤 Author

**Yogeswaran S**
- Full-Stack Software Developer
- BE - Computer Science Engineering

---

Made with ❤️ using MERN Stack
