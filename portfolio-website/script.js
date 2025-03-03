document.addEventListener('DOMContentLoaded', function () {
    const categoryLinks = document.querySelectorAll('.project-type a');
    const projects = document.querySelectorAll('.project');

    categoryLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const category = link.getAttribute('data-category');

            // Remove active class from all category links
            categoryLinks.forEach(link => link.classList.remove('active'));

            // Add active class to the clicked category link
            link.classList.add('active');

            // Filter projects based on selected category
            projects.forEach(project => {
                const categories = project.getAttribute('data-category').split(',');
                if (categories.includes(category) || category === 'All') {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
});