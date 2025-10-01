# ⏰ TimeSync

**TimeSync** is a lightweight TypeScript + JavaScript utility that displays the current local and UTC time in the terminal. Designed for clarity, speed, and modularity — no CRUD, no clutter.
---

## 📦 Features

- Local time display based on system settings
- UTC time display for global reference
- Clean modular structure with TypeScript and JSON
- No delete/update logic — pure read-only utility
- Ready for GitHub presentation and terminal execution
---

## 🚀 Quick Start

```bash
# Compile TypeScript files
tsc

# Run the project
node dist/index.js
```

🖥️ Sample Output
```bash
$ node dist/index.js
📍 Project: TimeSync
🕒 Local Time: 01.10.2025, 18:18:26
🌐 UTC Time: Wed, 01 Oct 2025 14:18:26 GMT
```

📁 Project Structure
```Code
timesync/
├── src/
│   ├── index.ts         # Main entry point
│   ├── utils.ts         # Time functions
│   └── config.json      # Project metadata
├── public/
│   └── index.js         # Frontend placeholder
├── tsconfig.json        # TypeScript configuration
└── README.md            # Documentation
```

🧠 Philosophy
TimeSync is built for developers who value simplicity, modularity, and clean output.
It’s ideal for showcasing TypeScript setup, JSON imports, and
terminal-based utilities without unnecessary complexity.

📜 License
This project is licensed under the MIT License. See LICENSE for details.
