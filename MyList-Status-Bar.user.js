// ==UserScript==
// @name          MyList Status Bar
// @version       3.0
// @author        wiidat
// @description   UserScript for adding status bar to AniDB MyList page.
// @license       GPL-3.0
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
// @homepageURL	  https://github.com/wiidat/MyList-Status-Bar
// @updateURL	  https://raw.githubusercontent.com/wiidat/MyList-Status-Bar/master/MyList-Status-Bar.user.js
// @downloadURL	  https://raw.githubusercontent.com/wiidat/MyList-Status-Bar/master/MyList-Status-Bar.user.js
// ==/UserScript==

var url = window.location.href;

if (url.indexOf("show=mylist") > -1 && url.indexOf("show=mylist&do=add") == -1) {
         var list_url = '//anidb.net/perl-bin/animedb.pl?show=mylist';
         function getUrlVars() {
           var vars = {
           };
           var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
             vars[key] = value;
           });
           return vars;
         }
         var user_id = parseInt(getUrlVars() ['uid']);
         var char_id = getUrlVars() ['char'];
         var page_id = parseInt(getUrlVars() ['page']);
         var liststate_watching = parseInt(getUrlVars() ['liststate.watching']); //Currently Watching
         var liststate_completed = parseInt(getUrlVars() ['liststate.completed']); //Completed
         var liststate_stalled = parseInt(getUrlVars() ['liststate.stalled']); //On Hold
         var liststate_dropped = parseInt(getUrlVars() ['liststate.dropped']); //Dropped
         var liststate_collecting = parseInt(getUrlVars() ['liststate.collecting']); //Plan to Watch
         var liststate_unknown = parseInt(getUrlVars() ['liststate.unknown']); //Recently Added
         if (isNaN(user_id)) {
           var user_url = ''
         } else {
           var user_url = '&uid=' + user_id
         }
         if (typeof char_id === 'undefined') {
           var char_url = ''
         } else {
           var char_url = '&char=' + char_id
         }
         if (isNaN(page_id)) {
           page_id = 0
         }
         var page_back_id = page_id - 1;
         var page_next_id = page_id + 1;
         if (isNaN(liststate_watching)) {
           liststate_watching = 0
         }
         if (isNaN(liststate_completed)) {
           liststate_completed = 0
         }
         if (isNaN(liststate_stalled)) {
           liststate_stalled = 0
         }
         if (isNaN(liststate_dropped)) {
           liststate_dropped = 0
         }
         if (isNaN(liststate_collecting)) {
           liststate_collecting = 0
         }
         if (isNaN(liststate_unknown)) {
           liststate_unknown = 0
         }
         if (liststate_watching == 0) {
           var liststate_watching_url = ''
         } else {
           var liststate_watching_url = '&liststate.watching=1'
         }
         if (liststate_completed == 0) {
           var liststate_completed_url = ''
         } else {
           var liststate_completed_url = '&liststate.completed=1'
         }
         if (liststate_stalled == 0) {
           var liststate_stalled_url = ''
         } else {
           var liststate_stalled_url = '&liststate.stalled=1'
         }
         if (liststate_dropped == 0) {
           var liststate_dropped_url = ''
         } else {
           var liststate_dropped_url = '&liststate.dropped=1'
         }
         if (liststate_collecting == 0) {
           var liststate_collecting_url = ''
         } else {
           var liststate_collecting_url = '&liststate.collecting=1'
         }
         if (liststate_unknown == 0) {
           var liststate_unknown_url = ''
         } else {
           var liststate_unknown_url = '&liststate.unknown=1'
         }
         var a_anime = '<li><a href=\"' + list_url + user_url + '\">All Anime</a></li>'
         var w_state = '<li><a href=\"' + list_url + user_url + '&liststate.watching=1\">Watching</a></li>'
         var com_state = '<li><a href=\"' + list_url + user_url + '&liststate.completed=1\">Completed</a></li>'
         var s_state = '<li><a href=\"' + list_url + user_url + '&liststate.stalled=1\">Stalled</a></li>'
         var d_state = '<li><a href=\"' + list_url + user_url + '&liststate.dropped=1\">Dropped</a></li>'
         var col_state = '<li><a href=\"' + list_url + user_url + '&liststate.collecting=1\">Plan to Watch</a></li>'
         var u_state = '<li><a href=\"' + list_url + user_url + '&liststate.unknown=1\">Recently Added</a></li>'
         $('ul.g_list').before('<ul class=\"g_list jump\">' + a_anime + w_state + com_state + s_state + d_state + col_state + u_state + '</ul>');
      }
