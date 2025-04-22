# 🔮 Magical Numbers

Magical Numbers is an interactive web application built with **Angular** and **TypeScript** that classifies any input number based on two key mathematical properties:

- **Primality** → Prime or Super Prime
- **Parity** → Odd, Even, Super Odd, or Super Even

---

## 📌 Features

- Check whether a number is **Prime** or **Super Prime**
- Determine if a number is **Odd**, **Even**, **Super Odd**, or **Super Even**
- Real-time number classification
- Clean and responsive Angular UI
- Modular and reusable logic in TypeScript

---

## 🧠 How It Works

### 🔹 Primality Check
- **Super Prime**: 
  - The number is a **prime**, and 
  - The **sum of its digits** is also **prime**  
  - ✅ Example: `23` → Prime, 2 + 3 = 5 → Prime → ✔️ Super Prime  
  - ❌ Example: `13` → Prime, 1 + 3 = 4 → Not Prime → Prime

- **Prime**:
  - A number that has only two factors (1 and itself), but doesn't qualify as Super Prime.

- **Not a Prime**:
  - Number is not prime at all.  
  - Example: `20` → Not Prime

---

### 🔹 Parity Check
- **Super Odd**:
  - Number is **odd**, and  
  - The **sum of its digits** is also **odd**  
  - ✅ Example: `25` → Odd, 2 + 5 = 7 → Odd → ✔️ Super Odd  
  - ❌ Example: `35` → Odd, 3 + 5 = 8 → Even → Odd

- **Super Even**:
  - Number is **even**, and  
  - The **sum of its digits** is also **even**  
  - ✅ Example: `42` → Even, 4 + 2 = 6 → Even → ✔️ Super Even  
  - ❌ Example: `34` → Even, 3 + 4 = 7 → Odd → Even

- **Odd**:
  - Not divisible by 2

- **Even**:
  - Divisible by 2

---

## 🛠️ Tech Stack

- **Framework**: Angular
- **Language**: TypeScript
- **Styling**: SCSS / CSS
- **Architecture**: Component-based with Service logic for number classification

---

## 🚀 How to Run

```bash
# Clone the repository
git clone https://github.com/your-username/magical-numbers.git

# Navigate into the project folder
cd magical-numbers

# Install dependencies
npm install

# Run the app locally
ng serve
