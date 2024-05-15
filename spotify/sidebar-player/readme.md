# rin's sidebar player

A decently simple Spiceitfy theme that moves the player bar to stack with the new Now Playing sidebar.

Additionally, emulates the "Extract background color based on artwork image" experiment without actually using it.

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
| Seperated Panels | <a href="user-base.css" >Download<br/>(user-base.css)</a> | <a href="user-reactive-color.css" >Download<br/>(user-reactive-color.css)</a> | <a href="user-reactive-all.css" >Download<br/>(user-reactive-all.css)</a> | 
| Combined Panels | <a href="user-base-combined.css" >Download<br/>(user-base-combined.css)</a> | <a href="user-reactive-color-combined.css" >Download<br/>(user-reactive-color-combined.css)</a> | <a href="user-reactive-all-combined.css" >Download<br/>(user-reactive-all-combined.css)</a> 

> [!IMPORTANT]
> if you are downloading the reactive color version you also need the extension!!! <br/>
> [Reactive Color Extension (sidebar-player.js)](sidebar-player.js)

## Install

If you dont have Spicetify, [install it](https://spicetify.app/docs/getting-started) and then find your Spicetify config folder (Windows: `%appdata%\spicetify\`, Mac/Linux: `~/.config/spicetify/`)

1. Create a new folder in spicetify/Themes named `sidebar-player`
2. Rename the CSS file you downloaded from here to user.css and move it into there
3. If using a Reactive theme, download the `sidebar-player.js` extension and move it to spicetify/Extentions
4. Open a CMD/Terminal window and run the following:<br/>
`spicetify restore`<br/>
`spicetify config current_theme sidebar-player`<br/>
`spicetify config extensions sidebar-player.js` (if using reactive theme)<br/>
`spicetify backup apply`

Note: by default, applying the theme will show an error in the terminal about a missing color.ini file, but it applies & works just fine without it. If you really want to shut it up I have a blank one [here](color.ini) that you can put in spicetify/Themes/sidebar-player.
