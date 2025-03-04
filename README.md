# 🎲 Dice Game Backend

A **Node.js/Express** backend for a **provably fair** dice game.  
This API provides a secure and transparent dice roll mechanism using **SHA-256 hashing**.  

---

## 🚀 Features

✅ **Random Dice Roll (1-6) via API**  
✅ **Provably Fair System (SHA-256 Hashing)**  
✅ **Player Balance Management** (Deduct Bet, Add Winnings)  
✅ **Web3 Integration (Bonus, Optional)**  
✅ **Supports Crypto Wallet Balance (Simulated via Web3.js/Ethers.js)**  
✅ **LocalStorage Balance Storage (if no blockchain)**  

---

## 📌 API Endpoints

### 🎲 **Roll Dice**
- **Endpoint:** `POST /roll-dice`  
- **Description:** Simulates rolling a 6-sided dice. Deducts the bet amount and updates the player's balance based on the result.
- **Request Body:**  

  ```json
  {
    "betAmount": 10,
    "walletBalance": 100
  }
  ```
- **Response Body:**
 ```json
 {
  "roll": 4,
  "newBalance": 110,
  "hash": "3a7bd3e2360a3c..."
 } 
```
🛠️ Setup & Installation
1️⃣ Clone the Repository : git clone https://github.com/yourusername/dice-game-backend.git
                          cd dice-game-backend
2️⃣ Install Dependencies : npm install

3️⃣ Run the Server
Development Mode : npm run dev

Production Mode : npm run build && npm start

🌍 Deployment on Render

Push the code to GitHub.

Create a new Web Service on Render.

Set Build Command: npm install && npm run build
Set Start Command: npm start

Deploy and get the Live API URL!
🔗 Web3 Integration (Bonus)
Uses Web3.js / Ethers.js to simulate a crypto wallet balance.
Stores player balance in localStorage if blockchain is not available.
🛡️ Provably Fair System
Uses SHA-256 hashing to ensure fairness.
Players can verify results by comparing the generated hash with expected outcomes.

🎯 Future Improvements
✅ Integrate smart contracts for on-chain balance storage.
✅ Implement MetaMask login for real blockchain transactions.
✅ Add leaderboards and reward systems.

🤝 Contributing
Fork this repository.
Create a new branch (feature-name).
Commit your changes.
Push and open a Pull Request.

📜 License
This project is licensed under MIT License.

💡 Enjoy the game and may the dice roll in your favor! 🎲🚀
