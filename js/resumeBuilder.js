// Resume Builder Updated
// Updated to re structure using Separation of Concerns as part of the Advanced Interactive Websites final module of nano degree

// Main file working with helper.js to render the page

// Model

var model = {
  "bio": {
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
    "biopic": "images/atlas.jpg"
  },
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
  }]
  
};

var octopus = {
  
  init: function() {
    viewBio.init();
    viewWork.init();
    viewProjects.init();
    viewEducation.init();
    viewLiveWork.init();
  },
  
};

var viewBio = {
  
  init: function() {
    viewBio.render();
  },
  
  render: function() {
    var HTMLheaderName = '<h1 id="name">%data%</h1>';
    var HTMLheaderRole = '<span id="role">%data%</span><hr>';

    var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
    var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
    var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
    var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
    var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
    var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
    var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

    var HTMLbioPic = '<img src="%data%" class="biopic">';
    var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

    var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
    var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';
    // bio display content on page
    var formattedName = HTMLheaderName.replace("%data%", model.bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", model.bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", model.bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", model.bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", model.bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", model.bio.contacts.github);
    // var formattedBlog = HTMLblog.replace("%data%", "BLOG");
    var formattedLocation = HTMLlocation.replace("%data%", model.bio.contacts.location);
    var formattedBiopic = HTMLbioPic.replace("%data%", model.bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", model.bio.welcomeMessage);
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
    if (model.bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        model.bio.skills.forEach(function(skill) {
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

var viewWork = {
  
  init: function() {
    viewWork.render();
  },
  
  render: function() {
    var HTMLworkStart = '<div class="work-entry"></div>';
    var HTMLworkEmployer = '<a href="#">%data%';
    var HTMLworkTitle = ' - %data%</a>';
    var HTMLworkDates = '<div class="date-text">%data%</div>';
    var HTMLworkLocation = '<div class="location-text">%data%</div>';
    var HTMLworkDescription = '<p><br>%data%</p>';
    // APPEND to workExperience - a workStart which is a work-entry div, under the workExperience h2
    // each HTMLworkStart adds a work-entry class div
    model.jobs.forEach(function(job) {
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

var viewProjects = {
  
  init: function() {
    viewProjects.render();
  },
  
  render: function() {
    var HTMLprojectStart = '<div class="project-entry"></div>';
    var HTMLprojectTitle = '<a href="#">%data%</a>';
    var HTMLprojectDates = '<div class="date-text">%data%</div>';
    var HTMLprojectDescription = '<p><br>%data%</p>';
    var HTMLprojectImage = '<img src="%data%">';
    // APPEND projects to project section
    model.projects.forEach(function(proj) {
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

var viewEducation = {
  
  init: function() {
    viewEducation.render();
  },
  
  render: function() {
    var HTMLschoolStart = '<div class="education-entry"></div>';
    var HTMLschoolName = '<a href="#">%data%';
    var HTMLschoolDegree = ' -- %data%</a>';
    var HTMLschoolDates = '<div class="date-text">%data%</div>';
    var HTMLschoolLocation = '<div class="location-text">%data%</div>';
    var HTMLschoolMajor = '<em><br>Major: %data%</em>';
    // APPEND schools and online courses to education section
    model.schools.forEach(function(school) {
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

    var HTMLonlineStart = '<div class="online-entry"></div>';
    var HTMLonlineClasses = '<h3>Online Classes</h3>';
    var HTMLonlineTitle = '<a href="#">%data%';
    var HTMLonlineSchool = ' - %data%</a>';
    var HTMLonlineDates = '<div class="date-text">%data%</div>';
    var HTMLonlineURL = '<br><a class="url" href="#">%data%</a>';

    // h3 heading for online courses within Education
    $("#education").append(HTMLonlineClasses);

    model.onlineCourses.forEach(function(course) {
      

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

var viewLiveWork = {
  
  init: function() {
    viewLiveWork.render();
  },
  
  render: function() {
    var internationalizeButton = '<button>Internationalize</button>';
    var googleMap = '<div id="map"></div>';
    // Add map to the bottom. This code just adds from helper.js an empty div
    $("#mapDiv").append(googleMap);
  }
    
};

octopus.init();
