# 🛡️ Safety & Certification
> **The Panther Project Standard:** We don't just build robots; we build a safe professional environment. This page covers the essential protocols for FRC Team 2064.

---

## 🚩 The "Big Three" Non-Negotiables
Before you step onto the shop floor, ensure you meet these requirements. Failure to follow these results in immediate loss of shop privileges.

<div class="grid cards" markdown>

-   :material-eye-check: **Eye Protection**
    ---
    Safety glasses must be worn **at all times** in the shop. No exceptions for "just watching."
-   :material-shoe-print: **Footwear**
    ---
    Closed-toe shoes only. Crocs, sandals, or mesh sneakers are not permitted near heavy machinery.
-   :material-content-cut: **Entanglement**
    ---
    Long hair must be tied back. Hoodies with strings must be tucked in or removed. No dangling jewelry.

</div>

---

## 🛠️ Shop-Specific Safety
*Select a zone below to review its specific safety requirements.*

=== "🪚 Machine Tools"
    !!! danger "Machine Training Required"
        You are **NOT** permitted to operate the Bandsaw, Lathe, or CNC Router without a signature from **Mr. Marganski**. 

    <div class="grid cards" markdown>
    -   **Bandsaw**
        ---
        * Keep fingers at least 3" from the blade.
        * Use a push stick for small workpieces.
        * Clear scrap only when the blade has **completely stopped**.
    -   **CNC Router (Stepcraft)**
        ---
        * Never leave the machine unattended while running.
        * Ensure the soundproofing enclosure is closed.
        * Double-check material clamping before hitting 'Start'.
    -   **Lathe & Milling**
        ---
        * **NO GLOVES.** Gloves can get caught in rotating spindles.
        * Always use a face shield for chip-heavy operations.
        * Remove the chuck key immediately after use.
    </div>

=== "🔌 Battery & Electrical"
    !!! info "Battery Handling"
        Our 12V SLA batteries are capable of dumping hundreds of amps. Treat them with respect.

    * **Leaking Batteries:** If a battery is dropped and cracks, notify a mentor. Use the **Baking Soda** kit to neutralize the acid.
    * **Charging:** Use only the designated charging station. If a battery feels excessively hot, unplug it.
    * **Wiring:** All custom wiring for the XRP or FRC robot must be crimped or soldered properly to prevent shorts.

=== "🔧 General Hand Tools"
    * **The "Away" Rule:** Always cut or chisel *away* from your body and others.
    * **Sharpness:** Keep tools sharp. A dull blade requires more force, which leads to slips and accidents.
    * **Shadow Board:** We use the **Closet Organization Method**. If a tool isn't in your hand, it should be in its "shadow" in the closet.

---

## 🧠 Safety Knowledge Check
*Take this quiz to verify your understanding. You must score 3/3 to be shop-ready.*

<div id="quiz-container" style="background: #1e1e2e; padding: 25px; border-radius: 15px; border: 2px solid #ff1744; margin-top: 20px;">
    
    <div class="question">
        <p style="color: #ff1744; font-weight: bold;">1. What is the protocol for scrap removal on the bandsaw?</p>
        <input type="radio" name="q1" value="0"> Use your fingers while it's cutting <br>
        <input type="radio" name="q1" value="0"> Use a brush while it's spinning <br>
        <input type="radio" name="q1" value="1"> Wait until the blade has completely stopped <br>
    </div>

    <hr style="opacity: 0.2; margin: 20px 0;">

    <div class="question">
        <p style="color: #ff1744; font-weight: bold;">2. Which item is strictly FORBIDDEN when operating the Lathe?</p>
        <input type="radio" name="q2" value="1"> Gloves <br>
        <input type="radio" name="q2" value="0"> Safety Glasses <br>
        <input type="radio" name="q2" value="0"> Short Sleeves <br>
    </div>

    <hr style="opacity: 0.2; margin: 20px 0;">

    <div class="question">
        <p style="color: #ff1744; font-weight: bold;">3. What do you use to neutralize a leaking lead-acid battery?</p>
        <input type="radio" name="q3" value="0"> Water <br>
        <input type="radio" name="q3" value="1"> Baking Soda <br>
        <input type="radio" name="q3" value="0"> Paper Towels <br>
    </div>

    <br>
    <button onclick="calculateScore()" style="background: #ff1744; color: white; border: none; padding: 12px 25px; border-radius: 8px; cursor: pointer; font-weight: bold; width: 100%;">SUBMIT FOR CERTIFICATION</button>
    
    <p id="result-display" style="margin-top: 20px; font-weight: bold; font-size: 1.3em; text-align: center;"></p>
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
    
    if (score === total) {
        display.style.color = "#4caf50";
        display.innerHTML = "SCORE: " + score + "/" + total + " - CERTIFIED ✅<br><span style='font-size: 0.8em;'>See Mr. Marganski for your shop badge.</span>";
    } else {
        display.style.color = "#ff9100";
        display.innerHTML = "SCORE: " + score + "/" + total + " - REVIEW REQUIRED ❌<br><span style='font-size: 0.8em;'>Check the tabs above and try again.</span>";
    }
}
</script>
