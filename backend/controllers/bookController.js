const supabase = require("../config/supabaseClient");

const getBooks = async (req, res) => {

  const { data, error } = await supabase
    .from("books")
    .select("*");

  if (error) {
    return res.status(500).json({
      error: error.message,
    });
  }

  res.json(data);
};

const getBookById = async (req, res) => {

  const { id } = req.params;

  const { data, error } = await supabase
    .from("books")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return res.status(500).json({
      error: error.message,
    });
  }

  res.json(data);
};

module.exports = {
  getBooks,
  getBookById,
};