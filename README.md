# TitanCord
## Discord client based on [Titan Bot](https://titanembeds.com/)

#### Table of Contents
- [How to Install](#how-to-install)
- [How to Use](#how-to-use)

### How to Install
**Make sure you have [NodeJS](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed**
1. Open terminal and
```
git clone https://github.com/CuteBladeYT/TitanCord
cd TitanCord
```
2. Type `npm i`
3. Type `echo $PWD` and copy output
4. Type `npx electron-packager 'app_directory' 'TitanCord' --overwrite --platform=OPERATING_SYSTEM --arch=x64 --prune=true --out=build` but remember to replace `app_directory` with output you copied in point 3 and `OPERATING_SYSTEM` with - depending if you use Windows (win32) or Linux (linux)
5. Done!


### How to Use
While in app first you'll see Titan's homepage. On the top of screen you'll notice input field with `Discord Server ID` placeholder. You need discord server's ID to connect to the server. The server also must have Titan Bot invited to make it work.<br>
To copy server ID, right click on server's icon or left click on server icon then right click on server's name, then copy ID.

![image](https://user-images.githubusercontent.com/78739707/150657220-9c5c2e7e-3562-47e0-adc9-02f549e5eea1.png)

Then to connect in TitanCord, you need to paste the ID in the input field then left click on `Change Server` button

![image](https://user-images.githubusercontent.com/78739707/150657247-2578ebf6-9b00-4ef2-8da2-409f1edf9518.png)

then you will automatically get connected to the server and ready to chat!<br>
You can both login with your Discord account or as Guest.
