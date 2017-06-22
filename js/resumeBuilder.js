// Main file we modify for project

var bio = {
  "name": "Mike Hughes",
  "role": "Product Manager",
  "welcomeMessage": "Digital experienced PM having done web to mobile.",
  "bioPic": "images/atlas.jpg",
  "contacts": {
    "mobile": "0422479145",
    "email": "mikehughesemail@gmail.com",
    "github": "@mikeyman",
    "twitter": "@mikeyman",
    "location": "Melbourne"
  },
  "skills": ["communication", "stakeholder management", "leadership", "relationships", "project management"]
};

var work = {
  "jobs": [
    {
      "employer": "Australia Post",
      "title": "Innovation Lead",
      "location": "Melbourne",
      "dates": "Oct 2016 - Dec 2016",
      "description": "Design Sprints for the MyPost Business team on a major release program of work."
    }, {
      "employer": "Australia Post",
      "title": "Delivery Lead",
      "location": "Melbourne",
      "dates": "Jun 2016 - Oct 2016",
      "description": "Worked on the Receva startup project on refining product offerings and product management."
    }, {
      "employer": "NAB",
      "title": "Mobile Delivery Lead",
      "location": "Melbourne",
      "dates": "Jun 2015 - Jun 2016",
      "description": "Mobile team Delivery Lead for the iOS and Android mobile apps, both previous MIB  and new MA apps."
    }
  ]
};

var projects = {
  "projects": [
    {
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
    }
  ]
};

var education = {
  "schools": [
    {
      "name": "Mitcham Primary",
      "location": "Melbourne",
      "degree": "Primary School Graduate",
      "dates": "Jan 1980 - Dec 1985",
      "url": "http://www.google.com.au",
      "majors": ["aaa", "bbb", "ccc"]
    }, {
      "name": "Yarra Valley Secondary",
      "location": "Melbourne",
      "degree": "Secondary School Graduate",
      "dates": "Jan 1990 - Dec 1995",
      "url": "http://www.google.com.au",
      "majors": ["aaa", "bbb", "ccc"]
    }, {
      "name": "RMIT University",
      "location": "Melbourne",
      "degree": "Tertiary Bachelors Degree Graduate",
      "dates": "Jan 2000 - Dec 2005",
      "url": "http://www.google.com.au",
      "majors": ["aaa", "bbb", "ccc"]
    }
  ],
  "onlineCourses": [
    {
      "title": "FE Nanodegree",
      "school": "Udacity",
      "dates": "Jan 2010 - Dec 2015",
      "url": "http://www.google.com.au"
    }
  ]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
// var formattedBlog = HTMLblog.replace("%data%", "BLOG");
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
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
// adds bioPic and Welcome AFTER the contacts list
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

// APPEND to header - the heading h3 and the ul tage which is already formatted for the li entries
// to follow undernearth
// APPEND to skills - then under the skillsStart unordered list ul, add each list item li per skill
if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for (var i=0; i < bio.skills.length; ++i) {
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkills);
  }
}

function displayWork () {
  // APPEND to workExperience - a workStart which is a work-entry div, under the workExperience h2
  // each HTMLworkStart adds a work-entry class div
  for (job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      var formattedworkEntry = HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedworkEntry);
      $(".work-entry:last").append(formattedworkDates);
      $(".work-entry:last").append(formattedworkDescription);
  }
}

displayWork();

function inName() {
  var intName = "";
  var names = bio.name.split(" ");
  names[1] = names[1].toUpperCase();
  intName = names.join(" ");
  return intName;
}

inName();

$("#main").append(internationalizeButton);

projects.display = function() {
  
  for(proj in projects.projects) {
    
    $("#projects").append(HTMLprojectStart);
          
    var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
    var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
    var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
    
    $(".project-entry:last").append(formattedprojectTitle);
    $(".project-entry:last").append(formattedprojectDates);
    $(".project-entry:last").append(formattedprojectDescription);
    
    for(var i=0; i < projects.projects[proj].images.length; ++i) {
      var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[proj].images[i]);
      $(".project-entry:last").append(formattedprojectImage);
    }
    
  }
}

projects.display();
