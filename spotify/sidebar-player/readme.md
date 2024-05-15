# rin's sidebar player

A decently simple Spiceitfy theme that moves the player bar to stack with the new Now Playing sidebar.

Additionally, emulates the "Extract background color based on artwork image" experiment without actually using it.

Made with absolute zero prior knowledge in JS or any similar language and pure spite.

### base
<img src="https://github.com/rinyafii/theme-stuff/assets/36645011/7cd9619e-7d00-477f-8c8b-48efbaae5221" width="800">

### reactive color
<img src="https://github.com/rinyafii/theme-stuff/assets/36645011/13f684e1-d8b5-47f7-a090-474e85825d43" width="800">

### reactive color + combined panels
<img src="https://github.com/rinyafii/theme-stuff/assets/36645011/4697ab64-e9f7-4cc6-bc6e-a183df3c9114" width="800">

### reactive color on all panels + combined panels
<img src="https://github.com/rinyafii/theme-stuff/assets/36645011/91e98717-325f-40b8-b7c8-d83f78221187" width="800">


## Download

| | Base | Reactive Color | Reactive Color - All Panels |
| --- | --- | --- | --- | 
| Seperated Panels | <a href="base.zip" >base.zip</a> | <a href="reactive.zip" >reactive.zip (+.js)</a> | <a href="reactive-all.zip" >reactive-all.zip (+.js)</a> | 
| Combined Panels | <a href="base-combined.zip" >base-combined.zip</a> | <a href="reactive-combined.zip" >reactive-combined.zip (+.js)</a> | <a href="reactive-all-combined.zip" >reactive-all-combined.zip (+.js)</a> | 

## Install

If you dont have Spicetify, [install it](https://spicetify.app/docs/getting-started) and then find your Spicetify config folder (Windows: `%appdata%\spicetify\`, Mac/Linux: `~/.config/spicetify/`)

1. Download the version you want
2. Unzip the archive into a new folder in your spicetify/Themes, preferrably named "sidebar-player" <br/>
     - Make sure the hierarchy goes like this: `spicetify/Themes/sidebar-player/user.css`. Anything else won't work!
4. If using a Reactive theme, grab the `sidebar-player.js` file from the theme folder and move it to spicetify/Extentions
5. Open a CMD/Terminal window and run the following:<br/>
`spicetify restore`<br/>
`spicetify config current_theme sidebar-player` (or whatever you named the folder you unarchived the ZIP into)<br/> 
`spicetify config extensions sidebar-player.js` (if using reactive theme)<br/>
`spicetify backup apply`
