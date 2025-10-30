import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  res.json({
    role: "doctor",
    isPoisonLikely: false,
    probablePoison: "None detected",
    suggestedTests: ["Blood Test", "Urine Analysis"],
    confidence: 98,
  });
});

export default router;  // ✅ This line is crucial
