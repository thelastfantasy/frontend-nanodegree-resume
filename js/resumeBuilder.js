/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$('#main').append('pikashi');
// var formattedName = HTMLheaderName.replace('%data%','Pikashi');
// var formattedRole = HTMLheaderRole.replace('%data%','Front-end Engineer');
var bio = {
    'name': 'Tao Yulong',
    'role': 'Front-end Engineer',
    'contacts':{
        'mobile':'18616310150',
        'email':'taoyulong@gmail.com',
        'github':'thelastfantasy',
        'twitter':'@pikashi',
        'location':'Shanghai'
    },
    'pic': './images/me.jpg',
    'welcomeMessage': 'Welcome! Here is my bio page.',
    'skills': ['CSS','Javascript','jQuery']
};

var work = {}
work.employer = 'Mr. Zhang';
work.title = 'JiuYing Company';
work.years = '1 year';
work.location = 'Shanghai';
work.description = 'an IT company';
work.position = 'Web Developer';

var education = {}
education['name'] = 'Jinken College of Technology';
education['years'] = '3 years';
education['city'] = 'Nanjing';
education['description'] = 'full-time college';

var formattedName = HTMLheaderName.replace('%data%',bio.name);
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
    .prepend(formattedName);

/* $('#main')
    .append(work['position'])
    .append(education.name); */