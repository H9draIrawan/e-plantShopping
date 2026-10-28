import React from "react";
import "./AboutUs.css";

function AboutUs() {
	return (
		<section className="about-us-container" aria-labelledby="about-us-heading">
			<h1 className="about-us-heading" id="about-us-heading">
				About Paradise Nursery
			</h1>
			<p className="about-us-description">Where Green Meets Serenity</p>
			<p className="about-us-content">
				Paradise Nursery is an online plant shop created for people who want to
				bring more greenery into their homes and everyday spaces. We believe
				that choosing a plant should feel welcoming and straightforward, whether
				you are buying your first plant or adding to a collection.
			</p>

			<div className="about-us-section">
				<h2>Our purpose</h2>
				<p className="about-us-content">
					Our goal is to make it easier to discover plants that suit your
					interests and space. Plants can add natural color, fragrance, and a
					sense of calm to a room. We want our catalog to help you explore those
					benefits and find a plant that feels right for you.
				</p>
			</div>

			<div className="about-us-section">
				<h2>What you can find</h2>
				<p className="about-us-content">
					Our collection is organized into categories so you can browse by the
					qualities you are looking for:
				</p>
				<ul className="about-us-list">
					<li>
						<strong>Air-purifying plants:</strong> options such as Snake Plant,
						Spider Plant, and Peace Lily.
					</li>
					<li>
						<strong>Aromatic plants:</strong> fragrant choices such as Lavender,
						Jasmine, Rosemary, and Mint.
					</li>
					<li>
						<strong>Insect-repellent plants:</strong> varieties including
						Oregano, Marigold, Geraniums, and Basil.
					</li>
					<li>
						<strong>Medicinal plants:</strong> plants listed in our catalog such
						as Aloe Vera, Echinacea, Peppermint, and Chamomile.
					</li>
					<li>
						<strong>Low Maintenance Plants:</strong> approachable options such
						as ZZ Plant, Succulents, and Aglaonema.
					</li>
				</ul>
				<p className="about-us-content">
					Each product listing includes a short description and price to help
					you compare options as you browse. Descriptions of traditional plant
					uses are informational and are not medical advice.
				</p>
			</div>

			<div className="about-us-section">
				<h2>Our approach</h2>
				<p className="about-us-content">
					We aim to make plant shopping simple: explore the categories, read
					about each plant, and add your selections to the cart. We encourage
					plant lovers to consider their space, routine, and the care a plant
					may need before choosing one. A thoughtful choice can make it easier
					to enjoy greenery as part of everyday life.
				</p>
			</div>

			<p className="about-us-content about-us-closing">
				Thank you for visiting Paradise Nursery. We hope you find a little more
				greenery, inspiration, and serenity for your space.
			</p>
		</section>
	);
}

export default AboutUs;
