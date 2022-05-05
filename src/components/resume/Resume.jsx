import React from 'react';


export default function Resume(){

    return (
    <div className='container'>
    <a href="resume.pdf" className="lightgrey float-right mx-10 mt-2 pr-4 transparent0-5 f0-8em" download>PDF <i className="fa fa-download" aria-hidden="true"></i>
	</a>
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
						<a href="mailto:sukanyapal14@gmail.com" className="slategrey">sukanyapal14@gmail.com</a><br></br>
						{/*<a href="https://samratdutta.com" className="slategrey">https://samratdutta.com</a>*/}
					</div>
					<div className="flex-row-spa mt-3 mt-sm-4" id="links">
						<a href="https://github.com/duttasamd"><i className="fa fa-github text-muted"></i></a>
						<a href="https://stackoverflow.com/users/2463304/samrat-dutta"><i className="fa fa-stack-overflow text-muted"></i></a>
						<a href="https://www.linkedin.com/in/duttasamd/"><i className="fa fa-linkedin text-muted"></i></a>
						<a href="https://www.xing.com/profile/Samrat_Dutta4"><i className="fa fa-xing text-muted"></i></a>
					</div>
				</div>
			</div>
			<div className="row mt-3 mt-sm-4 mt-lg-5 px-3">
				I am a software developer with 5 years of experience in Java(Spring/ Quarkus), SQL, Kafka and
other backend technologies.
			</div>
		</div>
		<hr/>
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
									<strong>acardo group AG | September 2020 - Present</strong>
								</span>
							</div>
                            <br></br>
							<span className="f300 fi">Web Developer (Werkstudent)</span><br/>
							<ul className="pl-3">
								<li>Full stack web development using PHP, Java and MySql.</li>
							</ul>
						</div>
						<div className="mb-3">
							<div className="inline">
								<span>
									<strong>Arvato Systems, Bertelsmann | June 2019 - May 2020</strong>
								</span>
								<span className="f600 lightgrey ml-2 f0-8em valignmiddle">
									1 yr
								</span>
							</div>
                            <br></br>
							<span className="f300 fi">Software Developer (Werkstudent)</span><br/>
							<ul className="pl-3">
								<li>Worked on 3 C# Asp.NET Core MVC projects (Full Stack).</li>
								<li>Developed as part of a team in the Arvato Smart Logistics Platform (ASLP/Platbricks).</li>
								<li>Developed a React project with Asp.NET Core RestAPI backend.</li>
							</ul>
						</div>

						<div>
							<div className="inline">
								<span>
									<strong>Piping Rock India Pvt. Ltd. | July 2016 - September 2018</strong>
								</span>
								<span className="f600 lightgrey ml-2 f0-8em valignmiddle">
									2 yrs 3 mos
								</span>
							</div><br></br>
							<span className="f300 fi">Software Developer (Full time)</span><br/>
							<ul className="pl-3">
								<li>One of first 4 employees.</li>
								<li>Developed an entire WMS/ERP system from scratch in C# Asp.NET MVC</li>
								<li>Oversaw deployment of the software in warehouses in USA.</li>
							</ul>
						</div>
					</div>
					<div className="mt-4">
						<div className="row f600 f1-3em pl-3 mb-2">
							Education
						</div>
						<span><strong>Universität Paderborn</strong></span><br/>
						<span>Master Computer Science | WS 2018 - Present</span><br/>
						<span>Focus : Intelligence and Data</span><br/><br/>

						<span><strong>West Bengal University Of Technology, India</strong></span><br/>
						<span>Bachelor Of Technology - Information Technology</span><br/>
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
                                <li>JavaScript/ JQuery</li>
                                <li>HTML/CSS</li>
                                <li>REST API</li>
                                <li>Docker</li>
                                <li>CI/CD</li>
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
						<div className="row f600 f1-3em mb-3">
							Personal Projects
						</div>
					</div>
				
					<div className="mt-5 mt-sm-4 pl-3 pl-lg-0 pt-3">
						<div className="row f600 f1-3em mb-3">
							Personal Projects
						</div>
						<div className="mb-2">
								<span>Personal Website</span>
								<a href="https://samratdutta.com" className="lightgrey">samratdutta.com</a>
							</div>
							<div className="mb-2">
								<span>Memories(Personal Timeline)</span>
                                <br></br>
								<span className="f0-8em">[expressJS (Node)/React]</span><br/>
								<a href="https://memories.sukanyapaul.com" className="lightgrey">demo.schoolspace.co.in</a>
							</div>
						<div className="row flex-col-spa-l">
							
							
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    
    </div>
    
    );

}