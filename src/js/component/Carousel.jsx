import React from "react";
import PropTypes from 'prop-types';

export class Carousel extends React.Component {
	makeActive(tag){
		if (tag === "activeSlide"){
			return "active";
		}
		else {
			return "";
		}
	}
	render() {
		return (
			<div
				id="carouselExampleControls"
				className="carousel slide"
				data-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item">
						<img
							className="d-block w-100"
							src="http://placehold.it/250x100"
							alt="First slide"
						/>
					</div>
					<div className="carousel-item">
						<img
							className="d-block w-100"
							src="http://placehold.it/250x100"
							alt="Second slide"
						/>
					</div>
					<div className="carousel-item">
						<img
							className="d-block w-100"
							src="http://placehold.it/250x100"
							alt="Third slide"
						/>
					</div>
				</div>
				<a
					className="carousel-control-prev"
					href="#carouselExampleControls"
					role="button"
					data-slide="prev">
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					/>
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="carousel-control-next"
					href="#carouselExampleControls"
					role="button"
					data-slide="next">
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					/>
					<span className="sr-only">Next</span>
				</a>
			</div>
			
		);
	}
}
