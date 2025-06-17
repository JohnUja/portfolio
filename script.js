// Wait for the HTML and CSS to load before running the JavaScript code
document.addEventListener("DOMContentLoaded", function(event) {
	
  const skills = document.querySelectorAll('.skill');
  const skillsList = document.querySelector('.skills-list');
  const about = document.querySelector('.abouttext');
  const defaultText = about.querySelector('p').innerHTML;

  // Initialize skills with proper error handling
  skills.forEach(skill => {
    const percent = skill.getAttribute('data-percent');
    if (percent && !isNaN(percent)) {
      skill.style.setProperty('--fill-width', percent + '%');
    } else {
      console.warn(`Invalid or missing data-percent for skill: ${skill.innerHTML}`);
      skill.style.setProperty('--fill-width', '0%');
    }
    // Ensure fill is hidden by default
    skill.classList.remove('filled');
  });

  // Improved scroll animation with better performance
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px'
  });

  const hidden = document.querySelectorAll(".hidden");
  hidden.forEach((el) => observer.observe(el));

  // Create skill description elements
  const skillDescriptions = {
    'Terraform &amp; Ansible': `Expert in Infrastructure as Code and automation. Designed and deployed secure, scalable AWS environments using Terraform modules. Automated cloud provisioning, configuration management, and CI/CD pipelines with Ansible for seamless, repeatable deployments in enterprise environments.`,
    'HTML, CSS, JavaScript': `Proficient in building modern, responsive web applications. Extensive experience with HTML5, CSS3, and JavaScript ES6+, including frameworks like React and Vue. Developed and maintained user-centric interfaces, ensuring accessibility, performance, and cross-browser compatibility.`,
    'Express &amp; Node.js': `Developed robust RESTful APIs and scalable backend services using Node.js and Express. Integrated third-party APIs, managed authentication, and optimized server-side performance for high-traffic web applications. Strong focus on security, modularity, and maintainability.`,
    'Python &amp; Flask': `Built automation scripts, data processing pipelines, and web services using Python and Flask. Leveraged Python for DevOps tasks, API integrations, and rapid prototyping. Experience with Flask for lightweight, scalable web applications and microservices.`,
    'Bash/Shell': `Advanced command-line skills for Linux/Unix systems. Automated system administration, deployment, and monitoring tasks using Bash scripting. Proficient in writing reusable scripts for DevOps workflows, log analysis, and cloud resource management.`,
    'Java &amp; Spring Boot': `Experience developing enterprise-grade applications with Java and Spring Boot. Built RESTful APIs, integrated databases, and implemented security best practices. Familiar with microservices architecture and cloud-native Java deployments.`,
    'AI/ML with Python': `Currently working on AI/ML projects using Python, TensorFlow, and PyTorch. Building and deploying machine learning models for automation, data analysis, and intelligent cloud solutions. Passionate about leveraging AI to solve real-world business challenges.`
  };

  // Create description elements
  Object.entries(skillDescriptions).forEach(([skill, description]) => {
    const descElement = document.createElement('div');
    descElement.className = 'skill-description';
    descElement.innerHTML = description;
    about.appendChild(descElement);
  });

  let aboutHover = false;
  let revertTimeout = null;

  // Enhanced hover interaction with better error handling
  skills.forEach(skill => {
    skill.addEventListener('mouseover', () => {
      if (!about) {
        console.warn('About text element not found');
        return;
      }
      skill.classList.add('filled');
      const skillName = skill.innerHTML.trim();
      const defaultTextElement = about.querySelector('p');
      const descriptionElement = about.querySelector(`.skill-description`);
      defaultTextElement.style.opacity = '0';
      if (descriptionElement) {
        descriptionElement.innerHTML = skillDescriptions[skillName] || '';
        descriptionElement.style.opacity = '1';
      }
      if (revertTimeout) clearTimeout(revertTimeout);
    });
    skill.addEventListener('mouseout', () => {
      skill.classList.remove('filled');
      // Only revert if not hovering abouttext
      revertTimeout = setTimeout(() => {
        if (!aboutHover) {
          const defaultTextElement = about.querySelector('p');
          const descriptionElement = about.querySelector('.skill-description');
          defaultTextElement.style.opacity = '1';
          if (descriptionElement) {
            descriptionElement.style.opacity = '0';
          }
        }
      }, 10000);
    });
  });

  // Only trigger highlight and scale on abouttext hover
  about.addEventListener('mouseenter', () => {
    aboutHover = true;
    about.classList.add('highlight');
    if (revertTimeout) clearTimeout(revertTimeout);
  });
  about.addEventListener('mouseleave', () => {
    aboutHover = false;
    about.classList.remove('highlight');
    revertTimeout = setTimeout(() => {
      const defaultTextElement = about.querySelector('p');
      const descriptionElement = about.querySelector('.skill-description');
      defaultTextElement.style.opacity = '1';
      if (descriptionElement) {
        descriptionElement.style.opacity = '0';
      }
    }, 10000);
  });

  /*------This code first waits for the DOM to be fully loaded. Then, it selects all the elements with the .project-card class and adds a click event listener to each of them. When a project card is clicked, the function retrieves the URL from the data-url attribute and opens it in a new tab using window.open().------ */

  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
      card.addEventListener("click", function () {
          const url = card.getAttribute("data-url");
          if (url) {
              window.open(url, "_blank");
          }
      });
  });
});

function createLink(url) {
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.innerText = 'View Work';
  return link;
}





 








