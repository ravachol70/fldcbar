const electron = require('electron');
const app = electron.app;
var menubar = require('menubar');
var mb = menubar({width: 400, height: 350, fullscreen: false})

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    app.quit();
});

mb.on('ready', function ready () {
	console.log('Running FoldingCoin ticker in your operating system.')
});

/*
// Developers console
mb.on('after-create-window', function(){
	mb.window.openDevTools();
});*/