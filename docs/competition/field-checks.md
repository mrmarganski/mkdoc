# 🛜 Field Connectivity & System Checks
> **Objective:** Learn the critical procedures for updating firmware, verifying Driver Station versions, and configuring the robot's radio for both the shop and the official competition Field Management System (FMS).

A robot that works perfectly in the shop but cannot connect to the competition field is completely useless. Network configuration and firmware management are the most common reasons teams miss their first qualification matches. 

This module teaches the Software and Pit Crew leads how to transition the robot's brain from "Shop Mode" to "Event Mode" and back again.

---

## 🚦 Step 1: Pre-Event Firmware & Software Updates

Before we ever pack the trailer, the programming and electrical leads must ensure every piece of silicon on the robot is running the exact same, legal version of the software.

!!! warning "Version Mismatches"
    If your Driver Station is running v24.1 but the roboRIO is running v24.2, the field FMS will refuse to let you connect. Everything must match.

**The Update Checklist:**

1. **NI Game Tools (Driver Station):** Verify the driver laptop has the latest FRC Game Tools installed. Check the Driver Station version number at the top of the window.
2. **roboRIO Image:** Use the roboRIO Imaging Tool to format and flash the latest legal firmware to the RIO.
3. **Kraken Motors:** Open **Phoenix Tuner X**. Connect to the robot and ensure every single Kraken X60 (Talon FX) is flashed to the exact same, latest firmware version.
4. **Deploy Code:** Re-build and deploy the robot code to the newly imaged roboRIO.

---

## 📻 Step 2: Radio Configuration (Shop Mode)

To drive the robot wirelessly at school, the radio must be configured as a standard wireless access point.

**How to flash the radio for the shop:**

1. Connect the robot radio directly to a laptop via an Ethernet cable. (Disable the laptop's Wi-Fi).
2. Power on the robot.
3. Open the **FRC Radio Configuration Utility**.
4. Enter Team Number: `2064`.
5. Enter a secure WPA key (Ask the Software Lead for our standard shop password).
6. Click **Configure**. Wait for the success message. You can now connect to "2064_Robot" via Wi-Fi.

---

## 🏟️ Step 3: At the Event (FMS Mode)

When we arrive at a regional, the very first task for the Software Lead is getting the radio flashed for the official Field Management System (FMS). **Our shop Wi-Fi settings will not work here.**

**The Event Workflow:**

1. **The Radio Kiosk:** Pull the radio off the robot. Take it to the official Radio Kiosk near the inspection station. The volunteers will flash it with the event's encrypted FMS key. 
2. **Pit Tethering:** *Wi-Fi is strictly banned in the pits.* To test the robot in our pit, you must physically tether the Driver Station to the robot using a long Ethernet cable or USB A-to-B cable into the roboRIO.
3. **The Practice Match / Field Connectivity Test:** During our first practice match, connect the driver station laptop to the Ethernet cable at our driver station. 
4. **Verify DS Logs:** Once connected, open the Driver Station Log File Viewer. Check the latency and packet loss. If latency spikes above 20ms, or packet loss is high, notify the FTA (FIRST Technical Advisor) immediately.

---

## 🔄 Step 4: Post-Event (Returning to the Shop)

**CRITICAL:** When we get back to Pomperaug High School on Monday, the robot will not connect to any laptops wirelessly. The radio is still encrypted with the competition FMS key!

**The Reset Protocol:**

1. Someone must immediately hook the radio up to a laptop via Ethernet.
2. Run the **FRC Radio Configuration Utility**.
3. Re-flash the radio back to our shop settings (Step 2). 

---

## ✅ Step 5: Pathway Deliverable

You must physically demonstrate your ability to manage the robot's network state to the Software Lead or Lead Mentor.

**Before submitting for review, ensure you have:**

- [ ] Demonstrated how to check the firmware version on a Kraken motor using Phoenix Tuner X.
- [ ] Successfully flashed a robot radio using the FRC Radio Configuration Utility.
- [ ] Tethered the Driver Station to the robot via Ethernet and successfully enabled it.
- [ ] Located and opened the Driver Station Log Viewer to check packet loss.

**Notify a Mentor:** Let the Software Lead or Pit Boss know you are ready to be tested on field connectivity!

---

### 🎉 Module Complete!
You now know how to get the robot legally approved, connected to the field, and ready to play.

[Go to Next Module: Phase 3 Dashboard](../phase3.md){ .md-button .md-button--primary }

[Return to Home Dashboard](../index.md){ .md-button }
