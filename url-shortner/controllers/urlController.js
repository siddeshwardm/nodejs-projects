const urls = require("../models/urlStore");
const generateShortCode = require("../utils/generateCode");


// CREATE SHORT URL
exports.createShortUrl = (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: "URL is required" });
    }

    const shortCode = generateShortCode();

    const newUrl = {
        id: urls.length + 1,
        url,
        shortCode,
        createdAt: new Date(),
        updatedAt: new Date(),
        accessCount: 0
    };

    urls.push(newUrl);

    res.status(201).json(newUrl);
};


// GET ORIGINAL URL
exports.getUrl = (req, res) => {
    const { shortCode } = req.params;

    const found = urls.find(u => u.shortCode === shortCode);

    if (!found) {
        return res.status(404).json({ error: "Short URL not found" });
    }

    found.accessCount++;

    res.status(200).json(found);
};


// UPDATE URL
exports.updateUrl = (req, res) => {
    const { shortCode } = req.params;
    const { url } = req.body;

    const found = urls.find(u => u.shortCode === shortCode);

    if (!found) {
        return res.status(404).json({ error: "Short URL not found" });
    }

    if (!url) {
        return res.status(400).json({ error: "URL is required" });
    }

    found.url = url;
    found.updatedAt = new Date();

    res.status(200).json(found);
};


// DELETE URL
exports.deleteUrl = (req, res) => {
    const { shortCode } = req.params;

    const index = urls.findIndex(u => u.shortCode === shortCode);

    if (index === -1) {
        return res.status(404).json({ error: "Short URL not found" });
    }

    urls.splice(index, 1);

    res.status(204).send();
};


// URL STATS
exports.getStats = (req, res) => {
    const { shortCode } = req.params;

    const found = urls.find(u => u.shortCode === shortCode);

    if (!found) {
        return res.status(404).json({ error: "Short URL not found" });
    }

    res.status(200).json({
        id: found.id,
        url: found.url,
        shortCode: found.shortCode,
        createdAt: found.createdAt,
        updatedAt: found.updatedAt,
        accessCount: found.accessCount
    });
};