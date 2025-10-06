
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
                    <h2>Summary Dashboard for Atchison Active International Shares SMA as at 30 September 2025</h2>
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
                        <iframe src="./Charts/3_Alloc_Mgr_Level_2_small.html" height="720px" width="600px"></iframe>
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
                    <p>The Atchison Active International Shares SMA delivered 1.4% for the month, and 4.2% over the quarter. </p>
                    <p>Over the last 12 months, the Atchison Active International Shares SMA delivered 14.5%, significantly beating Inflation by 12.4%. 
                    Relative to the Peer Group (FE AMI Peer Average), Atchison Active International Shares SMA has materially underperformed over the last 12 months. </p>
                    
                    
                    
                    
                    
                    
                    <h4>Key Contributors, Detractors & Attribution</h4>
                    <ul><li>On a weighted basis, the largest holding contributor to the portfolio outcome has been iShares S&P 500 ETF</li><li>The holding that contributed the least to portfolio return was Fairlight Global Small & Mid Cap Fund (SMID) Class A</li><li>The current holding with the highest absolute return has been iShares S&P 500 ETF<li>Whilst the current holding with the lowest absolute return has been GQG Partners Global Equity Fund - A Class</li></ul>
                    <p></p><p>The Fairlight Global Small & Mid Cap Fund is an actively managed, bottom-up, long-only global equities product that invests in a concentrated portfolio of 30-40 high quality small and mid-cap companies. Fairlight provides investors access to industries and companies that have the potential to grow faster than the more established mature large-cap companies (i.e., harvesting the “size premium” – smaller companies have higher risk-adjusted returns than larger firms on average). </p><p></p><p>GQG Partners Global Equity Fund, co-founded in 2016, employs a benchmark unaware strategy, focusing on forward looking quality by investing in companies with robust long-term growth prospects. Managing a diversified portfolio of 35-70 global stocks, the fund invests in large and mega-cap equities, serving as an active core position within the portfolio.</p>
                    
        <h2>MARKET OVERVIEW - September 2025</h2>
        <ul>
            <li>September saw global equities extend their rally, supported by the start of the U.S. easing cycle and improving growth sentiment. Bonds also gained as yields moved lower, particularly at the long end of the curve.</li>
            <li>The S&P/ASX 200 declined 0.8% in September, snapping its five-month winning streak. 9 out of 11 sectors reported losses with financials falling 1.4% detracting meaningfully given their index weight. Energy took the biggest fall returning -9.8% on the back of lower oil price. </li>
            <li>Materials stood out as the strongest performer on the ASX, rising 6.1% on the back of strength in gold and diversified miners.</li>
            <li>Emerging markets (+5.7%), particularly China (China Top 50 +6.7%), outperformed developed peers. Improving macro data and continued policy support underpinned performance. </li>
            <li>U.S. equities recorded a fifth consecutive month of gains. The S&P 500 posted its best September month in 15 years, gaining 3.7%, in what has historically been the worst month for stocks. This was supported by a Federal Reserve rate cut.</li>
            <li>Large cap equities outperformed mid and smalls in the US. Growth was the dominant factor outperforming value.</li>
            <li>Sector performance was split in September, with Technology leading the way, bouncing back from a negative August, advancing over 7.5%. Consumer Staples, Materials, and Energy all went negative, with Financials virtually flat at 0.1% in September.</li>
            <li>European equities advanced 1% for September continuing their positive run. However, german equities have been a drag for the quarter falling 1.2% behind political uncertainty.</li>
            <li>The Federal Reserve cut the federal funds rate by 25bps in September 2025, bringing it to the 4.00%-4.25% range, in line with expectations. It is the first reduction in borrowing costs since December.</li>
            <li>The RBA decided to leave the cash rate unchanged at 3.60 per cent at its September meeting. Bond indices were positive or neutral for the month.</li>
            <li>Commodites exteneded their rally. Gold reached record highs and copper saw a surge in prices. Rare earths performed well due to supply chain strain.</li>
                       
        </ul>
        <br>
                                                              
                `;
                break;
            case '1-performance':
                content = `
                    <h1>Atchison Active International Shares SMA</h1>
                    <h4>Updated to: 30 September 2025</h2>
                    <h4>Inception:  31 December 2022</h2>
                    <br>
                    <h2>PORTFOLIO PERFORMANCE</h2>
                    <hr style="border-color: #1DC8F2; width: 80%; margin: 0 auto;">
                    <hr style="border-color: #1DC8F2; width: 80%; margin: 0 auto;">
                    <br>                    
                    <p>The Atchison Active International Shares SMA delivered 1.4% for the month, and 4.2% over the quarter. </p>
                    <p>Over the last 12 months, the Atchison Active International Shares SMA delivered 14.5%, significantly beating Inflation by 12.4%. 
                    Relative to the Peer Group (FE AMI Peer Average), Atchison Active International Shares SMA has materially underperformed over the last 12 months. </p>
                    
                    
                    
                    
                    
                    
                    
                    <p>All performance metrics listed above are net of appointed investment management fees but before tax. Where noted, the Since Inception date of this analysis is: 31 December 2022. All performance is based on daily asset returns using portfolio target weights. Where a portfolio target weight change has been input into the dataset, it is assumed to have been applied as at the end of day asset valuations. </p>          
                    <h4>Returns vs Benchmarks</h4>
                    <iframe src="./Charts/1_Performance-Main_v2.html" height="420px" width="950px"></iframe>
                    <iframe src="./Charts/1_Performance-RelTable_v3.html" height="250px" width="950px"></iframe>
                    
                    <div class="page-break"></div>
                    <h4>Performance of $100,000 Investment</h4>
                    <iframe src="./Charts/1_Performance-Cum.html" height="370px" width="950px"></iframe>
                    <br>
                    <h2>KEY CONTRIBUTORS, DETRACTORS & ATTRIBUTION</h2>
                    <ul><li>On a weighted basis, the largest holding contributor to the portfolio outcome has been iShares S&P 500 ETF</li><li>The holding that contributed the least to portfolio return was Fairlight Global Small & Mid Cap Fund (SMID) Class A</li><li>The current holding with the highest absolute return has been iShares S&P 500 ETF<li>Whilst the current holding with the lowest absolute return has been GQG Partners Global Equity Fund - A Class</li></ul>
                    <p></p><p>The Fairlight Global Small & Mid Cap Fund is an actively managed, bottom-up, long-only global equities product that invests in a concentrated portfolio of 30-40 high quality small and mid-cap companies. Fairlight provides investors access to industries and companies that have the potential to grow faster than the more established mature large-cap companies (i.e., harvesting the “size premium” – smaller companies have higher risk-adjusted returns than larger firms on average). </p><p></p><p>GQG Partners Global Equity Fund, co-founded in 2016, employs a benchmark unaware strategy, focusing on forward looking quality by investing in companies with robust long-term growth prospects. Managing a diversified portfolio of 35-70 global stocks, the fund invests in large and mega-cap equities, serving as an active core position within the portfolio.</p>
                    <h4>Last 90 Days - Return Analysis</h4>
                    <iframe src="./Charts/1_Performance-Bar90.html" height="370px" width="950px"></iframe>
                    <div class="page-break"></div>
                    <h4>Portfolio Performance Heatmap - Latest 3 Months</h4>
                    <iframe src="./Charts/6_Sleeve_Treemap1_3Mth.html" height="1020px" width="950px"></iframe>
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
                    
                    <h4>Rolling 3yr Tracking Error - Level of Relative Risk Being Taken</h4>
                    <iframe src="./Charts/2_TE3yr.html" height="370px" width="950px"></iframe>
                    <h4>Rolling 3yr Batting Average - % of Months Outperforming Benchmark Return</h4>
                    <iframe src="./Charts/2_Batting3yr.html" height="370px" width="950px"></iframe>
                    <h4>90 Day Volatility</h4>
                    <iframe src="./Charts/2_Vol90.html" height="370px" width="950px"></iframe>
                    
                    
                `;
                break;
            case '3-allocation':
                content = `
                    <br> 
                    <h2>ALLOCATION</h2>
                    <hr style="border-color: #1DC8F2; width: 80%; margin: 0 auto;">
                    <hr style="border-color: #1DC8F2; width: 80%; margin: 0 auto;">
                    <br>
                    
                    
                    <h2>PORTFOLIO CONSTRUCTION</h2>
                    <h4>Portfolio Construction - Look Through Exposures</h4><iframe src="./Charts/3_Alloc_Holding_Level_2.html" height="770px" width="950px"></iframe></div><h4>Portfolio Construction - Manager Level</h4><iframe src="./Charts/3_Alloc_Mgr_Level_2.html" height="770px" width="950px"></iframe>
                    
                    <h4>Historical Asset Class Overweight / Underweight vs SAA</h4>
                    <iframe src="./Charts/3_Allocation_RelSAA_History.html" height="580px" width="950px"></iframe>
                    
                    <h4>Historical Asset Class Overweight / Underweight vs TAA</h4>
                    <iframe src="./Charts/3_Allocation_Rel_History.html" height="580px" width="950px"></iframe>
                    
                    <h4>Detailed Current Holding Overweight / Underweight vs TAA</h4>
                    <iframe src="./Charts/3_Holding_OWUW.html" height="580px" width="950px"></iframe>
                    
                    <h2>PORTFOLIO LOOK THROUGH ANALYSIS</h2>
                    <h4>Portfolio vs Benchmark Weights by Industry Segment (GICS level 1)</h4><iframe src="./Charts/3a_IndustryOWUW.html" height="650px" width="950px"></iframe>
                    <h4>Portfolio vs Benchmark Weights by Country</h4><iframe src="./Charts/3a_CountryOWUW.html" height="650px" width="950px"></iframe>
                    <h4>Look Through Exposures - Company Size vs ROE (Dot size = Portfolio Weight; Dot Colour = Industry)</h4><iframe src="./Charts/3a_Equity_Financial_Ratios_1.html" height="650px" width="950px"></iframe>
                    <h4>Look Through Exposures - ROE vs Price/Earnings Ratio (Dot size = Portfolio Weight; Dot Colour = Industry)</h4><iframe src="./Charts/3a_Equity_Financial_Ratios_3.html" height="650px" width="950px"></iframe>
                    <h4>Look Through Exposures - Earnings Growth vs Earnings Yield (Dot size = Portfolio Weight; Dot Colour = Industry)</h4><iframe src="./Charts/3a_Equity_Financial_Ratios_4.html" height="650px" width="950px"></iframe>
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
                    <h4>Individual Returns of Underlying Manager/Security Holdings</h4>
                    <iframe src="./Charts/6_IntEq_Sleeve_Components.html" height="380px" width="950px"></iframe>
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
                    
        <h2>GLOSSARY</h2>
        <h3>Performance Analysis</h3>
        <ul>
            <li>Portfolio Performance is calculated gross of any fees charged by the appointed portfolio manager and net of all underlying ICRs (Indirect Costs Ratios). An underlying ICR relates to the fees charged by individual underlying investments, such as managed funds or Exchange Traded Funds (ETFs), selected by the portfolio manager. The aggregate ICR of the portfolio will vary over time as a result of portfolio changes, as well as other factors, such as the underlying fund manager triggering a performance fee if relevant.</li>
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
            <li>Volatility is a historical statistical measure of a dispersion of returns of a managed portfolio or benchmark.  A higher volatility means that a managed portfolio\'s value can move dramatically over a shorter period-of-time, in either direction i.e. up or down. A lower volatility means that a managed portfolio\'s value does not fluctuate dramatically, and returns tend to be steadier</li>
            <li>Max Drawdown is a historical measure of a managed portfolio\'s maximum loss in a peak-to-trough decline before a new peak is attained. It is an indicator of downside risk over a specified time of period.</li>
            <li>Sharpe Ratio is a measure of a managed portfolio\'s risk-adjusted returns. Calculated by dividing a portfolio's excess returns (being above an industry benchmark e.g. risk-free asset such as cash return) by its volatility to assess risk- adjusted performance. Higher the Sharpe Ratio the better a portfolio's historical risk-adjusted performance.</li>
            <li>Calmar Ratio is a measure a portfolio\'s investment efficiency on a risk-adjusted basis. It is calculated by dividing the investment\'s annual return (typically over three years) by its maximum drawdown, reflecting performance versus potential losses. The lower the Calmar Ratio, the worse the performance of the portfolio, the higher the Calmar ratio, the better the performance, relative to the risk taken</li>
            <li>Information Ratio quantifies the excess managed portfolio returns over the returns of the market benchmark, relative to the volatility of the returns. An Information Ratio of 0.4 or above is considered good, 0.70 or above is very good, and 1.0 or higher is exceptional.</li>
            <li>Tracking Error is a measure of how closely a portfolio follows an index to which it is benchmarked. The risk, relative to the benchmark, is the tracking error.  A benchmark unaware approach will tend to have a high Tracking Error, and high volatility and inconsistency in portfolio returns exceeding the index.  A low tracking can have the opposite effect on a portfolio</li>
            <li>Batting Average is a measure of a portfolio manager\'s ability to consistently beat the market benchmark. A portfolio manager who meets or outperforms the benchmark every month over a given period would have a batting average of 100.</li>
            <li>Inflation Sensitivity (Monthly Returns) measures the sensitivity of the total portfolio monthly returns to inflation, inflation and returns are negatively correlated</li>
            <li>ASX Market Sensitivity (Monthly Returns) measures the sensitivity of the total portfolio monthly returns to ASX, Australian share market and total portfolio returns are positively correlated.</li>
            <li>US Market Sensitivity (Monthly Returns) measures the sensitivity of the total portfolio monthly returns to US market, US share market and total portfolio returns are positively correlated. </li>    
            <li>Drawdown Periods & Recovery measures the total portfolio peak to trough decline over the period compared to the SAA benchmark and Peer Group and the time taken to recover.</li>
        </ul>
        <br>
        <div class="page-break"></div>
    
                    <h1>Need Help? Contact Us:</h1>
                    <p>Atchison Consultants</p>
                    <p>+61 3 9642 3835</p>
                    <p>kev@atchison.com.au</p>
                    <br>
                    
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
      <td>BM_AusShares</td>
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
      <td>20% AMI Property - Australia Direct + 25% iShares Australian Listed Property ETF + 30% BlackRock iShares Global Listed Property Index (hedged) + 25% Vanguard Global Infrastructure Index ETF</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Alternatives</td>
      <td>BM_Alts</td>
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
      <td>BM_Floating</td>
      <td>100% VanEck Australian Floating Rate ETF</td>
    </tr>
    <tr>
      <th>6</th>
      <td>Cash</td>
      <td>BM_Cash</td>
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
                    <h1>Atchison Active International Shares SMA</h1>
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
    