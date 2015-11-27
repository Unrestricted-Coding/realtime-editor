
$('div.split-pane').splitPane();

////////////////////////////////////////////////////////////////////////////////
///////////////////////// Bootstrap Config /////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
$('[data-toggle2="tooltip"]').tooltip();
$('[data-toggle="popover"]').popover();


////////////////////////////////////////////////////////////////////////////////
//////////////////////////// Editor Config /////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Fix Editor Errors on ace not being there
/*global ace*/

// Set HTML Editor
var editor = ace.edit("editor");
editor.$blockScrolling = Infinity;
editor.setTheme("ace/theme/idle_fingers");
editor.session.setMode("ace/mode/html");

// Set CSS Editor
var editor2 = ace.edit("editor2");
editor2.$blockScrolling = Infinity;
editor2.setTheme("ace/theme/idle_fingers");
editor2.session.setMode("ace/mode/css");

// Set JS Editor
var editor3 = ace.edit("editor3");
editor3.$blockScrolling = Infinity;
editor3.setTheme("ace/theme/idle_fingers");
editor3.session.setMode("ace/mode/javascript");

// Set HEAD Editor
var editor4 = ace.edit("editor4");
editor4.$blockScrolling = Infinity;
editor4.setTheme("ace/theme/idle_fingers");
editor4.session.setMode("ace/mode/html");

// Set Pre-FOOTER Editor
var editor5 = ace.edit("editor5");
editor5.$blockScrolling = Infinity;
editor5.setTheme("ace/theme/idle_fingers");
editor5.session.setMode("ace/mode/html");

// Setup Starting HTML
editor.setValue('<h1>Welcome To The UC Editor</h1>\n<hr>\n<p>This is a realtime editor built for Unrestricted Coding. It allows you to work with HTML/CSS/JavaScript with a realtime preview and an option to do a realtime collaboration section.</p>\n<p>You can disable the live preview window or syncing by using the green and blue toggles on the left.</p>\n<p>To share your session with someone and have them join in then click the yello collaboration button on the left.</p>\n\n<p>Currently there are quite a few bugs still on this editor, but they will get fixed. This editor\'s version is <strong>Pre-Release ALPHA v0.0.1</strong></p>\n<p>For a full list of issues please visit the github repositor at <a href="https://github.com/Unrestricted-Coding/realtime-editor" target="_blank">Github</a></p>\n<p>This editor is licensed as GPL v2 Open Source. </p>\n<p>To learn more about Unrestricted Coding please visit our site.</p>\n<a href="http://unrestrictedcoding.com/" target="_blank">Visit Unrestricted Coding Site... ></a>\n<br><br><br>', -1);
editor2.setValue('body {\n\tbackground-color:#222;\n\tcolor:#999;\n\tfont-family: Sans-Serif;\n}\nh1 {\n\tcolor:#bf9552;\n}\na {\n\tcolor:#fff;\n}\na:hover {\n\tcolor:#bf9999;\n}', -1);
editor3.setValue('var somevar = "Just type your javascript here, no need to wrap it in a function or anything";', -1);
editor4.setValue('<!-- Put your Header Information here-->')
editor5.setValue('<!-- Put your Jquery or other includes in here -->', -1)

// Get rid of print margin
editor.setShowPrintMargin(false);
editor2.setShowPrintMargin(false);
editor3.setShowPrintMargin(false);
editor4.setShowPrintMargin(false);
editor5.setShowPrintMargin(false);

/////////////// Random Setup for Markdown Flag
var mdflag = false;

////////////////////////////////////////////////////////////////////////////////
/////////////////////////// Zen Mode Config ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
var fullflag = false;
function makeFullScreen() {
    require(["ace/lib/dom"], function(dom) {
        if(fullflag)
        {
            $('#editor-pane').removeClass('pretty-override');
            $('#javascript-pane').removeClass('pretty-override');
            $('#css-pane').removeClass('pretty-override');
            $('#left-component').removeClass('pretty-override');
            $('#right-component').removeClass('pretty-override');
            $('#split-pane-2').removeClass('pretty-override');
            $('#bottom-component').removeClass('pretty-override');
            $('#bottom-component2').removeClass('pretty-override');
            $('#top-component2').removeClass('pretty-override');
            $('#horizontal-divider').removeClass('pretty-override');
            $('#css-pane').fadeIn();
            editor2.resize();
            $('#javascript-pane').fadeIn();
            editor3.resize();
            fullflag = false;
        } else {
            $('#editor-pane').addClass('pretty-override');
            $('#javascript-pane').addClass('pretty-override');
            $('#css-pane').addClass('pretty-override');
            $('#left-component').addClass('pretty-override');
            $('#right-component').addClass('pretty-override');
            $('#split-pane-2').addClass('pretty-override');
            $('#bottom-component').addClass('pretty-override');
            $('#bottom-component2').removeClass('pretty-override');
            $('#top-component2').removeClass('pretty-override');
            $('#horizontal-divider').addClass('pretty-override');
            $('#css-pane').fadeOut();
            editor2.resize();
            $('#javascript-pane').fadeOut();
            editor3.resize();
            fullflag = true;
        }
        var fullScreen = dom.toggleCssClass(document.body, "fullScreen")
        dom.setCssClass(editor.container, "fullScreen", fullScreen)
        editor.setAutoScrollEditorIntoView(!fullScreen)
        editor.resize();
    });
};

function toggleFullscrene() {
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {  // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
    if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
    }
}

// -- FullScreen -- //
editor.commands.addCommand({
    name: "Toggle Fullscreen",
    bindKey: "F10",
    exec: function(editor) {
        //makeFullScreen();
        toggleFullscrene();
    }
});

$('#zen-mode').click(function(){
    //makeFullScreen();
    toggleFullscrene();
})

if (document.addEventListener)
{
    document.addEventListener('webkitfullscreenchange', exitHandler, false);
    document.addEventListener('mozfullscreenchange', exitHandler, false);
    document.addEventListener('fullscreenchange', exitHandler, false);
    document.addEventListener('MSFullscreenChange', exitHandler, false);
}

function exitHandler()
{
        makeFullScreen();
}
// Set Zen Mode Music

//"Royalty Free Music from Bensound" http://www.bensound.com/royalty-free-music/track/relaxing
var audio = new Audio('/audio/quiet-rain.mp3');
var audioflag = false;
audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

$('#zen-music').click(function(){
   if(audioflag)
   {
       audio.pause();
       audioflag = false;
   } else {
       audio.play();
       audioflag = true;
   }
});


////////////////////////////////////////////////////////////////////////////////
/////////////////////////// Download Config ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


document.getElementById('dlink').onclick = function(code) {
    var iframe = document.getElementById('thepreview');
    var iframedoc = iframe.contentDocument || iframe.contentWindow.document;
    this.href = 'data:text/plain;charset=utf-8,'
    + encodeURIComponent("<!DOCTYPE html>\n<html>\n<head>" + iframedoc.head.innerHTML + "\n</head>\n<body>\n"+ iframedoc.body.innerHTML + "\n</body>\n</html>\n");
};



////////////////////////////////////////////////////////////////////////////////
/////////////////////////// Preview Config /////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Setup iFrame




var live = true;
// or use data: url to handle things like doctype
function showHTMLInIFrame() {
    var iframe = document.getElementById('thepreview'),
    iframedoc = iframe.contentDocument || iframe.contentWindow.document;
    
    var thescript = editor3.getValue();
    var thecss = editor2.getValue();
    var thehtml = editor.getValue();
    var thehead = editor4.getValue();
    var theprefooter = editor5.getValue();
    var thisdocument = thehtml + theprefooter + '\<script\>' + thescript + '\<\/script\>';
    
    iframedoc.body.innerHTML = thisdocument;
    iframedoc.head.innerHTML = thehead + '\<style\>' + thecss + '\<\/style\>';
    $("#thepreview").contents().find("a").click(function(e) {
        e.preventDefault()
    });
    
    //$('#thepreview').attr('src', 'data:text/html,' +encodeURIComponent(thisdocument));
    
    // Set Data For Download
    
}

showHTMLInIFrame();

////////////////////////////////////////////////////////////////////////////////
///////////////////////// Editor Events Config /////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// On HTML Input
editor.on("input", function(){
    editor.resize();
    if(live)
    {
        showHTMLInIFrame();
    }
})

// On CSS Input
editor2.on("input", function(){
    editor2.resize();
    if(live)
    {
        showHTMLInIFrame();
    }
})

// On JavaScript Input
editor3.on("input", function(){
    editor3.resize();
    if(live)
    {
        showHTMLInIFrame();
    }
})

// On Head Element Input
editor4.on("input", function(){
    if(live)
    {
        showHTMLInIFrame();
    }
})

// On Footer Include Input
editor5.on("input", function(){
    if(live)
    {
        showHTMLInIFrame();
    }
})

////////////////////////////////////////////////////////////////////////////////
///////////////////////// Markdown Config  /////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function enableMarkdown(){
    $('#mode').html('<span class="glyphicon glyphicon-flash"></span> Mode: MARKDOWN');
    mdflag = true;
};

function disableMarkdown(){
    $('#mode').html('<span class="glyphicon glyphicon-flash"></span> Mode: HTML/CSS/JS');
    mdflag = false;
}

////////////////////////////////////////////////////////////////////////////////
///////////////////////// Menu Event Config ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Manually Run the script
$('#run-script').click(function(){
    showHTMLInIFrame();
    $.notify("Preview Manually Ran", "success");
});

// Turn on or off Markdown Mode

$('#toggle-md').change(function(){
    if($('#toggle-md').prop('checked') === true)
    {
        disableMarkdown();
    } else {
        enableMarkdown();
    }
})

// Turn on or off live preview
$('#live-toggle').change(function(){
    if($('#live-toggle').prop('checked') === true)
    {
        live = true;
        $.notify("Live Preview Enabled", "warning");
    } else {
        live = false;
        $.notify("Live Preview Disabled", "warning");
    }
})

// Turn on or off word wrap in editors
$('#toggle-wrap').change(function(){
    if($('#toggle-wrap').prop('checked') === true)
    {
        editor.getSession().setUseWrapMode(false);
        editor2.getSession().setUseWrapMode(false);
        editor3.getSession().setUseWrapMode(false);
        editor4.getSession().setUseWrapMode(false);
        editor5.getSession().setUseWrapMode(false);
        $.notify("Wrap Disabled (Default)", "info");
    } else {
        editor.getSession().setUseWrapMode(true);
        editor2.getSession().setUseWrapMode(true);
        editor3.getSession().setUseWrapMode(true);
        editor4.getSession().setUseWrapMode(true);
        editor5.getSession().setUseWrapMode(true);
        $.notify("Wrap Enabled", "info");
    }
})

// Set the theme to either dark or light
$('#toggle-theme').change(function(){
    if($('#toggle-theme').prop('checked') === true)
    {
        // Dark
        editor.setTheme("ace/theme/idle_fingers");
        editor2.setTheme("ace/theme/idle_fingers");
        editor3.setTheme("ace/theme/idle_fingers");
        editor4.setTheme("ace/theme/idle_fingers");
        editor5.setTheme("ace/theme/idle_fingers");
        $.notify("Theme Set To Dark", "info");
    } else {
        // Light
        editor.setTheme("ace/theme/github");
        editor2.setTheme("ace/theme/github");
        editor3.setTheme("ace/theme/github");
        editor4.setTheme("ace/theme/github");
        editor5.setTheme("ace/theme/github");
        $.notify("Theme Set To Light", "info");
    }
})

// Hide or show the Live Preview
$('#preview').change(function(){
    if($('#preview').prop('checked') === true)
    {
        $('#top-component').css("bottom", '25em');
        $('#horizontal-divider').css("bottom", '25em');
        $('#bottom-component').css("height", '25em');
        $('#thepreview').fadeIn(500, function(){
            $.notify("Live Preview Shown.", "info");
            $('#thepreview').removeClass('hidden-iframe');
            $('#thepreview').addClass('iframe-norm'); 
        })
        
    } else {
        $('#thepreview').fadeOut(500, function(){
            $.notify("Live Preview Hidden.", "info");
            $('#top-component').css("bottom", '100%');
            $('#horizontal-divider').css("bottom", '100%');
            $('#bottom-component').css("height", '100%');
            $('#thepreview').removeClass('iframe-norm');
            $('#thepreview').addClass('hidden-iframe');
        })
    }
})