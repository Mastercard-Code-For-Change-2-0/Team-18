// HeroContent.jsx
import { Link } from "react-router-dom"

export default function HeroContent() {
	return (
		<div className="flex flex-col justify-center h-full px-6 md:px-12 lg:px-20">
			<div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight space-y-2 font-bold">
				<h1>Empowering Youth</h1>
				<h1>Transforming Lives</h1>
				<h1>Building Futures</h1>
			</div>

			<p className="mt-8 text-gray-600 max-w-xl text-base md:text-lg leading-relaxed">
				Y4D Foundation is a youth-led organization working on empowering the underprivileged section of our society.
			</p>

			<div className="mt-10">
				<Link
					to="/register"
					className="inline-block bg-night text-black px-8 md:px-10 py-3 rounded-2xl text-base md:text-lg shadow-md hover:bg-night/90 hover:scale-105 transition-transform duration-200"
				>
					Join Us
				</Link>
			</div>
		</div>
	)
}
