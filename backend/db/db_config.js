require("dotenv").config();
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);


async function updateDetails(username, gender, aadhar, pan, address) {
    const { error } = await supabase
        .from('kyc-info')
        .insert({
            customer_name: username,
            gender: gender,
            aadhar_no: aadhar,
            pan_no: pan,
            address: address
        });
}

module.exports = { updateDetails }
