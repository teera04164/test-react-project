import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Options from './template'
import { genHTML } from './template'

const $ = window.$
class App extends Component {
	constructor() {
		super();

	}

	printPreview = async () => {

		const template = await genHTML()
		$('.printable').html(template)
		window.print()
	}

	componentDidMount = async () => {
		const template = await genHTML()
		// console.log(template)

		$('.printable').html(template)
	}
	render() {
		return (
			<div>
				<div class="non-printable">
					<div class="container">
						<div class="header clearfix">
							<nav>
								<ul class="nav nav-pills float-right">
									<li class="nav-item">
										<a class="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#">About</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#">Contact</a>
									</li>
								</ul>
							</nav>
							<h3 class="text-muted">Project name</h3>
						</div>

						<div class="jumbotron">
							<h1 class="display-3">Jumbotron heading</h1>
							<p class="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
							<p><a class="btn btn-lg btn-primary" href="#" style = {{width : "100%"}} onClick = {this.printPreview}>Print Invoice</a></p>
						</div>

						<div class="row marketing">
							<div class="col-lg-6">
								<h4>Subheading</h4>
								<p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

								<h4>Subheading</h4>
								<p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

								<h4>Subheading</h4>
								<p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
							</div>

							<div class="col-lg-6">
								<h4>Subheading</h4>
								<p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

								<h4>Subheading</h4>
								<p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

								<h4>Subheading</h4>
								<p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
							</div>
						</div>

					

					</div>

				</div>

				<div class="printable"></div>
			</div>

		);
	}
}

export default App;
