const fs = require("fs");
const path = require("path");

const generateRobots = () => {
    const robotsContent =
`User-agent: *
Disallow: /secret-page`;
    fs.writeFileSync(path.resolve("./public/robots.txt"), robotsContent.trim());
}

generateRobots();
