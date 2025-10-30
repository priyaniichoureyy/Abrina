import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function RoleForm() {
  const { role } = useParams();
  const navigate = useNavigate();

  const roleFixed = role.toLowerCase();

  const roleQuestions = {
    police: [
      "What evidence was found at the crime scene?",
      "Were there any witnesses or suspects?",
      "Describe any suspicious substances or materials discovered.",
      "Was there a potential motive identified?",
    ],
    postmortem: [
      "What are the visible symptoms on the body?",
      "Were there any internal injuries found?",
      "Was the cause of death confirmed as poisoning?",
      "Were toxicology samples collected?",
    ],
    forensic: [
      "What type of samples were analyzed in the lab?",
      "Which poison or chemical was detected?",
      "Was the poison found in food, water, or tissue samples?",
      "What was the estimated time of poisoning?",
    ],
    doctor: [
      "What symptoms did the patient exhibit?",
      "What was the initial treatment provided?",
      "Was the poisoning accidental or intentional?",
      "What is the patient’s current condition?",
    ],
  };

  const questions = roleQuestions[roleFixed] || [];
  const [answers, setAnswers] = useState({});
  const [caseId, setCaseId] = useState("");
  const [name, setName] = useState("");

  const handleChange = (index, value) => {
    setAnswers((prev) => ({ ...prev, [index]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("🧩 Submitting to:", `http://localhost:3000/api/${roleFixed}`);

      const res = await fetch(`http://localhost:3000/api/${roleFixed}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ caseId, name, answers: Object.values(answers) }),
      });

      if (!res.ok) throw new Error("Network response was not ok");

      const data = await res.json();
      console.log("✅ Backend response:", data);

      // ✅ Send all backend data to ResultPage
      navigate("/result", { state: data });

    } catch (error) {
      console.error("❌ Error submitting form:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 flex justify-center items-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-10 max-w-2xl w-full border border-slate-100"
      >
        <h1 className="text-3xl font-bold text-center mb-2 text-slate-800">
          {roleFixed.charAt(0).toUpperCase() + roleFixed.slice(1)} Investigation Form
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Please answer the following questions carefully to help identify poisoning related information.
        </p>

        {/* Case Info */}
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Case ID"
            value={caseId}
            onChange={(e) => setCaseId(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-cyan-500 outline-none"
            required
          />
          <input
            type="text"
            placeholder="Investigator/Doctor Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-cyan-500 outline-none"
            required
          />
        </div>

        {/* Questions */}
        {questions.map((q, index) => (
          <div key={index}>
            <label className="block font-medium text-slate-700 mb-2">
              {index + 1}. {q}
            </label>
            <textarea
              rows="2"
              placeholder="Type your answer..."
              value={answers[index] || ""}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-cyan-500 outline-none"
              required
            ></textarea>
          </div>
        ))}

        {/* Buttons */}
        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={() => navigate("/explore")}
            className="bg-gray-200 text-slate-700 py-2 px-6 rounded-lg hover:bg-gray-300 transition"
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-cyan-600 text-white py-2 px-6 rounded-lg hover:bg-cyan-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
