const express = require('express');
const sampQuery = require('samp-query');

const app = express();

// เส้นทางสำหรับแสดงข้อมูลสถานะเซิฟเวอร์
app.get('/server-status', async (req, res) => {
    try {
        const { hostname, port } = req.query; // รับพารามิเตอร์ hostname และ port จาก URL
        const serverInfo = await sampQuery({
            host: hostname,
            port: port
        });

        // ส่งข้อมูลสถานะเซิฟเวอร์กลับไปยังเว็บไซต์
        res.json(serverInfo);
    } catch (error) {
        console.error('Error fetching server status:', error);
        res.status(500).send('Error fetching server status');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
