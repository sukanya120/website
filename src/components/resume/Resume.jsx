import React from 'react';
import './resume.css';


export default function Resume(){

return (
<div className='container'>
	<div className="row">
		<a href="resume.pdf" className="lightgrey float-right mx-10 mt-2 pr-4 transparent0-5 f0-8em" download>PDF <i
				className="fa fa-download" aria-hidden="true"></i>
		</a>
	</div>
	<div className="bg-white py-3 py-md-5 mx-10 my-3">
		<div className="container px-10 py-3 py-md-5">
			<div className="row" id="toprow">
				<div className="col-lg-6 col-md-7 col-xs-12">
					<span className="f700 f2-5em">SUKANYA PAUL</span><br></br>
					<span className="f600 f1-5em">SOFTWARE DEVELOPER</span>
				</div>
				<div className="col-lg-4 offset-lg-1 col-md-5" id="">
					<div id="contacttop" className="mt-2 mt-lg-0">
						<span>West Bengal, India</span><br></br>
						<span>+91 7820904763</span><br></br>
					</div>
					<div className="mt-3 mt-sm-2">
						<a href="mailto:sukanyapal14@gmail.com"
							className="slategrey">sukanyapal14@gmail.com</a><br></br>
						{/*<a href="https://samratdutta.com" className="slategrey">https://samratdutta.com</a>*/}
					</div>
					<div className="flex-row-spa mt-3 mt-sm-4" id="links">
						<a href="https://github.com/duttasamd"><i className="fa fa-github text-muted"></i></a>
						<a href="https://stackoverflow.com/users/2463304/samrat-dutta"><i
								className="fa fa-stack-overflow text-muted"></i></a>
						<a href="https://www.linkedin.com/in/duttasamd/"><i
								className="fa fa-linkedin text-muted"></i></a>
						<a href="https://www.xing.com/profile/Samrat_Dutta4"><i
								className="fa fa-xing text-muted"></i></a>
					</div>
				</div>
			</div>
			<div className="row mt-3 mt-sm-4 mt-lg-5 px-3">
				I am a software developer with 5 years of experience in Java(Spring/ Quarkus), SQL, Kafka, React, AWS(S3) and other cutting edge technologies.
			</div>
		</div>
		<hr />
		<div className="container px-10 py-5">
			<div className="row">
				<div className="col-lg-8 pl-lg-3 offset-lg-1 mb-5 mb-lg-0">
					<div>
						<div className="row f600 f1-3em pl-3 mb-3">
							Work Experience
						</div>
						<div className="mb-3">
							<div className="inline">
								<span>
									<strong>Cybage Software Pvt.Ltd | May 2021 - present (7 Months)</strong>
								</span>
							</div>
							<br></br>
							<span className="f300 fi">Senior Software Engineer</span><br />
							<ul className="pl-3">
								<li>Working in Core application development for Amadeus, TravelClick.</li>
								<li>Collaborating with stakeholders for scope and requirement of the project.</li>
								<li>Worked extensively with Java, Spring, Hibernate, SQL, Docker, REST</li>
							</ul>
						</div>
						<div className="mb-3">
							<div className="inline">
								<span>
									<strong>Cerillion Technologies Pvt. Ltd. | Feb 2019 -May 2021 (2.3 years)</strong>
								</span>

							</div>
							<br></br>
							<span className="f300 fi">Analyst Programmer</span><br />
							<ul className="pl-3">
								<li>Was part of the development for the Product Catalogues software (CEPC).</li>
								<li>Worked with customers to customise the product based on needs.</li>
								<li>Worked with Java, Hibernate, HTML/CSS, JavaScript, GWT.</li>
							</ul>
						</div>

						<div>
							<div className="inline">
								<span>
									<strong>TechMahindra Pvt. Ltd. | Sep 2016 -Jan 2019 (2.2 years)</strong>
								</span>

							</div><br></br>
							<span className="f300 fi">Software Engineer</span><br />
							<ul className="pl-3">
								<li>Was part of the development for the Sunrise CRM.</li>
								<li>Collaborating with stakeholders for scope and requirement of the project.</li>
								<li>Worked with Java, Spring, JDBC, PL/SQL.</li>
							</ul>
						</div>
					</div>
					<div className="mt-4">
						<div className="row f600 f1-3em pl-3 mb-2">
							Education
						</div>
						<span><strong>West Bengal University Of Technology, India</strong></span><br />
						<span>Bachelor Of Technology - Information Technology</span><br />
						<span>August 2012 - July 2016 | GPA : 2.2</span>
					</div>
				</div>

				<div className="col-lg-3  order-lg-first" id="leftdiv">
					<div className="pl-3 pl-lg-0 mb-5">
						<div className="row f600 f1-3em">
							TECHNLOGIES
						</div>
						<div className="row flex-col-spa-l">
							<ul className="pl-3">
								<li>Spring Framework</li>
								<li>Quarkus Framework</li>
								<li>Kafka</li>
								<li>Hibernate</li>
								<li>PL/SQL</li>
								<li>Mongo DB</li>
								<li>React</li>
								<li>JavaScript/ JQuery</li>
								<li>HTML/CSS</li>
								<li>REST API</li>
								<li>Docker</li>
								<li>CI/CD</li>
								<li>AWS(S3, EC2)</li>
							</ul>
						</div>
						<div className="row flex-col-spa-l">

							<div className="row f600 f1-3em">
								TOOLS
							</div>
							<ul className="pl-3">
								<li>CRM(Amdocs)</li>
								<li>Jira</li>
								<li>Confluence</li>
								<li>GIT</li>
								<li>Bitbucket</li>
								<li>SourceTree</li>
								<li>Bamboo</li>
								<li>Jenkins</li>
								<li>Postman</li>
								<li>FileZila/WinSCP</li>
							</ul>
						</div>
						<div className="mt-5 mt-sm-4 pl-3 pl-lg-0 pt-3">
						<div className="row f600 f1-3em">
							Personal Projects
						</div>

						<div className="row flex-col-spa-l">
							<div className="mb-2">
								<span>Personal Website</span><br></br>
								<a href="https://sukanyapaul.com" className="lightgrey">sukanyapaul.com</a>
							</div>
							<div className="mb-2">
								<span>Memories(Personal Timeline)</span>
								<br></br>
								<span className="f0-8em">[expressJS (Node)/React]</span><br />
								<a href="https://memories.sukanyapaul.com"
									className="lightgrey">memories.sukanyapaul.com</a>
							</div>
							<div className="mb-2">
								<span>schoolspace</span>
								<br></br>
								<span className="f0-8em">[expressJS (Node)/React]</span><br />
								<a href="https://memories.sukanyapaul.com"
									className="lightgrey">memories.sukanyapaul.com</a>
							</div>

						</div>
					</div>

					</div>
					

				</div>
			</div>
		</div>
	</div>

</div>

);

}