// Wait for the HTML and CSS to load before running the JavaScript code
document.addEventListener("DOMContentLoaded", function(event) {
	
  const skills = document.querySelectorAll('.skill');
  const skillsList = document.querySelector('.skills-list');
  const about = document.querySelector('.abouttext');

  skills.forEach(skill => {
    const percent = skill.getAttribute('data-percent');
    skill.style.width = `${percent}%`;
  });


  const hidden = document.querySelectorAll(".hidden");


  // Scrool observer for animation in css ( class hidden)
  const observer = new IntersectionObserver ((entries) => {

    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show')
      }
    })

  });

  hidden.forEach((el) => observer.observe(el));
  


 
skills.forEach(skill => {
  skill.addEventListener('mouseover', () => {
    switch(skill.innerHTML) {
      case 'HTML5 &amp; CSS':
        about.innerHTML = 'I have experience developing websites using HTML5 and CSS. I have created responsive designs and implemented animations using CSS. I have worked colaboratively to build websties with baced-end capabilites including the use of php and mysql to store user data.';
        //  about.appendChild(createLink('<https://www.w3schools.com/html/default.asp>'));
        break;
      case 'C#':
        about.innerHTML = 'I have a solid understanding of Object-Oriented Programming and data structures. I have developed C# applications using Visual Studio and have knowledge of .NET Framework. I also plan on workeing on future projects using this framework';
        // about.appendChild(createLink('<https://docs.microsoft.com/en-us/dotnet/csharp/>'));
        break;
      case 'JavaScript/ JQUERY':
        about.innerHTML = 'I have experience developing dynamic and interactive web applications using JavaScript and jQuery. I have worked with APIs and have knowledge of popular libraries like React and Vue.';
        // about.appendChild(createLink('<https://www.javascript.com/>'));
        break;
      case 'OOP Java':
        about.innerHTML = 'I have knowledge of Object-Oriented Programming concepts and have developed worked collaborativ Java to write clear and robust code.basic knowledge on frameworks such as Spring and Hyvbernate for java application development';
        // about.appendChild(createLink('<https://www.java.com/en/>'));
        break;
      case 'Swift':
         about.innerHTML = 'I have experience developing iOS applications using Swift. I have created apps with UIKit and SwiftUI and have worked with Xcode to develop and test applications.';
        // about.appendChild(createLink('<https://developer.apple.com/swift/>'));
        break;
      default:
        about.innerHTML = '';
    }
  });


});

function createLink(url) {
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.innerText = 'View Work';
  return link;
}
});

 








