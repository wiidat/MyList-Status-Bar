// ==UserScript==
// @name          MyList Status Bar
// @version       2.0.1
// @namespace     wiidat
// @description   UserScript for adding status bar to AniDB MyList page.
// @license       GPL
// @include       http://anidb.net/perl-bin/animedb.pl?*show=mylist*
// @include       https://anidb.net/perl-bin/animedb.pl?*show=mylist*
// @exclude       http://anidb.net/perl-bin/animedb.pl?*show=mylist*do=edit.state*
// @exclude       http://anidb.net/perl-bin/animedb.pl?*show=mylist*do=cmp*
// @exclude       http://anidb.net/perl-bin/animedb.pl?*show=mylist*do=mch*
// @exclude       https://anidb.net/perl-bin/animedb.pl?*show=mylist*do=edit.state*
// @exclude       https://anidb.net/perl-bin/animedb.pl?*show=mylist*do=cmp*
// @exclude       https://anidb.net/perl-bin/animedb.pl?*show=mylist*do=mch*
// @grant         none
// @icon          http://static.anidb.net/favicon.ico
// @homepage	  https://github.com/wiidat/MyList-Status-Bar
// @updateURL	  https://raw.githubusercontent.com/wiidat/MyList-Status-Bar/master/MyList-Status-Bar.user.js
// @downloadURL	  https://raw.githubusercontent.com/wiidat/MyList-Status-Bar/master/MyList-Status-Bar.user.js
// ==/UserScript==

var url = window.location.href;

if (url.indexOf("show=mylist") > -1 && url.indexOf("show=mylist&do=add") == -1) {
   var scriptElement = document.createElement( "script" );
   scriptElement.type = "text/javascript";
   scriptElement.text = (
        "var list_url = '//anidb.net/perl-bin/animedb.pl?show=mylist';\n"+
        "function getUrlVars() {\n"+
        "  var vars = {\n"+
        "  };\n"+
        "  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {\n"+
        "    vars[key] = value;\n"+
        "  });\n"+
        "  return vars;\n"+
        "}\n"+
        "var user_id = parseInt(getUrlVars() ['uid']);\n"+
        "var char_id = getUrlVars() ['char'];\n"+
        "var page_id = parseInt(getUrlVars() ['page']);\n"+
        "var liststate_watching = parseInt(getUrlVars() ['liststate.watching']); //Currently Watching\n"+
        "var liststate_completed = parseInt(getUrlVars() ['liststate.completed']); //Completed\n"+
        "var liststate_stalled = parseInt(getUrlVars() ['liststate.stalled']); //On Hold\n"+
        "var liststate_dropped = parseInt(getUrlVars() ['liststate.dropped']); //Dropped\n"+
        "var liststate_collecting = parseInt(getUrlVars() ['liststate.collecting']); //Plan to Watch\n"+
        "var liststate_unknown = parseInt(getUrlVars() ['liststate.unknown']); //Recently Added\n"+
        "if (isNaN(user_id)) {\n"+
        "  var user_url = ''\n"+
        "} else {\n"+
        "  var user_url = '&uid=' + user_id\n"+
        "}\n"+
        "if (typeof char_id === 'undefined') {\n"+
        "  var char_url = ''\n"+
        "} else {\n"+
        "  var char_url = '&char=' + char_id\n"+
        "}\n"+
        "if (isNaN(page_id)) {\n"+
        "  page_id = 0\n"+
        "}\n"+
        "var page_back_id = page_id - 1;\n"+
        "var page_next_id = page_id + 1;\n"+
        "if (isNaN(liststate_watching)) {\n"+
        "  liststate_watching = 0\n"+
        "}\n"+
        "if (isNaN(liststate_completed)) {\n"+
        "  liststate_completed = 0\n"+
        "}\n"+
        "if (isNaN(liststate_stalled)) {\n"+
        "  liststate_stalled = 0\n"+
        "}\n"+
        "if (isNaN(liststate_dropped)) {\n"+
        "  liststate_dropped = 0\n"+
        "}\n"+
        "if (isNaN(liststate_collecting)) {\n"+
        "  liststate_collecting = 0\n"+
        "}\n"+
        "if (isNaN(liststate_unknown)) {\n"+
        "  liststate_unknown = 0\n"+
        "}\n"+
        "if (liststate_watching == 0) {\n"+
        "  var liststate_watching_url = ''\n"+
        "} else {\n"+
        "  var liststate_watching_url = '&liststate.watching=1'\n"+
        "}\n"+
        "if (liststate_completed == 0) {\n"+
        "  var liststate_completed_url = ''\n"+
        "} else {\n"+
        "  var liststate_completed_url = '&liststate.completed=1'\n"+
        "}\n"+
        "if (liststate_stalled == 0) {\n"+
        "  var liststate_stalled_url = ''\n"+
        "} else {\n"+
        "  var liststate_stalled_url = '&liststate.stalled=1'\n"+
        "}\n"+
        "if (liststate_dropped == 0) {\n"+
        "  var liststate_dropped_url = ''\n"+
        "} else {\n"+
        "  var liststate_dropped_url = '&liststate.dropped=1'\n"+
        "}\n"+
        "if (liststate_collecting == 0) {\n"+
        "  var liststate_collecting_url = ''\n"+
        "} else {\n"+
        "  var liststate_collecting_url = '&liststate.collecting=1'\n"+
        "}\n"+
        "if (liststate_unknown == 0) {\n"+
        "  var liststate_unknown_url = ''\n"+
        "} else {\n"+
        "  var liststate_unknown_url = '&liststate.unknown=1'\n"+
        "}\n"+
        "\n"+
        "var a_anime = '<li><a href=\"' + list_url + user_url + '\">All Anime</a></li>'\n"+
        "var w_state = '<li><a href=\"' + list_url + user_url + '&liststate.watching=1\">Watching</a></li>'\n"+
        "var com_state = '<li><a href=\"' + list_url + user_url + '&liststate.completed=1\">Completed</a></li>'\n"+
        "var s_state = '<li><a href=\"' + list_url + user_url + '&liststate.stalled=1\">Stalled</a></li>'\n"+
        "var d_state = '<li><a href=\"' + list_url + user_url + '&liststate.dropped=1\">Dropped</a></li>'\n"+
        "var col_state = '<li><a href=\"' + list_url + user_url + '&liststate.collecting=1\">Plan to Watch</a></li>'\n"+
        "var u_state = '<li><a href=\"' + list_url + user_url + '&liststate.unknown=1\">Recently Added</a></li>'\n"+
        "\n"+
        "$('ul.g_list').before('<ul class=\"g_list jump\">' + a_anime + w_state + com_state + s_state + d_state + col_state + u_state + '</ul>');");
		
    document.body.appendChild( scriptElement );
      }
