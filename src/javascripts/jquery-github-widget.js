/*!
 * jQuery Github Widgets
 *
 * Copyright 2012, Utensil Song
 * https://github.com/utensil
 * 
 * Released under the MIT licenses.
 * 
 */

(function($){
  
  var github_widget = {
    
    createCaption: function(widget, data) {
      
      var view = widget;
      
      var user_info = data;
      
      var user_url = 'https://www.github.com/' + user_info.login;
      var user_repos_url = user_url + '/repositories';
      var user_follower_url = user_url +  '/followers';
            
      //var view_caption = $('<div class="github-widget-caption"/>');
      
      var view_stat = $('<ul class="github-widget-stat"/>');
      
      var view_user = $('<li class="github-widget-avatar" />');
      var view_user_link = $('<a />').attr('href', user_url);     
      var view_avatar = $('<img />')
                          .attr('title', user_info.login)
                          .attr('src', user_info.avatar_url);
      view_user_link.append(view_avatar);
                          
      var view_username = $('<li class="github-widget-username" />').text(user_info.login);                    
      
      var view_repos = $('<li class="github-widget-repos-count" />');
      var view_repos_link = $('<a />').attr('href', user_repos_url);
      var view_repos_count = $('<strong />').text(user_info.public_repos);
      var view_repos_text = $('<span> public repos</span>');  
      
      
      var view_follow = $('<li class="github-widget-followers-count" />');
      var view_follow_link = $('<a />').attr('href', user_follower_url);
      var view_follow_count = $('<strong />').text(user_info.followers);
      var view_follow_text = $('<span> followers</span>');        
      
      view_repos_link.append(view_repos_count).append(view_repos_text);
      view_follow_link.append(view_follow_count).append(view_follow_text);  
        
      view.append(view_stat
            .append(view_user.append(view_user_link))
            .append(view_username)
            .append(view_repos.append(view_repos_link))
            .append(view_follow.append(view_follow_link))
          );
    },
    
    createReposList : function(widget, data){
      
      var repos_info = data;
      
      //latest first
      repos_info = repos_info.reverse();
      
      var view = widget;
      
      var view_repos_list = $('<ul class="github-widget-repos-list"/>');
      for(var i in repos_info)
      {
        var rep = repos_info[i];
        
        var cur_rep = $('<li />');
        
        var rep_link = $('<a />').text(rep.name).attr('href', rep.html_url);
        
        var rep_name = $('<h3 />').append(rep_link);
        
        if(rep.fork)
        {
          rep_name.addClass('fork-flag');
        }
        
        var stat = $('<ul class="repo-stats" />');
        var language = $('<li class="language"/>').text(rep.language || '');
        
        var watchers_link = $('<a class="watchers" />').text(rep.watchers).attr('href', rep.html_url + '/watchers');        
        var watchers = $('<li />').append(watchers_link);
        
        var forks_link = $('<a class="forks" />').text(rep.forks).attr('href', rep.html_url + '/network'); 
        var forks = $('<li />').append(forks_link);
        
        stat.append(language).append(watchers).append(forks);
        
        var body = $('<div class="body" />');
        var description = $('<p class="description" />').text(rep.description);
        
        //TODO convert it to a more readable format like '2 days ago'
        // <p class="updated-at">Last updated <time class="js-relative-date" datetime="2012-03-10T18:18:34-08:00" title="2012-03-10 18:18:34">8 hours ago</time></p>
        var updated_at = $('<p class="updated-at" />').text('Last updated: ' + rep.updated_at.replace('T', ' ').replace('Z', ' '));
        
        body.append(description).append(updated_at);  
        
        cur_rep.append(stat).append(rep_name).append(body);
        
        view_repos_list.append(cur_rep);        
      }
      
      view.append(view_repos_list);      
      
    }    
  };
  
  $.fn.github_widget = function(options) {
       
    var defaults = {
      //user: jquery,      (required)  your github username
      //count: 3,          // TODO (optional) number of repos per widget page, 3 by default
      //showForks: true,  // TODO (optional) show forked repos, true by default
            
      /*
       * TODO More Options
       * 
       * - items to show (preferablly through CSS display: hidden ?)
       * - scroll or paginate
       * - the order of repositories
       */
    };
  
  var options = $.extend(defaults, options);
  
  //TODO validate options
  var this_handle = this;
  var widget = $('<div></div>').addClass('github-widget');
  this_handle.append(widget);
  
  $.ajax('https://api.github.com/users/' + options['user'], {
    type : 'get',
    dataType : 'jsonp',
    crossDomain: true,
    success: function( data ) {      
      github_widget.createCaption(widget, data.data);
      
      $.ajax('https://api.github.com/users/' + options['user'] + '/repos', {
        type : 'get',
        dataType : 'jsonp',
        crossDomain: true,
        success: function( data ) {            
           github_widget.createReposList(widget, data.data);
      }});
    }});
  
    return this;
  };
})(jQuery);