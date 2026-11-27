
const fs = require("fs");
const assert = require("assert");

const html = fs.readFileSync("index.html", "utf8");

// Test 1: Check page title
assert.ok(html.includes("<title>Campus News</title>"));

// Test 2: Check main heading
assert.ok(html.includes("<h1>Campus News Portal</h1>"));

// Test 3: Check campus news
assert.ok(html.includes("Annual Technical Fest"));
assert.ok(html.includes("Sports Day Announcement"));
assert.ok(html.includes("Academic Announcement"));
assert.ok(html.includes("Cultural Fest"));
assert.ok(html.includes("Student Achievement"));
assert.ok(html.includes("Campus Placement Drive"));

console.log("All automated tests passed!");
