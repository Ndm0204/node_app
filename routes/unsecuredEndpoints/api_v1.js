const express = require('../../utils/express');

const router = express.Router();

router.get('/health', (req, res) => {
    res.json({ status: 'healthy' });
});

module.exports = router;