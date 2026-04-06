# 🛠️ Stepcraft Q.408 CNC: Beginner's Guide
*A step-by-step tutorial for Full-Sheet Machining.*

!!! info "Target Audience"
    This tutorial is for students using the PHS Stepcraft Q.408. CNC machining is "subtractive"—errors can break expensive bits or the machine itself. **Always verify your toolpaths with an instructor before hitting Cycle Start.**

---

## 0. CAM & Post-Processing
Before heading to the machine, you must prepare your G-Code.

1. **Software:** Create your 3D model in Onshape or Fusion 360.
2. **Setup:** Set your **Work Home (WCS)**. For most PHS projects, this is the **Top-Left-Front** corner of the stock.
3. **Toolpaths:** Select appropriate bits (Endmills vs. V-Bits). 
4. **Post Process:** Use the [Stepcraft UCNC Post Processor](https://cam.autodesk.com/posts/download.php?name=stepcraft%20uccnc&type=post).
5. **Transfer:** Save the `.nc` or `.tap` file to a USB drive.

![Fusion 360 CAM Setup](img/placeholder-cam.png){: style="max-width:400px; display:block; margin: 20px auto; border: 2px solid #333; border-radius: 12px;" }
<p align="center">*Screencap of the WCS orientation and Post-Process menu.*</p>

---

## 1. Safety & Machine Inspection 🛡️
* [ ] **Safety Glasses:** Must be worn at all times while the spindle is powered.
* [ ] **Clear Path:** Ensure the 4'x8' gantry path is clear of bags, chairs, or people.
* [ ] **E-Stop Check:** Locate the physical E-Stop on the machine and the software stop.
* [ ] **Dust Collection:** Ensure the vacuum hose is connected and the blast gate is open.

---

## 2. Machine Startup & Homing
1. Turn on the main Stepcraft power switch.
2. Launch the **UCNC** software on the control PC.
3. Reset the E-Stop in the software (click the flashing "Reset" button).
4. Press **Home All**. The machine will move to its mechanical limits to find "Machine Zero."

!!! warning "Vacuum Table"
    If using the vacuum table, ensure the zones are correctly toggled for your material size to avoid losing suction.

---

## 3. Workholding (The GOAT Board)
How we hold the material down is critical for accuracy.

* **Vacuum Table:** Best for large sheets of plywood or plastic. 
* **GOAT Board:** Our custom fixturing system for smaller parts or aluminum.
* **Mechanical Clamps:** Use only if the toolpath stays at least 1" away from clamp locations.

![Workholding Setup](img/placeholder-workholding.png){: style="max-width:400px; display:block; margin: 20px auto; border: 2px solid #333; border-radius: 12px;" }
<p align="center">*Photo of the Vacuum Table zones or GOAT board setup.*</p>

---

## 4. Tooling & Bit Changes
1. Select the collet that matches your bit diameter (typically 1/4" or 1/8").
2. Clean the collet and nut of any dust.
3. Insert the bit so the flutes are NOT inside the collet (grip the shank only).
4. Tighten using the dual-wrench method. **Do not over-tighten.**

---

## 5. Setting Work Home (Zeroing)
You must tell the machine where your material is located.

1. **Jogging:** Use the pendant or keyboard to move the bit to your stock's **Top-Left Corner**.
2. **Zero X/Y:** Set these values to zero in UCNC.
3. **Zero Z:** Use the **Touch Plate** or the "Paper Method" to find the exact top of the material.
4. **Verification:** Jog the Z-axis up 10mm and move the head to ensure it aligns with your stock correctly.

---

## 6. Feed & Speed Reference
Stepcraft Q.408 handles aluminum and wood differently. Reference this table before running:

| Material | Tool | Spindle RPM | Feedrate (mm/min) | Max Depth (DOC) |
| :--- | :--- | :--- | :--- | :--- |
| Plywood | 1/4" Upcut | 18,000 | 2500 | 3.175mm (1/8") |
| Aluminum | 1/8" Single Flute | 20,000 | 600 | 0.5mm |
| Acrylic | 1/4" O-Flute | 15,000 | 1800 | 2.0mm |

---

## 7. Run the Operation 🚀
1. **Air Run:** (Optional but Recommended) Run the code 20mm above the material to check for errors.
2. **Vacuum/Pumps:** Ensure the vacuum table or clamps are secure.
3. **Dust Boot:** Lower the dust boot to the material surface.
4. **Start:** Click **Cycle Start**. Keep one hand near the E-Stop for the first 30 seconds.

!!! danger "Router Height Restrictions"
    Because this is a router and not a mill, the Z-height is limited. Ensure your retract height in Fusion 360 doesn't cause the gantry to "top out" or hit a clamp.

---

## 8. Cleanup & Teardown
* [ ] Wait for the spindle to come to a complete stop.
* [ ] Vacuum the entire 4'x8' bed—dust in the tracks causes mechanical wear.
* [ ] Remove the bit and return it to the proper storage slot.
* [ ] Power down the controller and PC.

---

## Operation Workflow
```mermaid
graph TD
    A[Onshape/Fusion Design] --> B[CAM Toolpaths]
    B --> C[Post Process to G-Code]
    C --> D[Home Machine & Set Work Zero]
    D --> E[Secure Workholding/Vacuum]
    E --> F[Run Air Test]
    F --> G[Execute Cut]
    G --> H[Cleanup]
