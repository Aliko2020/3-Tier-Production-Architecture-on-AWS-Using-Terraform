
import pool from "../config/db.js"; 

export const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const productId = req.body.productId || req.params.productId;
    const imageUrl = req.file.location;

    if (!productId) {
      return res.status(400).json({ error: "Product ID is required" });
    }

    const query = `
      INSERT INTO product_images (product_id, image_url, is_primary, created_at)
      VALUES ($1, $2, $3, NOW())
      RETURNING *;
    `;
    const values = [productId, imageUrl, false];

    const result = await pool.query(query, values);

    res.status(200).json({
      message: "File uploaded and saved to DB successfully",
      data: result.rows[0],
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to upload and save file" });
  }
};
