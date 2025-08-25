"use client"

import { useState } from "react"

export default function RegistrationPage() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	})

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log("Registration data:", formData)
		alert("✅ Registration submitted! Check console for data.")
	}

	return (
		<div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50 flex items-center justify-center p-4">
			<div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 px-5 md:p-10">
				{/* Header */}
				<div className="text-center mb-8">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 p-2">
						Log In
					</h2>
				</div>

				{/* Form */}
				<form onSubmit={handleSubmit} className="space-y-5 flex flex-col gap-2">
					{/* Email */}
					<div className="flex flex-col">
						<label htmlFor="email" className="text-gray-700 font-medium mb-1">
							Email
						</label>
						<input
							id="email"
							name="email"
							type="email"
							placeholder="Enter your email address"
							value={formData.email}
							onChange={handleInputChange}
							required
							className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
						/>
					</div>

					{/* Password */}
					<div className="flex flex-col">
						<label htmlFor="password" className="text-gray-700 font-medium mb-1">
							Password
						</label>
						<input
							id="password"
							name="password"
							type="password"
							placeholder="Create a password"
							value={formData.password}
							onChange={handleInputChange}
							required
							className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
						/>
					</div>

					{/* Submit Button */}
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
