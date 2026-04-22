## Installing the Firmware and Booting up the XRP

With the build process complete, we need to work on loading the firmware to the XRP.  To accompliosh this: The XRP will be using custom FRC firmware that enables it to communicate wirelessly and utilize the WPIlib commands.  Luckily they provide the details to accomplish this, so follow this video and guide, and you should have the XRP robot boradcasting its' own WIFI channel to connect to so we can connect and deploy code to it after this step.

!!! warning
    Stop the video at 14:20 marker. We will **NOT** be coding in Time Based format!

<iframe width="560" height="315" src="https://www.youtube.com/embed/Nlk52QdoasE?si=OOVQTXUfxC7waexL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

!!! info "WPILib Official Documentation"
    For firmware updates, advanced programming guides, and the full Java library reference, the official WPILib site is your best resource.

[View the WPILib XRP Guide ↗️](https://docs.wpilib.org/en/stable/docs/xrp-robot/index.html){ .md-button .md-button--primary target="_blank" }

Upon start up (when power is applied to the XRP), the following will happen:

1. The IMU will calibrate itself. This lasts approximately 3-5 seconds, and will be indicated by the green LED blinking rapidly. Ideally, the XRP should be placed on a flat surface prior to power up, and if necessary, users can hit the reset button to restart the firmware and IMU calibration process.

2. The network will be configured, depending on the configuration settings and if you successfully followed the steps in the video. See the section on [XRP Web UI Interface](https://docs.wpilib.org/en/stable/docs/xrp-robot/web-ui.html) for more information on how to configure the network settings if having issues. By default, the XRP will broadcast its own WiFi Access Point and you can connect to its' WIFI when ready to **SIMULATE** and test code.

3. After this, the XRP is ready for use.

## Installing WPIlib and VScode onto your Personal Computer

The Computers in Room 124 will have VScode with the WPIlib libraires installed, so you are free to use them and can skip this step - but if you would like to use a personal computer or update WPIlib this step will help you with that.

!!! note
    Your XRP bot will be fully wireless at this point, and no longer will need to be plugged into a computer.  All code is sent wirelessly and simulating the robot is completed over WIFI.

!!! info "WPILib Installation Documentation"
    Link to site for installing VSCode/WPILib onto a personal computer - this is required to be a Macbook or Windows machine, check link for further requirements on Version support and updates.

[View the WPILib Installation Guide ↗️](https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-2/wpilib-setup.html){ .md-button .md-button--primary target="_blank" }

## Hardware, Sensors and GPIO

!!! note
    Your XRP bot build, wiring, WPIlib install and firmware should be good to go if you got to this point, You are ready to code the robot! Information below is for technical reference as a programmer - and not necessarily needed.  But if you wanted to know more about what the XRP framework inner workings are and what you have access to on the XRP bot in programming states, scrolling down this page is a good start to familiarize yourself, otherwise, you can go to the next step at this point to learn to open and deploy code to drive the XRP robot. 

The XRP has the following built-in hardware/peripherals:

- 2x geared drive motors with encoders
- 2x additional geared motor connectors with encoder support (marked Motor3 and Motor4)
- 2x Servo connectors (marked Servo1 and Servo2)
- 1x Inertial Measurement Unit (IMU)
- 1x LED (green)
- 1x pushbutton (marked USER)
- 1x Line following sensor (exposed as 2 Analog inputs)
- 1x Ultrasonic PING style rangefinder (uses 2 digital IO pins, exposed as an analog input)

### Motors, Wheels, and Encoders

The motors used on the XRP have a 48.75:1 gear reduction and a no-load output speed of 90 RPM at 4.5V.

The wheels have a diameter of 60mm (2.3622"). They have a trackwidth of 155mm (6.1").

The encoders are connected directly to the motor output shaft and have 12 Counts Per Revolution (CPR). With the provided gear ratio, this nets 585 counts per wheel revolution.

The motor channels are listed in the table below.

!!! note
    We use "motor channels" here instead of "PWM channels" as the XRP requires the use of a special `XRPMotor` object in WPILib code to interact with the hardware.

| Channel       | XRP Hardware Component |
|---------------|------------------------|
| XRPMotor 0    | Left Motor             |
| XRPMotor 1    | Right Motor            |
| XRPMotor 2    | Motor 3                |
| XRPMotor 3    | Motor 4                |

!!! note
    The right motor will spin in a backward direction when positive output is applied. Thus the corresponding motor controller needs to be inverted in robot code.

The servo channels are listed in the table below.

!!! note
    We use "servo channels" here instead of "PWM channels" as the XRP requires the use of a special `XRPServo` object in WPILib code to interact with the hardware.

| Channel       | XRP Hardware Component |
|---------------|------------------------|
| XRPServo 4    | Servo 1                |
| XRPServo 5    | Servo 2                |

The encoder channels are listed in the table below.

| Channel     | XRP Hardware Component                |
|-------------|---------------------------------------|
| DIO 4       | Left Encoder Quadrature Channel A     |
| DIO 5       | Left Encoder Quadrature Channel B     |
| DIO 6       | Right Encoder Quadrature Channel A    |
| DIO 7       | Right Encoder Quadrature Channel B    |
| DIO 8       | Motor3 Encoder Quadrature Channel A   |
| DIO 9       | Motor3 Encoder Quadrature Channel B   |
| DIO 10      | Motor4 Encoder Quadrature Channel A   |
| DIO 11      | Motor4 Encoder Quadrature Channel B   |

!!! note
    By default, the encoders count up when the XRP moves forward.

### Inertial Measurement Unit

The XRP includes an STMicroelectronics LSM6DSOX Inertial Measurement Unit (IMU) which contains a 3-axis gyro and a 3-axis accelerometer.

The XRP will calibrate the gyro and accelerometer upon each boot (the onboard LED will quickly flash for about 3-5 seconds at startup time).

### Onboard LED and Push Button

The XRP has a push button (labeled USER) and a green LED onboard that are exposed as Digital IO (DIO) channels to robot code.

| DIO Channel | XRP Hardware Component    |
|-------------|---------------------------|
| DIO 0       | USER Button               |
| DIO 1       | Green LED                 |

!!! note
    DIO 2 and 3 are reserved for future system use.

### Line Following (Reflectance) Sensor

When assembled according to the instructions, the XRP supports a line following sensor with 2 sensing elements. Each sensing element measures reflectance and exposes these as AnalogInput channels to robot code. The returned values range from 0V (pure white) to 5V (pure black).

| AnalogInput Channel | XRP Hardware Component    |
|---------------------|---------------------------|
| AnalogInput 0       | Left Reflectance Sensor   |
|---------------------|---------------------------|
| AnalogInput 1       | Right Reflectance Sensor  |

### Ultrasonic Rangefinder

When assembled according to the instructions, the XRP supports an ultrasonic, PING style, rangefinder. This is exposed as an AnalogInput channel to robot code. The returned values range from 0V (20mm) to 5V (4000mm).

| AnalogInput Channel | XRP Hardware Component    |
|---------------------|---------------------------|
| AnalogInput 2       | Ultrasonic Rangefinder    |

---
