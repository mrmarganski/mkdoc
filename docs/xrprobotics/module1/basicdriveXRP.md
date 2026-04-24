Check out the source code on [XRP BASIC DRIVING WITH COMMAND BASED PROGRAMMING](https://github.com/FRC-2064/XRP-Cammand-Based-Introduction)

!!! note
    We need to create a guide on going from 0-XRP code, from a blank template we should offer a guide to get the robot functions working step by step.  This can lead into more complex teachings, with PID tuning and State Machine discussions to support FRC methodology.

!!! note 
    This code must be deployed from VSCode with WPIlib version installed.  Be sure to complete that step to install VSCode properly on your computer before downloading this.  

To run this, download ZIP, unpack, and open folder through vscode while connected to the internet, it must install dependencies first before deploying to XRP bot.

Make sure XRP bot is on at this point.

Connect a PS4 bluetooth controller, needs to be triangle/square/circle/cross for code methods to work, or you will need to rewrite the controller bindings if using a different controller.  Bluetooth allows you to be fully wireless.

Once BUILD is complete, you have to switch your computers wifi to the XRP signal being sent, the password is: xrp-wpilib

Next step, click the WPI logo at the top of the VSCode screen, and search for "SIMULATE" - Which will deploy the code and open a virtual Driver Station to control the robot like a real FRC bot!

![Simulate XRP](../../img/simluatexrp.png)

!!! note
    It will take some time to compile the code (1-3min) - So rule of thumb is - If it has not failed, it is still compiling!

!!! success
    Once driver station is loaded, choose teleop, and test controls.  Robot should drive.  If you can't check your controller is connected over bluetooth and is assigned on the simulation dashboard in the controller Joystick slot (0) by deafult - or whichever you assigned in code. Drag and drop joystick from the window into the joystick (0) slot to assign.

![XRP Dashboard](../../img/simulationscreen.png)

!!! danger 
    Select TeleOP and move your joysticks! Don't test on a table, or the robot may jump off!!
