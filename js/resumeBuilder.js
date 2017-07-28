/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$('#main').append('pikashi');
var formattedName = HTMLheaderName.replace('%data%','Pikashi');
var formattedRole = HTMLheaderRole.replace('%data%','Front-end Engineer');
$('#header').append(formattedName).append(formattedRole);
