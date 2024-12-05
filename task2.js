// Job data
const jobsData = {
    softwareEngineer: {
        title: "Software Engineer",
        company: "ABC Corp",
        location: "Remote",
        description: "We are looking for a passionate and skilled Software Engineer to join our development team.",
        responsibilities: [
            "Write clean and efficient code",
            "Collaborate with cross-functional teams",
            "Participate in code reviews"
        ],
        requirements: [
            "Bachelor's degree in Computer Science",
            "Experience with JavaScript, React, and Node.js",
            "Excellent problem-solving skills"
        ],
        benefits: [
            "Health and dental insurance",
            "Paid time off",
            "Professional development opportunities"
        ]
    },
    webDeveloper: {
        title: "Web Developer",
        company: "XYZ Ltd",
        location: "New York, NY",
        description: "We are seeking a creative Web Developer to help build cutting-edge web applications.",
        responsibilities: [
            "Develop and maintain web applications",
            "Collaborate with designers to create responsive layouts",
            "Ensure the technical feasibility of UI/UX designs"
        ],
        requirements: [
            "Bachelor's degree in Web Development or related field",
            "Experience with HTML, CSS, JavaScript, and PHP",
            "Strong understanding of web design principles"
        ],
        benefits: [
            "Health insurance",
            "Flexible work hours",
            "401(k) plan"
        ]
    }
};

// Function to show job details
function showJobDetails(jobId) {
    const job = jobsData[jobId];
    
    document.getElementById('job-title').innerText = job.title;
    document.getElementById('job-company').innerText = "Company: " + job.company;
    document.getElementById('job-location').innerText = "Location: " + job.location;
    document.getElementById('job-description').innerText = job.description;

    // Populate Responsibilities
    const responsibilitiesList = document.getElementById('job-responsibilities');
    responsibilitiesList.innerHTML = '';
    job.responsibilities.forEach(function(item) {
        const li = document.createElement('li');
        li.innerText = item;
        responsibilitiesList.appendChild(li);
    });

    // Populate Requirements
    const requirementsList = document.getElementById('job-requirements');
    requirementsList.innerHTML = '';
    job.requirements.forEach(function(item) {
        const li = document.createElement('li');
        li.innerText = item;
        requirementsList.appendChild(li);
    });

    // Populate Benefits
    const benefitsList = document.getElementById('job-benefits');
    benefitsList.innerHTML = '';
    job.benefits.forEach(function(item) {
        const li = document.createElement('li');
        li.innerText = item;
        benefitsList.appendChild(li);
    });

    // Hide job listings and show job details section
    document.getElementById('jobs').style.display = 'none';
    document.getElementById('job-detail').style.display = 'block';
}

// Function to show the application form
function showApplicationForm() {
    document.getElementById('job-detail').style.display = 'none';
    document.getElementById('application-form').style.display = 'block';
}

// Function to go back to job listings
function goBackToJobs() {
    document.getElementById('job-detail').style.display = 'none';
    document.getElementById('jobs').style.display = 'block';
    document.getElementById('application-form').style.display = 'none';
}