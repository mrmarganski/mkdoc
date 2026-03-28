### **XRP to Arduino High-RPM Motor Bridge**

This manifest defines the wiring for an **Arduino Pro Micro** acting as a sub-controller for the **XRP**. It uses a **Logic Level Converter** to bridge the 3.3V (XRP) and 5V (Arduino) logic levels.

!!! note 
  This step is assuming you have your robot wired currently from the base XRP steps, this is an addon required for the High-RPM motors to be able to be run which are required to get a ball to launch.  It also provides expansion slots for addiitonal add-ons in the future.

!!! warning 
  Only continue with the wiring step here if you have all the components assembled from the previous step, if not go back now and complete the Assembly of the Ping Pong bot.

## Method and Reasoning
In order to accomplish this, we needed to add more motors than available slots on the XRP board.  Also, the RPM of the XRP motors is slow for the task of shooting.  Therfore there are additional electronics we need to add to the XRP to get more out of it. 
#### First - We add a small arduino controller
The Arduino acts as the "Smart Controller." It takes the single WPILib command ("Go forward at 80%"), does the math, and translates it into the specific dual-pin hardware signals the L9110S needs.
#### Second - We require a "Bridge/L9110S" to power the motor
This chip acts as a heavy-duty electronic valve. It connects directly to the 6V battery (the "water supply") and the motors. It waits for a tiny, low-current signal (the "faucet handle") to tell it how much power to let through. This keeps the heavy, dangerous electrical current completely isolated from your delicate XRP brain.
#### Third - We add a Logic Level Converter
If the 5V Arduino sends a signal directly into the 3.3V XRP, it is the equivalent of screaming into someone's ear with a megaphone—it will blow out the GPIO pin on the XRP. The Level Converter safely translates the 5V "shout" down to a 3.3V "whisper" and vice versa.

## The FRC Big Picture (Why this is a great project)
By building this custom bridge, you have accidentally built an exact, miniature replica of how a 120-pound FRC robot handles its drivebase and shooters!

In a real FRC robot, the RoboRIO (the XRP) does not power the motors directly. It sends a low-voltage data signal to a Spark MAX or Talon FX (your Arduino + L9110S). That smart controller then pulls massive current straight from the Power Distribution Panel (your direct 6V battery wire) to spin a NEO or Kraken motor (Like these small 130 high-RPM motor we are using on the XRP for shooter motors).

# **Master Wiring Table**

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
