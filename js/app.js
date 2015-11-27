
$('#split-pane-1').splitPane();
$('#split-pane-md').splitPane();
$('#md-pane').hide();

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

// Set MD Editor
var mdeditor = ace.edit("editormd");
mdeditor.$blockScrolling = Infinity;
mdeditor.setTheme("ace/theme/twilight");
mdeditor.session.setMode("ace/mode/markdown");

// Setup Starting HTML
editor.setValue('<h1>Welcome To The UC Editor</h1>\n<hr>\n<p>This is a realtime editor built for Unrestricted Coding. It allows you to work with HTML/CSS/JavaScript with a realtime preview and an option to do a realtime collaboration section.</p>\n<p>You can disable the live preview window or syncing by using the green and blue toggles on the left.</p>\n<p>To share your session with someone and have them join in then click the yellow collaboration button on the left.</p>\n\n<p>Currently there are quite a few bugs still on this editor, but they will get fixed. This editor\'s version is <strong>Pre-Release ALPHA v0.0.3</strong></p>\n<p>For a full list of issues please visit the github repository at <a href="https://github.com/Unrestricted-Coding/realtime-editor" target="_blank">https://github.com/Unrestricted-Coding/realtime-editor</a></p>\n<p>This editor is licensed as GPL v2 Open Source. </p>\n<p>To learn more about Unrestricted Coding please visit our site.</p>\n<a href="http://unrestrictedcoding.com/" target="_blank">http://unrestrictedcoding.com/</a>\n<br><br><br>', -1);
editor2.setValue('body {\n\tbackground-color:#222;\n\tcolor:#999;\n\tfont-family: Sans-Serif;\n}\nh1 {\n\tcolor:#bf9552;\n}\na {\n\tcolor:#fff;\n}\na:hover {\n\tcolor:#bf9999;\n}', -1);
editor3.setValue('var somevar = "Just type your javascript here, no need to wrap it in a function or anything";', -1);
editor4.setValue('<!-- Put your Header Information here-->');
editor5.setValue('<!-- Put your Jquery or other includes in here -->', -1);
mdeditor.setValue('# Welcome to the Markdown Live preview\nYou just need to edit this document to see the changes live on the right. Here are some examples of markdown...\n\n    This is a code block...\n    it is used to write and show code\n\nnext some headers\n\n# Header 1\n\n## Header 2\n\n### Header 3\n\n#### Header 4\n\n##### Header 5\n\n###### Header 6\n', -1);

// Get rid of print margin
editor.setShowPrintMargin(false);
editor2.setShowPrintMargin(false);
editor3.setShowPrintMargin(false);
editor4.setShowPrintMargin(false);
editor5.setShowPrintMargin(false);
mdeditor.setShowPrintMargin(false);

/////////////// Random Setup for Markdown Flag
var mdflag = false;

////////////////////////////////////////////////////////////////////////////////
/////////////////////////// Zen Mode Config ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
var fullflag = false;
function makeFullScreen() {
    require(["ace/lib/dom"], function(dom) {
        if(!mdflag)
        {
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
        } else {
            if(fullflag)
            {
                $('#left-component-md').removeClass('pretty-override');
                $('#editor-pane-md').removeClass('pretty-override');
                $('#vertical-divider-md').show();
                $('#right-component-md').show();
                fullflag = false;
            } else {
                $('#left-component-md').addClass('pretty-override');
                $('#editor-pane-md').addClass('pretty-override');
                $('#vertical-divider-md').hide();
                $('#right-component-md').hide();
                fullflag = true;
            }
            var fullScreen = dom.toggleCssClass(document.body, "fullScreen")
            dom.setCssClass(mdeditor.container, "fullScreen", fullScreen)
            mdeditor.setAutoScrollEditorIntoView(!fullScreen)
            mdeditor.resize();
        }
        
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

//"Royalty Free Music and Creative Commons"
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
    if(!mdflag)
    {
        var iframe = document.getElementById('thepreview');
        var iframedoc = iframe.contentDocument || iframe.contentWindow.document;
        this.href = 'data:text/plain;charset=utf-8,'
        + encodeURIComponent("<!DOCTYPE html>\n<html>\n<head>" + iframedoc.head.innerHTML + "\n</head>\n<body>\n"+ iframedoc.body.innerHTML + "\n</body>\n</html>\n");
    } else {
        var iframe = document.getElementById('mdpreview');
        var iframedoc = iframe.contentDocument || iframe.contentWindow.document;
        this.href = 'data:text/plain;charset=utf-8,'
        + encodeURIComponent("<!-- MD Contents\n" + mdeditor.getValue() + "-->\n<!DOCTYPE html>\n<html>\n<head>" + iframedoc.head.innerHTML + "\n</head>\n<body>\n"+ iframedoc.body.innerHTML + "\n</body>\n</html>\n");
    }
    
};



////////////////////////////////////////////////////////////////////////////////
/////////////////////////// Preview Config /////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Setup iFrame




var live = true;
// or use data: url to handle things like doctype
function showHTMLInIFrame() {
    if(!mdflag)
    {
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
    } else {
        var iframe = document.getElementById('mdpreview');
        iframedoc = iframe.contentDocument || iframe.contentWindow.document;
        
        var head = '<style>@charset "UTF-8";.markdown-body{font-size:14px;line-height:1.6;overflow:hidden}.markdown-body>: first-child{margin-top:0!important}.markdown-body>: last-child{margin-bottom:0!important}.markdown-body a.absent{color:#c00}.markdown-body a.anchor{display:block;padding-left:30px;margin-left:-30px;cursor:pointer;position:absolute;top:0;left:0;bottom:0}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{margin:20px 0 10px;padding:0;font-weight:700;-webkit-font-smoothing:antialiased;cursor:text;position:relative}.markdown-body h1 .mini-icon-link,.markdown-body h2 .mini-icon-link,.markdown-body h3 .mini-icon-link,.markdown-body h4 .mini-icon-link,.markdown-body h5 .mini-icon-link,.markdown-body h6 .mini-icon-link{display:none;color:#000}.markdown-body h1: hover a.anchor .mini-icon-link,.markdown-body h2: hover a.anchor .mini-icon-link,.markdown-body h3: hover a.anchor .mini-icon-link,.markdown-body h4: hover a.anchor .mini-icon-link,.markdown-body h5: hover a.anchor .mini-icon-link,.markdown-body h6: hover a.anchor .mini-icon-link,.markdown-body li p.first{display:inline-block}.markdown-body h1: hover a.anchor,.markdown-body h2: hover a.anchor,.markdown-body h3: hover a.anchor,.markdown-body h4: hover a.anchor,.markdown-body h5: hover a.anchor,.markdown-body h6: hover a.anchor{text-decoration:none;line-height:1;padding-left:0;margin-left:-22px;top:15%}.markdown-body h1 code,.markdown-body h1 tt,.markdown-body h2 code,.markdown-body h2 tt,.markdown-body h3 code,.markdown-body h3 tt,.markdown-body h4 code,.markdown-body h4 tt,.markdown-body h5 code,.markdown-body h5 tt,.markdown-body h6 code,.markdown-body h6 tt{font-size:inherit}.markdown-body h1{font-size:28px;color:#000}.markdown-body h2{font-size:24px;border-bottom:1px solid #ccc;color:#000}.markdown-body h3{font-size:18px}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:14px}.markdown-body h6{color:#777;font-size:14px}.markdown-body blockquote,.markdown-body dl,.markdown-body ol,.markdown-body p,.markdown-body pre,.markdown-body table,.markdown-body ul{margin:15px 0}.markdown-body h1+p,.markdown-body h2+p,.markdown-body h3+p,.markdown-body h4+p,.markdown-body h5+p,.markdown-body h6+p,.markdown-body ol li ul: first-of-type,.markdown-body ol li>: first-child,.markdown-body ul li ul: first-of-type,.markdown-body ul li>: first-child{margin-top:0}.markdown-body hr{background:url\("https: /a248.e.akamai.net/assets.github.com/assets/primer/markdown/dirty-shade-6ead57f83b0f117a80ba77232aff0673bfd71263.png"\) repeat-x;border:0;color:#ccc;height:4px;padding:0}.markdown-body a: first-child h1,.markdown-body a: first-child h2,.markdown-body a: first-child h3,.markdown-body a: first-child h4,.markdown-body a: first-child h5,.markdown-body a: first-child h6,.markdown-body>h1: first-child,.markdown-body>h1: first-child+h2,.markdown-body>h2: first-child,.markdown-body>h3: first-child,.markdown-body>h4: first-child,.markdown-body>h5: first-child,.markdown-body>h6: first-child{margin-top:0;padding-top:0}.markdown-body ol,.markdown-body ul{padding-left:30px}.markdown-body ol.no-list,.markdown-body ul.no-list{list-style-type:none;padding:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-bottom:0}.markdown-body dl{padding:0}.markdown-body dl dt{font-size:14px;font-weight:700;font-style:italic;padding:0;margin:15px 0 5px}.markdown-body dl dt: first-child{padding:0}.markdown-body dl dt>: first-child{margin-top:0}.markdown-body dl dt>: last-child{margin-bottom:0}.markdown-body dl dd{margin:0 0 15px;padding:0 15px}.markdown-body blockquote>: first-child,.markdown-body dl dd>: first-child{margin-top:0}.markdown-body blockquote>: last-child,.markdown-body dl dd>: last-child{margin-bottom:0}.markdown-body blockquote{border-left:4px solid #DDD;padding:0 15px;color:#777}.markdown-body table th{font-weight:700}.markdown-body table td,.markdown-body table th{border:1px solid #ccc;padding:6px 13px}.markdown-body table tr{border-top:1px solid #ccc;background-color:#fff}.markdown-body table tr: nth-child(2n){background-color:#f8f8f8}.markdown-body img{max-width:100%;-moz-box-sizing:border-box;box-sizing:border-box}.markdown-body span.frame{display:block;overflow:hidden}.markdown-body span.frame>span{border:1px solid #ddd;display:block;float:left;overflow:hidden;margin:13px 0 0;padding:7px;width:auto}.markdown-body span.frame span img{display:block;float:left}.markdown-body span.frame span span{clear:both;color:#333;display:block;padding:5px 0 0}.markdown-body span.align-center{display:block;overflow:hidden;clear:both}.markdown-body span.align-center>span{display:block;overflow:hidden;margin:13px auto 0;text-align:center}.markdown-body span.align-center span img{margin:0 auto;text-align:center}.markdown-body span.align-right{display:block;overflow:hidden;clear:both}.markdown-body span.align-right>span{display:block;overflow:hidden;margin:13px 0 0;text-align:right}.markdown-body span.align-right span img{margin:0;text-align:right}.markdown-body span.float-left{display:block;margin-right:13px;overflow:hidden;float:left}.markdown-body span.float-left span{margin:13px 0 0}.markdown-body span.float-right{display:block;margin-left:13px;overflow:hidden;float:right}.markdown-body span.float-right>span{display:block;overflow:hidden;margin:13px auto 0;text-align:right}.markdown-body code,.markdown-body tt{margin:0 2px;padding:0 5px;border:1px solid #eaeaea;background-color:#f8f8f8;border-radius:3px}.markdown-body code{white-space:nowrap}.markdown-body pre>code{margin:0;padding:0;white-space:pre;border:none;background:0 0}.markdown-body .highlight pre,.markdown-body pre{background-color:#f8f8f8;border:1px solid #ccc;font-size:13px;line-height:19px;overflow:auto;padding:6px 10px;border-radius:3px}.markdown-body pre code,.markdown-body pre tt{margin:0;padding:0;background-color:transparent;border:none}.markdown-body a{color:#4183c4;text-decoration:none}.markdown-body a:hover{text-decoration:underline}.markdown-body code,.markdown-body pre{font-size:12px;font-family:Consolas,"Liberation Mono",Courier,monospace}</style>';
        var body = '<div class="markdown-body">' + markdown.toHTML(mdeditor.getValue()) + '</div>';
        iframedoc.body.innerHTML = body;
        iframedoc.head.innerHTML = head;
        $("#mdpreview").contents().find("a").click(function(e) {
            e.preventDefault()
        });
        
    }
    
    
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

// On Markdown Input
mdeditor.on("input", function(){
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
    $('#html-pane').hide();
    $('#md-pane').show();
    mdflag = true;
    showHTMLInIFrame();
};

function disableMarkdown(){
    $('#mode').html('<span class="glyphicon glyphicon-flash"></span> Mode: HTML/CSS/JS');
    $('#md-pane').hide();
    $('#html-pane').show();
    mdflag = false;
    showHTMLInIFrame();
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
        mdeditor.getSession().setUseWrapMode(false);
        $.notify("Wrap Disabled (Default)", "info");
    } else {
        editor.getSession().setUseWrapMode(true);
        editor2.getSession().setUseWrapMode(true);
        editor3.getSession().setUseWrapMode(true);
        editor4.getSession().setUseWrapMode(true);
        editor5.getSession().setUseWrapMode(true);
        mdeditor.getSession().setUseWrapMode(true);
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
        mdeditor.setTheme("ace/theme/twilight");
        $.notify("Theme Set To Dark", "info");
    } else {
        // Light
        editor.setTheme("ace/theme/github");
        editor2.setTheme("ace/theme/github");
        editor3.setTheme("ace/theme/github");
        editor4.setTheme("ace/theme/github");
        editor5.setTheme("ace/theme/github");
        mdeditor.setTheme("ace/theme/github");
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
        $('#mdpreview').fadeIn(500, function() {
            $('#left-component-md').css("width", '50%');
            $('#vertical-devider-md').css("left", '50%');
            $('#right-component-md').css("left", '50%');
        });
        
    } else {
        $('#thepreview').fadeOut(500, function(){
            $.notify("Live Preview Hidden.", "info");
            $('#top-component').css("bottom", '100%');
            $('#horizontal-divider').css("bottom", '100%');
            $('#bottom-component').css("height", '100%');
            $('#thepreview').removeClass('iframe-norm');
            $('#thepreview').addClass('hidden-iframe');
        });
        $('#mdpreview').fadeOut(500, function(){
            $('#left-component-md').css("width", '100%');
            $('#vertical-devider-md').css("left", '100%');
            $('#right-component-md').css("left", '100%');
        });
    }
})