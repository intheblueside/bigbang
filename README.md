# Big Bang Prediction Script

Problem:
There was a tale when 2 prime numbers collided and a big bang happened. Scientists found out the 2 prime numbers are 3 and 5 but they need a model to generate an array of numbers to predict when the big bang will happen again.

The script generates an array of numbers from 1 to 100 based on the following rules:
- Replace numbers divisible by **3** with **"BIG"**
- Replace numbers divisible by **5** with **"BANG"**
- Replace numbers divisible by **both 3 and 5** with **"BIG BANG"**
- All other numbers remain

The result is written to an `output.json` file.

---

## Files Included
- `bigbang.js` – The main script
- `output.json` – The generated output file
- `README.md` – Instructions

---

##  How to Run the Script

### Prerequisites:
- Node.js must be installed. You can download it [here](https://nodejs.org/).

To check if Node.js is installed, run:
```bash
node -v

### Steps:
1. Clone or download this repository to your local machine.

2. Open your terminal and navigate to the project folder: cd path/to/project/folder

3. Run the script: node bigbang.js

4. If successful, you will see: output.json written

5. Check the project folder. You will find a new file named output.json containing the result. 
