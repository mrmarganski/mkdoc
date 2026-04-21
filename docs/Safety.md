# 🛡️ Team 2064 Safety Manual
> **Safety is not a goal; it is a requirement.** Whether you are a rookie or a veteran, this page is your guide to ensuring everyone goes home with ten fingers and ten toes.

---

## 🚩 The "Big Three" Rules
Before touching a tool, these three things must be true:

1. **Eye Protection:** Safety glasses ON the moment you enter the shop. 
2. **Proper Attire:** No loose clothing, no jewelry, and **closed-toe shoes only**.
3. **Hair Tied Back:** Long hair must be secured to prevent entanglement in rotating machinery.

---

## 🛠️ Shop-Specific Safety
Use the tabs below to review safety protocols for different areas of our workspace.

=== "General Hand Tools"
    * **Cutting:** Always cut *away* from your body.
    * **Sharpness:** A dull tool is more dangerous than a sharp one because it requires more force.
    * **Storage:** Return tools to their designated shadows in the closet when finished.

=== "Machine Tools"
    !!! danger "Machine Training Required"
        You are **NOT** permitted to operate the Bandsaw, Lathe, or CNC Router without a signature from Mr. Marganski.

    * **Bandsaw:** Keep fingers at least 3 inches from the blade. Use a push stick for small pieces.
    * **CNC Router:** Never leave the machine unattended while it is running. Ensure the vacuum system is active.
    * **Grinders:** Always use face shields in addition to safety glasses.

=== "Battery & Electrical"
    * **Leaking Batteries:** If a battery is cracked or leaking, notify a mentor immediately. Use the "Battery Spill Kit" (Baking Soda).
    * **Charging:** Only charge batteries on the designated fire-resistant shelf.
    * **Wiring:** Ensure all FRC robot wiring is insulated. Never "hot-wire" a motor directly to a battery without a breaker.

---

## 📢 Emergency Procedures

| Situation | Action to Take |
| :--- | :--- |
| **Minor Cut** | Clean with antiseptic, apply bandage, and log in the First Aid kit. |
| **Eye Injury** | Use the Eye Wash Station for 15 minutes. Notify a mentor. |
| **Fire** | Shout "FIRE!", evacuate the room, and pull the alarm. |
| **Battery Leak** | Neutralize with baking soda. Do not touch with bare hands. |

---

## 🧠 Safety Certification Quiz
*Test your knowledge below. Select your answers, then click the "Check Results" button.*

<div id="quiz-container" style="background: #2e303e; padding: 20px; border-radius: 10px; border: 1px solid #ff1744;">
    
    <div class="question">
        <p><strong>1. What is the minimum distance your fingers should be from a Bandsaw blade?</strong></p>
        <input type="radio" name="q1" value="0"> 1 inch <br>
        <input type="radio" name="q1" value="1"> 3 inches <br>
        <input type="radio" name="q1" value="0"> 10 inches
    </div>

    <hr>

    <div class="question">
        <p><strong>2. What should you do if an FRC battery is dropped and begins to leak?</strong></p>
        <input type="radio" name="q2" value="0"> Wipe it up with a paper towel <br>
        <input type="radio" name="q2" value="1"> Notify a mentor and use baking soda <br>
        <input type="radio" name="q2" value="0"> Put it in the trash immediately
    </div>

    <hr>

    <div class="question">
        <p><strong>3. When are safety glasses required in the shop?</strong></p>
        <input type="radio" name="q3" value="0"> Only when using power tools <br>
        <input type="radio" name="q3" value="1"> At all times <br>
        <input type="radio" name="q3" value="0"> Only during competition
    </div>

    <br>
    <button onclick="calculateScore()" style="background: #ff1744; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">Check Results</button>
    
    <p id="result-display" style="margin-top: 15px; font-weight: bold; font-size: 1.2em;"></p>
</div>

<script>
function calculateScore() {
    let score = 0;
    let total = 3;
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');

    if (q1 && q1.value == "1") score++;
    if (q2 && q2.value == "1") score++;
    if (q3 && q3.value == "1") score++;

    const display = document.getElementById('result-display');
    display.innerHTML = "Your Score: " + score + "/" + total;
    
    if (score === total) {
        display.style.color = "#4caf50";
        display.innerHTML += " - You're Safety Certified! ✅";
    } else {
        display.style.color = "#ff9100";
        display.innerHTML += " - Please review the manual and try again. ❌";
    }
}
</script>
