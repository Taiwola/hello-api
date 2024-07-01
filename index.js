const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/hello', async (req, res) => {
    const visitorName = req.query.visitor_name;
    const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;


    const location = 'New York';
    const temperature = 11;

    const greeting = `Hello, ${visitorName}!, the temperature is ${temperature} degrees Celcius in ${location}`;

    res.json({
        client_ip: clientIp,
        location: location,
        greeting: greeting
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
