const express = require('express');
const { updateDetails } = require('../db/db_config');
const router = express.Router();

router.post('/kyc', (req, res) => {
    const { username, gender, aadhar_number, pan_number, address } = req.body;

    updateDetails(username, gender, aadhar_number, pan_number, address);
    res.status(200).send("Accepted!");
});

module.exports = router;