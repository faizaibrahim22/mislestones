var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var NAME = document.getElementById('name').value;
    var lastname = document.getElementById('lastname').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var Education = document.getElementById('education').value;
    var Experience = document.getElementById('experience').value;
    var SKills = document.getElementById('skills').value;
    var WorkExperience = document.getElementById('work').value;
    var resumeHTML = "\n    <h1><b>resume</b></h1>\n    <h3>Personal information</h3>\n    <p><b>Name:</b>".concat(NAME, "</p>\n    <p><b>lastname:</b>").concat(lastname, "</p>\n    <p><b>email:</b>").concat(email, "</p>\n    <p><b>Education:</b>").concat(Education, "</p>\n    <p><b>phone:</b>").concat(phone, "</p>\n    <p><b>Experience:</b>").concat(Experience, "\n    <p><b>SKills:</b>").concat(SKills, "\n    <p><b>WorkExperience:</b>").concat(WorkExperience, "\n\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("the resume element missing");
    }
});
