import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Options from './template'

const h = `<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<title>A simple, clean, and responsive HTML invoice template</title>
	

	<!-- Favicon -->
	<link rel="icon" href="/images/favicon.png" type="image/x-icon">
	
	
	<!-- Invoice styling -->
	<style>
	.hhh{
		font-family:'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
		text-align:center;
		color:#777;
	}
	
	.hhh h1{
		font-weight:300;
		margin-bottom:0px;
		padding-bottom:0px;
		color:#000;
	}
	
	.hhh h3{
		font-weight:300;
		margin-top:10px;
		margin-bottom:20px;
		font-style:italic;
		color:#555;
	}
	
	.hhh a{
		color:#06F;
	}
	
	.invoice-box{
		max-width:800px;
		margin:auto;
		padding:30px;
		border:1px solid #eee;
		box-shadow:0 0 10px rgba(0, 0, 0, .15);
		font-size:16px;
		line-height:24px;
		font-family:'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
		color:#555;
	}
	
	.invoice-box table{
		width:100%;
		line-height:inherit;
		text-align:left;
	}
	
	.invoice-box table td{
		padding:5px;
		vertical-align:top;
	}
	
	.invoice-box table tr td:nth-child(2){
		text-align:right;
	}
	
	.invoice-box table tr.top table td{
		padding-bottom:20px;
	}
	
	.invoice-box table tr.top table td.title{
		font-size:45px;
		line-height:45px;
		color:#333;
	}
	
	.invoice-box table tr.information table td{
		padding-bottom:40px;
	}
	
	.invoice-box table tr.heading td{
		background:#eee;
		border-bottom:1px solid #ddd;
		font-weight:bold;
	}
	
	.invoice-box table tr.details td{
		padding-bottom:20px;
	}
	
	.invoice-box table tr.item td{
		border-bottom:1px solid #eee;
	}
	
	.invoice-box table tr.item.last td{
		border-bottom:none;
	}
	
	.invoice-box table tr.total td:nth-child(2){
		border-top:2px solid #eee;
		font-weight:bold;
	}
	
	@media only screen and (max-width: 600px) {
		.invoice-box table tr.top table td{
			width:100%;
			display:block;
			text-align:center;
		}
		
		.invoice-box table tr.information table td{
			width:100%;
			display:block;
			text-align:center;
		}
	}
	</style>
</head>

<body class = "hhh">
	<h1>A simple, clean, and responsive HTML invoice template</h1>
	<h3>Because sometimes, all you need is something simple.</h3>
	Find the code on <a href="https://github.com/sparksuite/simple-html-invoice-template">GitHub</a>. Licensed under the <a href="http://opensource.org/licenses/MIT" target="_blank">MIT license</a>.<br><br><br>
	
	<div class="invoice-box">
		<table cellpadding="0" cellspacing="0">
			<tr class="top">
				<td colspan="2">
					<table>
						<tr>
							<td class="title">
								<img src="./images/logo.png" style="width:100%; max-width:300px;">
							</td>
							
							<td>
								Invoice #: 123<br>
								Created: January 1, 2015<br>
								Due: February 1, 2015
							</td>
						</tr>
					</table>
				</td>
			</tr>
			
			<tr class="information">
				<td colspan="2">
					<table>
						<tr>
							<td>
								Sparksuite, Inc.<br>
								12345 Sunny Road<br>
								Sunnyville, TX 12345
							</td>
							
							<td>
								Acme Corp.<br>
								John Doe<br>
								<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="d2b8bdbabc92b7aab3bfa2beb7fcb1bdbf">[email&#160;protected]</a>
							</td>
						</tr>
					</table>
				</td>
			</tr>
			
			<tr class="heading">
				<td>
					Payment Method
				</td>
				
				<td>
					Check #
				</td>
			</tr>
			
			<tr class="details">
				<td>
					Check
				</td>
				
				<td>
					1000
				</td>
			</tr>
			
			<tr class="heading">
				<td>
					Item
				</td>
				
				<td>
					Price
				</td>
			</tr>
			
			<tr class="item">
				<td>
					Website design
				</td>
				
				<td>
					$300.00
				</td>
			</tr>
			
			<tr class="item">
				<td>
					Hosting (3 months)
				</td>
				
				<td>
					$75.00
				</td>
			</tr>
			
			<tr class="item last">
				<td>
					Domain name (1 year)
				</td>
				
				<td>
					$10.00
				</td>
			</tr>
			
			<tr class="total">
				<td></td>
				
				<td>
				   Total: $385.00
				</td>
			</tr>
		</table>
	</div>`

const $ = window.$
class App extends Component {
  constructor() {
    super();

  }

  printPreview = () => {
    const template = h
    $('.printable').html(template)
    window.print()
  }

  componentDidMount = async () => {

  }
  render() {
    return (
      <div>
        <div class="non-printable">
          <div className="d-flex" id="wrapper">
            {/* Sidebar */}
            <div className="bg-light border-right" id="sidebar-wrapper">
              <div className="list-group list-group-flush">
                <a href="#" className="list-group-item list-group-item-action bg-light">Dashboard</a>
                <a href="#" className="list-group-item list-group-item-action bg-light">Shortcuts</a>
                <a href="#" className="list-group-item list-group-item-action bg-light">Overview</a>
                <a href="#" className="list-group-item list-group-item-action bg-light">Events</a>
                <a href="#" className="list-group-item list-group-item-action bg-light">Profile</a>
                <a href="#" className="list-group-item list-group-item-action bg-light">Status</a>
              </div>
            </div>
            <div id="page-content-wrapper">
              <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
            </a>
                      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">Something else here</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="container-fluid">
                <h1 className="mt-4"> <button className="btn btn-primary" id="menu-toggle" onClick={this.printPreview}>print</button></h1>
                <p>The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will change.</p>
                <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>. The top navbar is optional, and just for demonstration. Just create an element with the <code>#menu-toggle</code> ID which will toggle the menu when clicked.</p>
              </div>
            </div>
            {/* /#page-content-wrapper */}
          </div>

        </div>

        <div class="printable">
        </div>
      </div>

    );
  }
}

export default App;
