// HeroSection.jsx
import HeroContent from "./HeroContent"

export default function HeroSection() {
	return (
		<section
			data-testid="hero-img"
			className="relative flex items-center justify-start md:h-[80vh] w-full bg-gradient-to-b from-orange-50 via-white to-orange-50 px-6 md:px-12 lg:px-24"
		>
			{/* Hero Text */}
			<div className="w-full md:w-1/2">
				<HeroContent />
			</div>
		</section>
	)
}
