// script.js

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // Get all the navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    // Add a click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {

            // Remove the 'active' class from all links
            navLinks.forEach(item => item.classList.remove('active'));

            // Add the 'active' class to the clicked link
            this.classList.add('active');
        });
    });

});


function loadContent(page) {
    let content = '';
    switch(page) {
        case 'settings':
            content = '<h1>Portfolio Settings</h1><p>Settings content goes here...</p>';
            break;
        case '0-summary':
            content = '<h1>Summary Dashboard</h1><p>Summary content goes here...</p>';
            break;
        case '1-performance':
            content = `
                <h1>Performance</h1>
                <p>Performance content goes here...</p>
                <h2>PORTFOLIO PERFORMANCE</h2>
           
                <p>All performance metrics listed above are net of appointed investment management fees but before tax. Where noted, the Since Inception date of this analysis is: {dt_start_date.strftime('%d %B %Y')}. All performance is based on daily asset returns using portfolio target weights. Where a portfolio target weight change has been input into the dataset, it is assumed to have been applied as at the end of day asset valuations. </p>          
                <h4>Returns vs Benchmarks</h4>
                <iframe src="./Charts/1_Performance-Daily.html" height="420px" width="950px"></iframe>
                <iframe src="./Charts/1_Performance-Table.html" height="200px" width="950px"></iframe>

                <div class="page-break"></div>
                <h4>Performance of $100,000 Investment</h4>
                <iframe src="./Charts/1_Performance-Cum.html" height="370px" width="950px"></iframe>

                <br>
                <h2>KEY CONTRIBUTORS, DETRACTORS & ATTRIBUTION</h2>
                <h4>Daily Return Analysis</h4>
                <iframe src="./Charts/1_Performance-Bar30.html" height="370px" width="950px"></iframe>

                <div class="page-break"></div>
                <h4>Portfolio Performance Heatmap - Latest Month</h4>
                <iframe src="./Charts/6_Sleeve_Treemap1_1Mth.html" height="1020px" width="950px"></iframe>
            `;
            break;
        case '2-risk':
            content = '<h1>Risk Analysis</h1><p>Risk analysis content goes here...</p>';
            break;
        case '3-allocation':
            content = '<h1>Allocation / Exposure</h1><p>Allocation content goes here...</p>';
            break;
        case '3a-equity':
            content = '<h1>Equity Sleeve Detail</h1><p>Equity sleeve content goes here...</p>';
            break;
        case '3b-debt':
            content = '<h1>Debt Sleeve Detail</h1><p>Debt sleeve content goes here...</p>';
            break;
        case '3c-alternate':
            content = '<h1>Alternate Sleeve Detail</h1><p>Alternate sleeve content goes here...</p>';
            break;
        case '4-attribution':
            content = '<h1>Brinson-Fachler Attribution</h1><p>Attribution content goes here...</p>';
            break;
        case '5-contribution':
            content = '<h1>Contribution Analysis</h1><p>Contribution analysis content goes here...</p>';
            break;
        case '6-components':
            content = '<h1>Portfolio Components</h1><p>Portfolio components content goes here...</p>';
            break;
        case '10-esg':
            content = '<h1>ESG / Controversy</h1><p>ESG content goes here...</p>';
            break;
        case '11-fees':
            content = '<h1>Fee Analysis</h1><p>Fee analysis content goes here...</p>';
            break;
        case '20-markets':
            content = '<h1>Market Valuation Analysis</h1><p>Market valuation content goes here...</p>';
            break;
        case '21-reports':
            content = '<h1>Report Generator</h1><p>Report generator content goes here...</p>';
            break;
        case '22-download':
            content = '<h1>HTML Download</h1><p>Download content goes here...</p>';
            break;
        case '30-help':
            content = '<h1>Need Help?</h1><p>Help content goes here...</p>';
            break;
        default:
            content = '<h1>Main Content Area</h1><p>This is where your main content will go.</p>';
    }

    document.getElementById('page-content').innerHTML = content;
}
