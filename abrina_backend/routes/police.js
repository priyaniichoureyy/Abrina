import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("✅ Police API is active. Use POST to send case data.");
});

router.post("/", (req, res) => {
  const { caseId, name } = req.body;
  let answers = req.body.answers || [];

  // ✅ Force it to be an array
  if (!Array.isArray(answers)) {
    answers = [answers];
  }

  let probablePoison = "Unknown substance";
  let confidence = 75;

  if (answers.includes("chemical bottle found")) {
    probablePoison = "Pesticide";
    confidence = 90;
  } else if (answers.includes("victim near industry")) {
    probablePoison = "Heavy metal exposure";
    confidence = 88;
  }

  const result = {
    role: "Police Investigator",
    caseId,
    name,
    isPoisonLikely: probablePoison !== "Unknown substance",
    probablePoison,
    suggestedTests: [
      "Collect sample evidence from scene",
      "Send samples to forensic lab",
      "Interview witnesses and suspects"
    ],
    confidence
  };

  res.json(result);
});

export default router;
