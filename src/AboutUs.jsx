import React from "react";
import "./AboutUs.css";

const highlights = [
	{
		icon: "✿",
		title: "Dipilih dengan cermat",
		description: "Tanaman sehat untuk menemani setiap sudut rumah.",
	},
	{
		icon: "♡",
		title: "Dirawat dengan kasih",
		description: "Panduan sederhana untuk tumbuh bersama tanamanmu.",
	},
	{
		icon: "⌂",
		title: "Lebih dekat dengan alam",
		description: "Hadirkan suasana segar dan menenangkan di rumah.",
	},
];

function AboutUs() {
	return (
		<section className="about-us-container" aria-labelledby="about-us-heading">
			<p className="about-us-eyebrow">CERITA KAMI</p>
			<h2 className="about-us-heading" id="about-us-heading">
				Ruang kecil untuk
				<br />
				<span>tumbuh lebih hijau.</span>
			</h2>
			<p className="about-us-description">
				Paradise Nursery percaya bahwa hidup yang lebih tenang bisa dimulai dari
				satu tanaman. Kami membantu menghadirkan keindahan alam ke dalam
				rumahmu.
			</p>

			<div className="about-us-highlights">
				{highlights.map((highlight) => (
					<div className="about-us-highlight" key={highlight.title}>
						<span className="about-us-icon" aria-hidden="true">
							{highlight.icon}
						</span>
						<div>
							<h3>{highlight.title}</h3>
							<p>{highlight.description}</p>
						</div>
					</div>
				))}
			</div>

			<p className="about-us-closing">
				<span aria-hidden="true">✦</span> Tumbuh bersama, hidup lebih baik.
			</p>
		</section>
	);
}

export default AboutUs;
