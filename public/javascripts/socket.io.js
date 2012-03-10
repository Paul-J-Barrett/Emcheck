


<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
        <title>lib/socket.io.js at master from LearnBoost/socket.io - GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />

    
    

    <meta content="authenticity_token" name="csrf-param" />
<meta content="tf+NhVTuc4CLKTByWJQO3fvjqh8SeNQebIztUBo1Oes=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/stylesheets/bundles/github-591f8911e626a1b572776658752065e07edbf700.css" media="screen" rel="stylesheet" type="text/css" />
    

    <script src="https://a248.e.akamai.net/assets.github.com/javascripts/bundles/jquery-6bd7d190e98b26f66e07c297fcfbe5ca057cb2fa.js" type="text/javascript"></script>
    <script src="https://a248.e.akamai.net/assets.github.com/javascripts/bundles/github-de3b828ac620f46e9ec91b15b79a31b23f096b2a.js" type="text/javascript"></script>
    

      <link rel='permalink' href='/LearnBoost/socket.io/blob/cc2270bb908cedf1490056b27fe6f45885d4576d/lib/socket.io.js'>
    

    <meta name="description" content="socket.io - Realtime application framework for Node.JS, with HTML5 WebSockets and cross-browser fallbacks support." />
  <link href="https://github.com/LearnBoost/socket.io/commits/master.atom" rel="alternate" title="Recent Commits to socket.io:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob linux env-production  ">
    


    
    <div id="main">
      <div id="header" class="true">
          <a class="logo" href="https://github.com">
            <img alt="github" class="default svg" height="45" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov6.svg?1315928456" />
            <img alt="github" class="default png" height="45" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov6.png?1315928456" />
            <!--[if (gt IE 8)|!(IE)]><!-->
            <img alt="github" class="hover svg" height="45" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov6-hover.svg?1315928456" />
            <img alt="github" class="hover png" height="45" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov6-hover.png?1315928456" />
            <!--<![endif]-->
          </a>

        <div class="topsearch">
    <!--
      make sure to use fully qualified URLs here since this nav
      is used on error pages on other domains
    -->
    <ul class="nav logged_out">
        <li class="pricing"><a href="https://github.com/plans">Signup and Pricing</a></li>
        <li class="explore"><a href="https://github.com/explore">Explore GitHub</a></li>
      <li class="features"><a href="https://github.com/features">Features</a></li>
        <li class="blog"><a href="https://github.com/blog">Blog</a></li>
      <li class="login"><a href="https://github.com/login?return_to=%2FLearnBoost%2Fsocket.io%2Fblob%2Fmaster%2Flib%2Fsocket.io.js">Login</a></li>
    </ul>
</div>

      </div>

      
            <div class="site">
      <div class="pagehead repohead vis-public   instapaper_ignore readability-menu">


      <div class="title-actions-bar">
        <h1>
          <a href="/LearnBoost">LearnBoost</a> /
          <strong><a href="/LearnBoost/socket.io" class="js-current-repository">socket.io</a></strong>
        </h1>
        



            <ul class="pagehead-actions">


        <li class="js-toggler-container watch-button-container ">
          <a href="/LearnBoost/socket.io/toggle_watch" class="minibutton btn-watch watch-button js-toggler-target" data-method="post" data-remote="true" rel="nofollow"><span><span class="icon"></span>Watch</span></a>
          <a href="/LearnBoost/socket.io/toggle_watch" class="minibutton btn-watch unwatch-button js-toggler-target" data-method="post" data-remote="true" rel="nofollow"><span><span class="icon"></span>Unwatch</span></a>
        </li>

            <li><a href="/LearnBoost/socket.io/fork" class="minibutton btn-fork fork-button" data-method="post" rel="nofollow"><span><span class="icon"></span>Fork</span></a></li>



      <li class="repostats">
        <ul class="repo-stats">
          <li class="watchers ">
            <a href="/LearnBoost/socket.io/watchers" title="Watchers" class="tooltipped downwards">
              3,364
            </a>
          </li>
          <li class="forks">
            <a href="/LearnBoost/socket.io/network" title="Forks" class="tooltipped downwards">
              354
            </a>
          </li>
        </ul>
      </li>
    </ul>

      </div>

        

  <ul class="tabs">
    <li><a href="/LearnBoost/socket.io" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/LearnBoost/socket.io/network" highlight="repo_networkrepo_fork_queue">Network</a>
    <li><a href="/LearnBoost/socket.io/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>11</span></a></li>

      <li><a href="/LearnBoost/socket.io/issues" highlight="repo_issues">Issues <span class='counter'>116</span></a></li>

      <li><a href="/LearnBoost/socket.io/wiki" highlight="repo_wiki">Wiki <span class='counter'>13</span></a></li>

    <li><a href="/LearnBoost/socket.io/graphs" highlight="repo_graphsrepo_contributors">Stats &amp; Graphs</a></li>

  </ul>

  
<div class="frame frame-center tree-finder" style="display:none"
      data-tree-list-url="/LearnBoost/socket.io/tree-list/cc2270bb908cedf1490056b27fe6f45885d4576d"
      data-blob-url-prefix="/LearnBoost/socket.io/blob/cc2270bb908cedf1490056b27fe6f45885d4576d"
    >

  <div class="breadcrumb">
    <b><a href="/LearnBoost/socket.io">socket.io</a></b> /
    <input class="tree-finder-input js-navigation-enable" type="text" name="query" autocomplete="off" spellcheck="false">
  </div>

    <div class="octotip">
      <p>
        <a href="/LearnBoost/socket.io/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever" rel="nofollow">Dismiss</a>
        <strong>Octotip:</strong> You've activated the <em>file finder</em>
        by pressing <span class="kbd">t</span> Start typing to filter the
        file list. Use <span class="kbd badmono">↑</span> and
        <span class="kbd badmono">↓</span> to navigate,
        <span class="kbd">enter</span> to view files.
      </p>
    </div>

  <table class="tree-browser" cellpadding="0" cellspacing="0">
    <tr class="js-header"><th>&nbsp;</th><th>name</th></tr>
    <tr class="js-no-results no-results" style="display: none">
      <th colspan="2">No matching files</th>
    </tr>
    <tbody class="js-results-list js-navigation-container">
    </tbody>
  </table>
</div>

<div id="jump-to-line" style="display:none">
  <h2>Jump to Line</h2>
  <form>
    <input class="textfield" type="text">
    <div class="full-button">
      <button type="submit" class="classy">
        <span>Go</span>
      </button>
    </div>
  </form>
</div>


<div class="subnav-bar">

  <ul class="actions">
    
      <li class="switcher">

        <div class="context-menu-container js-menu-container">
          <span class="text">Current branch:</span>
          <a href="#"
             class="minibutton bigger switcher context-menu-button js-menu-target js-commitish-button btn-branch repo-tree"
             data-master-branch="master"
             data-ref="master">
            <span><span class="icon"></span>master</span>
          </a>

          <div class="context-pane commitish-context js-menu-content">
            <a href="javascript:;" class="close js-menu-close"></a>
            <div class="title">Switch Branches/Tags</div>
            <div class="body pane-selector commitish-selector js-filterable-commitishes">
              <div class="filterbar">
                <div class="placeholder-field js-placeholder-field">
                  <label class="placeholder" for="context-commitish-filter-field" data-placeholder-mode="sticky">Filter branches/tags</label>
                  <input type="text" id="context-commitish-filter-field" class="commitish-filter" />
                </div>

                <ul class="tabs">
                  <li><a href="#" data-filter="branches" class="selected">Branches</a></li>
                  <li><a href="#" data-filter="tags">Tags</a></li>
                </ul>
              </div>

                <div class="commitish-item branch-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/06/lib/socket.io.js" data-name="06">06</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/develop/lib/socket.io.js" data-name="develop">develop</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/gh-pages/lib/socket.io.js" data-name="gh-pages">gh-pages</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/master/lib/socket.io.js" data-name="master">master</a>
                  </h4>
                </div>

                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.8.7/lib/socket.io.js" data-name="0.8.7">0.8.7</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.8.6/lib/socket.io.js" data-name="0.8.6">0.8.6</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.8.5/lib/socket.io.js" data-name="0.8.5">0.8.5</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.8.4/lib/socket.io.js" data-name="0.8.4">0.8.4</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.8.3/lib/socket.io.js" data-name="0.8.3">0.8.3</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.8.2/lib/socket.io.js" data-name="0.8.2">0.8.2</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.8.1/lib/socket.io.js" data-name="0.8.1">0.8.1</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.8.0/lib/socket.io.js" data-name="0.8.0">0.8.0</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.7.11/lib/socket.io.js" data-name="0.7.11">0.7.11</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.7.10/lib/socket.io.js" data-name="0.7.10">0.7.10</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.7.9/lib/socket.io.js" data-name="0.7.9">0.7.9</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.7.8/lib/socket.io.js" data-name="0.7.8">0.7.8</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.7.7/lib/socket.io.js" data-name="0.7.7">0.7.7</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.7.6/lib/socket.io.js" data-name="0.7.6">0.7.6</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.7.5/lib/socket.io.js" data-name="0.7.5">0.7.5</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.7.4/lib/socket.io.js" data-name="0.7.4">0.7.4</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.7.3/lib/socket.io.js" data-name="0.7.3">0.7.3</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.7.2/lib/socket.io.js" data-name="0.7.2">0.7.2</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.7.1/lib/socket.io.js" data-name="0.7.1">0.7.1</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.7.0/lib/socket.io.js" data-name="0.7.0">0.7.0</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.6.17/lib/socket.io.js" data-name="0.6.17">0.6.17</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.6.16/lib/socket.io.js" data-name="0.6.16">0.6.16</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.6.15/lib/socket.io.js" data-name="0.6.15">0.6.15</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.6.14/lib/socket.io.js" data-name="0.6.14">0.6.14</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.6.13/lib/socket.io.js" data-name="0.6.13">0.6.13</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.6.12/lib/socket.io.js" data-name="0.6.12">0.6.12</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.6.11/lib/socket.io.js" data-name="0.6.11">0.6.11</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.6.10/lib/socket.io.js" data-name="0.6.10">0.6.10</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.6.9/lib/socket.io.js" data-name="0.6.9">0.6.9</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.6.8/lib/socket.io.js" data-name="0.6.8">0.6.8</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.6.7/lib/socket.io.js" data-name="0.6.7">0.6.7</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.6.6/lib/socket.io.js" data-name="0.6.6">0.6.6</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.6.5/lib/socket.io.js" data-name="0.6.5">0.6.5</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.6.4/lib/socket.io.js" data-name="0.6.4">0.6.4</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.6.3/lib/socket.io.js" data-name="0.6.3">0.6.3</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.6.2/lib/socket.io.js" data-name="0.6.2">0.6.2</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.6.1/lib/socket.io.js" data-name="0.6.1">0.6.1</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.6.0/lib/socket.io.js" data-name="0.6.0">0.6.0</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.6/lib/socket.io.js" data-name="0.6">0.6</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.5.3/lib/socket.io.js" data-name="0.5.3">0.5.3</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.5.2/lib/socket.io.js" data-name="0.5.2">0.5.2</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.5.1/lib/socket.io.js" data-name="0.5.1">0.5.1</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.5/lib/socket.io.js" data-name="0.5">0.5</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.4.1/lib/socket.io.js" data-name="0.4.1">0.4.1</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.4/lib/socket.io.js" data-name="0.4">0.4</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.3.9/lib/socket.io.js" data-name="0.3.9">0.3.9</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.3.8/lib/socket.io.js" data-name="0.3.8">0.3.8</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.3.7/lib/socket.io.js" data-name="0.3.7">0.3.7</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.3.6/lib/socket.io.js" data-name="0.3.6">0.3.6</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.3.5/lib/socket.io.js" data-name="0.3.5">0.3.5</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.3.4/lib/socket.io.js" data-name="0.3.4">0.3.4</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.3.3/lib/socket.io.js" data-name="0.3.3">0.3.3</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.3.2/lib/socket.io.js" data-name="0.3.2">0.3.2</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.3.1/lib/socket.io.js" data-name="0.3.1">0.3.1</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.3/lib/socket.io.js" data-name="0.3">0.3</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.2.3/lib/socket.io.js" data-name="0.2.3">0.2.3</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.2.2/lib/socket.io.js" data-name="0.2.2">0.2.2</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.2.1/lib/socket.io.js" data-name="0.2.1">0.2.1</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.2/lib/socket.io.js" data-name="0.2">0.2</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/LearnBoost/socket.io/blob/0.1/lib/socket.io.js" data-name="0.1">0.1</a>
                  </h4>
                </div>

              <div class="no-results" style="display:none">Nothing to show</div>
            </div>
          </div><!-- /.commitish-context-context -->
        </div>

      </li>
  </ul>

  <ul class="subnav">
    <li><a href="/LearnBoost/socket.io" class="selected" highlight="repo_source">Files</a></li>
    <li><a href="/LearnBoost/socket.io/commits/master" highlight="repo_commits">Commits</a></li>
    <li><a href="/LearnBoost/socket.io/branches" class="" highlight="repo_branches">Branches <span class="counter">4</span></a></li>
    <li><a href="/LearnBoost/socket.io/tags" class="" highlight="repo_tags">Tags <span class="counter">60</span></a></li>
    <li><a href="/LearnBoost/socket.io/downloads" class="blank" highlight="repo_downloads">Downloads <span class="counter">0</span></a></li>
  </ul>

</div>

  
  
  


        

      </div><!-- /.pagehead -->

      




  
  <p class="last-commit">Latest commit to the <strong>master</strong> branch</p>

<div class="commit commit-tease js-details-container">
  <p class="commit-title ">
      <a href="/LearnBoost/socket.io/commit/cc2270bb908cedf1490056b27fe6f45885d4576d" class="message">Merge pull request </a><a href="https://github.com/LearnBoost/socket.io/issues/622" title="Location mismatch in Safari behind proxy" class="issue-link">#622</a><a href="/LearnBoost/socket.io/commit/cc2270bb908cedf1490056b27fe6f45885d4576d" class="message"> from mattrobenolt/master</a>
      <a href="javascript:;" class="minibutton expander-minibutton js-details-target"><span>…</span></a>
  </p>
    <div class="commit-desc"><pre>Location mismatch in Safari behind proxy</pre></div>
  <div class="commit-meta">
    <a href="/LearnBoost/socket.io/commit/cc2270bb908cedf1490056b27fe6f45885d4576d" class="sha-block">commit <span class="sha">cc2270bb90</span></a>

    <div class="authorship">
      <img class="gravatar" height="20" src="https://secure.gravatar.com/avatar/486e20e16ef676a02ac0299d2f92b813?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" />
      <span class="author-name"><a href="/guille">guille</a></span>
      authored <time class="js-relative-date" datetime="2011-12-05T14:04:57-08:00" title="2011-12-05 14:04:57">December 05, 2011</time>

    </div>
  </div>
</div>


  <div id="slider">

    <div class="breadcrumb" data-path="lib/socket.io.js/">
      <b><a href="/LearnBoost/socket.io/tree/5ee6b43921d57c39008534505a852b6f77f596be" class="js-rewrite-sha">socket.io</a></b> / <a href="/LearnBoost/socket.io/tree/5ee6b43921d57c39008534505a852b6f77f596be/lib" class="js-rewrite-sha">lib</a> / socket.io.js       <span style="display:none" id="clippy_32" class="clippy-text">lib/socket.io.js</span>
      
      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
              width="110"
              height="14"
              class="clippy"
              id="clippy" >
      <param name="movie" value="https://a248.e.akamai.net/assets.github.com/flash/clippy.swf?1315867478?v5"/>
      <param name="allowScriptAccess" value="always" />
      <param name="quality" value="high" />
      <param name="scale" value="noscale" />
      <param NAME="FlashVars" value="id=clippy_32&amp;copied=copied!&amp;copyto=copy to clipboard">
      <param name="bgcolor" value="#FFFFFF">
      <param name="wmode" value="opaque">
      <embed src="https://a248.e.akamai.net/assets.github.com/flash/clippy.swf?1315867478?v5"
             width="110"
             height="14"
             name="clippy"
             quality="high"
             allowScriptAccess="always"
             type="application/x-shockwave-flash"
             pluginspage="http://www.macromedia.com/go/getflashplayer"
             FlashVars="id=clippy_32&amp;copied=copied!&amp;copyto=copy to clipboard"
             bgcolor="#FFFFFF"
             wmode="opaque"
      />
      </object>
      

    </div>

    <div class="frames">
      <div class="frame frame-center" data-path="lib/socket.io.js/" data-permalink-url="/LearnBoost/socket.io/blob/5ee6b43921d57c39008534505a852b6f77f596be/lib/socket.io.js" data-title="lib/socket.io.js at master from LearnBoost/socket.io - GitHub" data-type="blob">
          <ul class="big-actions">
            <li><a class="file-edit-link minibutton js-rewrite-sha" href="/LearnBoost/socket.io/edit/5ee6b43921d57c39008534505a852b6f77f596be/lib/socket.io.js" data-method="post"><span>Edit this file</span></a></li>
          </ul>

        <div id="files">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><img alt="Txt" height="16" src="https://a248.e.akamai.net/assets.github.com/images/icons/txt.png?1315867479" width="16" /></span>
                <span class="mode" title="File Mode">100644</span>
                  <span>137 lines (103 sloc)</span>
                <span>2.088 kb</span>
              </div>
              <ul class="actions">
                <li><a href="/LearnBoost/socket.io/raw/master/lib/socket.io.js" id="raw-url">raw</a></li>
                  <li><a href="/LearnBoost/socket.io/blame/master/lib/socket.io.js">blame</a></li>
                <li><a href="/LearnBoost/socket.io/commits/master/lib/socket.io.js" rel="nofollow">history</a></li>
              </ul>
            </div>
              <div class="data type-javascript">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
</pre>
          </td>
          <td width="100%">
                <div class="highlight"><pre><div class='line' id='LC1'><br/></div><div class='line' id='LC2'><span class="cm">/*!</span></div><div class='line' id='LC3'><span class="cm"> * socket.io-node</span></div><div class='line' id='LC4'><span class="cm"> * Copyright(c) 2011 LearnBoost &lt;dev@learnboost.com&gt;</span></div><div class='line' id='LC5'><span class="cm"> * MIT Licensed</span></div><div class='line' id='LC6'><span class="cm"> */</span></div><div class='line' id='LC7'><br/></div><div class='line' id='LC8'><span class="cm">/**</span></div><div class='line' id='LC9'><span class="cm"> * Module dependencies.</span></div><div class='line' id='LC10'><span class="cm"> */</span></div><div class='line' id='LC11'><br/></div><div class='line' id='LC12'><span class="kd">var</span> <span class="nx">client</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;socket.io-client&#39;</span><span class="p">);</span></div><div class='line' id='LC13'><br/></div><div class='line' id='LC14'><span class="cm">/**</span></div><div class='line' id='LC15'><span class="cm"> * Version.</span></div><div class='line' id='LC16'><span class="cm"> */</span></div><div class='line' id='LC17'><br/></div><div class='line' id='LC18'><span class="nx">exports</span><span class="p">.</span><span class="nx">version</span> <span class="o">=</span> <span class="s1">&#39;0.8.7&#39;</span><span class="p">;</span></div><div class='line' id='LC19'><br/></div><div class='line' id='LC20'><span class="cm">/**</span></div><div class='line' id='LC21'><span class="cm"> * Supported protocol version.</span></div><div class='line' id='LC22'><span class="cm"> */</span></div><div class='line' id='LC23'><br/></div><div class='line' id='LC24'><span class="nx">exports</span><span class="p">.</span><span class="nx">protocol</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC25'><br/></div><div class='line' id='LC26'><span class="cm">/**</span></div><div class='line' id='LC27'><span class="cm"> * Client that we serve.</span></div><div class='line' id='LC28'><span class="cm"> */</span></div><div class='line' id='LC29'><br/></div><div class='line' id='LC30'><span class="nx">exports</span><span class="p">.</span><span class="nx">clientVersion</span> <span class="o">=</span> <span class="nx">client</span><span class="p">.</span><span class="nx">version</span><span class="p">;</span></div><div class='line' id='LC31'><br/></div><div class='line' id='LC32'><span class="cm">/**</span></div><div class='line' id='LC33'><span class="cm"> * Attaches a manager</span></div><div class='line' id='LC34'><span class="cm"> *</span></div><div class='line' id='LC35'><span class="cm"> * @param {HTTPServer/Number} a HTTP/S server or a port number to listen on.</span></div><div class='line' id='LC36'><span class="cm"> * @param {Object} opts to be passed to Manager and/or http server</span></div><div class='line' id='LC37'><span class="cm"> * @param {Function} callback if a port is supplied</span></div><div class='line' id='LC38'><span class="cm"> * @api public</span></div><div class='line' id='LC39'><span class="cm"> */</span></div><div class='line' id='LC40'><br/></div><div class='line' id='LC41'><span class="nx">exports</span><span class="p">.</span><span class="nx">listen</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">server</span><span class="p">,</span> <span class="nx">options</span><span class="p">,</span> <span class="nx">fn</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC42'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="s1">&#39;function&#39;</span> <span class="o">==</span> <span class="k">typeof</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fn</span> <span class="o">=</span> <span class="nx">options</span><span class="p">;</span></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC45'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC46'><br/></div><div class='line' id='LC47'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="s1">&#39;undefined&#39;</span> <span class="o">==</span> <span class="k">typeof</span> <span class="nx">server</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC48'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// create a server that listens on port 80</span></div><div class='line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">server</span> <span class="o">=</span> <span class="mi">80</span><span class="p">;</span></div><div class='line' id='LC50'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC51'><br/></div><div class='line' id='LC52'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="s1">&#39;number&#39;</span> <span class="o">==</span> <span class="k">typeof</span> <span class="nx">server</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC53'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// if a port number is passed</span></div><div class='line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">port</span> <span class="o">=</span> <span class="nx">server</span><span class="p">;</span></div><div class='line' id='LC55'><br/></div><div class='line' id='LC56'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">key</span><span class="p">)</span></div><div class='line' id='LC57'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">server</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;https&#39;</span><span class="p">).</span><span class="nx">createServer</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC58'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span></div><div class='line' id='LC59'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">server</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;http&#39;</span><span class="p">).</span><span class="nx">createServer</span><span class="p">();</span></div><div class='line' id='LC60'><br/></div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// default response</span></div><div class='line' id='LC62'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">server</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;request&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">req</span><span class="p">,</span> <span class="nx">res</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">res</span><span class="p">.</span><span class="nx">writeHead</span><span class="p">(</span><span class="mi">200</span><span class="p">);</span></div><div class='line' id='LC64'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">res</span><span class="p">.</span><span class="nx">end</span><span class="p">(</span><span class="s1">&#39;Welcome to socket.io.&#39;</span><span class="p">);</span></div><div class='line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC66'><br/></div><div class='line' id='LC67'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">server</span><span class="p">.</span><span class="nx">listen</span><span class="p">(</span><span class="nx">port</span><span class="p">,</span> <span class="nx">fn</span><span class="p">);</span></div><div class='line' id='LC68'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC69'><br/></div><div class='line' id='LC70'>&nbsp;&nbsp;<span class="c1">// otherwise assume a http/s server</span></div><div class='line' id='LC71'>&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">exports</span><span class="p">.</span><span class="nx">Manager</span><span class="p">(</span><span class="nx">server</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC72'><span class="p">};</span></div><div class='line' id='LC73'><br/></div><div class='line' id='LC74'><span class="cm">/**</span></div><div class='line' id='LC75'><span class="cm"> * Manager constructor.</span></div><div class='line' id='LC76'><span class="cm"> *</span></div><div class='line' id='LC77'><span class="cm"> * @api public</span></div><div class='line' id='LC78'><span class="cm"> */</span></div><div class='line' id='LC79'><br/></div><div class='line' id='LC80'><span class="nx">exports</span><span class="p">.</span><span class="nx">Manager</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./manager&#39;</span><span class="p">);</span></div><div class='line' id='LC81'><br/></div><div class='line' id='LC82'><span class="cm">/**</span></div><div class='line' id='LC83'><span class="cm"> * Transport constructor.</span></div><div class='line' id='LC84'><span class="cm"> *</span></div><div class='line' id='LC85'><span class="cm"> * @api public</span></div><div class='line' id='LC86'><span class="cm"> */</span></div><div class='line' id='LC87'><br/></div><div class='line' id='LC88'><span class="nx">exports</span><span class="p">.</span><span class="nx">Transport</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./transport&#39;</span><span class="p">);</span></div><div class='line' id='LC89'><br/></div><div class='line' id='LC90'><span class="cm">/**</span></div><div class='line' id='LC91'><span class="cm"> * Socket constructor.</span></div><div class='line' id='LC92'><span class="cm"> *</span></div><div class='line' id='LC93'><span class="cm"> * @api public</span></div><div class='line' id='LC94'><span class="cm"> */</span></div><div class='line' id='LC95'><br/></div><div class='line' id='LC96'><span class="nx">exports</span><span class="p">.</span><span class="nx">Socket</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./socket&#39;</span><span class="p">);</span></div><div class='line' id='LC97'><br/></div><div class='line' id='LC98'><span class="cm">/**</span></div><div class='line' id='LC99'><span class="cm"> * Static constructor.</span></div><div class='line' id='LC100'><span class="cm"> *</span></div><div class='line' id='LC101'><span class="cm"> * @api public</span></div><div class='line' id='LC102'><span class="cm"> */</span></div><div class='line' id='LC103'><br/></div><div class='line' id='LC104'><span class="nx">exports</span><span class="p">.</span><span class="nx">Static</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./static&#39;</span><span class="p">);</span></div><div class='line' id='LC105'><br/></div><div class='line' id='LC106'><span class="cm">/**</span></div><div class='line' id='LC107'><span class="cm"> * Store constructor.</span></div><div class='line' id='LC108'><span class="cm"> *</span></div><div class='line' id='LC109'><span class="cm"> * @api public</span></div><div class='line' id='LC110'><span class="cm"> */</span></div><div class='line' id='LC111'><br/></div><div class='line' id='LC112'><span class="nx">exports</span><span class="p">.</span><span class="nx">Store</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./store&#39;</span><span class="p">);</span></div><div class='line' id='LC113'><br/></div><div class='line' id='LC114'><span class="cm">/**</span></div><div class='line' id='LC115'><span class="cm"> * Memory Store constructor.</span></div><div class='line' id='LC116'><span class="cm"> *</span></div><div class='line' id='LC117'><span class="cm"> * @api public</span></div><div class='line' id='LC118'><span class="cm"> */</span></div><div class='line' id='LC119'><br/></div><div class='line' id='LC120'><span class="nx">exports</span><span class="p">.</span><span class="nx">MemoryStore</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./stores/memory&#39;</span><span class="p">);</span></div><div class='line' id='LC121'><br/></div><div class='line' id='LC122'><span class="cm">/**</span></div><div class='line' id='LC123'><span class="cm"> * Redis Store constructor.</span></div><div class='line' id='LC124'><span class="cm"> *</span></div><div class='line' id='LC125'><span class="cm"> * @api public</span></div><div class='line' id='LC126'><span class="cm"> */</span></div><div class='line' id='LC127'><br/></div><div class='line' id='LC128'><span class="nx">exports</span><span class="p">.</span><span class="nx">RedisStore</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./stores/redis&#39;</span><span class="p">);</span></div><div class='line' id='LC129'><br/></div><div class='line' id='LC130'><span class="cm">/**</span></div><div class='line' id='LC131'><span class="cm"> * Parser.</span></div><div class='line' id='LC132'><span class="cm"> *</span></div><div class='line' id='LC133'><span class="cm"> * @api public</span></div><div class='line' id='LC134'><span class="cm"> */</span></div><div class='line' id='LC135'><br/></div><div class='line' id='LC136'><span class="nx">exports</span><span class="p">.</span><span class="nx">parser</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./parser&#39;</span><span class="p">);</span></div><div class='line' id='LC137'><br/></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>
      </div>
    </div>

  </div>

<div class="frame frame-loading" style="display:none;" data-tree-list-url="/LearnBoost/socket.io/tree-list/cc2270bb908cedf1490056b27fe6f45885d4576d" data-blob-url-prefix="/LearnBoost/socket.io/blob/cc2270bb908cedf1490056b27fe6f45885d4576d">
  <img src="https://a248.e.akamai.net/assets.github.com/images/modules/ajax/big_spinner_336699.gif?1315928456" height="32" width="32">
</div>

    </div>

    </div>
    <!-- footer -->
    <div id="footer" >
      
  <div class="upper_footer">
     <div class="site" class="clearfix">

       <!--[if IE]><h4 id="blacktocat_ie">GitHub Links</h4><![endif]-->
       <![if !IE]><h4 id="blacktocat">GitHub Links</h4><![endif]>

       <ul class="footer_nav">
         <h4>GitHub</h4>
         <li><a href="https://github.com/about">About</a></li>
         <li><a href="https://github.com/blog">Blog</a></li>
         <li><a href="https://github.com/features">Features</a></li>
         <li><a href="https://github.com/contact">Contact &amp; Support</a></li>
         <li><a href="https://github.com/training">Training</a></li>
         <li><a href="http://status.github.com/">Site Status</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Tools</h4>
         <li><a href="http://mac.github.com/">GitHub for Mac</a></li>
         <li><a href="http://mobile.github.com/">Issues for iPhone</a></li>
         <li><a href="https://gist.github.com">Gist: Code Snippets</a></li>
         <li><a href="http://enterprise.github.com/">GitHub Enterprise</a></li>
         <li><a href="http://jobs.github.com/">Job Board</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Extras</h4>
         <li><a href="http://shop.github.com/">GitHub Shop</a></li>
         <li><a href="http://octodex.github.com/">The Octodex</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Documentation</h4>
         <li><a href="http://help.github.com/">GitHub Help</a></li>
         <li><a href="http://developer.github.com/">Developer API</a></li>
         <li><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></li>
         <li><a href="http://pages.github.com/">GitHub Pages</a></li>
       </ul>

     </div><!-- /.site -->
  </div><!-- /.upper_footer -->

<div class="lower_footer">
  <div class="site" class="clearfix">
    <!--[if IE]><div id="legal_ie"><![endif]-->
    <![if !IE]><div id="legal"><![endif]>
      <ul>
          <li><a href="https://github.com/site/terms">Terms of Service</a></li>
          <li><a href="https://github.com/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
      </ul>

      <p>&copy; 2011 <span id="_rrt" title="0.08165s from fe11.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    </div><!-- /#legal or /#legal_ie-->

      <div class="sponsor">
        <a href="http://www.rackspace.com" class="logo">
          <img alt="Dedicated Server" height="36" src="https://a248.e.akamai.net/assets.github.com/images/modules/footer/rackspace_logo.png?v2" width="38" />
        </a>
        Powered by the <a href="http://www.rackspace.com ">Dedicated
        Servers</a> and<br/> <a href="http://www.rackspacecloud.com">Cloud
        Computing</a> of Rackspace Hosting<span>&reg;</span>
      </div>
  </div><!-- /.site -->
</div><!-- /.lower_footer -->

    </div><!-- /#footer -->

    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column middle">
        <dl class="keyboard-mappings">
          <dt>I</dt>
          <dd>Mark selection as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>U</dt>
          <dd>Mark selection as unread</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>e</dt>
          <dd>Close selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Remove selection from view</dd>
        </dl>
      </div><!-- /.column.middle -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>
</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:
> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>

    <div class="context-overlay"></div>

    <div class="ajax-error-message">
      <p><span class="icon"></span> Something went wrong with that request. Please try again. <a href="javascript:;" class="ajax-error-dismiss">Dismiss</a></p>
    </div>

    
    
    
  </body>
</html>

