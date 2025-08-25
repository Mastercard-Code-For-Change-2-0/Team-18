// HeroSection.jsx
import HeroContent from "./HeroContent"

export default function HeroSection() {
	return (
		<section
			data-testid="hero-img"
			className="relative bg-blush md:h-[80vh] flex items-center justify-start bg-no-repeat bg-right-bottom md:bg-right md:bg-contain"
		>
			<HeroContent />
		</section>
	)
}
