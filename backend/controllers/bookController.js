const supabase = require("../config/supabaseClient");

// GET ALL BOOKS
const getBooks = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("books")
      .select("*");

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// GET BOOK BY ID
const getBookById = async (req, res) => {
  try {
    const id = req.params.id;

    const { data, error } = await supabase
      .from("books")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      return res.status(404).json({
        error: "Book not found or invalid ID"
      });
    }

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getBooks,
  getBookById,
};