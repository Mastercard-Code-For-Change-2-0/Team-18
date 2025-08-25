// Footer.jsx
import FooterList from "./FooterList";
import { Instagram, Linkedin, Github, Facebook } from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-orange-50 text-orange-900 px-6 md:px-20 pt-12 pb-6 border-t border-orange-200">
			<div className="flex flex-col md:flex-row justify-between gap-10">
				{/* Left Side: Brand Info */}
				<div className="max-w-md">
					<h2 className="text-3xl md:text-4xl font-extrabold text-orange-700">
						Y4D Foundation
					</h2>
					<p className="pt-4 text-orange-800 leading-relaxed text-sm md:text-base">
						Y4D Foundation is a youth-led organization working on empowering the
						underprivileged section of our society. Y4D has a pan-India presence
						through its wide network of Volunteer Chapters across the country.
					</p>
					{/* Social Icons */}
					<div className="flex gap-4 pt-6">
						<a href="#" aria-label="Instagram">
							<Instagram className="w-6 h-6 hover:text-orange-600 hover:scale-110 transition-transform duration-200 cursor-pointer" />
						</a>
						<a href="#" aria-label="LinkedIn">
							<Linkedin className="w-6 h-6 hover:text-orange-600 hover:scale-110 transition-transform duration-200 cursor-pointer" />
						</a>
						<a href="#" aria-label="GitHub">
							<Github className="w-6 h-6 hover:text-orange-600 hover:scale-110 transition-transform duration-200 cursor-pointer" />
						</a>
						<a href="#" aria-label="Facebook">
							<Facebook className="w-6 h-6 hover:text-orange-600 hover:scale-110 transition-transform duration-200 cursor-pointer" />
						</a>
					</div>
				</div>

				{/* Right Side: Links */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-5 text-sm">
					<FooterList
						heading="COMPANY"
						list={["About", "Careers", "Contact", "Features"]}
					/>
					<FooterList
						heading="HELP"
						list={[
							"Customer Support",
							"Delivery Details",
							"Terms & Conditions",
							"Privacy Policy",
						]}
					/>
					<FooterList
						heading="FAQ"
						list={["Account", "Manage Deliveries", "Orders", "Payments"]}
					/>
					<FooterList
						heading="RESOURCES"
						list={[
							"Free Ebooks",
							"Development Tutorial",
							"How to - Blog",
							"Youtube Playlist",
						]}
					/>
				</div>
			</div>

			{/* Bottom */}
			<div className="text-center pt-10 text-xs md:text-sm text-orange-500">
				© 2025 Y4D Foundation. All Rights Reserved.
			</div>
		</footer>
	);
}
