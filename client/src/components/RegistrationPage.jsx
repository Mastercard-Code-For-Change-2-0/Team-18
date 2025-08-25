"use client"

import { useState } from "react"
import axios from "axios"

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    linkedinProfile: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:5000/api/users/register", formData)
      alert("✅ " + res.data.message)
      console.log("Registered user:", res.data.user)
    } catch (err) {
      console.error(err)
      alert("❌ " + (err.response?.data?.message || "Something went wrong"))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 px-5 md:p-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 p-2">
            Register with Us!
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-2 p-2">
            Join us today and start your journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 flex flex-col gap-2">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="px-4 py-3 border border-gray-300 rounded-xl"
          />
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="px-4 py-3 border border-gray-300 rounded-xl"
          />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleInputChange}
            required
            className="px-4 py-3 border border-gray-300 rounded-xl"
          />
          <input
            id="linkedinId"
            name="linkedinId"
            type="url"
            placeholder="https://linkedin.com/in/yourprofile"
            value={formData.linkedinId}
            onChange={handleInputChange}
            required
            className="px-4 py-3 border border-gray-300 rounded-xl"
          />

          <button
            type="submit"
            className="w-full bg-orange-600 text-white font-semibold py-3 rounded-xl text-lg transition-all shadow-md hover:shadow-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
