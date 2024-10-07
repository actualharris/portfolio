// const projectContainers = document.querySelectorAll('.project-container');

// projectContainers.forEach(project => {
//   const innerElement = project.querySelector('.row'); // Target the inner element with class 'row'
  
//   project.addEventListener('mouseover', () => {
//     innerElement.style.transform = 'translateY(-10px) scale(1.03)';
//     innerElement.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
//   });

//   project.addEventListener('mouseout', () => {
//     innerElement.style.transform = 'translateY(0) scale(1)';
//     innerElement.style.boxShadow = 'none';
//   });
// });



// Select all elements with the class 'project-container'
const projectContainers = document.querySelectorAll('.project-container');

// Loop through each container to add event listeners for hover effect
projectContainers.forEach(container => {
  
  // Mouseover event for applying hover styles
  container.addEventListener('mouseover', () => {
    container.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    container.style.transform = 'translateY(-10px) scale(1.03)';
    container.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    
    // Get the child element with class 'project-content'
    const projectContent = container.querySelector('.project-content');
    if (projectContent) {
      projectContent.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease';
      projectContent.style.opacity = '1'; // Make it fully opaque
    }
  });

  // Mouseout event for resetting styles when hover ends
  container.addEventListener('mouseout', () => {
    container.style.transform = 'translateY(0) scale(1)';
    container.style.boxShadow = 'none';
    
    const projectContent = container.querySelector('.project-content');
    if (projectContent) {
      projectContent.style.opacity = '1'; // Reset to fully opaque
    }
  });
});