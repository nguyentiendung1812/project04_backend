const { poolPromise } = require("../utils/db");

module.exports = {
    index: async (req, res) => {
        try {
            const pool = await poolPromise;
            const result = await pool.request().query('SELECT * FROM account');
            console.log(result); // Hiển thị kết quả truy vấn trong console

            // Điều hướng đến view hoặc trả về JSON response tùy theo nhu cầu của bạn
            res.render("user/index"); // Ví dụ điều hướng đến view 'user/index'
        } catch (err) {
            console.error('SQL error:', err);
            res.status(500).json({ error: 'Database error' });
        }
    }
};
