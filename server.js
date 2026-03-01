import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database("portfolio.db");

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS contact_messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS testimonials (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    content TEXT NOT NULL,
    avatar TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Seed initial testimonials if empty
const count = db.prepare("SELECT COUNT(*) as count FROM testimonials").get();
if (count.count === 0) {
  const insert = db.prepare("INSERT INTO testimonials (name, role, content, avatar) VALUES (?, ?, ?, ?)");
  insert.run("Dr. Samuel Eto'o", "Senior Professor, Siantou University", "Dorcas is one of the most dedicated students I've had. Her ability to grasp complex architectural patterns and apply them in real-world scenarios is exceptional.", "https://picsum.photos/seed/person1/100/100");
  insert.run("Jean-Pierre", "Lead Developer, ABC Corp", "During her internship, GraceSyntax demonstrated a level of technical maturity far beyond her years. Her contributions to our microservices were invaluable.", "https://picsum.photos/seed/person2/100/100");
  insert.run("Sarah Johnson", "Founder, Tradify Initiative", "Working with Dorcas on the Tradify project was a breeze. She has a unique talent for blending cultural heritage with cutting-edge AI technology.", "https://picsum.photos/seed/person3/100/100");
}

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 5173;

  app.use(express.json());

  // API Routes
  app.get("/api/testimonials", (req, res) => {
    const testimonials = db.prepare("SELECT * FROM testimonials ORDER BY created_at DESC").all();
    res.json(testimonials);
  });

  app.post("/api/testimonials", (req, res) => {
    const { name, role, content, avatar } = req.body;
    if (!name || !role || !content) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const insert = db.prepare("INSERT INTO testimonials (name, role, content, avatar) VALUES (?, ?, ?, ?)");
    const result = insert.run(name, role, content, avatar || `https://picsum.photos/seed/${name}/100/100`);
    res.json({ id: result.lastInsertRowid });
  });

  app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const insert = db.prepare("INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)");
    const result = insert.run(name, email, message);
    res.json({ id: result.lastInsertRowid, success: true });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
