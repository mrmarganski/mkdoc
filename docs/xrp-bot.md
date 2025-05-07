# XRP Bot Creation and Development

## Introduction to XRP Bots

XRP Bots are specialized robots designed for the FIRST Robotics Competition (FRC). In this section, you'll learn how to create and develop your own XRP bot using the latest tools and technology available to our team.

## Key Components

1. **Chassis**
   - The base structure of your robot.
   - It can be made from materials like aluminum or steel.

2. **Drive Train**
   - This is the mechanism that allows your robot to move.
   - Common types: tank drive, mecanum, and swerve.

3. **Programming**
   - Learn how to code your robot to make it do what you want.
   - We use **Java** or **LabVIEW** for programming FRC robots.

4. **Electronics**
   - Wiring and connecting all the components to the robot's control system.

5. **Sensors and Actuators**
   - Use sensors like encoders, cameras, and gyros to gather data and control the robot.
   - Actuators control movement, like motors and servos.

## Building Your XRP Bot

### 1. Designing the Chassis

Start by sketching your robot's layout and defining the shape of your chassis. Ensure it meets the competition's size requirements.

### 2. Assembling the Drive Train

Choose between different drive systems. For example, if you're building a tank drive, you’ll need two motors for the left and right sides. Ensure that you select the correct motor controllers and wiring.

### 3. Programming Your XRP Bot

Programming the robot requires writing code to control movement, sensors, and actuators. Start by configuring the robot's inputs and outputs.

#### Example Code (in Java):
## Programming Your XRP Bot

Programming the robot requires writing code to control movement, sensors, and actuators. Start by configuring the robot's inputs and outputs.

### Example Code (in Java):

```java
public class Robot extends TimedRobot {
    private Spark leftMotor = new Spark(0);
    private Spark rightMotor = new Spark(1);

    @Override
    public void teleopPeriodic() {
        double moveSpeed = joystick.getY();
        double turnSpeed = joystick.getX();
        leftMotor.set(moveSpeed + turnSpeed);
        rightMotor.set(moveSpeed - turnSpeed);
    }
}
```

<!-- Go Back Button -->
<div class="custom-button">
  [Go Back to Launch Page](index.md)
</div>

---

<!-- Next Page Button -->
<div class="custom-button">
  [Next Step: Programming the XRP Bot](Programming.md)
</div>