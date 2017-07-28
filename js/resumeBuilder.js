/*
This is empty on purpose! Your code to build the resume will go here.
 */


var work = {
    'jobs': [{
        'employer': 'Mr. Zhang',
        'title': 'JiuYing Company',
        'dates': '1 year',
        'location': 'Shanghai',
        'description': 'an IT company'
    }, {
        'employer': 'Mr. Li',
        'title': 'Chuangxiang Company',
        'dates': '2 years',
        'location': 'Yangzhou',
        'description': 'an B2C company'
    }]
}

var projects = {
    'projects': [{
        'title': '',
        'dates': '',
        'description': '',
        'images': []
    }]
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

for (var job in work.jobs) {
    $('#workExperience').append(HTMLworkStart);

    var formattedWorkEmployer = HTMLworkEmployer.replace('%data%',work.jobs[job].employer);
    var formattedWorkTitle = HTMLworkTitle.replace('%data%',work.jobs[job].title);
    var formattedWorkDates = HTMLworkDates.replace('%data%',work.jobs[job].dates);
    var formattedWorkLocation = HTMLworkLocation.replace('%data%',work.jobs[job].location);
    var formattedWorkDescription = HTMLworkDescription.replace('%data%',work.jobs[job].description);
    var allWorkInfo = formattedWorkEmployer + formattedWorkTitle/*  + formattedWorkDates + formattedWorkLocation + formattedWorkDescription */;
    $('.work-entry:last').append(allWorkInfo);
}

//$('#main').append('pikashi');
// var formattedName = HTMLheaderName.replace('%data%','Pikashi');
// var formattedRole = HTMLheaderRole.replace('%data%','Front-end Engineer');

var formattedName = HTMLheaderName.replace('%data%',bio.name);
var formattedRole = HTMLheaderRole.replace('%data%',bio.role);
var formattedMobile = HTMLmobile.replace('%data%',bio.contacts.mobile);
var formattedEmail = HTMLemail.replace('%data%',bio.contacts.email);
var formattedGithub = HTMLgithub.replace('%data%',bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace('%data%',bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location);
var formattedPic = HTMLbioPic.replace('%data%',bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage);
var formattedSkills = HTMLskills.replace('%data%',bio.skills.join(', '));
var allBioInfo = formattedName + formattedRole;
var allContacts =  formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation;

$('#header').prepend(allBioInfo);
$('#topContacts').append(allContacts);

/* $('#main')
    .append(work['position'])
    .append(education.name); */