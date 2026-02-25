// api/engine.js
export default function handler(req, res) {
    // Grab the script from your Vercel Environment Variables
    const coreScript = process.env.CORE_ENGINE_SCRIPT || "console.error('DG Engine failed to load.');";

    // Tell the browser this is a JavaScript file, not plain text
    res.setHeader('Content-Type', 'application/javascript');
    
    // Optional: Cache it so it loads lightning fast
    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
    
    // Send the script to the user's browser
    res.status(200).send(coreScript);
}
