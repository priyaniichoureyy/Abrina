import { db } from "../config/db.js";

// Example analysis logic for "Doctor" role
export const analyzeDoctorReport = async (req, res) => {
  try {
    const { answers, caseId, name, role } = req.body;

    // Convert all answers to one text blob
    const text = Object.values(answers).join(" ").toLowerCase();

    // Basic mock logic (replace with DB-based keyword search later)
    const keywords = ["vomit", "nausea", "cyanide", "pesticide", "chemical"];
    const found = keywords.some((kw) => text.includes(kw));

    if (found) {
      // if keywords match → likely poison
      return res.json({
        isPoisonLikely: true,
        probablePoison: "Cyanide",
        suggestedTests: ["Blood cyanide test", "Toxicology analysis"],
        confidence: 88,
      });
    } else {
      // if no poisoning terms found → safe
      return res.json({
        isPoisonLikely: false,
        probablePoison: "No poisoning detected",
        suggestedTests: ["Basic blood test", "Routine health checkup"],
        confidence: 95,
      });
    }
  } catch (err) {
    console.error("Error in analyzeDoctorReport:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
