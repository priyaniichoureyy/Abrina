import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("✅ Doctor API is active. Use POST to send case data.");
});

router.post("/", (req, res) => {
  const { caseId, name, answers = [] } = req.body;

  const arsenicSymptoms = ["vomiting", "diarrhea", "nausea", "abdominal pain", "metallic taste"];
  const cyanideSymptoms = ["headache", "dizziness", "shortness of breath", "seizure", "chest pain"];
  const pesticideSymptoms = ["salivation", "sweating", "blurred vision", "muscle twitching", "weakness"];

  let probablePoison = "None detected";
  let confidence = 60;

  if (answers.some(a => arsenicSymptoms.includes(a.toLowerCase()))) {
    probablePoison = "Arsenic";
    confidence = 90;
  } else if (answers.some(a => cyanideSymptoms.includes(a.toLowerCase()))) {
    probablePoison = "Cyanide";
    confidence = 88;
  } else if (answers.some(a => pesticideSymptoms.includes(a.toLowerCase()))) {
    probablePoison = "Organophosphate Pesticide";
    confidence = 85;
  }

  const result = {
    role: "Doctor",
    caseId,
    name,
    isPoisonLikely: probablePoison !== "None detected",
    probablePoison,
    suggestedTests: [
      "Blood test for toxins",
      "Urine toxicology screen",
      "Vital signs monitoring"
    ],
    confidence
  };

  res.json(result);
});

export default router;
