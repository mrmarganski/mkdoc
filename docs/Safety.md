# 🛡️ Safety & Certification
> **The Panther Project Standard:** We don't just build robots; we build a safe professional environment. This page covers the essential protocols for FRC Team 2064.

---

## 🚩 The "Big Three" Rules
!!! warning "Before You Start"
    - **Safety Glasses:** Must be worn at all times in the shop.
    - **Proper Shoes:** Closed-toe shoes only. No Crocs or sandals.
    - **Safe Hair/Clothes:** Long hair tied back, no dangling hoodie strings or jewelry.

---

## 🛠️ Shop-Specific Safety
*Review the rules below before proceeding to the certification test.*

### 🪚 Machine Tools
!!! danger "Training Required"
    You are **NOT** permitted to operate these machines without a signature from **Mr. Marganski**.

* **Bandsaw:** Keep fingers at least 3" from the blade. Clear scrap only when the blade is completely stopped.
* **CNC Router:** Never leave the machine unattended. Ensure the sound enclosure is closed.
* **Lathe:** **NO GLOVES.** Gloves can get caught in the rotating spindle. Always remove the chuck key immediately.

### 🔌 Battery & Electrical
!!! info "Battery Safety"
    * **Leaking Batteries:** Notify a mentor immediately. Use the **Baking Soda** kit to neutralize the acid.
    * **Charging:** Use the fire-resistant shelf only.
    * **Wiring:** All robot wiring must be properly insulated and crimped to prevent shorts.

### 🔧 General Hand Tools
* **Cutting:** Always cut **away** from your body.
* **Storage:** We use the Closet Organization Method. Return tools to their "shadows" when finished.

---

## 🧠 Safety Certification Test
*Complete this test on your phone or Chromebook. You must score 100% to enter the shop.*

<div style="background: var(--md-default-bg-color); border: 2px solid var(--md-primary-fg-color); border-radius: 8px; padding: 20px; margin-top: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
  <form id="safetyTest">
    
    <fieldset style="border: none; padding: 0; margin-bottom: 20px;">
      <legend style="font-weight: bold; font-size: 1.1em; margin-bottom: 10px; color: var(--md-typeset-color);">1. What is the rule for scrap removal on the bandsaw?</legend>
      <label style="display: block; padding: 15px; background: var(--md-code-bg-color); margin-bottom: 8px; border-radius: 6px; cursor: pointer; border: 1px solid var(--md-default-fg-color--lightest);">
        <input type="radio" name="q1" value="0" style="margin-right: 10px; transform: scale(1.2);"> Use your fingers while it's cutting
      </label>
      <label style="display: block; padding: 15px; background: var(--md-code-bg-color); margin-bottom: 8px; border-radius: 6px; cursor: pointer; border: 1px solid var(--md-default-fg-color--lightest);">
        <input type="radio" name="q1" value="1" style="margin-right: 10px; transform: scale(1.2);"> Wait until the blade completely stops
      </label>
    </fieldset>

    <fieldset style="border: none; padding: 0; margin-bottom: 20px;">
      <legend style="font-weight: bold; font-size: 1.1em; margin-bottom: 10px; color: var(--md-typeset-color);">2. Which item is strictly FORBIDDEN when operating the Lathe?</legend>
      <label style="display: block; padding: 15px; background: var(--md-code-bg-color); margin-bottom: 8px; border-radius: 6px; cursor: pointer; border: 1px solid var(--md-default-fg-color--lightest);">
        <input type="radio" name="q2" value="1" style="margin-right: 10px; transform: scale(1.2);"> Gloves
      </label>
      <label style="display: block; padding: 15px; background: var(--md-code-bg-color); margin-bottom: 8px; border-radius: 6px; cursor: pointer; border: 1px solid var(--md-default-fg-color--lightest);">
        <input type="radio" name="q2" value="0" style="margin-right: 10px; transform: scale(1.2);"> Safety Glasses
      </label>
    </fieldset>

    <fieldset style="border: none; padding: 0; margin-bottom: 25px;">
      <legend style="font-weight: bold; font-size: 1.1em; margin-bottom: 10px; color: var(--md-typeset-color);">3. What do you use to neutralize a leaking lead-acid battery?</legend>
      <label style="display: block; padding: 15px; background: var(--md-code-bg-color); margin-bottom: 8px; border-radius: 6px; cursor: pointer; border: 1px solid var(--md-default-fg-color--lightest);">
        <input type="radio" name="q3" value="0" style="margin-right: 10px; transform: scale(1.2);"> Water and paper towels
      </label>
      <label style="display: block; padding: 15px; background: var(--md-code-bg-color); margin-bottom: 8px; border-radius: 6px; cursor: pointer; border: 1px solid var(--md-default-fg-color--lightest);">
        <input type="radio" name="q3" value="1" style="margin-right: 10px; transform: scale(1.2);"> Baking Soda
      </label>
    </fieldset>

    <button type="button" onclick="gradeTest()" style="width: 100%; padding: 16px; background: var(--md-primary-fg-color); color: var(--md-primary-bg-color); border: none; border-radius: 6px; font-weight: bold; font-size: 1.2em; cursor: pointer; text-transform: uppercase;">Submit Test</button>
  </form>
  
  <div id="quizResult" style="margin-top: 20px; padding: 15px; font-weight: bold; text-align: center; font-size: 1.2em; border-radius: 6px; display: none;"></div>
</div>

<script>
function gradeTest() {
    let score = 0;
    const total = 3;
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const resultDiv = document.getElementById('quizResult');

    // Make sure they answered everything
    if (!q1 || !q2 || !q3) {
        resultDiv.style.display = "block";
        resultDiv.style.backgroundColor = "var(--md-admonition-bg-color)";
        resultDiv.style.color = "var(--md-typeset-color)";
        resultDiv.style.border = "2px solid #ff9800";
        resultDiv.innerHTML = "⚠️ Please answer all questions before submitting.";
        return;
    }

    if (q1.value === "1") score++;
    if (q2.value === "1") score++;
    if (q3.value === "1") score++;

    resultDiv.style.display = "block";
    
    if (score === total) {
        resultDiv.style.backgroundColor = "rgba(76, 175, 80, 0.1)";
        resultDiv.style.color = "#4caf50";
        resultDiv.style.border = "2px solid #4caf50";
        resultDiv.innerHTML = "✅ SCORE: 3/3 <br><span style='font-size: 0.85em; font-weight: normal;'>You are certified! Show this screen to Mr. Marganski.</span>";
    } else {
        resultDiv.style.backgroundColor = "rgba(244, 67, 54, 0.1)";
        resultDiv.style.color = "#f44336";
        resultDiv.style.border = "2px solid #f44336";
        resultDiv.innerHTML = "❌ SCORE: " + score + "/3 <br><span style='font-size: 0.85em; font-weight: normal;'>Please review the safety rules above and try again.</span>";
    }
}
</script>
