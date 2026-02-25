// api/main.js
export default function handler(req, res) {
    // Grabs the script for your personal pages from Vercel
    const mainScript = process.env.MAIN_ENGINE_SCRIPT || "console.error('DG Main Engine failed to load.');";

    res.setHeader('Content-Type', 'application/javascript');
    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
    
    res.status(200).send(mainScript);
}
