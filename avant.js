  (() => {
        const themeToggle = document.getElementById('theme-toggle');
        const stylesheetLink = document.getElementById('style');

        if(themeToggle && stylesheetLink) {
            themeToggle.addEventListener('change', function() {
                if (this.checked) {
                    stylesheetLink.href = 'darkmode2.css';
                } else {
                    stylesheetLink.href = 'style2.css';
                }
            });
        }
    })();