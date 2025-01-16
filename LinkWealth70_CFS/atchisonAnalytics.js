
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
                content = 
                    `<h1>Portfolio Settings</h1><p>Settings content goes here...</p>
                `;
                break;
            case '0-summary':
                content = `
                    <h2>Summary Dashboard for Link Wealth 70 SMA (CFS) as at 03 January 2025</h2>
                    <h4>Portfolio Performance</h4>
                    <div class="iframe-container">
                        <iframe src="./Charts/1_Performance-RelTable_v3.html" height="370px" width="600px"></iframe>
                        <iframe src="./Charts/1_Performance-Main_v2.html" height="370px" width="600px"></iframe>
                    </div>
                    
                    <h4>Sector Sleeve Performance</h4>
                    <div class="iframe-container">
                        <iframe src="./Charts/1_Performance-SleeveTable_v1.html" height="600px" width="600px"></iframe>
                        <iframe src="./Charts/6_Performance-Sleeve_v2.html" height="600px" width="600px"></iframe>
                    </div>
                    
                    <h4>Exposure Summary</h4>
                    <div class="iframe-container">
                        <iframe src="./Charts/3_Alloc_Mgr_Level_2.html" height="600px" width="600px"></iframe>
                        <iframe src="./Charts/3_Allocation_History.html" height="600px" width="600px"></iframe>
                    </div>
                    
                    
                    <h4>Heatmap 3 Months</h4>
                    <iframe src="./Charts/6_Sleeve_Treemap1_3Mth.html" height="900px" width="600px"></iframe>
                    
                    <h4>Heatmap 1 Year</h4>
                    <iframe src="./Charts/6_Sleeve_Treemap1_1Yr.html" height="900px" width="600px"></iframe>
                    
                    <h4>Correlation Analysis</h4>
                    <iframe src="./Charts/6_Sleeve_MonthlyCorrel.html" height="820px" width="950px"></iframe>
                
                    <br>    
                    <h4>Performance Comments</h4>                
                    <p>The Link Wealth 70 SMA (CFS) delivered -1.2% for the month, and 1.1% over the quarter. </p>
                    <p>Over the last 12 months, the Link Wealth 70 SMA (CFS) delivered 12.3%, significantly beating Inflation by 9.4%. 
                    Relative to the Peer Group (FE AMI Peer Average), Link Wealth 70 SMA (CFS) has  outperformed over the last 12 months. </p>
                    
                    
                    
                    
                    <p>Since inception of the strategy, the Link Wealth 70 SMA (CFS) has delivered 13.4%, significantly beating Inflation by 9.8%. 
                    Relative to the Peer Group (FE AMI Peer Average), Link Wealth 70 SMA (CFS) has significantly outperformed since inception of the strategy. </p>
                    
                `;
                break;
            case '1-performance':
                content = `
                    <h1>Link Wealth 70 SMA (CFS)</h1>
                    <h4>Updated to: 03 January 2025</h2>
                    <h4>Inception:  31 December 2022</h2>
                    <br>
                    <h2>PORTFOLIO PERFORMANCE</h2>
                    <hr style="border-color: #1DC8F2; width: 80%; margin: 0 auto;">
                    <hr style="border-color: #1DC8F2; width: 80%; margin: 0 auto;">
                    <br>                    
                    <p>The Link Wealth 70 SMA (CFS) delivered -1.2% for the month, and 1.1% over the quarter. </p>
                    <p>Over the last 12 months, the Link Wealth 70 SMA (CFS) delivered 12.3%, significantly beating Inflation by 9.4%. 
                    Relative to the Peer Group (FE AMI Peer Average), Link Wealth 70 SMA (CFS) has  outperformed over the last 12 months. </p>
                    
                    
                    
                    
                    <p>Since inception of the strategy, the Link Wealth 70 SMA (CFS) has delivered 13.4%, significantly beating Inflation by 9.8%. 
                    Relative to the Peer Group (FE AMI Peer Average), Link Wealth 70 SMA (CFS) has significantly outperformed since inception of the strategy. </p>
                    
                    <p>All performance metrics listed above are net of appointed investment management fees but before tax. Where noted, the Since Inception date of this analysis is: 31 December 2022. All performance is based on daily asset returns using portfolio target weights. Where a portfolio target weight change has been input into the dataset, it is assumed to have been applied as at the end of day asset valuations. </p>          
                    <h4>Returns vs Benchmarks</h4>
                    <iframe src="./Charts/1_Performance-Main_v2.html" height="420px" width="950px"></iframe>
                    <iframe src="./Charts/1_Performance-RelTable_v3.html" height="200px" width="950px"></iframe>
                    
                    <div class="page-break"></div>
                    <h4>Performance of $100,000 Investment</h4>
                    <iframe src="./Charts/1_Performance-Cum.html" height="370px" width="950px"></iframe>
                    <br>
                    <h2>KEY CONTRIBUTORS, DETRACTORS & ATTRIBUTION</h2>
                    
                    <p></p><p></p><p></p><p></p>
                    <h4>Last 90 Days - Return Analysis</h4>
                    <iframe src="./Charts/1_Performance-Bar90.html" height="370px" width="950px"></iframe>
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
                    
                    <h4>Historical Asset Class Overweight / Underweight vs SAA</h4>
                    <iframe src="./Charts/3_Allocation_RelSAA_History.html" height="580px" width="950px"></iframe>
                    
                    <h4>Historical Asset Class Overweight / Underweight vs TAA</h4>
                    <iframe src="./Charts/3_Allocation_Rel_History.html" height="580px" width="950px"></iframe>
                    
                    <h4>Detailed Current Holding Overweight / Underweight vs TAA</h4>
                    <iframe src="./Charts/3_Holding_OWUW.html" height="580px" width="950px"></iframe>
                    
                    
                    
                    
                    
                    
                    
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
                    <h4>Contribution Analysis of Asset Class Sleeves</h4>
                    <iframe src="./Charts/5_Sleeve_Contribs.html" height="380px" width="950px"></iframe>
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
                    <h4>Manager Performance Summary</h4>
                    <iframe src="./Charts/6_Manager-Table.html" height="1020px" width="1050px"></iframe>
                    
                    <div class="page-break"></div>
                    <h4>Sector Sleeve Components</h4>
                    <iframe src="./Charts/6_Sleeve_Components.html" height="400px" width="950px"></iframe>
                    
                    <div class="page-break"></div>
                    <h4>Australian Share Component Analysis</h4>
                    <iframe src="./Charts/6_AusEq_Sleeve_Components.html" height="400px" width="950px"></iframe>
                    
                    <div class="page-break"></div>
                    <h4>International Share Component Analysis</h4>
                    <iframe src="./Charts/6_IntEq_Sleeve_Components.html" height="400px" width="950px"></iframe>
                    
                    <div class="page-break"></div>
                    <h4>Real Asset Component Analysis</h4>
                    <iframe src="./Charts/6_Real_Sleeve_Components.html" height="400px" width="950px"></iframe>
                    
                    <div class="page-break"></div>
                    <h4>Alternatives Component Analysis</h4>
                    <iframe src="./Charts/6_Alts_Sleeve_Components.html" height="400px" width="950px"></iframe>
                    
                    <div class="page-break"></div>
                    <h4>Duration Component Analysis</h4>
                    <iframe src="./Charts/6_Duration_Sleeve_Components.html" height="400px" width="950px"></iframe>
                    
                    <div class="page-break"></div>
                    <h4>Floating Rate Component Analysis</h4>
                    <iframe src="./Charts/6_Floating_Sleeve_Components.html" height="400px" width="950px"></iframe>
                `;
                break;
            case '7-heatmap':
                content = `
                    <br> 
                    <h2>HEATMAP ANALYSIS</h2>
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
                    <h4>Relative Portfolio Performance to SAA Benchmark Heatmap (Look Through) - Latest Month</h4>
                    <iframe src="./Charts/6_Sleeve_Treemap_LT_1Mth_Relative.html" height="1020px" width="950px"></iframe>
                    
                `;
                break;
            case '8-correls':
                content = `
                    <br> 
                    <h2>CORRELATION ANALYSIS</h2>
                    <hr style="border-color: #1DC8F2; width: 80%; margin: 0 auto;">
                    <hr style="border-color: #1DC8F2; width: 80%; margin: 0 auto;">
                    <br> 
                    
                    <div class="page-break"></div>
                    <h4>Sector Sleeve Correlations</h4>
                    <iframe src="./Charts/6_Sleeve_MonthlyCorrel.html" height="820px" width="950px"></iframe>
                    
                    <div class="page-break"></div>
                    <h4>Australian Share Sleeve Correlations</h4>
                    <iframe src="./Charts/6_AusEq_MthCorrel.html" height="820px" width="950px"></iframe>
                    
                    <div class="page-break"></div>
                    <h4>International Share Sleeve Correlations</h4>
                    <iframe src="./Charts/6_IntEq_MthCorrel.html" height="820px" width="950px"></iframe>
                    
                    <div class="page-break"></div>
                    <h4>Real Asset Sleeve Correlations</h4>
                    <iframe src="./Charts/6_Real_MthCorrel.html" height="820px" width="950px"></iframe>
                    
                    <div class="page-break"></div>
                    <h4>Alternatives Sleeve Correlations</h4>
                    <iframe src="./Charts/6_Alts_MthCorrel.html" height="820px" width="950px"></iframe>
                    
                    <div class="page-break"></div>
                    <h4>Duration Sleeve Correlations</h4>
                    <iframe src="./Charts/6_Duration_MthCorrel.html" height="820px" width="950px"></iframe>
                    
                    <div class="page-break"></div>
                    <h4>Floating Sleeve Correlations</h4>
                    <iframe src="./Charts/6_Floating_MthCorrel.html" height="820px" width="950px"></iframe>
                `;
                break;
            case '9-mgr':
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
                    <h1>Need Help? Contact Us:</h1>
                    <p>Atchison Consultants</p>
                    <p>+61 3 9642 3835</p>
                    <p>kev@atchison.com.au</p>
                    <br>
                    
        <h2>GLOSSARY</h2>
        <h3>Performance Analysis</h3>
        <ul>
            <li>Portfolio Performance is calculated after fee charged by the appointed portfolio manager and underlying ICRs (Indirect Costs Ratios). Portfolio manager fee includes services related to the management of the portfolio, such as asset allocation, investment selection, risk management, implementation, and reporting. An underlying ICR relates to the fee charged by individual underlying investments, such as managed funds or Exchange Traded Funds (ETFs), selected by the portfolio manager. The aggregate ICR of the portfolio will vary over time as a result of portfolio changes, as well as other factors, such as the underlying fund manager triggering a performance fee if relevant.</li>
            <li>Returns assume reinvestment of all distributions. Returns for periods longer than1 year are annualised. Index returns do not allow for taxes, management, transaction, and operational costs.</li>
            <li>SAA Benchmark is calculated by using the weighted average of the strategic asset allocation and the relevant index returns for each asset class.</li>
            <li>Peer Group is developed FE Analytics (AMI) and constructed by aggregating data from a broad spectrum of funds, providing a comprehensive view of average returns within specific categories e.g. Balanced, Growth etc.</li>
            <li>Inflation is measured using the CPI (consumer price index) published by the Australian Bureau of Statistics. CPI measures household inflation and includes statistics about price change for categories of household expenditure.</li>
            <li>Performance of $100,000 Investment is an estimate of how much, since inception, the investment has compounded, over time, with any distributions re-invested, assuming no contributions or redemptions to the initial investment.</li>
            <li>Key, Contributors, Detractors & Attribution by Asset Class evaluates the performance of the portfolio by asset class contribution to total return.</li>
            <li>Portfolio Performance Heatmap is a graphical representation of each asset class and individual investment managers contribution to total portfolio performance represented as colours. Green showing positive changes and red showing negative changes. Click on any box to see the performance of the assert class and investment manager weighted return.</li>
            <li>Latest Intra-Month Update is calculated on the most recent number of days within a period.</li>
        </ul>
        <br>
        <h3>Risk Analysis</h3>
        <ul>
            <li>Volatility is a historical statistical measure of a dispersion of returns of a managed portfolio or benchmark.  A higher volatility means that a managed portfolio’s value can move dramatically over a shorter period-of-time, in either direction i.e. up or down. A lower volatility means that a managed portfolio’s value does not fluctuate dramatically, and returns tend to be steadier</li>
            <li>Max Drawdown is a historical measure of a managed portfolio’s maximum loss in a peak-to-trough decline before a new peak is attained. It is an indicator of downside risk over a specified time of period.</li>
            <li>Sharpe Ratio is a measure of a managed portfolio’s risk-adjusted returns. Calculated by dividing a portfolio’s excess returns (being above an industry benchmark e.g. risk-free asset such as cash return) by its volatility to assess risk- adjusted performance. Higher the Sharpe Ratio the better a portfolio’s historical risk-adjusted performance.</li>
            <li>Calmar Ratio is a measure a portfolio’s investment efficiency on a risk-adjusted basis. It is calculated by dividing the investment’s annual return (typically over three years) by its maximum drawdown, reflecting performance versus potential losses. The lower the Calmar Ratio, the worse the performance of the portfolio, the higher the Calmar ratio, the better the performance, relative to the risk taken</li>
            <li>Information Ratio quantifies the excess managed portfolio returns over the returns of the market benchmark, relative to the volatility of the returns. An Information Ratio of 0.4 or above is considered good, 0.70 or above is very good, and 1.0 or higher is exceptional.</li>
            <li>Tracking Error is a measure of how closely a portfolio follows an index to which it is benchmarked. The risk, relative to the benchmark, is the tracking error.  A benchmark unaware approach will tend to have a high Tracking Error, and high volatility and inconsistency in portfolio returns exceeding the index.  A low tracking can have the opposite effect on a portfolio</li>
            <li>Batting Average is a measure of a portfolio manager’s ability to consistently beat the market benchmark. A portfolio manager who meets or outperforms the benchmark every month over a given period would have a batting average of 100.</li>
            <li>Inflation Sensitivity (Monthly Returns) measures the sensitivity of the total portfolio monthly returns to inflation, inflation and returns are negatively correlated</li>
            <li>ASX Market Sensitivity (Monthly Returns) measures the sensitivity of the total portfolio monthly returns to ASX, Australian share market and total portfolio returns are positively correlated.</li>
            <li>US Market Sensitivity (Monthly Returns) measures the sensitivity of the total portfolio monthly returns to US market, US share market and total portfolio returns are positively correlated. </li>    
            <li>Drawdown Periods & Recovery measures the total portfolio peak to trough decline over the period compared to the SAA benchmark and Peer Group and the time taken to recover.</li>
        </ul>
        <br>
        <div class="page-break"></div>
    
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
                                                        max-width: 950px; /* Restrict table width to a maximum of 950px */
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
      <td>BM_Rajomon_AE</td>
      <td>100% iShares Core S&amp;P/ASX 200 ETF</td>
    </tr>
    <tr>
      <th>1</th>
      <td>International Shares</td>
      <td>BM_Rajomon_IE</td>
      <td>85% Vanguard MSCI Index International Shares ETF + 15% iShares MSCI Emerging Markets ETF</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Real Assets</td>
      <td>BM_Rajomon_PS</td>
      <td>20% AMI Property - Australia Direct + 25% Vanguard Global Infrastructure Index ETF + 30% BlackRock iShares Global Listed Property Index + 25% Vanguard Global Infrastructure Index ETF</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Alternatives</td>
      <td>BM_Rajomon_Alts</td>
      <td>100% iShares Core Cash ETF</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Long Duration</td>
      <td>BM_Rajomon_IS</td>
      <td>50% iShares Core Composite Bond ETF + 50% Vanguard International Fixed Income ETF</td>
    </tr>
    <tr>
      <th>5</th>
      <td>Floating Rate</td>
      <td>BM_Rajomon_Credit</td>
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
    
                `;
                break;            
            default:
                content = `
                    <h1>Link Wealth 70 SMA (CFS)</h1>
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
    