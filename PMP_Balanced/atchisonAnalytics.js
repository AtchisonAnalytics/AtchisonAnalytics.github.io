
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

    async function checkFileExists(url) {
        try {
            const response = await fetch(url);
            return response.ok;
        } catch (error) {
            return false;
    }
}

    async function loadContent(page) {
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
                    <h1>PMP Wealth Balanced Model</h1>
                    <h4>Updated to: 30 September 2024</h2>
                    <h4>Inception:  31 December 2022</h2>
                    <br>
                    <h2>PORTFOLIO PERFORMANCE</h2>
                    <hr style="border-color: #1DC8F2; width: 80%; margin: 0 auto;">
                    <hr style="border-color: #1DC8F2; width: 80%; margin: 0 auto;">
                    <br>                    
                    <p>The PMP Wealth Balanced Model delivered 1.1% for the month, and 4.6% over the quarter. </p>
                    <p>Over the last 12 months, the PMP Wealth Balanced Model delivered 20.7%, significantly beating Inflation by 17.3%. 
                    Relative to the Peer Group (FE AMI Peer Average), PMP Wealth Balanced Model has significantly outperformed over the last 12 months. </p>
                    
                    
                    
                    
                    <p>Since inception of the strategy, the PMP Wealth Balanced Model has delivered 11.0%, significantly beating Inflation by 7.4%. 
                    Relative to the Peer Group (FE AMI Peer Average), PMP Wealth Balanced Model has significantly outperformed since inception of the strategy. </p>
                    
                    <p>All performance metrics listed above are net of appointed investment management fees but before tax. Where noted, the Since Inception date of this analysis is: 31 December 2022. All performance is based on daily asset returns using portfolio target weights. Where a portfolio target weight change has been input into the dataset, it is assumed to have been applied as at the end of day asset valuations. </p>          
                    <h4>Returns vs Benchmarks</h4>
                    <iframe src="./Charts/1_Performance-Daily.html" height="420px" width="950px"></iframe>
                    <iframe src="./Charts/1_Performance-Table.html" height="200px" width="950px"></iframe>
                    <div class="page-break"></div>
                    <h4>Performance of $100,000 Investment</h4>
                    <iframe src="./Charts/1_Performance-Cum.html" height="370px" width="950px"></iframe>
                    <br>
                    <h2>KEY CONTRIBUTORS, DETRACTORS & ATTRIBUTION</h2>
                    
                    <p></p><p></p><p></p><p></p>
                    <h4>Daily Return Analysis</h4>
                    <iframe src="./Charts/1_Performance-Bar30.html" height="370px" width="950px"></iframe>
                    <div class="page-break"></div>
                    <h4>Portfolio Performance Heatmap - Latest Month</h4>
                    <iframe src="./Charts/6_Sleeve_Treemap1_1Mth.html" height="1020px" width="950px"></iframe>
                    <br>
                    <h2>LATEST INTRA-MONTH UPDATE</h2>
                    <iframe src="./Charts/1_Performance-Latest.html" height="370px" width="950px"></iframe>
                `;
                break;
            case '2-risk':
                content = `
                    <br> 
                    <h2>RISK ANALYSIS</h2>
                    <hr style="border-color: #1DC8F2; width: 80%; margin: 0 auto;">
                    <hr style="border-color: #1DC8F2; width: 80%; margin: 0 auto;">
                    <br>
                    
                    <h4>Risk Metrics</h4>
                    <iframe src="./Charts/2_Risk-Table.html" height="500px" width="950px"></iframe>
                    <br>
                    <h4>Inflation Sensitivity (Monthly Returns)</h4>
                    <iframe src="./Charts/2_InflationSensitivity.html" height="500px" width="950px"></iframe>
                    <h4>ASX Market Sensitivity (Monthly Returns)</h4>
                    <iframe src="./Charts/2_AusEqSensitivity.html" height="500px" width="950px"></iframe>
                    <h4>US Market Sensitivity (Monthly Returns)</h4>
                    <iframe src="./Charts/2_USEqSensitivity.html" height="500px" width="950px"></iframe>
                    <br>      
                    <h4>Drawdown Periods & Recovery</h4>
                    <iframe src="./Charts/2_Drawdown.html" height="370px" width="950px"></iframe>
                    <h4>Rolling 3yr Calmar Ratio - Return over Drawdown Risk </h4>
                    <p>The below Calmar Ratio explains the return achieved relative to the drawdown risk taken. A higher Calmar Ratio indicates a more favorable risk-adjusted return for the investment</p>
                    <iframe src="./Charts/2_Calmar3yr.html" height="370px" width="950px"></iframe>
                    <h4>Rolling 3yr Tracking Error - Level of Relative Risk Being Taken</h4>
                    <iframe src="./Charts/2_TE3yr.html" height="370px" width="950px"></iframe>
                    <h4>Rolling 3yr Batting Average - % of Months Outperforming Benchmark Return</h4>
                    <iframe src="./Charts/2_Batting3yr.html" height="370px" width="950px"></iframe>
                    <h4>90 Day Volatility</h4>
                    <iframe src="./Charts/2_Vol90.html" height="370px" width="950px"></iframe>
                    <h4>1 Year Volatility</h4>
                    <iframe src="./Charts/2_Vol1yr.html" height="370px" width="950px"></iframe>
                    
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
                    <h4>Historical Asset Class Overweight / Underweight</h4>
                    <iframe src="./Charts/3_Allocation_Rel_History.html" height="580px" width="950px"></iframe>

                    
                    <h4>Historical Holding Level Weights</h4>
                    <iframe src="./Charts/3_Allocation_DH_FloatHistory.html" height="580px" width="950px"></iframe>
                    
                `;
                break;
            case '3a-equity':
                content = `
                    <h2>EQUITY SLEEVE ANALYSIS</h2>
                    <hr style="border-color: #1DC8F2; width: 80%; margin: 0 auto;">
                    <hr style="border-color: #1DC8F2; width: 80%; margin: 0 auto;">
                    <br>            
                    <h4>Country Bias Analysis</h4>
                    <iframe src="./Charts/3a_CountryOWUW.html" height="580px" width="950px"></iframe>
                    <h4>Industry Bias Analysis</h4>
                    <iframe src="./Charts/3a_IndustryOWUW.html" height="580px" width="950px"></iframe>
                    <h4>Equity Sleeve - ROE vs MCap</h4>
                    <iframe src="./Charts/3a_Equity_Financial_Ratios_1.html" height="630px" width="950px"></iframe>
                    <h4>Equity Sleeve - Net Profit Margin vs ROE</h4>
                    <iframe src="./Charts/3a_Equity_Financial_Ratios_2.html" height="630px" width="950px"></iframe>
                    <h4>Equity Sleeve - PE Ratio vs ROE</h4>
                    <iframe src="./Charts/3a_Equity_Financial_Ratios_3.html" height="630px" width="950px"></iframe>
                    <h4>Equity Sleeve - Earnings Yield vs Earnings Growth</h4>
                    <iframe src="./Charts/3a_Equity_Financial_Ratios_4.html" height="630px" width="950px"></iframe>
                    <h4>Holdings Waterfall</h4>
                    <iframe src="./Charts/3a_Equity_Alloc_Waterfall.html" height="630px" width="950px"></iframe>
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
                    <h4>Decision Layer Attribution Analysis</h4>
                    <iframe src="./Charts/4_Attrib_layers.html" height="480px" width="950px"></iframe>
                    <h4>Decision Layer Value-Add Analysis</h4>
                    <iframe src="./Charts/4_Attrib_layers_rel.html" height="480px" width="950px"></iframe>
                    <br>  
                    <h4>Attribution Analysis of Asset Allocation vs Manager/Security Selection</h4>
                    <iframe src="./Charts/4_Attrib_Totals.html" height="380px" width="950px"></iframe>
                    <h4>Aggregate Returns of Underlying Sector Sleeves</h4>
                    <iframe src="./Charts/6_Sleeve_Components.html" height="380px" width="950px"></iframe>
                    <h4>Attribution Analysis of Equities</h4>
                    <iframe src="./Charts/4_Attrib_Equities.html" height="480px" width="950px"></iframe>
                    <h4>Attribution Analysis of Real & Alterntives</h4>
                    <iframe src="./Charts/4_Attrib_AltsReal.html" height="480px" width="950px"></iframe>
                    <h4>Attribution Analysis of Defensives</h4>
                    <iframe src="./Charts/4_Attrib_Defensives.html" height="480px" width="950px"></iframe>
                    
                `;
                break;
            case '5-contribution':
                content = `
                    <h2>CONTRIBUTION ANALYSIS</h2>
                    <hr style="border-color: #1DC8F2; width: 80%; margin: 0 auto;">
                    <hr style="border-color: #1DC8F2; width: 80%; margin: 0 auto;">
                    <br>              
                    <h3>Contribution Analysis of Asset Class Sleeves</h3>
                    <h4>Australian Shares - Contribution</h4>
                    <iframe src="./Charts/5_AusEq_Sleeve_Contribs.html" height="380px" width="950px"></iframe>
                    <h4>International Shares - Contribution</h4>
                    <iframe src="./Charts/5_IntEq_Sleeve_Contribs.html" height="380px" width="950px"></iframe>
                    <h4>Real Assets - Contribution</h4>
                    <iframe src="./Charts/5_Real_Sleeve_Contribs.html" height="380px" width="950px"></iframe>
                    <h4>Duration - Contribution</h4>
                    <iframe src="./Charts/5_Duration_Sleeve_Contribs.html" height="380px" width="950px"></iframe>
                    <h4>Floating Rate - Contribution</h4>
                    <iframe src="./Charts/5_Floating_Sleeve_Contribs.html" height="380px" width="950px"></iframe>
                    <h4>Cash - Contribution</h4>
                    <iframe src="./Charts/5_Cash_Sleeve_Contribs.html" height="380px" width="950px"></iframe>


                `;

                const fileList = [
                    './Charts/5_Sleeve_Contribs.html',
                    './Charts/5_Alts_Sleeve_Contribs.html',

                ];

                for (const file of fileList) {
                    const exists = await checkFileExists(file);
                    if (exists) {
                        content += `<iframe src="${file}" height="380px" width="950px"></iframe><br>`;
                    }
                }

                break;
            case '6-components':
                content = `
                    <br> 
                    <h2>PORTFOLIO COMPONENTS</h2>
                    <hr style="border-color: #1DC8F2; width: 80%; margin: 0 auto;">
                    <hr style="border-color: #1DC8F2; width: 80%; margin: 0 auto;">
                    <br> 
                    
                    <div class="page-break"></div>
                    <h4>Manager Performance Summary</h4>
                    <iframe src="./Charts/6_Manager-Table.html" height="1020px" width="950px"></iframe>
                    
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
            case '7-mgr':
                content = `
                    <h1>Manager Analysis</h1><p>Manager analysis goes here...</p>
                `;
                break;
            case '12-tools':
                content = `
                    <h1>Advisor Tools</h1><p>Advisor Tools content goes here...</p>
                `;
                break;
            case '20-markets':
                content = `           
                    <h4>US Interest Rate Yield Curve Through Time</h4>
                    <iframe src="./Charts/20_Eco_USInterestRates3D.html" height="1230px" width="950px"></iframe>
                    <h4>US Interest Rates Through Time</h4>
                    <iframe src="./Charts/20_Eco_USInterestRatesLINE.html" height="830px" width="950px"></iframe>
                    <h4>US Credit Spreads Through Time</h4>
                    <iframe src="./Charts/20_Eco_CreditSpreadsLINE.html" height="830px" width="950px"></iframe>
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
            case '31-settings':
                content = `
                    <h1>Analysis Settings</h1>
                    <p>All performance metrics listed above are net of appointed investment management fees but before tax. All performance is based on daily asset returns using portfolio target weights. Where a portfolio target weight change has been input into the dataset, it is assumed to have been applied as at the end of day asset valuations.</p>               
                    
        <div class="page-break"></div> 
        <h2>MODEL BENCHMARK ASSUMPTIONS</h2>
        
                                            <!DOCTYPE html>
                                            <html lang="en">
                                            <head>
                                                <meta charset="UTF-8">
                                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                                <title>Performance Table</title>
                                                <style>
                                                    /* Add CSS style for table */
                                                    table.dataframe {
                                                        border-collapse: collapse;
                                                        width: 100%;
                                                        border-radius: 10px; /* Adjust the border radius as needed */
                                                        overflow: hidden; /* Ensure the border-radius is applied */
                                                    }

                                                    table.dataframe th,
                                                    table.dataframe td {
                                                        border: none;
                                                        padding: 8px; /* Adjust padding as needed */
                                                        text-align: center; /* Adjust text alignment as needed */
                                                    }

                                                    table.dataframe th {
                                                        background-color: #3D555E; /* Optional: Add background color for header */
                                                        color: #E7EAEB;
                                                    }

                                                    /* Add CSS rule for hover effect */
                                                    tr:hover {
                                                        background-color: #1DC8F2;
                                                    }
                                                </style>
                                            </head>
                                            <body>
                                                <table border="1" class="dataframe">
  <thead>
    <tr style="text-align: justify;">
      <th></th>
      <th>G1</th>
      <th>Code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Australian Shares</td>
      <td>IOZ-AU</td>
      <td>100% iShares Core S&amp;P/ASX 200 ETF</td>
    </tr>
    <tr>
      <th>1</th>
      <td>International Shares</td>
      <td>BM_IntShares_85DM15EM</td>
      <td>85% Vanguard MSCI Index International Shares ETF + 15% iShares MSCI Emerging Markets ETF</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Real Assets</td>
      <td>BM_RealAssets</td>
      <td>20% AMI Property - Australia Direct + 25% Vanguard Global Infrastructure Index ETF + 30% BlackRock iShares Global Listed Property Index + 25% Vanguard Global Infrastructure Index ETF</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Alternatives</td>
      <td>BILL-AU</td>
      <td>100% iShares Core Cash ETF</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Long Duration</td>
      <td>BM_Duration</td>
      <td>50% iShares Core Composite Bond ETF + 50% Vanguard International Fixed Income ETF</td>
    </tr>
    <tr>
      <th>5</th>
      <td>Floating Rate</td>
      <td>FLOT-AU</td>
      <td>100% VanEck Australian Floating Rate ETF</td>
    </tr>
    <tr>
      <th>6</th>
      <td>Cash</td>
      <td>BILL-AU</td>
      <td>100% iShares Core Cash ETF</td>
    </tr>
  </tbody>
</table>
                                            </body>
                                            </html>
                                            
        <br>
        <h2>FINE PRINT</h2>
        <p>Important Notice: This document is published by TAG Asset Consulting Group Pty Ltd, trading as Atchison Consultants, ABN 58 097 703 047, AFSL 230 846. Atchison Consultants distributes its investment solutions via platform and dealer groups (financial advisory groups).</p> 
        <p>Warning: Please be advised that past performance is not indicative of future performance. The returns discussed herein are based on model asset allocations and are for illustrative purposes only. Actual returns may differ due to variations in fees, timing of model change implementation, and the need to substitute individual holdings where reliable data was not available from our data providers. Any insights or recommendations provided in this document are intended for general advice purposes only and are based on our opinion of the investment merits of the financial products discussed, independent of the financial circumstances of any individual. Before proceeding with any investment based on the information provided, recipients must assess its suitability to their financial situation and consider seeking advice from an independent financial advisor.</p> 
        <p>Disclaimer: While care is taken to ensure the accuracy and completeness of the information presented herein, no warranties or representations are made as to its reliability. The content provided is derived from publicly available sources, or external data providers, which have not been independently verified by Atchison Consultants. Atchison Consultants, along with its directors, officers, employees, and agents, expressly disclaims any liability for errors, inaccuracies, or omissions in this document, as well as for any loss or damage that may arise from reliance on its contents. Readers are cautioned to verify all information independently before taking any actions based on this report.</p>
        <br>
        <br>
        <div class="page-break"></div>
    
                `;
                break;            
            default:
                content = `
                    <h1>PMP Wealth Balanced Model</h1>
                    <br>
                    <h2><---- USE MENU ON LEFT TO NAVIGATE</h2>
                    <hr style="border-color: #1DC8F2; width: 80%; margin: 0 auto;">
                    <hr style="border-color: #1DC8F2; width: 80%; margin: 0 auto;">
                    <br>        
                    <br>
                    <br>            
                `;
        }

        document.getElementById('page-content').innerHTML = content;
    }
    