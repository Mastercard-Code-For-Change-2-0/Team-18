
import React, { useState } from "react";
import { Upload, X } from "lucide-react";
import * as XLSX from "xlsx";
import "./as.css";

export default function AdminBulkUpload() {
  const [file, setFile] = useState(null);
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");
  const [dragActive, setDragActive] = useState(false);

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
      "text/csv",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ];

    if (!validTypes.includes(uploadedFile.type)) {
      setError("Invalid file format. Please upload CSV or Excel file.");
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

  const handleUpload = () => {
    if (students.length === 0) {
      alert("No student data to upload.");
      return;
    }
    console.log("Uploading students:", students);
    alert("Students uploaded successfully!");
    handleClear();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-6">Bulk Upload Students</h2>

        {/* Upload Box */}
        <div
          className={`border-2 border-dashed rounded-lg p-10 text-center cursor-pointer transition ${
            dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
          }`}
          onDragOver={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
        >
          <Upload className="mx-auto mb-4 text-gray-400" size={40} />
          <p className="text-gray-600">
            Drag & drop your CSV/Excel file here or
          </p>
          <label className="mt-3 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600 transition">
            Browse Files
            <input
              type="file"
              accept=".csv,.xlsx,.xls"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
          <p className="text-xs text-gray-400 mt-3">
            Supported formats: .csv, .xlsx, .xls
          </p>
        </div>

        {/* Error */}
        {error && <p className="text-red-500 mt-3">{error}</p>}

        {/* File Info */}
        {file && (
          <div className="mt-4 flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg">
            <span className="text-gray-700 text-sm">{file.name}</span>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={handleClear}
            >
              <X />
            </button>
          </div>
        )}

        {/* Preview */}
        {students.length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Preview (first 5 rows):</h3>
            <div className="overflow-x-auto border rounded-lg">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    {Object.keys(students[0]).map((key) => (
                      <th
                        key={key}
                        className="px-3 py-2 border text-left font-medium text-gray-600"
                      >
                        {key}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {students.slice(0, 5).map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      {Object.values(row).map((val, i) => (
                        <td
                          key={i}
                          className="px-3 py-2 border text-gray-700"
                        >
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
        <div className="mt-6 flex gap-10">
          <button
            className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
            onClick={handleUpload}
            disabled={!file}
          >
            Upload File
          </button>
          <button
            className="bg-gray-200 px-5 py-2 rounded-lg hover:bg-gray-300 disabled:opacity-50"
            onClick={handleClear}
            disabled={!file}
          >
            Clear Selection
          </button>
        </div>
      </div>
    </div>
  );
}
