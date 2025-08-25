// HeroContent.jsx
import { Link } from "react-router-dom"

export default function HeroContent() {
	return (
		<div className="flex flex-col justify-center h-full px-6 md:px-12 lg:px-24 py-12 max-w-5xl">
			{/* Heading */}
			<div className="space-y-3 md:space-y-4">
				<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug md:leading-tight">
					Empowering Youth
				</h1>
				<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug md:leading-tight">
					Transforming Lives
				</h1>
				<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug md:leading-tight">
					Building Futures
				</h1>
			</div>

			{/* Subtext */}
			<p className="mt-6 md:mt-8 text-gray-700 max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed">
				Y4D Foundation is a youth-led organization empowering underprivileged communities across India
				through education, mentorship, and community-driven initiatives.
			</p>

			{/* Call to Action */}
			<div className="mt-8 md:mt-10">
				<Link
					to="/register"
					className="inline-block bg-orange-600 text-white font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-lg text-sm md:text-base shadow-md hover:bg-orange-700 hover:scale-105 transition-transform duration-200"
				>
					Get Involved
				</Link>
			</div>
		</div>
	)
}
