// Main file working with helper.js to render the page
var bio = {
    "name": "Mike Hughes",
    "role": "Product Manager",
    "contacts": {
        "mobile": "0422999888",
        "email": "mikehughesemail@gmail.com",
        "github": "@mikeyman",
        "twitter": "@mikeyman",
        "location": "Melbourne"
    },
    "welcomeMessage": "Digital experienced PM having done web to mobile.",
    "skills": ["communication", "stakeholder management", "leadership", "relationships", "project management", "design sprints", "facilitation", "team leading"],
    "biopic": "images/atlas.jpg",
    "display": function() {
        // bio display content on page
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        // var formattedBlog = HTMLblog.replace("%data%", "BLOG");
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        // PREPEND - Insert ROLE at start of HEADER to get before TOPCONTACTS
        // PREPEND - Then insert NAME ahead of ROLE and before TOPCONTACTS
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        // APPEND to topcontacts - No other existing content between UL tags to get in the way
        // APPEND to topcontacts  - Can Insert CONTACTS into TOPCONTACTS one contact after another
        // adds a list item li for each contact
        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedTwitter);
        $("#topContacts").append(formattedGithub);
        $("#topContacts").append(formattedLocation);
        // APPEND to header - so biopic and welcome go AFTER the exisint content ie. top contacts list
        // adds biopic and Welcome AFTER the contacts list
        $("#header").append(formattedBiopic);
        $("#header").append(formattedWelcomeMsg);
        // APPEND to header - the heading h3 and the ul tage which is already formatted for the li entries
        // to follow undernearth
        // APPEND to skills - then under the skillsStart unordered list ul, add each list item li per skill
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            bio.skills.forEach(function(skill) {
                var formattedSkills = HTMLskills.replace("%data%", skill);
                $("#skills").append(formattedSkills);
            });
        }
        // add contacts to the footer
        $("#footerContacts").append(formattedMobile);
        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedGithub);
        $("#footerContacts").append(formattedLocation);
    }
};

var work = {
    "jobs": [{
        "employer": "Australia Post",
        "title": "Innovation Lead",
        "location": "Melbourne, Australia",
        "dates": "Oct 2016 - Dec 2016",
        "description": "Design Sprints for the MyPost Business team on a major release program of work."
    }, {
        "employer": "Australia Post",
        "title": "Delivery Lead",
        "location": "Sydney, Australia",
        "dates": "Jun 2016 - Oct 2016",
        "description": "Worked on the Receva startup project on refining product offerings and product management."
    }, {
        "employer": "NAB",
        "title": "Mobile Delivery Lead",
        "location": "Brisbane, Australia",
        "dates": "Jun 2015 - Jun 2016",
        "description": "Mobile team Delivery Lead for the iOS and Android mobile apps, both previous MIB  and new MA apps."
    }],
    "display": function() {
        // APPEND to workExperience - a workStart which is a work-entry div, under the workExperience h2
        // each HTMLworkStart adds a work-entry class div
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            var formattedworkEntry = HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title);
            var formattedworkDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedworkDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedworkEntry);
            $(".work-entry:last").append(formattedworkDates);
            $(".work-entry:last").append(formattedworkDescription);
        });
    }
};

var projects = {
    "projects": [{
        "title": "Design Sprints x 5",
        "dates": "Jan 2017 - Feb 2017",
        "description": "Developed a front end framework for widgets of this type.",
        "images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
    }, {
        "title": "Receva User Research",
        "dates": "Jan 2017 - Feb 2017",
        "description": "Developed a front end framework for widgets of this type.",
        "images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
    }, {
        "title": "Mobile Banking App",
        "dates": "Jan 2017 - Feb 2017",
        "description": "Developed a front end framework for widgets of this type.",
        "images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
    }],
    "display": function() {
        // APPEND projects to project section
        projects.projects.forEach(function(proj) {
            $("#projects").append(HTMLprojectStart);
            var formattedprojectTitle = HTMLprojectTitle.replace("%data%", proj.title);
            var formattedprojectDates = HTMLprojectDates.replace("%data%", proj.dates);
            var formattedprojectDescription = HTMLprojectDescription.replace("%data%", proj.description);
            $(".project-entry:last").append(formattedprojectTitle);
            $(".project-entry:last").append(formattedprojectDates);
            $(".project-entry:last").append(formattedprojectDescription);
            for (var i = 0; i < proj.images.length; ++i) {
                var formattedprojectImage = HTMLprojectImage.replace("%data%", proj.images[i]);
                $(".project-entry:last").append(formattedprojectImage);
            }
        });
    }
};

var education = {
    "schools": [{
        "name": "Mitcham Primary",
        "location": "Melbourne, Australia",
        "degree": "Primary School Graduate",
        "majors": ["Mathematics", "Scienece"],
        "dates": "Jan 1980 - Dec 1985",
        "url": "http://www.google.com.au"
    }, {
        "name": "Yarra Valley Secondary",
        "location": "Melbourne, Australia",
        "degree": "Secondary School Graduate",
        "majors": ["Physics", "Chemistry", "Computer Science"],
        "dates": "Jan 1990 - Dec 1995",
        "url": "http://www.google.com.au"
    }, {
        "name": "RMIT University",
        "location": "Melbourne, Australia",
        "degree": "Tertiary Bachelors Degree Graduate",
        "majors": ["Programming", "Systems Engineering", "Graphics"],
        "dates": "Jan 2000 - Dec 2005",
        "url": "http://www.google.com.au"
    }],
    "onlineCourses": [{
        "title": "FE Nanodegree",
        "school": "Udacity",
        "dates": "Jan 2010 - Dec 2015",
        "url": "http://www.google.com.au"
    }, {
        "title": "Use Git and GitHub",
        "school": "Udacity",
        "dates": "Jan 2010 - Dec 2015",
        "url": "http://www.google.com.au"
    }],
    "display": function() {
        // APPEND schools and online courses to education section
        education.schools.forEach(function(school) {
            // APPEND start of schools section
            $("#education").append(HTMLschoolStart);
            // format each school entry
            var formattedschoolName = HTMLschoolName.replace("%data%", school.name);
            var formattedschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedschoolDates = HTMLschoolDates.replace("%data%", school.dates);
            var formattedschoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            // APPEND combined school name and degree, dates, location and list of majors
            $(".education-entry:last").append(formattedschoolName + formattedschoolDegree);
            $(".education-entry:last").append(formattedschoolDates);
            $(".education-entry:last").append(formattedschoolLocation);
            for (var i = 0; i < school.majors.length; ++i) {
                var formattedschoolMajor = HTMLschoolMajor.replace("%data%", school.majors[i]);
                $(".education-entry:last").append(formattedschoolMajor);
            }
        });

        // h3 heading for online courses within Education
        $("#education").append(HTMLonlineClasses);

        education.onlineCourses.forEach(function(course) {
            // Added to helper.js a HTMLonlineStart div to ahndle each online course. Also updated styles.css to ensure
            // styling the same as work and education entries ie. left justified correctly
            $("#education").append(HTMLonlineStart);
            // format each online course entry
            var formattedonlineTitle = HTMLonlineTitle.replace("%data%", course.title);
            var formattedonlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedonlineDates = HTMLonlineDates.replace("%data%", course.dates);
            var formattedonlineURL = HTMLonlineURL.replace("%data%", course.url);
            // APPEND combined school name and degree, dates, location and list of majors
            $(".online-entry:last").append(formattedonlineTitle + formattedonlineSchool);
            $(".online-entry:last").append(formattedonlineDates);
            $(".online-entry:last").append(formattedonlineURL);
        });
    }
};

var mapLiveWork = {
    "display": function() {
        // Add map to the bottom. This code just adds from helper.js an empty div
        $("#mapDiv").append(googleMap);
    }
};

// Call functions as properties to display on page
bio.display();
work.display();
projects.display();
education.display();
mapLiveWork.display();
