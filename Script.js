// Tab switching functionality
document.addEventListener('DOMContentLoaded', function () {
    const tabInputs = document.querySelectorAll('input[name="tab"]');
    const tabLabels = document.querySelectorAll('.nav-tab');
    const sections = [
        document.getElementById('dashboard-content'),
        document.getElementById('patients-content'),
        document.getElementById('doctors-content'),
        document.getElementById('appointments-content'),
        document.getElementById('billing-content'),
        document.getElementById('pharmacy-content')
    ];
    const ids = ['dashboard', 'patients', 'doctors', 'appointments', 'billing', 'pharmacy'];

    function activateTab(idx) {
        tabLabels.forEach((label, i) => {
            if (i === idx) label.classList.add('active');
            else label.classList.remove('active');
        });
        sections.forEach((section, i) => {
            if (i === idx) section.classList.add('active');
            else section.classList.remove('active');
        });
    }

    tabInputs.forEach((input, idx) => {
        input.addEventListener('change', function () {
            if (input.checked) activateTab(idx);
        });
    });

    // Initial activation
    let checkedIdx = Array.from(tabInputs).findIndex(input => input.checked);
    if (checkedIdx === -1) checkedIdx = 0;
    activateTab(checkedIdx);
});