var bio = {
    "name": "Kieran Reid",
    "role": "All Round Tech Guy",
    "contacts": {
        "mobile": "+6421543726",
        "email": "kieran21@gmail.com",
        "github": "kieran21",
        "twitter": "skinknz",
        "location": "Waitakere, NZ"
    },
    "welcomeMessage": "Hi I'm Kieran (not the All Black!) - CompSci student, web dev and Code Club Volunteer Tutor!",
    "skills": ["Web Design", "Web Development", "CSS, HTML, JS & PHP", "WordPress"],
    "biopic": "images/kieran.jpg"

};

var education = {
    "schools": [{
            "name": "University of Auckland",
            "location": "Auckland",
            "dates": "2014-2017",
            "url": "https://www.auckland.ac.nz/",
            "degree": "Bachelor of Science",
            "majors": ["CompSci"]
        }, {
            "name": "Massey High",
            "location": "Auckland",
            "dates": "2005-2009",
            "url": "http://www.masseyhigh.school.nz/",
            "degree": "NCEA Lv3",
            "majors": ["n/a"]
        }

    ],
    "onlineCourses": [{
        "title": "Udacity",
        "school": " Front End Web Developer Nanodegree",
        "dates": "In Progress",
        "url": "https://www.udacity.com/"

    }]
};

var work = {
    "jobs": [{
            "employer": "Umbrellar Cloud",
            "title": "Advanced Technical Helpdesk Specialist",
            "location": "Albany, Auckland, NZ",
            "dates": "2017 - Current",
            "description": "Proactive resolution of customer requests via voice, email & online chat through troubleshooting, diagnosing & testing. Working daily with LAMP & Windows hosting environments, DNS, domain names, email systems, PHP, Apache, NGINX, MySQL, MSSQL and related technologies.",
            "url" : "https://www.umbrellar.nz/"
        },{
            "employer": "Skink Ltd.",
            "title": "Freelance Web Developer &amp; Owner",
            "location": "Waitakere, Auckland, NZ",
            "dates": "2014 - Current",
            "description": "The odd side gig creating websites from concept to go-live. One-pagers & business brochure sites to a full eCommerce setup and custom ordering systems. I specialise in WordPress, WooCommerce & Shopify theme development, and custom application development using PHP/MySQL, HTML5/CSS3 and JavaScript.",
            "url" : "https://www.skink.nz/"
        },{
            "employer": "Pont Media Ltd.",
            "title": "Junior Web Developer / Digital Media Specialist",
            "location": "Mt. Eden, Auckland, NZ",
            "dates": "2016 - 2016",
            "description": "Casual employment doing WordPress theme development using PHP, HTML, CSS & UI design work. Working with MySQL / phpMyAdmin for checking data, exporting, importing. Managing hosting control panels e.g. WHM / cPanel. Managing DNS records. Co-ordinating with clients and external IT teams.",
            "url" : "http://www.pontmedia.co.nz/"
        }, {
            "employer": "Thermosash Commercial Ltd.",
            "title": "Junior IT Support",
            "location": "Wairau Valley, Auckland, NZ",
            "dates": "2015 - 2016",
            "description": "PC and mobile device deployment into an enterprise environment. GPS device provisioning and deployment. Some R&D for process and IT tooling improvement. User admin for internal IT systems. Enterprise AirWatch deployment testing. Setup, modification and configuration of Raspbian (Raspberry Pi) based terminals. Network & Windows 7 basic troubleshooting. Communication with a multitude of internal and external contacts.",
            "url" : "http://www.thermosash.co.nz/"
        }, {
            "employer": "Vodafone NZ Ltd.",
            "title": "Customer Support Specialist",
            "location": "CBD, Auckland, NZ",
            "dates": "2013 - 2015",
            "description": "Fielding mobile service queries relating to billing, accounts and service provisioning. Technical fault troubleshooting, resolution and ticket escalation. Email ticket management and resolution. Liaising with internal teams and agents. Experience using Siebel, BMC iRemedy and Oracle RightNow.",
            "url" : "http://www.vodafone.co.nz/"
        }

    ]
};

var projects = {
    "projects": [{
            "title": "Comer Firewood",
            "dates": "2016",
            "description": "Contracted by this client to refresh their aging website for a mobile friendly site with a customised firewood order form. Involved UI design, logo creation &amp; Google Analytics integration.",
            "images": ["images/comer-firewood.png", "images/comer-firewood2.png"],
            "url" : "https://www.comerfirewood.co.nz/"
        }, {
            "title": "Arahoe Code Club",
            "dates": "2016",
            "description": "I volunteer at Arahoe School for one hour per week, teaching a group of 12 students with the help of a teaching staff member. Topics include: web-development using HTML, CSS and Javascript along with an introduction to programming using Scratch and Python.",
            "images": ["images/arahoe.png", "images/arahoe2.png"],
            "url" : "https://arahoe.codeclub.nz/"
        }

    ]
};

function headerDisplay() {

    //name and role variables
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    //header content into id header div
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

}

bio.display = function() {

    //contact info variables
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile).replace("#","tel:"+bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email).replace("#","mailto:"+bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter).replace("#","https://twitter.com/"+bio.contacts.twitter+"/");
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github).replace("#","https://github.com/"+bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    // biopic and welcome message variables
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

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
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    }
};

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        formattedEmployer = formattedEmployer.replace("#", job.url);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

        $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates + formattedDescription);
    });
};

projects.display = function() {
    //display code goes here
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        formattedTitle = formattedTitle.replace("#", project.url);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);

        $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription);

        project.images.forEach(function(image) {
            var formattedImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formattedImage);
        });
    });
};

education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedlLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);

        $(".education-entry:last").append(formattedName + formattedDegree + formattedDates + formattedlLocation + formattedMajor);
    });

    $(".education-entry:last").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(course) {

        var formattedTitle = HTMLonlineTitle.replace("%data%", course.title).replace("#", course.url);
        var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
        var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
        var formattedlUrl = HTMLonlineURL.replace("%data%", course.url).replace("#", course.url);

        $(".education-entry:last").append(formattedTitle + formattedSchool + formattedDates + formattedlUrl);
    });
};

mapDisplay = function() {
    $("#mapDiv").append(googleMap);
};

headerDisplay();
bio.display();
work.display();
projects.display();
education.display();
mapDisplay();
