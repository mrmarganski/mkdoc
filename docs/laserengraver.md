# 🛠️ Laser Engraver: Beginner's Guide
*A step-by-step tutorial from Zero to Laser.*

!!! info "Target Audience"
    This tutorial is designed for students. Follow each step in order. If you are unsure about a setting, **ASK** before pressing Start.

---

## 1. Safety First 🛡️
Before you even turn the machine on, perform these checks:

* [ ] **Safety Glasses:** Wear the appropriate wavelength goggles for this laser.
* [ ] **Exhaust System:** Ensure the vent fan is ON and clear of obstructions.
* [ ] **Fire Extinguisher:** Locate the nearest extinguisher.
* [ ] **Workspace:** Ensure no flammable scraps are sitting on the honeycomb bed.

---

## 2. Machine Startup
Follow this specific power-on sequence:

1. Turn on the main power switch.
2. Unlock the Emergency Stop (E-Stop) if depressed.
3. Wait for the laser head to "Home" (move to the corner).

![Machine Startup Placement](img/placeholder-startup.png){: style="max-width:400px; display:block; margin: 20px auto; border: 2px solid #333; border-radius: 12px;" }
<p align="center">*Place a photo or GIF of the power switch and E-Stop here.*</p>

---

## 3. Preparing Your File
Most projects start in **LightBurn** or **LaserGRBL**.

* **Importing:** Drag and drop your `.svg` or `.dxf` file into the software.
* **Scaling:** Ensure your dimensions match your physical material.
* **Layers:** Assign different colors for **Cutting** (Line) vs. **Engraving** (Fill).

!!! tip "Layer Logic"
    Always set your **Engraving** layers to happen *before* your **Cutting** layers so the part doesn't shift.

---

## 4. Material Setup & Focusing
This is the most important step for a clean result.

1. Place your material flat on the bed.
2. Use the **Focus Tool** to set the correct distance between the lens and the material.
3. Manually move the laser head to the "Origin" (where you want the job to start).

![Focusing Method](img/placeholder-focus.png){: style="max-width:400px; display:block; margin: 20px auto; border: 2px solid #333; border-radius: 12px;" }
<p align="center">*Insert a photo of the focus tool in use here.*</p>

---

## 5. Speed & Power Settings
Refer to the **Material Library** at the tool station. Common starting points:

| Material | Mode | Speed (mm/min) | Power (%) |
| :--- | :--- | :--- | :--- |
| 1/8" Plywood | Cut | 300 | 85% |
| 1/8" Plywood | Engrave | 3000 | 20% |
| Acrylic | Cut | 200 | 90% |

---

## 6. The "Frame" Check
Before firing the laser, press the **[FRAME]** button in the software.

> **Why?** This moves the laser head in a rectangle around your design area. Check to make sure the laser won't hit any clamps or go off the edge of the material.

---

## 7. Run the Job 🚀
1. Close the laser lid/shroud.
2. Double-check that the air assist is blowing.
3. Click **Start**.

!!! danger "Never Leave the Machine"
    You must stay within arm's reach of the laser at all times during operation. If you see a flame, hit the E-Stop immediately.

---

## 8. Cleanup
* [ ] Wait 30 seconds for smoke to clear before opening the lid.
* [ ] Remove your project and any small "drop" scraps from the bed.
* [ ] Turn off the machine and exhaust fan.
* [ ] Clean the work area for the next student.

---

## Video Walkthrough
<p align="center">
  <video width="600" controls>
    <source src="../vid/laser-tutorial.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</p>
<p align="center">*Update the source path above to your actual video file.*</p>
