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
}

//$('#main').append('pikashi');
// var formattedName = HTMLheaderName.replace('%data%','Pikashi');
// var formattedRole = HTMLheaderRole.replace('%data%','Front-end Engineer');

/* var formattedName = HTMLheaderName.replace('%data%',bio.name);
var formattedRole = HTMLheaderRole.replace('%data%',bio.role);
var formattedMobile = HTMLmobile.replace('%data%',bio.contacts.mobile);
var formattedEmail = HTMLemail.replace('%data%',bio.contacts.email);
var formattedGithub = HTMLgithub.replace('%data%',bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace('%data%',bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location);
var formattedPic = HTMLbioPic.replace('%data%',bio.pic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage);
var formattedSkills = HTMLskills.replace('%data%',bio.skills.join(', '));

$('#header')
    .prepend(formattedSkills)
    .prepend(formattedPic)
    .prepend(formattedLocation)
    .prepend(formattedTwitter)
    .prepend(formattedGithub)
    .prepend(formattedEmail)
    .prepend(formattedMobile)
    .prepend(formattedWelcomeMsg)
    .prepend(formattedRole)
    .prepend(formattedName); */

/* $('#main')
    .append(work['position'])
    .append(education.name); */