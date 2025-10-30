import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("✅ Forensic API is active. Use POST to send case data.");
});

router.post("/", (req, res) => {
  const { caseId, name, answers = [] } = req.body;

  let probablePoison = "Unknown";
  let confidence = 70;

  if (answers.includes("discoloration of nails")) {
    probablePoison = "Arsenic";
    confidence = 92;
  } else if (answers.includes("burning throat")) {
    probablePoison = "Cyanide";
    confidence = 89;
  } else if (answers.includes("frothing at mouth")) {
    probablePoison = "Pesticide";
    confidence = 87;
  }

  const result = {
    role: "Forensic",
    caseId,
    name,
    isPoisonLikely: probablePoison !== "Unknown",
    probablePoison,
    suggestedTests: [
      "Hair and nail elemental analysis",
      "Tissue digestion and ICP-MS test",
      "Toxic metal residue screening"
    ],
    confidence
  };

  res.json(result);
});

export default router;
