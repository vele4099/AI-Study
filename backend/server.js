const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Placeholder for future API routes
// app.use("/api/tutors", require("./routes/tutors"));
// app.use("/api/assignments", require("./routes/assignments"));
// app.use("/api/tools", require("./routes/tools"));

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
