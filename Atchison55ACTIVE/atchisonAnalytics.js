
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
                content = `<h1>Portfolio Settings</h1><p>Settings content goes here...</p>`;
                break;
            case '0-summary':
                content = `<h1>Summary Dashboard</h1><p>Summary content goes here...</p>`;
                break;
            case '1-performance':
                content = `
                    <h1>Atchison Active 55 SMA</h1>
                    <h4>Updated to: 12 August 2024</h2>
                    <h4>Inception:  31 December 2022</h2>
                    <br>
                    <h2>PORTFOLIO PERFORMANCE</h2>
                    <hr style="border-color: #1DC8F2; width: 80%; margin: 0 auto;">
                    <hr style="border-color: #1DC8F2; width: 80%; margin: 0 auto;">
                    <br>                    
                    <p>The Atchison Active 55 SMA delivered 2.6% for the month, and 4.5% over the quarter. </p>
                    <p>Over the last 12 months, the Atchison Active 55 SMA delivered 11.9%, significantly beating Inflation by 8.2%. 
                    Relative to the Peer Group (FE AMI Peer Average), Atchison Active 55 SMA has materially outperformed over the last 12 months. </p>
                    
                    
                    
                    
                    <p>Since inception of the strategy, the Atchison Active 55 SMA has delivered 13.1%, significantly beating Inflation by 8.9%. 
                    Relative to the Peer Group (FE AMI Peer Average), Atchison Active 55 SMA has significantly outperformed since inception of the strategy. </p>
                    
                    <p>All performance metrics listed above are net of appointed investment management fees but before tax. Where noted, the Since Inception date of this analysis is: 31 December 2022. All performance is based on daily asset returns using portfolio target weights. Where a portfolio target weight change has been input into the dataset, it is assumed to have been applied as at the end of day asset valuations. </p>          
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
                content = `
                    <br> 
                    <h2>RISK ANALYSIS</h2>
                    <hr style="border-color: #1DC8F2; width: 80%; margin: 0 auto;">
                    <hr style="border-color: #1DC8F2; width: 80%; margin: 0 auto;">
                    <br>
                    
                    <h4>Inflation Sensitivity (Monthly Returns)</h4>
                    <iframe src="./Charts/2_InflationSensitivity.html" height="500px" width="950px"></iframe>
                    <h4>ASX Market Sensitivity (Monthly Returns)</h4>
                    <iframe src="./Charts/2_AusEqSensitivity.html" height="500px" width="950px"></iframe>
                    <h4>US Market Sensitivity (Monthly Returns)</h4>
                    <iframe src="./Charts/2_USEqSensitivity.html" height="500px" width="950px"></iframe>
                    <br>      
                    <h4>Drawdown Periods & Recovery</h4>
                    <iframe src="./Charts/2_Drawdown.html" height="400px" width="950px"></iframe>
                    <h4>Rolling 3yr Calmar Ratio - Return over Drawdown Risk </h4>
                    <p>The below Calmar Ratio explains the return achieved relative to the drawdown risk taken. A higher Calmar Ratio indicates a more favorable risk-adjusted return for the investment</p>
                    <iframe src="./Charts/2_Calmar3yr.html" height="400px" width="950px"></iframe>
                    <h4>Rolling 3yr Tracking Error - Level of Relative Risk Being Taken</h4>
                    <iframe src="./Charts/2_TE3yr.html" height="400px" width="950px"></iframe>
                    <h4>Rolling 3yr Batting Average - % of Months Outperforming Benchmark Return</h4>
                    <iframe src="./Charts/2_Batting3yr.html" height="400px" width="950px"></iframe>
                    <h4>90 Day Volatility</h4>
                    <iframe src="./Charts/2_Vol90.html" height="400px" width="950px"></iframe>
                    <h4>Risk Metrics</h4>
                    <iframe src="./Charts/2_Risk-Table.html" height="500px" width="950px"></iframe>
                `;
                break;
            case '3-allocation':
                content = `
                    <br> 
                    <h2>ALLOCATION</h2>
                    <hr style="border-color: #1DC8F2; width: 80%; margin: 0 auto;">
                    <hr style="border-color: #1DC8F2; width: 80%; margin: 0 auto;">
                    <br>
                    <h2>CURRENT POSITIONING vs TYPICAL HOLDING RANGE</h2>
                    <iframe src = "./Charts/3_Alloc_Ranges.html" height = "400px" width = "950px" > </iframe>
                    <h2>PORTFOLIO CONSTRUCTION</h2>
                    <h4>Allocation Adjustments Through Time</h4><iframe src = "./Charts/3_Allocation_History.html" height = "600px" width = "950px"></iframe><div class="page-break"></div><h4>Portfolio Construction - Manager Level </h4><iframe src = "./Charts/3_Alloc_Mgr_Level_2.html" height = "770px" width = "950px" ></iframe><div class="page-break"></div><h4>Portfolio Construction - Manager Level Categorised</h4><iframe src = "./Charts/3_Alloc_Mgr_Level_4.html" height = "770px" width = "950px" ></iframe>
                    
                    
                    
                    
                    
                    
                    
                `;
                break;
            case '3a-equity':
                content = `
                    <h1>Equity Sleeve Detail</h1><p>Equity sleeve content goes here...</p>
                `;
                break;
            case '3b-debt':
                content = `
                    <h1>Debt Sleeve Detail</h1><p>Debt sleeve content goes here...</p>
                `;
                break;
            case '3c-alternate':
                content = `
                    <h1>Alternate Sleeve Detail</h1><p>Alternate sleeve content goes here...</p>
                `;
                break;
            case '4-attribution':
                content = `
                    <h2>ATTRIBUTION ANALYSIS</h2>
                    <hr style="border-color: #1DC8F2; width: 80%; margin: 0 auto;">
                    <hr style="border-color: #1DC8F2; width: 80%; margin: 0 auto;">
                    <br>              
                    <h4>Attribution Analysis of Asset Allocation vs Manager/Security Selection</h4>
                    <iframe src="./Charts/4_Attrib_Totals.html" height="380px" width="950px"></iframe>
                    <h4>Aggregate Returns of Underlying Sector Sleeves</h4>
                    <iframe src="./Charts/6_Sleeve_Components.html" height="380px" width="950px"></iframe>
                `;
                break;
            case '5-contribution':
                content = `
                    <h1>Contribution Analysis</h1><p>Contribution analysis content goes here...</p>
                `;
                break;
            case '6-components':
                content = `
                    <br> 
                    <h2>PORTFOLIO COMPONENTS</h2>
                    <hr style="border-color: #1DC8F2; width: 80%; margin: 0 auto;">
                    <hr style="border-color: #1DC8F2; width: 80%; margin: 0 auto;">
                    <br> 
                    <div class="page-break"></div>
                    <h4>Portfolio Performance Heatmap - Latest Month</h4>
                    <iframe src="./Charts/6_Sleeve_Treemap1_1Mth.html" height="1020px" width="950px"></iframe>

                    <div class="page-break"></div>
                    <h4>Portfolio Performance Heatmap - Latest Quarter</h4>
                    <iframe src="./Charts/6_Sleeve_Treemap1_3Mth.html" height="1020px" width="950px"></iframe>

                    <div class="page-break"></div>
                    <h4>Portfolio Performance Heatmap - Latest 1 Year</h4>
                    <iframe src="./Charts/6_Sleeve_Treemap1_1Yr.html" height="1020px" width="950px"></iframe>

                    <div class="page-break"></div>
                    <h4>Portfolio Performance Heatmap - Since Inception</h4>
                    <iframe src="./Charts/6_Sleeve_Treemap1_SinceInc.html" height="1020px" width="950px"></iframe>

                    <div class="page-break"></div>
                    <h4>Portfolio Performance Heatmap (Look Through) - Latest Quarter</h4>
                    <iframe src="./Charts/6_Sleeve_Treemap_LT_3Mth.html" height="1020px" width="950px"></iframe>
                    
                    <div class="page-break"></div>
                    <h4>Relative Portfolio Performance to SAA Benchmark Heatmap (Look Through) - Latest Quarter</h4>
                    <iframe src="./Charts/6_Sleeve_Treemap_LT_3Mth_Relative.html" height="1020px" width="950px"></iframe>
                    
                    <div class="page-break"></div>
                    <h4>Portfolio Performance Heatmap (Look Through) - Latest Month</h4>
                    <iframe src="./Charts/6_Sleeve_Treemap_LT_1Mth.html" height="1020px" width="950px"></iframe>

                    <div class="page-break"></div>
                    <h4>Relative Portfolio Performance to SAA Benchmark Heatmap (Look Through) - Latest Month</h4>
                    <iframe src="./Charts/6_Sleeve_Treemap_LT_1Mth_Relative.html" height="1020px" width="950px"></iframe>
                `;
                break;
            case '10-esg':
                content = `
                    <h1>ESG / Controversy</h1><p>ESG content goes here...</p>
                `;
                break;
            case '11-fees':
                content = `
                    <h1>Fee Analysis</h1><p>Fee analysis content goes here...</p>
                `;
                break;
            case '20-markets':
                content = `
                    <h1>Market Valuation Analysis</h1><p>Market valuation content goes here...</p>
                `;
                break;
            case '21-reports':
                content = `
                    <h1>Report Generator</h1><p>Report generator content goes here...</p>
                `;
                break;
            case '22-download':
                content = `
                    <h1>HTML Download</h1><p>Download content goes here...</p>
                `;
                break;
            case '30-help':
                content = `
                    <h1>Need Help?</h1><p>Help content goes here...</p>
                `;
                break;
            default:
                content = `
                    <h1>Main Content Area</h1><p>This is where your main content will go.</p>
                `;
        }

        document.getElementById('page-content').innerHTML = content;
    }
    