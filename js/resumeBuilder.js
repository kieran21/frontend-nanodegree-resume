var bio = {
	"name" : "Kieran Reid",
	"role" : "Aspiring Front End Web Dev",
	"contacts" : {
		"mobile" : "+6421543726",
		"email" : "kieran@skink.nz",
		"github" : "kieran21",
		"twitter" : "skinknz",
		"location" : "Waitakere, NZ"
	},
	"welcomeMessage" : "Hi there, I'm Kieran!",
		"skills" : ["Web Design", "Web Development", "CSS, HTML, JS & PHP", "WordPress", "AdWords & Analytics"],
	"biopic" : "images/kieran.jpg"

}

var education = {
	"schools" : [
		{
			"name" : "University of Auckland",
			"location" : "Auckland",
			"dates" : "2014-2017",
			"url" : "https://www.uoa.ac.nz/",
			"degree" : "Bachelor of Science",
			"majors" : ["CompSci"]
		},
		{
			"name" : "Massey High",
			"location" : "Auckland",
			"dates" : "2005-2009",
			"url" : "https://www.masseyhigh.school.nz/",
			"degree" : "NCEA Lv3",
			"majors" : ["n/a"]
		}

	],
	"onlineCourses" : [
		{
			"title" : "Udacity Front End Web Developer Nanodegree",
			"school" : "Auckland",
			"dates" : "2015-2016",
			"url" : "https://www.udacity.com/"

		},
		{
			"title" : "Codecademy",
			"school" : "Auckland",
			"dates" : "2016",
			"url" : "https://www.codecademy.com/"
		}
	]
}

var work = {
	"jobs" : [
		{
			"employer" : "Pont Media Ltd.",
			"title" : "Junior Web Developer / Digital Media Specialist",
			"location" : "Mt. Eden, Auckland, NZ",
			"dates" : "2016 - 2016",
			"description" : "Casual employment doing WordPress theme development using PHP, HTML, CSS & UI design work. Working with MySQL / phpMyAdmin for checking data, exporting, importing. Managing hosting control panels e.g. WHM / cPanel. Managing DNS records. Co-ordinating with clients and external IT teams."
		},
		{
			"employer" : "Thermosash Commercial Ltd.",
			"title" : "Junior IT Support",
			"location" : "Wairau Valley, Auckland, NZ",
			"dates" : "2015 - 2016",
			"description" : "PC and mobile device deployment into an enterprise environment. GPS device provisioning and deployment. Some R&D for process and IT tooling improvement. User admin for internal IT systems. Enterprise AirWatch deployment testing. Setup, modification and configuration of Raspbian (Raspberry Pi) based terminals. Network & Windows 7 basic troubleshooting. Communication with a multitude of internal and external contacts."
		},
		{
			"employer" : "Vodafone NZ Ltd.",
			"title" : "Customer Support Specialist",
			"location" : "CBD, Auckland, NZ",
			"dates" : "2013 - 2015",
			"description" : "Fielding mobile service queries relating to billing, accounts and service provisioning. Technical fault troubleshooting, resolution and ticket escalation. Email ticket management and resolution. Liaising with internal teams and agents. Experience using Siebel, BMC iRemedy and Oracle RightNow."
		}

	]
}

var projects = {
	"projects" : [
		{
			"title" : "Comer Firewood",
			"dates" : "2016",
			"description" : "Contracted by this client to refresh their aging website for a mobile friendly site with a customised firewood order form. Involved UI design, logo creation &amp; Google Analytics integration.",
			"images" : ["images/comer-firewood.png", "images/comer-firewood2.png"]
		},
		{
			"title" : "Arahoe Code Club",
			"dates" : "2016",
			"description" : "I volunteer at Arahoe School for one hour per week, teaching a group of 12 students with the help of a teaching staff member. Topics include: web-development using HTML, CSS and Javascript along with an introduction to programming using Scratch and Python.",
			"images" : ["images/arahoe.png", "images/arahoe2.png"]
		}

	]
}

headerDisplay = function () {

	//name and role variables
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	//header content into id header div
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

}

bio.display = function () {

	//contact info variables
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	// biopic and welcome message variables
	var formattedBiopic = HTMLbioPic.replace("%data%",bio.biopic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

	//contact info into id topContacts ul
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);

	//contact info into id lets-connect div
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedLocation);

	//pic and welcome message into header
	$("#header").append(formattedBiopic);
	$("#header").append(formattedWelcomeMsg);


	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for (var i = 0; i < bio.skills.length; i++) {
			$("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
		}
	}
}

work.display = function() {
	work.jobs.forEach(function(job) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
		var formattedDates = HTMLworkDates.replace("%data%", job.dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

		$(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates + formattedDescription);
	});
}

projects.display = function() {
	//display code goes here
	projects.projects.forEach(function(project) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
		var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);

		$(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription);

		project.images.forEach(function(image) {
				var formattedImage = HTMLprojectImage.replace("%data%", image);
				$(".project-entry:last").append(formattedImage);
		});


	});
}

education.display = function() {
	education.schools.forEach(function(school) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", school.name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
		var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
		var formattedlLocation = HTMLschoolLocation.replace("%data%", school.location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", school.major);

		$(".education-entry:last").append(formattedName + formattedDegree + formattedDates + formattedlLocation + formattedMajor);
	});
}

mapDisplay = function() {
	$("#mapDiv").append(googleMap);
}

headerDisplay();
bio.display();
work.display();
projects.display();
education.display();
mapDisplay();

