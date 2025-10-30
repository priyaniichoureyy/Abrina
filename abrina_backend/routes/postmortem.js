import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("✅ Postmortem API is active. Use POST to send case data.");
});

router.post("/", (req, res) => {
  const { caseId, name, answers = [] } = req.body;

  let probablePoison = "Unknown";
  let confidence = 80;

  if (answers.includes("odor of almonds")) {
    probablePoison = "Cyanide";
    confidence = 95;
  } else if (answers.includes("black vomit") || answers.includes("bloated body")) {
    probablePoison = "Arsenic";
    confidence = 90;
  }

  const result = {
    role: "Postmortem Officer",
    caseId,
    name,
    isPoisonLikely: probablePoison !== "Unknown",
    probablePoison,
    suggestedTests: [
      "Viscera chemical analysis",
      "Histopathological examination",
      "Toxicology screening"
    ],
    confidence
  };

  res.json(result);
});

export default router;
