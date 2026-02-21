const https = require('https');

function fetchPageSpeed(strategy) {
    const url = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://ctr-supply-solutions.vercel.app/&strategy=${strategy}`;
    https.get(url, (resp) => {
        let data = '';
        resp.on('data', (chunk) => { data += chunk; });
        resp.on('end', () => {
            try {
                const parsed = JSON.parse(data);
                if (!parsed.lighthouseResult) {
                    console.log(`Failed to get lighthouseResult for ${strategy}`, parsed);
                    return;
                }
                const categories = parsed.lighthouseResult.categories;
                console.log(`\n=== ${strategy.toUpperCase()} SCORES ===`);
                console.log(`Performance: ${categories.performance?.score * 100}`);
                console.log(`Accessibility: ${categories.accessibility?.score * 100}`);
                console.log(`Best Practices: ${categories['best-practices']?.score * 100}`);
                console.log(`SEO: ${categories.seo?.score * 100}`);

                const audits = parsed.lighthouseResult.audits;
                const low = Object.values(audits)
                    .filter(a => a.score !== null && a.score < 1 && a.scoreDisplayMode === 'numeric')
                    .map(a => ({ title: a.title, score: a.score }));
                console.log(`\nLow Audits for ${strategy}:`);
                console.table(low);

                // Print diagnostics and errors
                if (audits['errors-in-console']?.score < 1) {
                    console.log('Console Errors:', audits['errors-in-console'].details?.items);
                }
                if (audits['deprecations']?.score < 1) {
                    console.log('Deprecations:', audits['deprecations'].details?.items);
                }
            } catch (err) {
                console.error('Error parsing JSON', err);
            }
        });
    }).on('error', (err) => {
        console.log('Error: ' + err.message);
    });
}

fetchPageSpeed('mobile');
fetchPageSpeed('desktop');
