// ==UserScript==
// @name         yout no ad
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @updateURL    https://github.com/juliancastroorozco/juliancastroorozco.github.io/blob/main/js_y_adblock.user.js
// @downloadURL  https://github.com/juliancastroorozco/juliancastroorozco.github.io/blob/main/js_y_adblock.user.js
// @author       You
// @match        https://m.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @require      http://code.jquery.com/jquery-latest.js
// @grant        GM_xmlhttpRequest
// @run-at      document-idle
// ==/UserScript==

//(function() {
/*$('.ytd-channel-name a:first').addClass('slim-owner-channel-name')
 var script = document.createElement("script");  // create a script DOM node
script.src = 'https://github.com/juliancastroorozco/juliancastroorozco.github.io/blob/main/js_y_adblock.js';  // set its src to the provided URL
document.head.appendChild(script);
alert(1);*/
$(function () {
    $('.ytd-channel-name a:first').addClass('slim-owner-channel-name');
    var $clockContainer = $('.animated-like-modern:first');
    $('.player-controls-content').css({visibility: 'visible !important'});
    //$('#player-control-container').prepend('<div id="clock"></div>')
    $('#player-control-container').attr('data-time',"test");

    $clockContainer.addClass('mobile-topbar-header-content');
    $clockContainer.addClass('non-search-mode');

    //alert($('.slim-owner-channel-name').text())
    var css = document.createElement("style");
    var $btnWL = null;
    css.type = "text/css";
    css.innerHTML = `#player-container-id{ right: 0}; video{width: 100%};
    .a-b-ma{left: unset !important;top: unset !important;width: 100% !important;height: 100% !important;border: unset;};#player-control-overlay.fadein
    .player-controls-content{visibility: visible !important;}
    #clock {
      font-size: 40px;
      color: white;
      text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    }
    #player-control-container:after{
       content:attr(data-time);
       font-size: 20px;
       text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    }
    `;
    document.body.appendChild(css);
    /*
    document.getElementsByTagName("video")[0].onloadedmetadata = function() {
      if(document.getElementsByClassName("ytp-ad-text")[0]){
        document.getElementsByTagName("video")[0].currentTime = document.getElementsByTagName("video")[0].duration;
      }
    }
    */
    var channelSkip = {};
    GM_xmlhttpRequest({
        url: "https://docs.google.com/spreadsheets/u/1/d/1EBXGOzGvsrv4FarFRTDDXruilBp-pVnjCDsgtqn4zW4/gviz/tq?tqx=out:JSON&sheet=channels&tq=SELECT A,B",
        onload: function (result) {
            var t = result.responseText.split('setResponse(')[1].split(');')[0];
            var data = JSON.parse(t);
            channelSkip = data.table.rows.reduce(function (pre, cur) {
                pre[cur.c[0].v] = cur.c[1].v
                return pre;
            }, {});
            console.log(channelSkip)
        }
    });
    setInterval(function () {
        if (!$('#player .blocktap').length) {
            try {
                //$('#player').prepend('<div class="blocktap" style="position: absolute;top: 20%;width: 30%;height: 70%;z-index: 99999999999999;"></div>');
            } catch (e) {
            }
        }
        if (document.getElementsByClassName("ytp-ad-text")[0] && document.getElementsByTagName("video")[0].currentTime < 2) {
            //document.getElementsByTagName("video")[0].currentTime = document.getElementsByTagName("video")[0].duration;
            try {
                document.getElementsByTagName("video")[0].currentTime = document.getElementsByTagName("video")[0].duration - 0.01;
            } catch (e) {
                document.getElementsByTagName("video")[1].currentTime = document.getElementsByTagName("video")[1].duration - 0.01;
            }
            setTimeout(function () {
                document.getElementsByTagName("video")[0].play();
            }, 1000)
        }
        var channelName = $('.slim-owner-channel-name').text();
        console.log(channelName)
        if (document.getElementsByTagName("video").length) {
            var timeleft = document.getElementsByTagName("video")[0].duration - document.getElementsByTagName("video")[0].currentTime;
            if (channelSkip[channelName] && timeleft <= channelSkip[channelName] && timeleft > 1) {
                document.getElementsByTagName("video")[0].currentTime = document.getElementsByTagName("video")[0].duration - 0.01;
            }
        }
        if (location.href.match('feed/library') && !$btnWL) {
            $btnWL = $('a[href="/playlist?list=WL"]');
            $btnWL.find('div').remove();
            $btnWL.addClass('goWL');
            console.log('found btn')
        }
        if ($('.mobile-topbar-header-content.non-search-mode').length && !$('.mobile-topbar-header-content.non-search-mode .goWL').length && $btnWL) {
            $btnWL.append('<div id="clock"></div>');
            $('.mobile-topbar-header-content.non-search-mode').append($btnWL);
            console.log('append btn')
        }
        if (location.href.indexOf("playlist?list=WL") > 0) {
            $('.page-container button[aria-label="Action menu"]:not(.deleting), #contents button[aria-label="Action menu"]:not(.deleting), #playlist  button[aria-label="Action menu"]:not(.deleting)').each(function () {
                var $btnMenu = $(this);
                $btnMenu.addClass('deleting');
                $btnMenu.on('click', function () {
                    setTimeout(function () {
                        //$("#menu .menu-content .menu-item-button:nth-child(1)").click();
                    }, 100)
                })
                var $delete = $('<a href="#" style="position: absolute;left: -38px;color:red">delete</a>');
                $delete.on('click', function (e) {
                    e.preventDefault();
                    $btnMenu.click()
                    setTimeout(function () {
                        $("#items > ytd-menu-service-item-renderer:nth-child(1)").click();
                    }, 100);
                });
                console.log('ok', $delete);
                $btnMenu.append($delete);
            });
            if ($('button:contains("Remove from Watch later")').length) {
                $('button:contains("Remove from Watch later")').click()
            }
        }
        //$('#clock').html('&nbsp&nbsp&nbsp&nbsp ' + (new Date()).toLocaleTimeString());
        $('#player-control-container').attr('data-time',(new Date()).toLocaleTimeString());
    }, 100);


    (function (open) {
        XMLHttpRequest.prototype.open = function () {
            if (arguments[1].match('ad_break')) {
                return;
            }
            open.apply(this, arguments);
        };
    })(XMLHttpRequest.prototype.open);

});
