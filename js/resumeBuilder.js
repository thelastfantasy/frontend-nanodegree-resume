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
    }],
    display: function () {
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
            $('.work-entry:last').append(formattedWorkDescription);
        }
    }
}

var projects = {
    "projects": [{
            "title": "RS company",
            "dates": "2016",
            "description": "Website design for RS company",
            "images": ["images/197x148.gif", "images/197x148.gif"],
            "link": "http://china.rs-online.com/web/"
        },
        {
            "title": "Xiongshida Company",
            "dates": "2017",
            "description": "Website design for Xiongshida Company",
            "images": ["images/197x148.gif"],
            "link": "http://xiongshida.cn/"
        }
    ],
    display: function () {
        for (var i = 0; i < projects.projects.length; i++) {
            $('#projects').append(HTMLprojectStart);
            var projTitle = HTMLprojectTitle.replace("%data%", "<a href=\"" + projects.projects[i].link + "\" target=\"_blank\">" + projects.projects[i].title + "</a>");
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
    }
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
    'skills': ['CSS', 'Javascript', 'jQuery'],
    display: function () {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        var formattedContactInfo = [];
        formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
        formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
        formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
        formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#header").append(formattedBioPic);
        $("#header").append(formattedWelcomeMsg);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

            for (i in bio.skills) {
                $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
            }
        }

        for (i in formattedContactInfo) {
            $("#topContacts").append(formattedContactInfo[i]);
            $("#footerContacts").append(formattedContactInfo[i]);
        }
    }
};

var education = {
    'schools': [{
        'name': 'Jinken College of Technology',
        'dates': '3 years',
        'location': 'Nanjing',
        'degree': '2007 - 2010',
        'url': 'http://www.jku.edu.cn/',
        'majors': ['Electronic Communications'],
    }],
    'onlineCourses': [{
        'title': 'Udacity Front-end Nanodegree Basic',
        'school': 'Udacity',
        'dates': '2017',
        'url': 'http://www.udacity.com'
    }],
    display: function () {
        if (education.schools.length > 0 || education.onlineCourses.length > 0) {
            for (i in education.schools) {
                $("#education").append(HTMLschoolStart);

                var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
                var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
                var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
                var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors.join(', '));

                $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
                $(".education-entry:last").append(formattedSchoolDates);
                $(".education-entry:last").append(formattedSchoolLocation);
                $(".education-entry:last").append(formattedSchoolMajor);
            }

            if (education.onlineCourses.length > 0) {
                $("#education").append(HTMLonlineClasses);
                for (i in education.onlineCourses) {
                    $("#education").append(HTMLschoolStart);
                    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
                    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
                    var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

                    $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                    $(".education-entry:last").append(formattedOnlineDates);
                    $(".education-entry:last").append(formattedOnlineURL);
                }
            }

        }
    }
};

work.display();
projects.display();
bio.display();
education.display();
$("#mapDiv").append(googleMap);

/* $(document).click(function (e) {
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
$('#main').append(internationalizeButton); */