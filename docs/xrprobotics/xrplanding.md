# XRP Bot Creation and Development

<div class="grid cards" markdown>

-   [XRP Module 1 - Start Here ↗️](docs/xrprobotics/module1/Build.md){ .md-button .md-button--primary target="_blank" }
-   [XRP Module 2 - Completed XRP Module 1 ↗️](Ping-Pong-Launcher-Challenge.md){ .md-button .md-button--primary target="_blank" }

</div>

## Introduction to XRP Bots

XRP Bots are specialized robots designed for the FIRST Robotics Competition (FRC). In this section, you'll learn how to create and develop your own XRP bot using the latest tools and technology available to our team.

## XRP vs. FRC: Comparison Table
---

| Key Component | XRP Robot (The Prototype) | FRC Robot (The Competition Machine) |
| :--- | :--- | :--- |
| **Chassis** | Small-scale base; **3D Printed** with PLA. | Heavy-duty industrial frame; **Aluminum** extrusions or plate. |
| **Drive Train** | **2-wheel Differential** (similar to Tank). Uses small plastic wheels and a caster. | **Tank, Mecanum, or Swerve**; uses high-traction rubber or TPU wheels. |
| **Programming** | **Java & WPILib**. Runs on a Raspberry Pi Pico W. | **Java & WPILib**. Runs on a National Instruments **roboRIO 2.0**. |
| **Electronics** | **All-in-one** XRP Controller board. Simple plug-and-play wiring. | **Modular system**: PDH, roboRIO, Radio, and independent Motor Controllers. |
| **Sensors** | Built-in **Encoders, Gyro, and Ultrasonic**. | Industrial **Encoders, NAVX Gyros**, and **Limelight/AprilTag** cameras. |
| **Actuators** | Hobby-grade **DC Motors** and 9g **Servos**. | Powerful **Brushless Motors** (NEOs/Kraken's) and pneumatic pistons. |

> ### 💡 Why are they so similar?
> We use the XRP because the **logic** is identical. If you can code an autonomous path on the XRP using WPILib, you have already learned 90% of what it takes to code the 125lb competition robot.

