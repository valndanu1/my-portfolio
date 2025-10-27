function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(section => {
    section.style.display = 'none';
  });

  document.getElementById(sectionId).style.display = 'block';

  document.querySelectorAll('.navbar ul li a').forEach(link => {
    link.classList.remove('active');
  });

  const clickedLink = document.querySelector(`.navbar ul li a[onclick*="${sectionId}"]`);
  if (clickedLink) {
    clickedLink.classList.add('active');
  }
}
