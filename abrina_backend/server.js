import express from "express";
import cors from "cors";
import doctorRoutes from "./routes/doctor.js";
import forensicRoutes from "./routes/forensic.js";
import postmortemRoutes from "./routes/postmortem.js";
import policeRoutes from "./routes/police.js";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect APIs
app.use("/api/doctor", doctorRoutes);
app.use("/api/forensic", forensicRoutes);
app.use("/api/postmortem", postmortemRoutes);
app.use("/api/police", policeRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Poison Detection Server Running Successfully!");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
