import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  const [result, setResult] = useState(null);

  useEffect(() => {
    if (data) {
      // Simulate analyzing delay
      setTimeout(() => setResult(data), 3000);
    }
  }, [data]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 to-blue-100">
        <div className="bg-white shadow-xl p-8 rounded-2xl border border-blue-100 text-center">
          <h1 className="text-3xl font-bold text-red-500 mb-2">Invalid Access</h1>
          <p className="text-gray-600 mb-6">
            Please complete the form before viewing results.
          </p>
          <button
            onClick={() => navigate("/explore")}
            className="bg-cyan-600 text-white py-2 px-5 rounded-lg hover:bg-cyan-700 transition"
          >
            Go to Explore
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 to-blue-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-2xl w-full border border-blue-100 text-center">
        <h1 className="text-4xl font-extrabold text-cyan-700 mb-6">
          Poisoning Analysis Report
        </h1>

        {/* Case Details */}
        <div className="text-left mb-8 space-y-2">
          <p>
            <span className="font-semibold text-slate-700">Case ID:</span>{" "}
            <span className="text-gray-600">{data.caseId}</span>
          </p>
          <p>
            <span className="font-semibold text-slate-700">Investigator:</span>{" "}
            <span className="text-gray-600">{data.name}</span>
          </p>
          <p>
            <span className="font-semibold text-slate-700">Role:</span>{" "}
            <span className="capitalize text-gray-600">{data.role}</span>
          </p>
        </div>

        {/* Loader */}
        {!result ? (
          <div className="text-center">
            <div className="animate-pulse text-cyan-700 font-medium mb-12">
              Analyzing data based on {data.role} inputs...
            </div>

            <button
              onClick={() => navigate("/explore")}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2 px-8 rounded-lg hover:from-cyan-700 hover:to-blue-700 transition"
            >
              Back to Explore
            </button>
          </div>
        ) : (
          <>
            <div className="text-left bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-100 mb-8">
              <h2 className="text-2xl font-semibold text-cyan-700 mb-4">
                Result Summary
              </h2>

              <p className="mb-3">
                <span className="font-medium text-slate-700">Poison Likely:</span>{" "}
                <span
                  className={`font-semibold ${
                    result.isPoisonLikely ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {result.isPoisonLikely ? "Yes" : "No, there is no poisoning involved"}
                </span>
              </p>

              <p className="mb-3">
                <span className="font-medium text-slate-700">Probable Poison:</span>{" "}
                <span className="text-gray-700">{result.probablePoison}</span>
              </p>

              <div className="mb-3">
                <span className="font-medium text-slate-700">Suggested Tests:</span>
                <ul className="list-disc list-inside text-gray-700 mt-1 space-y-1">
                  {result.suggestedTests.map((test, i) => (
                    <li key={i}>{test}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <p className="font-medium text-slate-700 mb-2">
                  Confidence Level:
                </p>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-3 rounded-full transition-all duration-700 ease-out ${
                      result.confidence > 80
                        ? "bg-green-500"
                        : result.confidence > 60
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                    style={{ width: `${result.confidence}%` }}
                  ></div>
                </div>
                <p className="text-gray-600 mt-1">
                  {result.confidence}% confidence
                </p>
              </div>
            </div>

            <button
              onClick={() => navigate("/explore")}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2 px-8 rounded-lg hover:from-cyan-700 hover:to-blue-700 transition mt-2"
            >
              Back to Explore
            </button>
          </>
        )}
      </div>
    </div>
  );
}
