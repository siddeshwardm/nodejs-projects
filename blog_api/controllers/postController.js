const db = require("../config/db");


// CREATE POST
exports.createPost = (req, res) => {
    const { title, content, category } = req.body;

    if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required" });
    }

    const sql = "INSERT INTO posts (title, content, category) VALUES (?, ?, ?)";

    db.query(sql, [title, content, category], (err, result) => {
        if (err) return res.status(500).json(err);

        res.status(201).json({
            id: result.insertId,
            title,
            content,
            category
        });
    });
};



// GET ALL POSTS + SEARCH
exports.getPosts = (req, res) => {
    const term = req.query.term;

    let sql = "SELECT * FROM posts";

    if (term) {
        sql += ` WHERE title LIKE ? OR content LIKE ? OR category LIKE ?`;
        const search = `%${term}%`;

        db.query(sql, [search, search, search], (err, result) => {
            if (err) return res.status(500).json(err);

            res.status(200).json(result);
        });

    } else {

        db.query(sql, (err, result) => {
            if (err) return res.status(500).json(err);

            res.status(200).json(result);
        });

    }
};



// GET SINGLE POST
exports.getPost = (req, res) => {
    const { id } = req.params;

    db.query("SELECT * FROM posts WHERE id=?", [id], (err, result) => {

        if (err) return res.status(500).json(err);

        if (result.length === 0) {
            return res.status(404).json({ message: "Post not found" });
        }

        res.status(200).json(result[0]);
    });
};



// UPDATE POST
exports.updatePost = (req, res) => {
    const { id } = req.params;
    const { title, content, category } = req.body;

    if (!title || !content) {
        return res.status(400).json({ error: "Title and content required" });
    }

    const sql =
        "UPDATE posts SET title=?, content=?, category=? WHERE id=?";

    db.query(sql, [title, content, category, id], (err, result) => {

        if (err) return res.status(500).json(err);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Post not found" });
        }

        res.status(200).json({
            id,
            title,
            content,
            category
        });
    });
};



// DELETE POST
exports.deletePost = (req, res) => {
    const { id } = req.params;

    db.query("DELETE FROM posts WHERE id=?", [id], (err, result) => {

        if (err) return res.status(500).json(err);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Post not found" });
        }

        res.status(204).send();
    });
};