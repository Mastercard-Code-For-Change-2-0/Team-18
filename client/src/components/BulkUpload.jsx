
import React, { useState } from "react";
import { Upload, X } from "lucide-react";
import * as XLSX from "xlsx";
import NavBar from "./NavBar";
import Footer from "./Footer";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";


export default function BulkUpload() {
  const navigate= useNavigate();
  const [file, setFile] = useState(null);
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) processFile(uploadedFile);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) processFile(droppedFile);
  };

  const processFile = (uploadedFile) => {
    const validTypes = [
      "application/vnd.ms-excel", 
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", 
    ];

    if (!validTypes.includes(uploadedFile.type)) {
      setError("❌ Invalid file format. Please upload .xls or .xlsx file.");
      return;
    }

    setError("");
    setFile(uploadedFile);

    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setStudents(parsedData);
    };
    reader.readAsArrayBuffer(uploadedFile);
  };

  const handleClear = () => {
    setFile(null);
    setStudents([]);
    setError("");
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("http://localhost:5000/api/admins/upload-excel", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed. Please try again.");

      const data = await res.json();
      console.log("✅ Upload successful:", data);

      alert("✅ Students uploaded successfully!");
      handleClear();
      navigate("/admin-dashboard")
    } catch (err) {
      console.error(err);
      alert("❌ Error uploading file: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />

      {/* Layout with Sidebar + Main Content */}
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg">
          <SideBar />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex justify-center items-start px-6 py-10">
          <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Bulk Upload Students
            </h2>

            {/* Upload Box */}
            <div
              className={`border-2 border-dashed rounded-xl p-10 text-center transition cursor-pointer ${
                dragActive
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300 hover:border-blue-400 hover:bg-blue-50/50"
              }`}
              onDragOver={(e) => {
                e.preventDefault();
                setDragActive(true);
              }}
              onDragLeave={() => setDragActive(false)}
              onDrop={handleDrop}
            >
              <Upload className="mx-auto mb-4 text-gray-400" size={50} />
              <p className="text-gray-600 font-medium">
                Drag & drop your Excel file here or
              </p>
              <label className="mt-4 inline-block bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition">
                Browse Files
                <input
                  type="file"
                  accept=".xls,.xlsx"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
              <p className="text-xs text-gray-500 mt-3">
                Supported formats: <span className="font-medium">.xls, .xlsx</span>
              </p>
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-600 font-medium mt-4 text-center">{error}</p>
            )}

            {/* File Info */}
            {file && (
              <div className="mt-5 flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg shadow-sm">
                <span className="text-gray-700 text-sm font-medium">{file.name}</span>
                <button
                  className="text-red-500 hover:text-red-700 transition"
                  onClick={handleClear}
                >
                  <X />
                </button>
              </div>
            )}

            {/* Preview */}
            {students.length > 0 && (
              <div className="mt-8">
                <h3 className="font-semibold text-gray-700 mb-3">
                  Preview :
                </h3>
                <div className="overflow-x-auto border rounded-lg shadow-sm">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-100 text-gray-700">
                        {Object.keys(students[0]).map((key) => (
                          <th
                            key={key}
                            className="px-4 py-2 border font-semibold text-left"
                          >
                            {key}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {students.slice(0, 5).map((row, index) => (
                        <tr
                          key={index}
                          className={`${
                            index % 2 === 0 ? "bg-white" : "bg-gray-50"
                          } hover:bg-blue-50 transition`}
                        >
                          {Object.values(row).map((val, i) => (
                            <td key={i} className="px-4 py-2 border text-gray-700">
                              {val}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="mt-8 flex justify-center gap-6">
              <button
                className="bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-lg shadow hover:bg-blue-700 disabled:opacity-50 transition flex items-center justify-center gap-2"
                onClick={handleUpload}
                disabled={!file || loading}
              >
                {loading ? (
                  <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></span>
                ) : (
                  "Upload File"
                )}
              </button>
              <button
                className="bg-gray-200 font-medium px-6 py-2.5 rounded-lg shadow hover:bg-gray-300 disabled:opacity-50 transition"
                onClick={handleClear}
                disabled={!file || loading}
              >
                Clear Selection
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

