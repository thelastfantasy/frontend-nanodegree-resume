/*
This is empty on purpose! Your code to build the resume will go here.
 */

var work = {
    'jobs': [{
        'employer': 'Mr. Zhang',
        'title': 'JiuYing Company',
        'dates': 'June - Now',
        'location': 'Shanghai',
        'description': 'Work in this IT company, not a bad work but salary is too low and I think I should go to see other companies soon.'
    }, {
        'employer': 'Mr. Li',
        'title': 'Chuangxiang Company',
        'dates': '2015 - April 2017',
        'location': 'Yangzhou',
        'description': 'Work in this B2C company, the salary is not bad but the work is boring and repetity, I don\'t like it.'
    }]
}

var projects = {
    "projects": [{
            "title": "RS company",
            "dates": "2016",
            "description": "Website design for RS company",
            "images": ["images/197x148.gif","images/197x148.gif"],
            "link": "http://www.oushi.com.cn/"
        },
        {
            "title": "Xiongshida Company",
            "dates": "2017",
            "description": "Website design for Xiongshida Company",
            "images": ["images/197x148.gif"],
            "link": "http://xiongshida.cn/"
        }
    ]
};

var bio = {
    'name': 'Tao Yulong',
    'role': 'Front-end Engineer',
    'biopic': './images/me.jpg',
    'welcomeMessage': 'Welcome! Here is my bio page.',
    'contacts': {
        'mobile': '+86-18600000000',
        'email': 'taoyulong@gmail.com',
        'github': 'thelastfantasy',
        'twitter': '@pikashi',
        'location': 'Shanghai'
    },
    'skills': ['CSS', 'Javascript', 'jQuery']
};

var education = {
    'schools': [{
        'name': 'Jinken College of Technology',
        'dates': '3 years',
        'location': 'Nanjing',
        'degree': '',
        'url': '',
        'majors': [],
    }],
    'onlineCourses': [{
        'title': '',
        'school': '',
        'dates': '',
        'url': ''
    }]
};


if (bio.skills.length !== 0) {
    $('#header').append(HTMLskillsStart);

    var formattedSkills = HTMLskills.replace('%data%', bio.skills[0]);
    $('#skills').append(formattedSkills);
    var formattedSkills = HTMLskills.replace('%data%', bio.skills[1]);
    $('#skills').append(formattedSkills);
    var formattedSkills = HTMLskills.replace('%data%', bio.skills[2]);
    $('#skills').append(formattedSkills);
}



var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
var formattedPic = HTMLbioPic.replace('%data%', bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
var allBioInfo = formattedName + formattedRole;
var allContacts = formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation;
var moreinfo = formattedPic + formattedWelcomeMsg;

$('#topContacts').append(allContacts);
$('#topContacts').append(moreinfo);
$('#topContacts').prepend(allBioInfo);

function displayWork() {
    for (var job in work.jobs) {
        $('#workExperience').append(HTMLworkStart);

        var formattedWorkEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
        var formattedWorkTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
        var formatedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
        $('.work-entry:last').append(formatedEmployerTitle);

        var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
        $('.work-entry:last').append(formattedWorkDates);
        var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
        $('.work-entry:last').append(formattedWorkLocation);

        var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
        //var allWorkInfo = formattedWorkEmployer + formattedWorkTitle + formattedWorkDates + formattedWorkLocation + formattedWorkDescription;
        $('.work-entry:last').append(formattedWorkDescription);
    }
}
displayWork();

$(document).click(function (e) {
    var x = e.pageX;
    var y = e.pageY;

    logClicks(x, y);
});

function inName(name) {
    var arr = name.trim().split(' ');
    var firstName = arr[0];
    firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
    var lastName = arr[1].toUpperCase();
    return firstName + ' ' + lastName;
}
$('#main').append(internationalizeButton);

projects.display = function () {
    for (var i = 0; i < projects.projects.length; i++) {
        $('#projects').append(HTMLprojectStart);
        var projTitle = HTMLprojectTitle.replace("%data%", "<a href=\"" + projects.projects[i].link + "\" target=\"_bkank\">" + projects.projects[i].title + "</a>");
        $('.project-entry:last').append(projTitle);
        var projDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $('.project-entry:last').append(projDates);
        var projDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $('.project-entry:last').append(projDescription);
        if (projects.projects[i].images.length > 0) {
            for (var j = 0; j < projects.projects[i].images.length; j++) {
                $('.project-entry:last').append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
            }
        }
    }
};

projects.display();