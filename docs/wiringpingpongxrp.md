### **XRP to Arduino High-RPM Motor Bridge**

This manifest defines the wiring for an **Arduino Pro Micro** acting as a sub-controller for the **XRP**. It uses a **Logic Level Converter** to bridge the 3.3V (XRP) and 5V (Arduino) logic levels.

!!! note This step is assuming you have your robot wired currently from the base XRP steps, this is an addon required for the High-RPM motors to be able to be run which are required to get a ball to launch.  It also provides expansion slots for addiitonal add-ons in the future.

#### **Master Wiring Table**

| Connection Group | From (Component: Pin) | To (Component: Pin) | Logic/Voltage | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Control Signal** | **XRP Extra: Pin 3 (G28)** | **LLC: LV1** | 3.3V PWM | Signal from WPILib |
| **Control Signal** | **LLC: HV1** | **Pro Micro: Pin 9** | 5V PWM | Signal to Arduino |
| **Logic Ref (Low)** | **XRP Extra: Pin 1** | **LLC: LV** | 3.3V | 3.3V Reference |
| **Logic Ref (High)** | **Pro Micro: VCC** | **LLC: HV** | 5V | 5V Reference |
| **Ground** | **XRP Extra: Pin 2 (GND)** | **Common GND Rail** | 0V | **Common Ground** |
| **Ground** | **Pro Micro: GND** | **Common GND Rail** | 0V | Ground Reference |
| **Ground** | **L9110S: GND** | **Common GND Rail** | 0V | Power Return |
| **Arduino Power** | **XRP Servo: Red (Center)** | **Pro Micro: RAW** | 6-7.2V | Powers Arduino |
| **Motor A Drive** | **Pro Micro: Pin 5 & 6** | **L9110S: A-1A & A-1B** | 5V Logic | Speed/Direction A |
| **Motor B Drive** | **Pro Micro: Pin 10 & 11** | **L9110S: B-1A & B-1B** | 5V Logic | Speed/Direction B |
| **Motor Power** | **XRP Servo: Red (Center)** | **L9110S: VCC** | 6V Battery | **High Current Supply** |
