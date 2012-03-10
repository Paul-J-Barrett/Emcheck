


<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
        <title>test/vendor/underscore-1.2.2.js at master from documentcloud/backbone - GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />

    
    

    <meta content="authenticity_token" name="csrf-param" />
<meta content="tf+NhVTuc4CLKTByWJQO3fvjqh8SeNQebIztUBo1Oes=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/stylesheets/bundles/github-591f8911e626a1b572776658752065e07edbf700.css" media="screen" rel="stylesheet" type="text/css" />
    

    <script src="https://a248.e.akamai.net/assets.github.com/javascripts/bundles/jquery-6bd7d190e98b26f66e07c297fcfbe5ca057cb2fa.js" type="text/javascript"></script>
    <script src="https://a248.e.akamai.net/assets.github.com/javascripts/bundles/github-de3b828ac620f46e9ec91b15b79a31b23f096b2a.js" type="text/javascript"></script>
    

      <link rel='permalink' href='/documentcloud/backbone/blob/1400eea12a0bb067dc3997774937479fb3ee457f/test/vendor/underscore-1.2.2.js'>
    

    <meta name="description" content="backbone - Give your JS App some Backbone with Models, Views, Collections, and Events" />
  <link href="https://github.com/documentcloud/backbone/commits/master.atom" rel="alternate" title="Recent Commits to backbone:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob linux env-production  ">
    


    
    <div id="main">
      <div id="header" class="true">
          <a class="logo" href="https://github.com">
            <img alt="github" class="default svg" height="45" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov6.svg?1315858576" />
            <img alt="github" class="default png" height="45" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov6.png?1315858576" />
            <!--[if (gt IE 8)|!(IE)]><!-->
            <img alt="github" class="hover svg" height="45" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov6-hover.svg?1315858576" />
            <img alt="github" class="hover png" height="45" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov6-hover.png?1315858576" />
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
      <li class="login"><a href="https://github.com/login?return_to=%2Fdocumentcloud%2Fbackbone%2Fblob%2Fmaster%2Ftest%2Fvendor%2Funderscore-1.2.2.js">Login</a></li>
    </ul>
</div>

      </div>

      
            <div class="site">
      <div class="pagehead repohead vis-public   instapaper_ignore readability-menu">


      <div class="title-actions-bar">
        <h1>
          <a href="/documentcloud">documentcloud</a> /
          <strong><a href="/documentcloud/backbone" class="js-current-repository">backbone</a></strong>
        </h1>
        



            <ul class="pagehead-actions">


        <li class="js-toggler-container watch-button-container ">
          <a href="/documentcloud/backbone/toggle_watch" class="minibutton btn-watch watch-button js-toggler-target" data-method="post" data-remote="true" rel="nofollow"><span><span class="icon"></span>Watch</span></a>
          <a href="/documentcloud/backbone/toggle_watch" class="minibutton btn-watch unwatch-button js-toggler-target" data-method="post" data-remote="true" rel="nofollow"><span><span class="icon"></span>Unwatch</span></a>
        </li>

            <li><a href="/documentcloud/backbone/fork" class="minibutton btn-fork fork-button" data-method="post" rel="nofollow"><span><span class="icon"></span>Fork</span></a></li>



      <li class="repostats">
        <ul class="repo-stats">
          <li class="watchers ">
            <a href="/documentcloud/backbone/watchers" title="Watchers" class="tooltipped downwards">
              4,930
            </a>
          </li>
          <li class="forks">
            <a href="/documentcloud/backbone/network" title="Forks" class="tooltipped downwards">
              631
            </a>
          </li>
        </ul>
      </li>
    </ul>

      </div>

        

  <ul class="tabs">
    <li><a href="/documentcloud/backbone" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/documentcloud/backbone/network" highlight="repo_networkrepo_fork_queue">Network</a>
    <li><a href="/documentcloud/backbone/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>52</span></a></li>

      <li><a href="/documentcloud/backbone/issues" highlight="repo_issues">Issues <span class='counter'>120</span></a></li>

      <li><a href="/documentcloud/backbone/wiki" highlight="repo_wiki">Wiki <span class='counter'>9</span></a></li>

    <li><a href="/documentcloud/backbone/graphs" highlight="repo_graphsrepo_contributors">Stats &amp; Graphs</a></li>

  </ul>

  
<div class="frame frame-center tree-finder" style="display:none"
      data-tree-list-url="/documentcloud/backbone/tree-list/1400eea12a0bb067dc3997774937479fb3ee457f"
      data-blob-url-prefix="/documentcloud/backbone/blob/1400eea12a0bb067dc3997774937479fb3ee457f"
    >

  <div class="breadcrumb">
    <b><a href="/documentcloud/backbone">backbone</a></b> /
    <input class="tree-finder-input js-navigation-enable" type="text" name="query" autocomplete="off" spellcheck="false">
  </div>

    <div class="octotip">
      <p>
        <a href="/documentcloud/backbone/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever" rel="nofollow">Dismiss</a>
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
                      <a href="/documentcloud/backbone/blob/gh-pages/test/vendor/underscore-1.2.2.js" data-name="gh-pages">gh-pages</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item">
                  <h4>
                      <a href="/documentcloud/backbone/blob/master/test/vendor/underscore-1.2.2.js" data-name="master">master</a>
                  </h4>
                </div>

                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/documentcloud/backbone/blob/0.5.3/test/vendor/underscore-1.2.2.js" data-name="0.5.3">0.5.3</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/documentcloud/backbone/blob/0.5.2/test/vendor/underscore-1.2.2.js" data-name="0.5.2">0.5.2</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/documentcloud/backbone/blob/0.5.1/test/vendor/underscore-1.2.2.js" data-name="0.5.1">0.5.1</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/documentcloud/backbone/blob/0.5.0/test/vendor/underscore-1.2.2.js" data-name="0.5.0">0.5.0</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/documentcloud/backbone/blob/0.3.3/test/vendor/underscore-1.2.2.js" data-name="0.3.3">0.3.3</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/documentcloud/backbone/blob/0.3.2/test/vendor/underscore-1.2.2.js" data-name="0.3.2">0.3.2</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/documentcloud/backbone/blob/0.3.1/test/vendor/underscore-1.2.2.js" data-name="0.3.1">0.3.1</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/documentcloud/backbone/blob/0.3.0/test/vendor/underscore-1.2.2.js" data-name="0.3.0">0.3.0</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/documentcloud/backbone/blob/0.2.0/test/vendor/underscore-1.2.2.js" data-name="0.2.0">0.2.0</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/documentcloud/backbone/blob/0.1.2/test/vendor/underscore-1.2.2.js" data-name="0.1.2">0.1.2</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/documentcloud/backbone/blob/0.1.1/test/vendor/underscore-1.2.2.js" data-name="0.1.1">0.1.1</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/documentcloud/backbone/blob/0.1.0/test/vendor/underscore-1.2.2.js" data-name="0.1.0">0.1.0</a>
                  </h4>
                </div>

              <div class="no-results" style="display:none">Nothing to show</div>
            </div>
          </div><!-- /.commitish-context-context -->
        </div>

      </li>
  </ul>

  <ul class="subnav">
    <li><a href="/documentcloud/backbone" class="selected" highlight="repo_source">Files</a></li>
    <li><a href="/documentcloud/backbone/commits/master" highlight="repo_commits">Commits</a></li>
    <li><a href="/documentcloud/backbone/branches" class="" highlight="repo_branches">Branches <span class="counter">2</span></a></li>
    <li><a href="/documentcloud/backbone/tags" class="" highlight="repo_tags">Tags <span class="counter">12</span></a></li>
    <li><a href="/documentcloud/backbone/downloads" class="blank" highlight="repo_downloads">Downloads <span class="counter">0</span></a></li>
  </ul>

</div>

  
  
  


        

      </div><!-- /.pagehead -->

      




  
  <p class="last-commit">Latest commit to the <strong>master</strong> branch</p>

<div class="commit commit-tease js-details-container">
  <p class="commit-title ">
      <a href="/documentcloud/backbone/commit/1400eea12a0bb067dc3997774937479fb3ee457f" class="message">Fixes </a><a href="https://github.com/documentcloud/backbone/issues/732" title='API - Catalog of Events has inaccurate "change" and "change:[attribute]" parameters' class="issue-link">#732</a>
      
  </p>
  <div class="commit-meta">
    <a href="/documentcloud/backbone/commit/1400eea12a0bb067dc3997774937479fb3ee457f" class="sha-block">commit <span class="sha">1400eea12a</span></a>

    <div class="authorship">
      <img class="gravatar" height="20" src="https://secure.gravatar.com/avatar/32652ed5b8fbd2ecdb1c78e9ac567b4b?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" />
      <span class="author-name"><a href="/jashkenas">jashkenas</a></span>
      authored <time class="js-relative-date" datetime="2011-12-06T13:39:37-08:00" title="2011-12-06 13:39:37">December 06, 2011</time>

    </div>
  </div>
</div>


  <div id="slider">

    <div class="breadcrumb" data-path="test/vendor/underscore-1.2.2.js/">
      <b><a href="/documentcloud/backbone/tree/8adac9136ca8b194304f6b3d6d690a42c33fab6c" class="js-rewrite-sha">backbone</a></b> / <a href="/documentcloud/backbone/tree/8adac9136ca8b194304f6b3d6d690a42c33fab6c/test" class="js-rewrite-sha">test</a> / <a href="/documentcloud/backbone/tree/8adac9136ca8b194304f6b3d6d690a42c33fab6c/test/vendor" class="js-rewrite-sha">vendor</a> / underscore-1.2.2.js       <span style="display:none" id="clippy_550" class="clippy-text">test/vendor/underscore-1.2.2.js</span>
      
      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
              width="110"
              height="14"
              class="clippy"
              id="clippy" >
      <param name="movie" value="https://a248.e.akamai.net/assets.github.com/flash/clippy.swf?1302750674?v5"/>
      <param name="allowScriptAccess" value="always" />
      <param name="quality" value="high" />
      <param name="scale" value="noscale" />
      <param NAME="FlashVars" value="id=clippy_550&amp;copied=copied!&amp;copyto=copy to clipboard">
      <param name="bgcolor" value="#FFFFFF">
      <param name="wmode" value="opaque">
      <embed src="https://a248.e.akamai.net/assets.github.com/flash/clippy.swf?1302750674?v5"
             width="110"
             height="14"
             name="clippy"
             quality="high"
             allowScriptAccess="always"
             type="application/x-shockwave-flash"
             pluginspage="http://www.macromedia.com/go/getflashplayer"
             FlashVars="id=clippy_550&amp;copied=copied!&amp;copyto=copy to clipboard"
             bgcolor="#FFFFFF"
             wmode="opaque"
      />
      </object>
      

    </div>

    <div class="frames">
      <div class="frame frame-center" data-path="test/vendor/underscore-1.2.2.js/" data-permalink-url="/documentcloud/backbone/blob/8adac9136ca8b194304f6b3d6d690a42c33fab6c/test/vendor/underscore-1.2.2.js" data-title="test/vendor/underscore-1.2.2.js at master from documentcloud/backbone - GitHub" data-type="blob">
          <ul class="big-actions">
            <li><a class="file-edit-link minibutton js-rewrite-sha" href="/documentcloud/backbone/edit/8adac9136ca8b194304f6b3d6d690a42c33fab6c/test/vendor/underscore-1.2.2.js" data-method="post" rel="nofollow"><span>Edit this file</span></a></li>
          </ul>

        <div id="files">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><img alt="Txt" height="16" src="https://a248.e.akamai.net/assets.github.com/images/icons/txt.png?1302750674" width="16" /></span>
                <span class="mode" title="File Mode">100644</span>
                  <span>978 lines (869 sloc)</span>
                <span>34.498 kb</span>
              </div>
              <ul class="actions">
                <li><a href="/documentcloud/backbone/raw/master/test/vendor/underscore-1.2.2.js" id="raw-url">raw</a></li>
                  <li><a href="/documentcloud/backbone/blame/master/test/vendor/underscore-1.2.2.js">blame</a></li>
                <li><a href="/documentcloud/backbone/commits/master/test/vendor/underscore-1.2.2.js" rel="nofollow">history</a></li>
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
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>
<span id="L606" rel="#L606">606</span>
<span id="L607" rel="#L607">607</span>
<span id="L608" rel="#L608">608</span>
<span id="L609" rel="#L609">609</span>
<span id="L610" rel="#L610">610</span>
<span id="L611" rel="#L611">611</span>
<span id="L612" rel="#L612">612</span>
<span id="L613" rel="#L613">613</span>
<span id="L614" rel="#L614">614</span>
<span id="L615" rel="#L615">615</span>
<span id="L616" rel="#L616">616</span>
<span id="L617" rel="#L617">617</span>
<span id="L618" rel="#L618">618</span>
<span id="L619" rel="#L619">619</span>
<span id="L620" rel="#L620">620</span>
<span id="L621" rel="#L621">621</span>
<span id="L622" rel="#L622">622</span>
<span id="L623" rel="#L623">623</span>
<span id="L624" rel="#L624">624</span>
<span id="L625" rel="#L625">625</span>
<span id="L626" rel="#L626">626</span>
<span id="L627" rel="#L627">627</span>
<span id="L628" rel="#L628">628</span>
<span id="L629" rel="#L629">629</span>
<span id="L630" rel="#L630">630</span>
<span id="L631" rel="#L631">631</span>
<span id="L632" rel="#L632">632</span>
<span id="L633" rel="#L633">633</span>
<span id="L634" rel="#L634">634</span>
<span id="L635" rel="#L635">635</span>
<span id="L636" rel="#L636">636</span>
<span id="L637" rel="#L637">637</span>
<span id="L638" rel="#L638">638</span>
<span id="L639" rel="#L639">639</span>
<span id="L640" rel="#L640">640</span>
<span id="L641" rel="#L641">641</span>
<span id="L642" rel="#L642">642</span>
<span id="L643" rel="#L643">643</span>
<span id="L644" rel="#L644">644</span>
<span id="L645" rel="#L645">645</span>
<span id="L646" rel="#L646">646</span>
<span id="L647" rel="#L647">647</span>
<span id="L648" rel="#L648">648</span>
<span id="L649" rel="#L649">649</span>
<span id="L650" rel="#L650">650</span>
<span id="L651" rel="#L651">651</span>
<span id="L652" rel="#L652">652</span>
<span id="L653" rel="#L653">653</span>
<span id="L654" rel="#L654">654</span>
<span id="L655" rel="#L655">655</span>
<span id="L656" rel="#L656">656</span>
<span id="L657" rel="#L657">657</span>
<span id="L658" rel="#L658">658</span>
<span id="L659" rel="#L659">659</span>
<span id="L660" rel="#L660">660</span>
<span id="L661" rel="#L661">661</span>
<span id="L662" rel="#L662">662</span>
<span id="L663" rel="#L663">663</span>
<span id="L664" rel="#L664">664</span>
<span id="L665" rel="#L665">665</span>
<span id="L666" rel="#L666">666</span>
<span id="L667" rel="#L667">667</span>
<span id="L668" rel="#L668">668</span>
<span id="L669" rel="#L669">669</span>
<span id="L670" rel="#L670">670</span>
<span id="L671" rel="#L671">671</span>
<span id="L672" rel="#L672">672</span>
<span id="L673" rel="#L673">673</span>
<span id="L674" rel="#L674">674</span>
<span id="L675" rel="#L675">675</span>
<span id="L676" rel="#L676">676</span>
<span id="L677" rel="#L677">677</span>
<span id="L678" rel="#L678">678</span>
<span id="L679" rel="#L679">679</span>
<span id="L680" rel="#L680">680</span>
<span id="L681" rel="#L681">681</span>
<span id="L682" rel="#L682">682</span>
<span id="L683" rel="#L683">683</span>
<span id="L684" rel="#L684">684</span>
<span id="L685" rel="#L685">685</span>
<span id="L686" rel="#L686">686</span>
<span id="L687" rel="#L687">687</span>
<span id="L688" rel="#L688">688</span>
<span id="L689" rel="#L689">689</span>
<span id="L690" rel="#L690">690</span>
<span id="L691" rel="#L691">691</span>
<span id="L692" rel="#L692">692</span>
<span id="L693" rel="#L693">693</span>
<span id="L694" rel="#L694">694</span>
<span id="L695" rel="#L695">695</span>
<span id="L696" rel="#L696">696</span>
<span id="L697" rel="#L697">697</span>
<span id="L698" rel="#L698">698</span>
<span id="L699" rel="#L699">699</span>
<span id="L700" rel="#L700">700</span>
<span id="L701" rel="#L701">701</span>
<span id="L702" rel="#L702">702</span>
<span id="L703" rel="#L703">703</span>
<span id="L704" rel="#L704">704</span>
<span id="L705" rel="#L705">705</span>
<span id="L706" rel="#L706">706</span>
<span id="L707" rel="#L707">707</span>
<span id="L708" rel="#L708">708</span>
<span id="L709" rel="#L709">709</span>
<span id="L710" rel="#L710">710</span>
<span id="L711" rel="#L711">711</span>
<span id="L712" rel="#L712">712</span>
<span id="L713" rel="#L713">713</span>
<span id="L714" rel="#L714">714</span>
<span id="L715" rel="#L715">715</span>
<span id="L716" rel="#L716">716</span>
<span id="L717" rel="#L717">717</span>
<span id="L718" rel="#L718">718</span>
<span id="L719" rel="#L719">719</span>
<span id="L720" rel="#L720">720</span>
<span id="L721" rel="#L721">721</span>
<span id="L722" rel="#L722">722</span>
<span id="L723" rel="#L723">723</span>
<span id="L724" rel="#L724">724</span>
<span id="L725" rel="#L725">725</span>
<span id="L726" rel="#L726">726</span>
<span id="L727" rel="#L727">727</span>
<span id="L728" rel="#L728">728</span>
<span id="L729" rel="#L729">729</span>
<span id="L730" rel="#L730">730</span>
<span id="L731" rel="#L731">731</span>
<span id="L732" rel="#L732">732</span>
<span id="L733" rel="#L733">733</span>
<span id="L734" rel="#L734">734</span>
<span id="L735" rel="#L735">735</span>
<span id="L736" rel="#L736">736</span>
<span id="L737" rel="#L737">737</span>
<span id="L738" rel="#L738">738</span>
<span id="L739" rel="#L739">739</span>
<span id="L740" rel="#L740">740</span>
<span id="L741" rel="#L741">741</span>
<span id="L742" rel="#L742">742</span>
<span id="L743" rel="#L743">743</span>
<span id="L744" rel="#L744">744</span>
<span id="L745" rel="#L745">745</span>
<span id="L746" rel="#L746">746</span>
<span id="L747" rel="#L747">747</span>
<span id="L748" rel="#L748">748</span>
<span id="L749" rel="#L749">749</span>
<span id="L750" rel="#L750">750</span>
<span id="L751" rel="#L751">751</span>
<span id="L752" rel="#L752">752</span>
<span id="L753" rel="#L753">753</span>
<span id="L754" rel="#L754">754</span>
<span id="L755" rel="#L755">755</span>
<span id="L756" rel="#L756">756</span>
<span id="L757" rel="#L757">757</span>
<span id="L758" rel="#L758">758</span>
<span id="L759" rel="#L759">759</span>
<span id="L760" rel="#L760">760</span>
<span id="L761" rel="#L761">761</span>
<span id="L762" rel="#L762">762</span>
<span id="L763" rel="#L763">763</span>
<span id="L764" rel="#L764">764</span>
<span id="L765" rel="#L765">765</span>
<span id="L766" rel="#L766">766</span>
<span id="L767" rel="#L767">767</span>
<span id="L768" rel="#L768">768</span>
<span id="L769" rel="#L769">769</span>
<span id="L770" rel="#L770">770</span>
<span id="L771" rel="#L771">771</span>
<span id="L772" rel="#L772">772</span>
<span id="L773" rel="#L773">773</span>
<span id="L774" rel="#L774">774</span>
<span id="L775" rel="#L775">775</span>
<span id="L776" rel="#L776">776</span>
<span id="L777" rel="#L777">777</span>
<span id="L778" rel="#L778">778</span>
<span id="L779" rel="#L779">779</span>
<span id="L780" rel="#L780">780</span>
<span id="L781" rel="#L781">781</span>
<span id="L782" rel="#L782">782</span>
<span id="L783" rel="#L783">783</span>
<span id="L784" rel="#L784">784</span>
<span id="L785" rel="#L785">785</span>
<span id="L786" rel="#L786">786</span>
<span id="L787" rel="#L787">787</span>
<span id="L788" rel="#L788">788</span>
<span id="L789" rel="#L789">789</span>
<span id="L790" rel="#L790">790</span>
<span id="L791" rel="#L791">791</span>
<span id="L792" rel="#L792">792</span>
<span id="L793" rel="#L793">793</span>
<span id="L794" rel="#L794">794</span>
<span id="L795" rel="#L795">795</span>
<span id="L796" rel="#L796">796</span>
<span id="L797" rel="#L797">797</span>
<span id="L798" rel="#L798">798</span>
<span id="L799" rel="#L799">799</span>
<span id="L800" rel="#L800">800</span>
<span id="L801" rel="#L801">801</span>
<span id="L802" rel="#L802">802</span>
<span id="L803" rel="#L803">803</span>
<span id="L804" rel="#L804">804</span>
<span id="L805" rel="#L805">805</span>
<span id="L806" rel="#L806">806</span>
<span id="L807" rel="#L807">807</span>
<span id="L808" rel="#L808">808</span>
<span id="L809" rel="#L809">809</span>
<span id="L810" rel="#L810">810</span>
<span id="L811" rel="#L811">811</span>
<span id="L812" rel="#L812">812</span>
<span id="L813" rel="#L813">813</span>
<span id="L814" rel="#L814">814</span>
<span id="L815" rel="#L815">815</span>
<span id="L816" rel="#L816">816</span>
<span id="L817" rel="#L817">817</span>
<span id="L818" rel="#L818">818</span>
<span id="L819" rel="#L819">819</span>
<span id="L820" rel="#L820">820</span>
<span id="L821" rel="#L821">821</span>
<span id="L822" rel="#L822">822</span>
<span id="L823" rel="#L823">823</span>
<span id="L824" rel="#L824">824</span>
<span id="L825" rel="#L825">825</span>
<span id="L826" rel="#L826">826</span>
<span id="L827" rel="#L827">827</span>
<span id="L828" rel="#L828">828</span>
<span id="L829" rel="#L829">829</span>
<span id="L830" rel="#L830">830</span>
<span id="L831" rel="#L831">831</span>
<span id="L832" rel="#L832">832</span>
<span id="L833" rel="#L833">833</span>
<span id="L834" rel="#L834">834</span>
<span id="L835" rel="#L835">835</span>
<span id="L836" rel="#L836">836</span>
<span id="L837" rel="#L837">837</span>
<span id="L838" rel="#L838">838</span>
<span id="L839" rel="#L839">839</span>
<span id="L840" rel="#L840">840</span>
<span id="L841" rel="#L841">841</span>
<span id="L842" rel="#L842">842</span>
<span id="L843" rel="#L843">843</span>
<span id="L844" rel="#L844">844</span>
<span id="L845" rel="#L845">845</span>
<span id="L846" rel="#L846">846</span>
<span id="L847" rel="#L847">847</span>
<span id="L848" rel="#L848">848</span>
<span id="L849" rel="#L849">849</span>
<span id="L850" rel="#L850">850</span>
<span id="L851" rel="#L851">851</span>
<span id="L852" rel="#L852">852</span>
<span id="L853" rel="#L853">853</span>
<span id="L854" rel="#L854">854</span>
<span id="L855" rel="#L855">855</span>
<span id="L856" rel="#L856">856</span>
<span id="L857" rel="#L857">857</span>
<span id="L858" rel="#L858">858</span>
<span id="L859" rel="#L859">859</span>
<span id="L860" rel="#L860">860</span>
<span id="L861" rel="#L861">861</span>
<span id="L862" rel="#L862">862</span>
<span id="L863" rel="#L863">863</span>
<span id="L864" rel="#L864">864</span>
<span id="L865" rel="#L865">865</span>
<span id="L866" rel="#L866">866</span>
<span id="L867" rel="#L867">867</span>
<span id="L868" rel="#L868">868</span>
<span id="L869" rel="#L869">869</span>
<span id="L870" rel="#L870">870</span>
<span id="L871" rel="#L871">871</span>
<span id="L872" rel="#L872">872</span>
<span id="L873" rel="#L873">873</span>
<span id="L874" rel="#L874">874</span>
<span id="L875" rel="#L875">875</span>
<span id="L876" rel="#L876">876</span>
<span id="L877" rel="#L877">877</span>
<span id="L878" rel="#L878">878</span>
<span id="L879" rel="#L879">879</span>
<span id="L880" rel="#L880">880</span>
<span id="L881" rel="#L881">881</span>
<span id="L882" rel="#L882">882</span>
<span id="L883" rel="#L883">883</span>
<span id="L884" rel="#L884">884</span>
<span id="L885" rel="#L885">885</span>
<span id="L886" rel="#L886">886</span>
<span id="L887" rel="#L887">887</span>
<span id="L888" rel="#L888">888</span>
<span id="L889" rel="#L889">889</span>
<span id="L890" rel="#L890">890</span>
<span id="L891" rel="#L891">891</span>
<span id="L892" rel="#L892">892</span>
<span id="L893" rel="#L893">893</span>
<span id="L894" rel="#L894">894</span>
<span id="L895" rel="#L895">895</span>
<span id="L896" rel="#L896">896</span>
<span id="L897" rel="#L897">897</span>
<span id="L898" rel="#L898">898</span>
<span id="L899" rel="#L899">899</span>
<span id="L900" rel="#L900">900</span>
<span id="L901" rel="#L901">901</span>
<span id="L902" rel="#L902">902</span>
<span id="L903" rel="#L903">903</span>
<span id="L904" rel="#L904">904</span>
<span id="L905" rel="#L905">905</span>
<span id="L906" rel="#L906">906</span>
<span id="L907" rel="#L907">907</span>
<span id="L908" rel="#L908">908</span>
<span id="L909" rel="#L909">909</span>
<span id="L910" rel="#L910">910</span>
<span id="L911" rel="#L911">911</span>
<span id="L912" rel="#L912">912</span>
<span id="L913" rel="#L913">913</span>
<span id="L914" rel="#L914">914</span>
<span id="L915" rel="#L915">915</span>
<span id="L916" rel="#L916">916</span>
<span id="L917" rel="#L917">917</span>
<span id="L918" rel="#L918">918</span>
<span id="L919" rel="#L919">919</span>
<span id="L920" rel="#L920">920</span>
<span id="L921" rel="#L921">921</span>
<span id="L922" rel="#L922">922</span>
<span id="L923" rel="#L923">923</span>
<span id="L924" rel="#L924">924</span>
<span id="L925" rel="#L925">925</span>
<span id="L926" rel="#L926">926</span>
<span id="L927" rel="#L927">927</span>
<span id="L928" rel="#L928">928</span>
<span id="L929" rel="#L929">929</span>
<span id="L930" rel="#L930">930</span>
<span id="L931" rel="#L931">931</span>
<span id="L932" rel="#L932">932</span>
<span id="L933" rel="#L933">933</span>
<span id="L934" rel="#L934">934</span>
<span id="L935" rel="#L935">935</span>
<span id="L936" rel="#L936">936</span>
<span id="L937" rel="#L937">937</span>
<span id="L938" rel="#L938">938</span>
<span id="L939" rel="#L939">939</span>
<span id="L940" rel="#L940">940</span>
<span id="L941" rel="#L941">941</span>
<span id="L942" rel="#L942">942</span>
<span id="L943" rel="#L943">943</span>
<span id="L944" rel="#L944">944</span>
<span id="L945" rel="#L945">945</span>
<span id="L946" rel="#L946">946</span>
<span id="L947" rel="#L947">947</span>
<span id="L948" rel="#L948">948</span>
<span id="L949" rel="#L949">949</span>
<span id="L950" rel="#L950">950</span>
<span id="L951" rel="#L951">951</span>
<span id="L952" rel="#L952">952</span>
<span id="L953" rel="#L953">953</span>
<span id="L954" rel="#L954">954</span>
<span id="L955" rel="#L955">955</span>
<span id="L956" rel="#L956">956</span>
<span id="L957" rel="#L957">957</span>
<span id="L958" rel="#L958">958</span>
<span id="L959" rel="#L959">959</span>
<span id="L960" rel="#L960">960</span>
<span id="L961" rel="#L961">961</span>
<span id="L962" rel="#L962">962</span>
<span id="L963" rel="#L963">963</span>
<span id="L964" rel="#L964">964</span>
<span id="L965" rel="#L965">965</span>
<span id="L966" rel="#L966">966</span>
<span id="L967" rel="#L967">967</span>
<span id="L968" rel="#L968">968</span>
<span id="L969" rel="#L969">969</span>
<span id="L970" rel="#L970">970</span>
<span id="L971" rel="#L971">971</span>
<span id="L972" rel="#L972">972</span>
<span id="L973" rel="#L973">973</span>
<span id="L974" rel="#L974">974</span>
<span id="L975" rel="#L975">975</span>
<span id="L976" rel="#L976">976</span>
<span id="L977" rel="#L977">977</span>
<span id="L978" rel="#L978">978</span>
</pre>
          </td>
          <td width="100%">
                <div class="highlight"><pre><div class='line' id='LC1'><span class="c1">//     Underscore.js 1.2.2</span></div><div class='line' id='LC2'><span class="c1">//     (c) 2011 Jeremy Ashkenas, DocumentCloud Inc.</span></div><div class='line' id='LC3'><span class="c1">//     Underscore is freely distributable under the MIT license.</span></div><div class='line' id='LC4'><span class="c1">//     Portions of Underscore are inspired or borrowed from Prototype,</span></div><div class='line' id='LC5'><span class="c1">//     Oliver Steele&#39;s Functional, and John Resig&#39;s Micro-Templating.</span></div><div class='line' id='LC6'><span class="c1">//     For all details and documentation:</span></div><div class='line' id='LC7'><span class="c1">//     http://documentcloud.github.com/underscore</span></div><div class='line' id='LC8'><br/></div><div class='line' id='LC9'><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC10'><br/></div><div class='line' id='LC11'>&nbsp;&nbsp;<span class="c1">// Baseline setup</span></div><div class='line' id='LC12'>&nbsp;&nbsp;<span class="c1">// --------------</span></div><div class='line' id='LC13'><br/></div><div class='line' id='LC14'>&nbsp;&nbsp;<span class="c1">// Establish the root object, `window` in the browser, or `global` on the server.</span></div><div class='line' id='LC15'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">root</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC16'><br/></div><div class='line' id='LC17'>&nbsp;&nbsp;<span class="c1">// Save the previous value of the `_` variable.</span></div><div class='line' id='LC18'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">previousUnderscore</span> <span class="o">=</span> <span class="nx">root</span><span class="p">.</span><span class="nx">_</span><span class="p">;</span></div><div class='line' id='LC19'><br/></div><div class='line' id='LC20'>&nbsp;&nbsp;<span class="c1">// Establish the object that gets returned to break out of a loop iteration.</span></div><div class='line' id='LC21'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">breaker</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC22'><br/></div><div class='line' id='LC23'>&nbsp;&nbsp;<span class="c1">// Save bytes in the minified (but not gzipped) version:</span></div><div class='line' id='LC24'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">ArrayProto</span> <span class="o">=</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="nx">ObjProto</span> <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="nx">FuncProto</span> <span class="o">=</span> <span class="nb">Function</span><span class="p">.</span><span class="nx">prototype</span><span class="p">;</span></div><div class='line' id='LC25'><br/></div><div class='line' id='LC26'>&nbsp;&nbsp;<span class="c1">// Create quick reference variables for speed access to core prototypes.</span></div><div class='line' id='LC27'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">slice</span>            <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">.</span><span class="nx">slice</span><span class="p">,</span></div><div class='line' id='LC28'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">unshift</span>          <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">.</span><span class="nx">unshift</span><span class="p">,</span></div><div class='line' id='LC29'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toString</span>         <span class="o">=</span> <span class="nx">ObjProto</span><span class="p">.</span><span class="nx">toString</span><span class="p">,</span></div><div class='line' id='LC30'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">hasOwnProperty</span>   <span class="o">=</span> <span class="nx">ObjProto</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">;</span></div><div class='line' id='LC31'><br/></div><div class='line' id='LC32'>&nbsp;&nbsp;<span class="c1">// All **ECMAScript 5** native function implementations that we hope to use</span></div><div class='line' id='LC33'>&nbsp;&nbsp;<span class="c1">// are declared here.</span></div><div class='line' id='LC34'>&nbsp;&nbsp;<span class="kd">var</span></div><div class='line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeForEach</span>      <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">.</span><span class="nx">forEach</span><span class="p">,</span></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeMap</span>          <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">.</span><span class="nx">map</span><span class="p">,</span></div><div class='line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeReduce</span>       <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">.</span><span class="nx">reduce</span><span class="p">,</span></div><div class='line' id='LC38'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeReduceRight</span>  <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">.</span><span class="nx">reduceRight</span><span class="p">,</span></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeFilter</span>       <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">.</span><span class="nx">filter</span><span class="p">,</span></div><div class='line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeEvery</span>        <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">.</span><span class="nx">every</span><span class="p">,</span></div><div class='line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeSome</span>         <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">.</span><span class="nx">some</span><span class="p">,</span></div><div class='line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeIndexOf</span>      <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">,</span></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeLastIndexOf</span>  <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">.</span><span class="nx">lastIndexOf</span><span class="p">,</span></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeIsArray</span>      <span class="o">=</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">isArray</span><span class="p">,</span></div><div class='line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeKeys</span>         <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">keys</span><span class="p">,</span></div><div class='line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeBind</span>         <span class="o">=</span> <span class="nx">FuncProto</span><span class="p">.</span><span class="nx">bind</span><span class="p">;</span></div><div class='line' id='LC47'><br/></div><div class='line' id='LC48'>&nbsp;&nbsp;<span class="c1">// Create a safe reference to the Underscore object for use below.</span></div><div class='line' id='LC49'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">_</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="k">new</span> <span class="nx">wrapper</span><span class="p">(</span><span class="nx">obj</span><span class="p">);</span> <span class="p">};</span></div><div class='line' id='LC50'><br/></div><div class='line' id='LC51'>&nbsp;&nbsp;<span class="c1">// Export the Underscore object for **Node.js** and **&quot;CommonJS&quot;**, with</span></div><div class='line' id='LC52'>&nbsp;&nbsp;<span class="c1">// backwards-compatibility for the old `require()` API. If we&#39;re not in</span></div><div class='line' id='LC53'>&nbsp;&nbsp;<span class="c1">// CommonJS, add `_` to the global object.</span></div><div class='line' id='LC54'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">exports</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC55'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">module</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">module</span><span class="p">.</span><span class="nx">exports</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC56'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exports</span> <span class="o">=</span> <span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">_</span><span class="p">;</span></div><div class='line' id='LC57'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC58'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exports</span><span class="p">.</span><span class="nx">_</span> <span class="o">=</span> <span class="nx">_</span><span class="p">;</span></div><div class='line' id='LC59'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">define</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">define</span><span class="p">.</span><span class="nx">amd</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC60'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Register as a named module with AMD.</span></div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">define</span><span class="p">(</span><span class="s1">&#39;underscore&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC62'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">;</span></div><div class='line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC64'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Exported as a string, for Closure Compiler &quot;advanced&quot; mode.</span></div><div class='line' id='LC66'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">root</span><span class="p">[</span><span class="s1">&#39;_&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">_</span><span class="p">;</span></div><div class='line' id='LC67'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC68'><br/></div><div class='line' id='LC69'>&nbsp;&nbsp;<span class="c1">// Current version.</span></div><div class='line' id='LC70'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">VERSION</span> <span class="o">=</span> <span class="s1">&#39;1.2.2&#39;</span><span class="p">;</span></div><div class='line' id='LC71'><br/></div><div class='line' id='LC72'>&nbsp;&nbsp;<span class="c1">// Collection Functions</span></div><div class='line' id='LC73'>&nbsp;&nbsp;<span class="c1">// --------------------</span></div><div class='line' id='LC74'><br/></div><div class='line' id='LC75'>&nbsp;&nbsp;<span class="c1">// The cornerstone, an `each` implementation, aka `forEach`.</span></div><div class='line' id='LC76'>&nbsp;&nbsp;<span class="c1">// Handles objects with the built-in `forEach`, arrays, and raw objects.</span></div><div class='line' id='LC77'>&nbsp;&nbsp;<span class="c1">// Delegates to **ECMAScript 5**&#39;s native `forEach` if available.</span></div><div class='line' id='LC78'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">each</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">each</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">forEach</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC80'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nativeForEach</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">forEach</span> <span class="o">===</span> <span class="nx">nativeForEach</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC81'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">obj</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">);</span></div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="o">+</span><span class="nx">obj</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC84'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">i</span> <span class="k">in</span> <span class="nx">obj</span> <span class="o">&amp;&amp;</span> <span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">obj</span><span class="p">)</span> <span class="o">===</span> <span class="nx">breaker</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC88'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">hasOwnProperty</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">key</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">key</span><span class="p">],</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">obj</span><span class="p">)</span> <span class="o">===</span> <span class="nx">breaker</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC90'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC92'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC93'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC94'><br/></div><div class='line' id='LC95'>&nbsp;&nbsp;<span class="c1">// Return the results of applying the iterator to each element.</span></div><div class='line' id='LC96'>&nbsp;&nbsp;<span class="c1">// Delegates to **ECMAScript 5**&#39;s native `map` if available.</span></div><div class='line' id='LC97'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">map</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC98'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">results</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC99'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="nx">results</span><span class="p">;</span></div><div class='line' id='LC100'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nativeMap</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">map</span> <span class="o">===</span> <span class="nx">nativeMap</span><span class="p">)</span> <span class="k">return</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">);</span></div><div class='line' id='LC101'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC102'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">results</span><span class="p">[</span><span class="nx">results</span><span class="p">.</span><span class="nx">length</span><span class="p">]</span> <span class="o">=</span> <span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">);</span></div><div class='line' id='LC103'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC104'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">results</span><span class="p">;</span></div><div class='line' id='LC105'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC106'><br/></div><div class='line' id='LC107'>&nbsp;&nbsp;<span class="c1">// **Reduce** builds up a single result from a list of values, aka `inject`,</span></div><div class='line' id='LC108'>&nbsp;&nbsp;<span class="c1">// or `foldl`. Delegates to **ECMAScript 5**&#39;s native `reduce` if available.</span></div><div class='line' id='LC109'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">reduce</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">foldl</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">inject</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">memo</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">initial</span> <span class="o">=</span> <span class="nx">memo</span> <span class="o">!==</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC111'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="nx">obj</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nativeReduce</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">reduce</span> <span class="o">===</span> <span class="nx">nativeReduce</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">context</span><span class="p">)</span> <span class="nx">iterator</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">);</span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">initial</span> <span class="o">?</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">reduce</span><span class="p">(</span><span class="nx">iterator</span><span class="p">,</span> <span class="nx">memo</span><span class="p">)</span> <span class="o">:</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">reduce</span><span class="p">(</span><span class="nx">iterator</span><span class="p">);</span></div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC116'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">initial</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">memo</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">initial</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">memo</span> <span class="o">=</span> <span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">memo</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">);</span></div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">initial</span><span class="p">)</span> <span class="k">throw</span> <span class="k">new</span> <span class="nx">TypeError</span><span class="p">(</span><span class="s2">&quot;Reduce of empty array with no initial value&quot;</span><span class="p">);</span></div><div class='line' id='LC125'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">memo</span><span class="p">;</span></div><div class='line' id='LC126'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC127'><br/></div><div class='line' id='LC128'>&nbsp;&nbsp;<span class="c1">// The right-associative version of reduce, also known as `foldr`.</span></div><div class='line' id='LC129'>&nbsp;&nbsp;<span class="c1">// Delegates to **ECMAScript 5**&#39;s native `reduceRight` if available.</span></div><div class='line' id='LC130'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">reduceRight</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">foldr</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">memo</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC131'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="nx">obj</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC132'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nativeReduceRight</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">reduceRight</span> <span class="o">===</span> <span class="nx">nativeReduceRight</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC133'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">context</span><span class="p">)</span> <span class="nx">iterator</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">);</span></div><div class='line' id='LC134'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">memo</span> <span class="o">!==</span> <span class="k">void</span> <span class="mi">0</span> <span class="o">?</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">reduceRight</span><span class="p">(</span><span class="nx">iterator</span><span class="p">,</span> <span class="nx">memo</span><span class="p">)</span> <span class="o">:</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">reduceRight</span><span class="p">(</span><span class="nx">iterator</span><span class="p">);</span></div><div class='line' id='LC135'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC136'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">reversed</span> <span class="o">=</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">?</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">slice</span><span class="p">()</span> <span class="o">:</span> <span class="nx">_</span><span class="p">.</span><span class="nx">toArray</span><span class="p">(</span><span class="nx">obj</span><span class="p">)).</span><span class="nx">reverse</span><span class="p">();</span></div><div class='line' id='LC137'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">reduce</span><span class="p">(</span><span class="nx">reversed</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">memo</span><span class="p">,</span> <span class="nx">context</span><span class="p">);</span></div><div class='line' id='LC138'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC139'><br/></div><div class='line' id='LC140'>&nbsp;&nbsp;<span class="c1">// Return the first value which passes a truth test. Aliased as `detect`.</span></div><div class='line' id='LC141'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">find</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">detect</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC142'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC143'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">any</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC144'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC145'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC146'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC148'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC149'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC150'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC151'><br/></div><div class='line' id='LC152'>&nbsp;&nbsp;<span class="c1">// Return all the elements that pass a truth test.</span></div><div class='line' id='LC153'>&nbsp;&nbsp;<span class="c1">// Delegates to **ECMAScript 5**&#39;s native `filter` if available.</span></div><div class='line' id='LC154'>&nbsp;&nbsp;<span class="c1">// Aliased as `select`.</span></div><div class='line' id='LC155'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">filter</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">select</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC156'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">results</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC157'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="nx">results</span><span class="p">;</span></div><div class='line' id='LC158'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nativeFilter</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">filter</span> <span class="o">===</span> <span class="nx">nativeFilter</span><span class="p">)</span> <span class="k">return</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">);</span></div><div class='line' id='LC159'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC160'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">))</span> <span class="nx">results</span><span class="p">[</span><span class="nx">results</span><span class="p">.</span><span class="nx">length</span><span class="p">]</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC161'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC162'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">results</span><span class="p">;</span></div><div class='line' id='LC163'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC164'><br/></div><div class='line' id='LC165'>&nbsp;&nbsp;<span class="c1">// Return all the elements for which a truth test fails.</span></div><div class='line' id='LC166'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">reject</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC167'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">results</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC168'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="nx">results</span><span class="p">;</span></div><div class='line' id='LC169'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC170'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">))</span> <span class="nx">results</span><span class="p">[</span><span class="nx">results</span><span class="p">.</span><span class="nx">length</span><span class="p">]</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC171'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC172'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">results</span><span class="p">;</span></div><div class='line' id='LC173'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC174'><br/></div><div class='line' id='LC175'>&nbsp;&nbsp;<span class="c1">// Determine whether all of the elements match a truth test.</span></div><div class='line' id='LC176'>&nbsp;&nbsp;<span class="c1">// Delegates to **ECMAScript 5**&#39;s native `every` if available.</span></div><div class='line' id='LC177'>&nbsp;&nbsp;<span class="c1">// Aliased as `all`.</span></div><div class='line' id='LC178'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">every</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">all</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC179'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC180'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC181'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nativeEvery</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">every</span> <span class="o">===</span> <span class="nx">nativeEvery</span><span class="p">)</span> <span class="k">return</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">every</span><span class="p">(</span><span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">);</span></div><div class='line' id='LC182'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC183'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">result</span> <span class="o">=</span> <span class="nx">result</span> <span class="o">&amp;&amp;</span> <span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)))</span> <span class="k">return</span> <span class="nx">breaker</span><span class="p">;</span></div><div class='line' id='LC184'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC185'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC186'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC187'><br/></div><div class='line' id='LC188'>&nbsp;&nbsp;<span class="c1">// Determine if at least one element in the object matches a truth test.</span></div><div class='line' id='LC189'>&nbsp;&nbsp;<span class="c1">// Delegates to **ECMAScript 5**&#39;s native `some` if available.</span></div><div class='line' id='LC190'>&nbsp;&nbsp;<span class="c1">// Aliased as `any`.</span></div><div class='line' id='LC191'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">any</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">some</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">any</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC192'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iterator</span> <span class="o">=</span> <span class="nx">iterator</span> <span class="o">||</span> <span class="nx">_</span><span class="p">.</span><span class="nx">identity</span><span class="p">;</span></div><div class='line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC194'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC195'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nativeSome</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">some</span> <span class="o">===</span> <span class="nx">nativeSome</span><span class="p">)</span> <span class="k">return</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">some</span><span class="p">(</span><span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">);</span></div><div class='line' id='LC196'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC197'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">result</span> <span class="o">||</span> <span class="p">(</span><span class="nx">result</span> <span class="o">=</span> <span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)))</span> <span class="k">return</span> <span class="nx">breaker</span><span class="p">;</span></div><div class='line' id='LC198'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC199'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">!!</span><span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC200'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC201'><br/></div><div class='line' id='LC202'>&nbsp;&nbsp;<span class="c1">// Determine if a given value is included in the array or object using `===`.</span></div><div class='line' id='LC203'>&nbsp;&nbsp;<span class="c1">// Aliased as `contains`.</span></div><div class='line' id='LC204'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">include</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">contains</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">target</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC205'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">found</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC206'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="nx">found</span><span class="p">;</span></div><div class='line' id='LC207'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nativeIndexOf</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">indexOf</span> <span class="o">===</span> <span class="nx">nativeIndexOf</span><span class="p">)</span> <span class="k">return</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">target</span><span class="p">)</span> <span class="o">!=</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC208'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">found</span> <span class="o">=</span> <span class="nx">any</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC209'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">value</span> <span class="o">===</span> <span class="nx">target</span><span class="p">;</span></div><div class='line' id='LC210'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC211'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">found</span><span class="p">;</span></div><div class='line' id='LC212'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC213'><br/></div><div class='line' id='LC214'>&nbsp;&nbsp;<span class="c1">// Invoke a method (with arguments) on every item in a collection.</span></div><div class='line' id='LC215'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">invoke</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">method</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC216'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC217'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC218'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span><span class="nx">method</span><span class="p">.</span><span class="nx">call</span> <span class="o">?</span> <span class="nx">method</span> <span class="o">||</span> <span class="nx">value</span> <span class="o">:</span> <span class="nx">value</span><span class="p">[</span><span class="nx">method</span><span class="p">]).</span><span class="nx">apply</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC219'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC220'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC221'><br/></div><div class='line' id='LC222'>&nbsp;&nbsp;<span class="c1">// Convenience version of a common use case of `map`: fetching a property.</span></div><div class='line' id='LC223'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">pluck</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC224'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">){</span> <span class="k">return</span> <span class="nx">value</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span> <span class="p">});</span></div><div class='line' id='LC225'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC226'><br/></div><div class='line' id='LC227'>&nbsp;&nbsp;<span class="c1">// Return the maximum element or (element-based computation).</span></div><div class='line' id='LC228'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">max</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC229'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">iterator</span> <span class="o">&amp;&amp;</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">obj</span><span class="p">))</span> <span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nb">Math</span><span class="p">,</span> <span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC230'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">iterator</span> <span class="o">&amp;&amp;</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isEmpty</span><span class="p">(</span><span class="nx">obj</span><span class="p">))</span> <span class="k">return</span> <span class="o">-</span><span class="kc">Infinity</span><span class="p">;</span></div><div class='line' id='LC231'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="p">{</span><span class="nx">computed</span> <span class="o">:</span> <span class="o">-</span><span class="kc">Infinity</span><span class="p">};</span></div><div class='line' id='LC232'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC233'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">computed</span> <span class="o">=</span> <span class="nx">iterator</span> <span class="o">?</span> <span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="o">:</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC234'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">computed</span> <span class="o">&gt;=</span> <span class="nx">result</span><span class="p">.</span><span class="nx">computed</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">result</span> <span class="o">=</span> <span class="p">{</span><span class="nx">value</span> <span class="o">:</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">computed</span> <span class="o">:</span> <span class="nx">computed</span><span class="p">});</span></div><div class='line' id='LC235'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC236'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">.</span><span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC237'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC238'><br/></div><div class='line' id='LC239'>&nbsp;&nbsp;<span class="c1">// Return the minimum element (or element-based computation).</span></div><div class='line' id='LC240'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">min</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC241'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">iterator</span> <span class="o">&amp;&amp;</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">obj</span><span class="p">))</span> <span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nb">Math</span><span class="p">,</span> <span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC242'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">iterator</span> <span class="o">&amp;&amp;</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isEmpty</span><span class="p">(</span><span class="nx">obj</span><span class="p">))</span> <span class="k">return</span> <span class="kc">Infinity</span><span class="p">;</span></div><div class='line' id='LC243'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="p">{</span><span class="nx">computed</span> <span class="o">:</span> <span class="kc">Infinity</span><span class="p">};</span></div><div class='line' id='LC244'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC245'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">computed</span> <span class="o">=</span> <span class="nx">iterator</span> <span class="o">?</span> <span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="o">:</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC246'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">computed</span> <span class="o">&lt;</span> <span class="nx">result</span><span class="p">.</span><span class="nx">computed</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">result</span> <span class="o">=</span> <span class="p">{</span><span class="nx">value</span> <span class="o">:</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">computed</span> <span class="o">:</span> <span class="nx">computed</span><span class="p">});</span></div><div class='line' id='LC247'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC248'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">.</span><span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC249'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC250'><br/></div><div class='line' id='LC251'>&nbsp;&nbsp;<span class="c1">// Shuffle an array.</span></div><div class='line' id='LC252'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">shuffle</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC253'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">shuffled</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">rand</span><span class="p">;</span></div><div class='line' id='LC254'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC255'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">index</span> <span class="o">==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC256'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">shuffled</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC257'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC258'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rand</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">()</span> <span class="o">*</span> <span class="p">(</span><span class="nx">index</span> <span class="o">+</span> <span class="mi">1</span><span class="p">));</span></div><div class='line' id='LC259'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">shuffled</span><span class="p">[</span><span class="nx">index</span><span class="p">]</span> <span class="o">=</span> <span class="nx">shuffled</span><span class="p">[</span><span class="nx">rand</span><span class="p">];</span></div><div class='line' id='LC260'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">shuffled</span><span class="p">[</span><span class="nx">rand</span><span class="p">]</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC261'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC262'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC263'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">shuffled</span><span class="p">;</span></div><div class='line' id='LC264'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC265'><br/></div><div class='line' id='LC266'>&nbsp;&nbsp;<span class="c1">// Sort the object&#39;s values by a criterion produced by an iterator.</span></div><div class='line' id='LC267'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">sortBy</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC268'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">pluck</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC269'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC270'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span> <span class="o">:</span> <span class="nx">value</span><span class="p">,</span></div><div class='line' id='LC271'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">criteria</span> <span class="o">:</span> <span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span></div><div class='line' id='LC272'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC273'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}).</span><span class="nx">sort</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">left</span><span class="p">,</span> <span class="nx">right</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC274'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">a</span> <span class="o">=</span> <span class="nx">left</span><span class="p">.</span><span class="nx">criteria</span><span class="p">,</span> <span class="nx">b</span> <span class="o">=</span> <span class="nx">right</span><span class="p">.</span><span class="nx">criteria</span><span class="p">;</span></div><div class='line' id='LC275'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">a</span> <span class="o">&lt;</span> <span class="nx">b</span> <span class="o">?</span> <span class="o">-</span><span class="mi">1</span> <span class="o">:</span> <span class="nx">a</span> <span class="o">&gt;</span> <span class="nx">b</span> <span class="o">?</span> <span class="mi">1</span> <span class="o">:</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC276'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}),</span> <span class="s1">&#39;value&#39;</span><span class="p">);</span></div><div class='line' id='LC277'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC278'><br/></div><div class='line' id='LC279'>&nbsp;&nbsp;<span class="c1">// Groups the object&#39;s values by a criterion. Pass either a string attribute</span></div><div class='line' id='LC280'>&nbsp;&nbsp;<span class="c1">// to group by, or a function that returns the criterion.</span></div><div class='line' id='LC281'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">groupBy</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">val</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC282'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC283'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">iterator</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="o">?</span> <span class="nx">val</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">val</span><span class="p">];</span> <span class="p">};</span></div><div class='line' id='LC284'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC285'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">key</span> <span class="o">=</span> <span class="nx">iterator</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">);</span></div><div class='line' id='LC286'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">result</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">||</span> <span class="p">(</span><span class="nx">result</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="p">[])).</span><span class="nx">push</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC287'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC288'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC289'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC290'><br/></div><div class='line' id='LC291'>&nbsp;&nbsp;<span class="c1">// Use a comparator function to figure out at what index an object should</span></div><div class='line' id='LC292'>&nbsp;&nbsp;<span class="c1">// be inserted so as to maintain order. Uses binary search.</span></div><div class='line' id='LC293'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">sortedIndex</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC294'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iterator</span> <span class="o">||</span> <span class="p">(</span><span class="nx">iterator</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">identity</span><span class="p">);</span></div><div class='line' id='LC295'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">low</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">high</span> <span class="o">=</span> <span class="nx">array</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC296'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="nx">low</span> <span class="o">&lt;</span> <span class="nx">high</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC297'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">mid</span> <span class="o">=</span> <span class="p">(</span><span class="nx">low</span> <span class="o">+</span> <span class="nx">high</span><span class="p">)</span> <span class="o">&gt;&gt;</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC298'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iterator</span><span class="p">(</span><span class="nx">array</span><span class="p">[</span><span class="nx">mid</span><span class="p">])</span> <span class="o">&lt;</span> <span class="nx">iterator</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">?</span> <span class="nx">low</span> <span class="o">=</span> <span class="nx">mid</span> <span class="o">+</span> <span class="mi">1</span> <span class="o">:</span> <span class="nx">high</span> <span class="o">=</span> <span class="nx">mid</span><span class="p">;</span></div><div class='line' id='LC299'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC300'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">low</span><span class="p">;</span></div><div class='line' id='LC301'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC302'><br/></div><div class='line' id='LC303'>&nbsp;&nbsp;<span class="c1">// Safely convert anything iterable into a real, live array.</span></div><div class='line' id='LC304'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">toArray</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">iterable</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC305'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">iterable</span><span class="p">)</span>                <span class="k">return</span> <span class="p">[];</span></div><div class='line' id='LC306'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">iterable</span><span class="p">.</span><span class="nx">toArray</span><span class="p">)</span>         <span class="k">return</span> <span class="nx">iterable</span><span class="p">.</span><span class="nx">toArray</span><span class="p">();</span></div><div class='line' id='LC307'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">iterable</span><span class="p">))</span>      <span class="k">return</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">iterable</span><span class="p">);</span></div><div class='line' id='LC308'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isArguments</span><span class="p">(</span><span class="nx">iterable</span><span class="p">))</span>  <span class="k">return</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">iterable</span><span class="p">);</span></div><div class='line' id='LC309'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">values</span><span class="p">(</span><span class="nx">iterable</span><span class="p">);</span></div><div class='line' id='LC310'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC311'><br/></div><div class='line' id='LC312'>&nbsp;&nbsp;<span class="c1">// Return the number of elements in an object.</span></div><div class='line' id='LC313'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">size</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC314'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">toArray</span><span class="p">(</span><span class="nx">obj</span><span class="p">).</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC315'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC316'><br/></div><div class='line' id='LC317'>&nbsp;&nbsp;<span class="c1">// Array Functions</span></div><div class='line' id='LC318'>&nbsp;&nbsp;<span class="c1">// ---------------</span></div><div class='line' id='LC319'><br/></div><div class='line' id='LC320'>&nbsp;&nbsp;<span class="c1">// Get the first element of an array. Passing **n** will return the first N</span></div><div class='line' id='LC321'>&nbsp;&nbsp;<span class="c1">// values in the array. Aliased as `head`. The **guard** check allows it to work</span></div><div class='line' id='LC322'>&nbsp;&nbsp;<span class="c1">// with `_.map`.</span></div><div class='line' id='LC323'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">first</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">head</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">n</span><span class="p">,</span> <span class="nx">guard</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC324'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span><span class="nx">n</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">guard</span> <span class="o">?</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">n</span><span class="p">)</span> <span class="o">:</span> <span class="nx">array</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC325'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC326'><br/></div><div class='line' id='LC327'>&nbsp;&nbsp;<span class="c1">// Returns everything but the last entry of the array. Especcialy useful on</span></div><div class='line' id='LC328'>&nbsp;&nbsp;<span class="c1">// the arguments object. Passing **n** will return all the values in</span></div><div class='line' id='LC329'>&nbsp;&nbsp;<span class="c1">// the array, excluding the last N. The **guard** check allows it to work with</span></div><div class='line' id='LC330'>&nbsp;&nbsp;<span class="c1">// `_.map`.</span></div><div class='line' id='LC331'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">initial</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">n</span><span class="p">,</span> <span class="nx">guard</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC332'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">array</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="p">((</span><span class="nx">n</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="o">||</span> <span class="nx">guard</span> <span class="o">?</span> <span class="mi">1</span> <span class="o">:</span> <span class="nx">n</span><span class="p">));</span></div><div class='line' id='LC333'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC334'><br/></div><div class='line' id='LC335'>&nbsp;&nbsp;<span class="c1">// Get the last element of an array. Passing **n** will return the last N</span></div><div class='line' id='LC336'>&nbsp;&nbsp;<span class="c1">// values in the array. The **guard** check allows it to work with `_.map`.</span></div><div class='line' id='LC337'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">last</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">n</span><span class="p">,</span> <span class="nx">guard</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC338'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">((</span><span class="nx">n</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">guard</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC339'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nx">array</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="nx">n</span><span class="p">,</span> <span class="mi">0</span><span class="p">));</span></div><div class='line' id='LC340'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC341'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">array</span><span class="p">[</span><span class="nx">array</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC342'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC343'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC344'><br/></div><div class='line' id='LC345'>&nbsp;&nbsp;<span class="c1">// Returns everything but the first entry of the array. Aliased as `tail`.</span></div><div class='line' id='LC346'>&nbsp;&nbsp;<span class="c1">// Especially useful on the arguments object. Passing an **index** will return</span></div><div class='line' id='LC347'>&nbsp;&nbsp;<span class="c1">// the rest of the values in the array from that index onward. The **guard**</span></div><div class='line' id='LC348'>&nbsp;&nbsp;<span class="c1">// check allows it to work with `_.map`.</span></div><div class='line' id='LC349'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">rest</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">tail</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">guard</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC350'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="p">(</span><span class="nx">index</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="o">||</span> <span class="nx">guard</span> <span class="o">?</span> <span class="mi">1</span> <span class="o">:</span> <span class="nx">index</span><span class="p">);</span></div><div class='line' id='LC351'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC352'><br/></div><div class='line' id='LC353'>&nbsp;&nbsp;<span class="c1">// Trim out all falsy values from an array.</span></div><div class='line' id='LC354'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">compact</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC355'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">){</span> <span class="k">return</span> <span class="o">!!</span><span class="nx">value</span><span class="p">;</span> <span class="p">});</span></div><div class='line' id='LC356'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC357'><br/></div><div class='line' id='LC358'>&nbsp;&nbsp;<span class="c1">// Return a completely flattened version of an array.</span></div><div class='line' id='LC359'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">flatten</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">shallow</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC360'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">reduce</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">memo</span><span class="p">,</span> <span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC361'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="k">return</span> <span class="nx">memo</span><span class="p">.</span><span class="nx">concat</span><span class="p">(</span><span class="nx">shallow</span> <span class="o">?</span> <span class="nx">value</span> <span class="o">:</span> <span class="nx">_</span><span class="p">.</span><span class="nx">flatten</span><span class="p">(</span><span class="nx">value</span><span class="p">));</span></div><div class='line' id='LC362'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">memo</span><span class="p">[</span><span class="nx">memo</span><span class="p">.</span><span class="nx">length</span><span class="p">]</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC363'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">memo</span><span class="p">;</span></div><div class='line' id='LC364'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="p">[]);</span></div><div class='line' id='LC365'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC366'><br/></div><div class='line' id='LC367'>&nbsp;&nbsp;<span class="c1">// Return a version of the array that does not contain the specified value(s).</span></div><div class='line' id='LC368'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">without</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC369'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">difference</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">));</span></div><div class='line' id='LC370'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC371'><br/></div><div class='line' id='LC372'>&nbsp;&nbsp;<span class="c1">// Produce a duplicate-free version of the array. If the array has already</span></div><div class='line' id='LC373'>&nbsp;&nbsp;<span class="c1">// been sorted, you have the option of using a faster algorithm.</span></div><div class='line' id='LC374'>&nbsp;&nbsp;<span class="c1">// Aliased as `unique`.</span></div><div class='line' id='LC375'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">uniq</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">unique</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">isSorted</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC376'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">initial</span> <span class="o">=</span> <span class="nx">iterator</span> <span class="o">?</span> <span class="nx">_</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">)</span> <span class="o">:</span> <span class="nx">array</span><span class="p">;</span></div><div class='line' id='LC377'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC378'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">reduce</span><span class="p">(</span><span class="nx">initial</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">memo</span><span class="p">,</span> <span class="nx">el</span><span class="p">,</span> <span class="nx">i</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC379'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="mi">0</span> <span class="o">==</span> <span class="nx">i</span> <span class="o">||</span> <span class="p">(</span><span class="nx">isSorted</span> <span class="o">===</span> <span class="kc">true</span> <span class="o">?</span> <span class="nx">_</span><span class="p">.</span><span class="nx">last</span><span class="p">(</span><span class="nx">memo</span><span class="p">)</span> <span class="o">!=</span> <span class="nx">el</span> <span class="o">:</span> <span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">include</span><span class="p">(</span><span class="nx">memo</span><span class="p">,</span> <span class="nx">el</span><span class="p">)))</span> <span class="p">{</span></div><div class='line' id='LC380'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">memo</span><span class="p">[</span><span class="nx">memo</span><span class="p">.</span><span class="nx">length</span><span class="p">]</span> <span class="o">=</span> <span class="nx">el</span><span class="p">;</span></div><div class='line' id='LC381'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span><span class="p">[</span><span class="nx">result</span><span class="p">.</span><span class="nx">length</span><span class="p">]</span> <span class="o">=</span> <span class="nx">array</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC382'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC383'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">memo</span><span class="p">;</span></div><div class='line' id='LC384'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="p">[]);</span></div><div class='line' id='LC385'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC386'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC387'><br/></div><div class='line' id='LC388'>&nbsp;&nbsp;<span class="c1">// Produce an array that contains the union: each distinct element from all of</span></div><div class='line' id='LC389'>&nbsp;&nbsp;<span class="c1">// the passed-in arrays.</span></div><div class='line' id='LC390'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">union</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC391'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">uniq</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">flatten</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="kc">true</span><span class="p">));</span></div><div class='line' id='LC392'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC393'><br/></div><div class='line' id='LC394'>&nbsp;&nbsp;<span class="c1">// Produce an array that contains every item shared between all the</span></div><div class='line' id='LC395'>&nbsp;&nbsp;<span class="c1">// passed-in arrays. (Aliased as &quot;intersect&quot; for back-compat.)</span></div><div class='line' id='LC396'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">intersection</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">intersect</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC397'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">rest</span> <span class="o">=</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC398'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">uniq</span><span class="p">(</span><span class="nx">array</span><span class="p">),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC399'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">every</span><span class="p">(</span><span class="nx">rest</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">other</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC400'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">other</span><span class="p">,</span> <span class="nx">item</span><span class="p">)</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC401'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC402'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC403'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC404'><br/></div><div class='line' id='LC405'>&nbsp;&nbsp;<span class="c1">// Take the difference between one array and another.</span></div><div class='line' id='LC406'>&nbsp;&nbsp;<span class="c1">// Only the elements present in just the first array will remain.</span></div><div class='line' id='LC407'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">difference</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">other</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC408'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">){</span> <span class="k">return</span> <span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">include</span><span class="p">(</span><span class="nx">other</span><span class="p">,</span> <span class="nx">value</span><span class="p">);</span> <span class="p">});</span></div><div class='line' id='LC409'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC410'><br/></div><div class='line' id='LC411'>&nbsp;&nbsp;<span class="c1">// Zip together multiple lists into a single array -- elements that share</span></div><div class='line' id='LC412'>&nbsp;&nbsp;<span class="c1">// an index go together.</span></div><div class='line' id='LC413'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">zip</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC414'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC415'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">length</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">pluck</span><span class="p">(</span><span class="nx">args</span><span class="p">,</span> <span class="s1">&#39;length&#39;</span><span class="p">));</span></div><div class='line' id='LC416'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">results</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Array</span><span class="p">(</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC417'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="nx">results</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">pluck</span><span class="p">(</span><span class="nx">args</span><span class="p">,</span> <span class="s2">&quot;&quot;</span> <span class="o">+</span> <span class="nx">i</span><span class="p">);</span></div><div class='line' id='LC418'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">results</span><span class="p">;</span></div><div class='line' id='LC419'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC420'><br/></div><div class='line' id='LC421'>&nbsp;&nbsp;<span class="c1">// If the browser doesn&#39;t supply us with indexOf (I&#39;m looking at you, **MSIE**),</span></div><div class='line' id='LC422'>&nbsp;&nbsp;<span class="c1">// we need this function. Return the position of the first occurrence of an</span></div><div class='line' id='LC423'>&nbsp;&nbsp;<span class="c1">// item in an array, or -1 if the item is not included in the array.</span></div><div class='line' id='LC424'>&nbsp;&nbsp;<span class="c1">// Delegates to **ECMAScript 5**&#39;s native `indexOf` if available.</span></div><div class='line' id='LC425'>&nbsp;&nbsp;<span class="c1">// If the array is large and already in sort order, pass `true`</span></div><div class='line' id='LC426'>&nbsp;&nbsp;<span class="c1">// for **isSorted** to use binary search.</span></div><div class='line' id='LC427'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">indexOf</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">item</span><span class="p">,</span> <span class="nx">isSorted</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC428'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">array</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC429'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">l</span><span class="p">;</span></div><div class='line' id='LC430'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isSorted</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC431'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">i</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">sortedIndex</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">item</span><span class="p">);</span></div><div class='line' id='LC432'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">array</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">===</span> <span class="nx">item</span> <span class="o">?</span> <span class="nx">i</span> <span class="o">:</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC433'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC434'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nativeIndexOf</span> <span class="o">&amp;&amp;</span> <span class="nx">array</span><span class="p">.</span><span class="nx">indexOf</span> <span class="o">===</span> <span class="nx">nativeIndexOf</span><span class="p">)</span> <span class="k">return</span> <span class="nx">array</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">item</span><span class="p">);</span></div><div class='line' id='LC435'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">array</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="k">if</span> <span class="p">(</span><span class="nx">array</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">===</span> <span class="nx">item</span><span class="p">)</span> <span class="k">return</span> <span class="nx">i</span><span class="p">;</span></div><div class='line' id='LC436'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC437'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC438'><br/></div><div class='line' id='LC439'>&nbsp;&nbsp;<span class="c1">// Delegates to **ECMAScript 5**&#39;s native `lastIndexOf` if available.</span></div><div class='line' id='LC440'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">lastIndexOf</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">item</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC441'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">array</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC442'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nativeLastIndexOf</span> <span class="o">&amp;&amp;</span> <span class="nx">array</span><span class="p">.</span><span class="nx">lastIndexOf</span> <span class="o">===</span> <span class="nx">nativeLastIndexOf</span><span class="p">)</span> <span class="k">return</span> <span class="nx">array</span><span class="p">.</span><span class="nx">lastIndexOf</span><span class="p">(</span><span class="nx">item</span><span class="p">);</span></div><div class='line' id='LC443'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="nx">array</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC444'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="nx">i</span><span class="o">--</span><span class="p">)</span> <span class="k">if</span> <span class="p">(</span><span class="nx">array</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">===</span> <span class="nx">item</span><span class="p">)</span> <span class="k">return</span> <span class="nx">i</span><span class="p">;</span></div><div class='line' id='LC445'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC446'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC447'><br/></div><div class='line' id='LC448'>&nbsp;&nbsp;<span class="c1">// Generate an integer Array containing an arithmetic progression. A port of</span></div><div class='line' id='LC449'>&nbsp;&nbsp;<span class="c1">// the native Python `range()` function. See</span></div><div class='line' id='LC450'>&nbsp;&nbsp;<span class="c1">// [the Python documentation](http://docs.python.org/library/functions.html#range).</span></div><div class='line' id='LC451'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">range</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">start</span><span class="p">,</span> <span class="nx">stop</span><span class="p">,</span> <span class="nx">step</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC452'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span> <span class="o">&lt;=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC453'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">stop</span> <span class="o">=</span> <span class="nx">start</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC454'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">start</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC455'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC456'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">step</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="o">||</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC457'><br/></div><div class='line' id='LC458'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">len</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">ceil</span><span class="p">((</span><span class="nx">stop</span> <span class="o">-</span> <span class="nx">start</span><span class="p">)</span> <span class="o">/</span> <span class="nx">step</span><span class="p">),</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC459'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">idx</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC460'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">range</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Array</span><span class="p">(</span><span class="nx">len</span><span class="p">);</span></div><div class='line' id='LC461'><br/></div><div class='line' id='LC462'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span><span class="p">(</span><span class="nx">idx</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC463'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">range</span><span class="p">[</span><span class="nx">idx</span><span class="o">++</span><span class="p">]</span> <span class="o">=</span> <span class="nx">start</span><span class="p">;</span></div><div class='line' id='LC464'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">start</span> <span class="o">+=</span> <span class="nx">step</span><span class="p">;</span></div><div class='line' id='LC465'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC466'><br/></div><div class='line' id='LC467'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">range</span><span class="p">;</span></div><div class='line' id='LC468'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC469'><br/></div><div class='line' id='LC470'>&nbsp;&nbsp;<span class="c1">// Function (ahem) Functions</span></div><div class='line' id='LC471'>&nbsp;&nbsp;<span class="c1">// ------------------</span></div><div class='line' id='LC472'><br/></div><div class='line' id='LC473'>&nbsp;&nbsp;<span class="c1">// Reusable constructor function for prototype setting.</span></div><div class='line' id='LC474'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">ctor</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){};</span></div><div class='line' id='LC475'><br/></div><div class='line' id='LC476'>&nbsp;&nbsp;<span class="c1">// Create a function bound to a given object (assigning `this`, and arguments,</span></div><div class='line' id='LC477'>&nbsp;&nbsp;<span class="c1">// optionally). Binding with arguments is also known as `curry`.</span></div><div class='line' id='LC478'>&nbsp;&nbsp;<span class="c1">// Delegates to **ECMAScript 5**&#39;s native `Function.bind` if available.</span></div><div class='line' id='LC479'>&nbsp;&nbsp;<span class="c1">// We check for `func.bind` first, to fail fast when `func` is undefined.</span></div><div class='line' id='LC480'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">bind</span> <span class="o">=</span> <span class="kd">function</span> <span class="nx">bind</span><span class="p">(</span><span class="nx">func</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC481'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">bound</span><span class="p">,</span> <span class="nx">args</span><span class="p">;</span></div><div class='line' id='LC482'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">func</span><span class="p">.</span><span class="nx">bind</span> <span class="o">===</span> <span class="nx">nativeBind</span> <span class="o">&amp;&amp;</span> <span class="nx">nativeBind</span><span class="p">)</span> <span class="k">return</span> <span class="nx">nativeBind</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">func</span><span class="p">,</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">));</span></div><div class='line' id='LC483'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">func</span><span class="p">))</span> <span class="k">throw</span> <span class="k">new</span> <span class="nx">TypeError</span><span class="p">;</span></div><div class='line' id='LC484'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">args</span> <span class="o">=</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC485'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">bound</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC486'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="k">this</span> <span class="k">instanceof</span> <span class="nx">bound</span><span class="p">))</span> <span class="k">return</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">args</span><span class="p">.</span><span class="nx">concat</span><span class="p">(</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">)));</span></div><div class='line' id='LC487'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ctor</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="nx">func</span><span class="p">.</span><span class="nx">prototype</span><span class="p">;</span></div><div class='line' id='LC488'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">ctor</span><span class="p">;</span></div><div class='line' id='LC489'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">self</span><span class="p">,</span> <span class="nx">args</span><span class="p">.</span><span class="nx">concat</span><span class="p">(</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">)));</span></div><div class='line' id='LC490'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">Object</span><span class="p">(</span><span class="nx">result</span><span class="p">)</span> <span class="o">===</span> <span class="nx">result</span><span class="p">)</span> <span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC491'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">self</span><span class="p">;</span></div><div class='line' id='LC492'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC493'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC494'><br/></div><div class='line' id='LC495'>&nbsp;&nbsp;<span class="c1">// Bind all of an object&#39;s methods to that object. Useful for ensuring that</span></div><div class='line' id='LC496'>&nbsp;&nbsp;<span class="c1">// all callbacks defined on an object belong to it.</span></div><div class='line' id='LC497'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">bindAll</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC498'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">funcs</span> <span class="o">=</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC499'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">funcs</span><span class="p">.</span><span class="nx">length</span> <span class="o">==</span> <span class="mi">0</span><span class="p">)</span> <span class="nx">funcs</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">functions</span><span class="p">(</span><span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC500'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">funcs</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">f</span><span class="p">)</span> <span class="p">{</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">f</span><span class="p">]</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">obj</span><span class="p">[</span><span class="nx">f</span><span class="p">],</span> <span class="nx">obj</span><span class="p">);</span> <span class="p">});</span></div><div class='line' id='LC501'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC502'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC503'><br/></div><div class='line' id='LC504'>&nbsp;&nbsp;<span class="c1">// Memoize an expensive function by storing its results.</span></div><div class='line' id='LC505'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">memoize</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">func</span><span class="p">,</span> <span class="nx">hasher</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC506'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">memo</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC507'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">hasher</span> <span class="o">||</span> <span class="p">(</span><span class="nx">hasher</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">identity</span><span class="p">);</span></div><div class='line' id='LC508'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC509'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">key</span> <span class="o">=</span> <span class="nx">hasher</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC510'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">hasOwnProperty</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">memo</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="o">?</span> <span class="nx">memo</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">:</span> <span class="p">(</span><span class="nx">memo</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">));</span></div><div class='line' id='LC511'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC512'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC513'><br/></div><div class='line' id='LC514'>&nbsp;&nbsp;<span class="c1">// Delays a function for the given number of milliseconds, and then calls</span></div><div class='line' id='LC515'>&nbsp;&nbsp;<span class="c1">// it with the arguments supplied.</span></div><div class='line' id='LC516'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">delay</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">func</span><span class="p">,</span> <span class="nx">wait</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC517'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC518'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span> <span class="k">return</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">func</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span> <span class="p">},</span> <span class="nx">wait</span><span class="p">);</span></div><div class='line' id='LC519'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC520'><br/></div><div class='line' id='LC521'>&nbsp;&nbsp;<span class="c1">// Defers a function, scheduling it to run after the current call stack has</span></div><div class='line' id='LC522'>&nbsp;&nbsp;<span class="c1">// cleared.</span></div><div class='line' id='LC523'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">defer</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">func</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC524'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">delay</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">_</span><span class="p">,</span> <span class="p">[</span><span class="nx">func</span><span class="p">,</span> <span class="mi">1</span><span class="p">].</span><span class="nx">concat</span><span class="p">(</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">)));</span></div><div class='line' id='LC525'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC526'><br/></div><div class='line' id='LC527'>&nbsp;&nbsp;<span class="c1">// Returns a function, that, when invoked, will only be triggered at most once</span></div><div class='line' id='LC528'>&nbsp;&nbsp;<span class="c1">// during a given window of time.</span></div><div class='line' id='LC529'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">throttle</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">func</span><span class="p">,</span> <span class="nx">wait</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC530'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">args</span><span class="p">,</span> <span class="nx">timeout</span><span class="p">,</span> <span class="nx">throttling</span><span class="p">,</span> <span class="nx">more</span><span class="p">;</span></div><div class='line' id='LC531'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">whenDone</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">debounce</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span> <span class="nx">more</span> <span class="o">=</span> <span class="nx">throttling</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span> <span class="p">},</span> <span class="nx">wait</span><span class="p">);</span></div><div class='line' id='LC532'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC533'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">context</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span> <span class="nx">args</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">;</span></div><div class='line' id='LC534'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">later</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC535'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timeout</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC536'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">more</span><span class="p">)</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC537'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">whenDone</span><span class="p">();</span></div><div class='line' id='LC538'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC539'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">timeout</span><span class="p">)</span> <span class="nx">timeout</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="nx">later</span><span class="p">,</span> <span class="nx">wait</span><span class="p">);</span></div><div class='line' id='LC540'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">throttling</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC541'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">more</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC542'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC543'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC544'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC545'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">whenDone</span><span class="p">();</span></div><div class='line' id='LC546'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">throttling</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC547'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC548'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC549'><br/></div><div class='line' id='LC550'>&nbsp;&nbsp;<span class="c1">// Returns a function, that, as long as it continues to be invoked, will not</span></div><div class='line' id='LC551'>&nbsp;&nbsp;<span class="c1">// be triggered. The function will be called after it stops being called for</span></div><div class='line' id='LC552'>&nbsp;&nbsp;<span class="c1">// N milliseconds.</span></div><div class='line' id='LC553'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">debounce</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">func</span><span class="p">,</span> <span class="nx">wait</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC554'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">timeout</span><span class="p">;</span></div><div class='line' id='LC555'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC556'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">context</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span> <span class="nx">args</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">;</span></div><div class='line' id='LC557'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">later</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC558'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timeout</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC559'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC560'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC561'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">timeout</span><span class="p">);</span></div><div class='line' id='LC562'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timeout</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="nx">later</span><span class="p">,</span> <span class="nx">wait</span><span class="p">);</span></div><div class='line' id='LC563'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC564'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC565'><br/></div><div class='line' id='LC566'>&nbsp;&nbsp;<span class="c1">// Returns a function that will be executed at most one time, no matter how</span></div><div class='line' id='LC567'>&nbsp;&nbsp;<span class="c1">// often you call it. Useful for lazy initialization.</span></div><div class='line' id='LC568'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">once</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">func</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC569'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">ran</span> <span class="o">=</span> <span class="kc">false</span><span class="p">,</span> <span class="nx">memo</span><span class="p">;</span></div><div class='line' id='LC570'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC571'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">ran</span><span class="p">)</span> <span class="k">return</span> <span class="nx">memo</span><span class="p">;</span></div><div class='line' id='LC572'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ran</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC573'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">memo</span> <span class="o">=</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC574'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC575'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC576'><br/></div><div class='line' id='LC577'>&nbsp;&nbsp;<span class="c1">// Returns the first function passed as an argument to the second,</span></div><div class='line' id='LC578'>&nbsp;&nbsp;<span class="c1">// allowing you to adjust arguments, run code before and after, and</span></div><div class='line' id='LC579'>&nbsp;&nbsp;<span class="c1">// conditionally execute the original function.</span></div><div class='line' id='LC580'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">wrap</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">func</span><span class="p">,</span> <span class="nx">wrapper</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC581'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC582'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="p">[</span><span class="nx">func</span><span class="p">].</span><span class="nx">concat</span><span class="p">(</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">));</span></div><div class='line' id='LC583'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">wrapper</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC584'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC585'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC586'><br/></div><div class='line' id='LC587'>&nbsp;&nbsp;<span class="c1">// Returns a function that is the composition of a list of functions, each</span></div><div class='line' id='LC588'>&nbsp;&nbsp;<span class="c1">// consuming the return value of the function that follows.</span></div><div class='line' id='LC589'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">compose</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC590'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">funcs</span> <span class="o">=</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC591'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC592'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC593'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="nx">funcs</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span><span class="o">--</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC594'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">args</span> <span class="o">=</span> <span class="p">[</span><span class="nx">funcs</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">args</span><span class="p">)];</span></div><div class='line' id='LC595'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC596'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">args</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC597'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC598'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC599'><br/></div><div class='line' id='LC600'>&nbsp;&nbsp;<span class="c1">// Returns a function that will only be executed after being called N times.</span></div><div class='line' id='LC601'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">after</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">times</span><span class="p">,</span> <span class="nx">func</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC602'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">times</span> <span class="o">&lt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="k">return</span> <span class="nx">func</span><span class="p">();</span></div><div class='line' id='LC603'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC604'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">--</span><span class="nx">times</span> <span class="o">&lt;</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC605'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC606'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC607'><br/></div><div class='line' id='LC608'>&nbsp;&nbsp;<span class="c1">// Object Functions</span></div><div class='line' id='LC609'>&nbsp;&nbsp;<span class="c1">// ----------------</span></div><div class='line' id='LC610'><br/></div><div class='line' id='LC611'>&nbsp;&nbsp;<span class="c1">// Retrieve the names of an object&#39;s properties.</span></div><div class='line' id='LC612'>&nbsp;&nbsp;<span class="c1">// Delegates to **ECMAScript 5**&#39;s native `Object.keys`</span></div><div class='line' id='LC613'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">keys</span> <span class="o">=</span> <span class="nx">nativeKeys</span> <span class="o">||</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC614'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">!==</span> <span class="nb">Object</span><span class="p">(</span><span class="nx">obj</span><span class="p">))</span> <span class="k">throw</span> <span class="k">new</span> <span class="nx">TypeError</span><span class="p">(</span><span class="s1">&#39;Invalid object&#39;</span><span class="p">);</span></div><div class='line' id='LC615'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">keys</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC616'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">obj</span><span class="p">)</span> <span class="k">if</span> <span class="p">(</span><span class="nx">hasOwnProperty</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">key</span><span class="p">))</span> <span class="nx">keys</span><span class="p">[</span><span class="nx">keys</span><span class="p">.</span><span class="nx">length</span><span class="p">]</span> <span class="o">=</span> <span class="nx">key</span><span class="p">;</span></div><div class='line' id='LC617'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">keys</span><span class="p">;</span></div><div class='line' id='LC618'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC619'><br/></div><div class='line' id='LC620'>&nbsp;&nbsp;<span class="c1">// Retrieve the values of an object&#39;s properties.</span></div><div class='line' id='LC621'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">values</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC622'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">_</span><span class="p">.</span><span class="nx">identity</span><span class="p">);</span></div><div class='line' id='LC623'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC624'><br/></div><div class='line' id='LC625'>&nbsp;&nbsp;<span class="c1">// Return a sorted list of the function names available on the object.</span></div><div class='line' id='LC626'>&nbsp;&nbsp;<span class="c1">// Aliased as `methods`</span></div><div class='line' id='LC627'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">functions</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">methods</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC628'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">names</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC629'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC630'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">obj</span><span class="p">[</span><span class="nx">key</span><span class="p">]))</span> <span class="nx">names</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">key</span><span class="p">);</span></div><div class='line' id='LC631'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC632'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">names</span><span class="p">.</span><span class="nx">sort</span><span class="p">();</span></div><div class='line' id='LC633'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC634'><br/></div><div class='line' id='LC635'>&nbsp;&nbsp;<span class="c1">// Extend a given object with all the properties in passed-in object(s).</span></div><div class='line' id='LC636'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">extend</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC637'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">source</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC638'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">prop</span> <span class="k">in</span> <span class="nx">source</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC639'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">source</span><span class="p">[</span><span class="nx">prop</span><span class="p">]</span> <span class="o">!==</span> <span class="k">void</span> <span class="mi">0</span><span class="p">)</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">prop</span><span class="p">]</span> <span class="o">=</span> <span class="nx">source</span><span class="p">[</span><span class="nx">prop</span><span class="p">];</span></div><div class='line' id='LC640'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC641'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC642'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC643'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC644'><br/></div><div class='line' id='LC645'>&nbsp;&nbsp;<span class="c1">// Fill in a given object with default properties.</span></div><div class='line' id='LC646'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">defaults</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC647'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">source</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC648'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">prop</span> <span class="k">in</span> <span class="nx">source</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC649'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span><span class="p">[</span><span class="nx">prop</span><span class="p">]</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">prop</span><span class="p">]</span> <span class="o">=</span> <span class="nx">source</span><span class="p">[</span><span class="nx">prop</span><span class="p">];</span></div><div class='line' id='LC650'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC651'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC652'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC653'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC654'><br/></div><div class='line' id='LC655'>&nbsp;&nbsp;<span class="c1">// Create a (shallow-cloned) duplicate of an object.</span></div><div class='line' id='LC656'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">clone</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC657'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">isObject</span><span class="p">(</span><span class="nx">obj</span><span class="p">))</span> <span class="k">return</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC658'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">?</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">slice</span><span class="p">()</span> <span class="o">:</span> <span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC659'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC660'><br/></div><div class='line' id='LC661'>&nbsp;&nbsp;<span class="c1">// Invokes interceptor with the obj, and then returns obj.</span></div><div class='line' id='LC662'>&nbsp;&nbsp;<span class="c1">// The primary purpose of this method is to &quot;tap into&quot; a method chain, in</span></div><div class='line' id='LC663'>&nbsp;&nbsp;<span class="c1">// order to perform operations on intermediate results within the chain.</span></div><div class='line' id='LC664'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">tap</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">interceptor</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC665'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">interceptor</span><span class="p">(</span><span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC666'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC667'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC668'><br/></div><div class='line' id='LC669'>&nbsp;&nbsp;<span class="c1">// Internal recursive comparison function.</span></div><div class='line' id='LC670'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">eq</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">stack</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC671'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Identical objects are equal. `0 === -0`, but they aren&#39;t identical.</span></div><div class='line' id='LC672'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// See the Harmony `egal` proposal: http://wiki.ecmascript.org/doku.php?id=harmony:egal.</span></div><div class='line' id='LC673'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">a</span> <span class="o">===</span> <span class="nx">b</span><span class="p">)</span> <span class="k">return</span> <span class="nx">a</span> <span class="o">!==</span> <span class="mi">0</span> <span class="o">||</span> <span class="mi">1</span> <span class="o">/</span> <span class="nx">a</span> <span class="o">==</span> <span class="mi">1</span> <span class="o">/</span> <span class="nx">b</span><span class="p">;</span></div><div class='line' id='LC674'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// A strict comparison is necessary because `null == undefined`.</span></div><div class='line' id='LC675'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">a</span> <span class="o">==</span> <span class="kc">null</span> <span class="o">||</span> <span class="nx">b</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="nx">a</span> <span class="o">===</span> <span class="nx">b</span><span class="p">;</span></div><div class='line' id='LC676'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Unwrap any wrapped objects.</span></div><div class='line' id='LC677'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">_chain</span><span class="p">)</span> <span class="nx">a</span> <span class="o">=</span> <span class="nx">a</span><span class="p">.</span><span class="nx">_wrapped</span><span class="p">;</span></div><div class='line' id='LC678'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">_chain</span><span class="p">)</span> <span class="nx">b</span> <span class="o">=</span> <span class="nx">b</span><span class="p">.</span><span class="nx">_wrapped</span><span class="p">;</span></div><div class='line' id='LC679'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Invoke a custom `isEqual` method if one is provided.</span></div><div class='line' id='LC680'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">isEqual</span><span class="p">))</span> <span class="k">return</span> <span class="nx">a</span><span class="p">.</span><span class="nx">isEqual</span><span class="p">(</span><span class="nx">b</span><span class="p">);</span></div><div class='line' id='LC681'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">isEqual</span><span class="p">))</span> <span class="k">return</span> <span class="nx">b</span><span class="p">.</span><span class="nx">isEqual</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span></div><div class='line' id='LC682'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Compare `[[Class]]` names.</span></div><div class='line' id='LC683'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">className</span> <span class="o">=</span> <span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span></div><div class='line' id='LC684'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">className</span> <span class="o">!=</span> <span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">b</span><span class="p">))</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC685'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">switch</span> <span class="p">(</span><span class="nx">className</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC686'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Strings, numbers, dates, and booleans are compared by value.</span></div><div class='line' id='LC687'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;[object String]&#39;</span><span class="o">:</span></div><div class='line' id='LC688'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Primitives and their corresponding object wrappers are equivalent; thus, `&quot;5&quot;` is</span></div><div class='line' id='LC689'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// equivalent to `new String(&quot;5&quot;)`.</span></div><div class='line' id='LC690'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nb">String</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span> <span class="o">==</span> <span class="nb">String</span><span class="p">(</span><span class="nx">b</span><span class="p">);</span></div><div class='line' id='LC691'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;[object Number]&#39;</span><span class="o">:</span></div><div class='line' id='LC692'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span> <span class="o">=</span> <span class="o">+</span><span class="nx">a</span><span class="p">;</span></div><div class='line' id='LC693'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">b</span> <span class="o">=</span> <span class="o">+</span><span class="nx">b</span><span class="p">;</span></div><div class='line' id='LC694'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for</span></div><div class='line' id='LC695'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// other numeric values.</span></div><div class='line' id='LC696'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">a</span> <span class="o">!=</span> <span class="nx">a</span> <span class="o">?</span> <span class="nx">b</span> <span class="o">!=</span> <span class="nx">b</span> <span class="o">:</span> <span class="p">(</span><span class="nx">a</span> <span class="o">==</span> <span class="mi">0</span> <span class="o">?</span> <span class="mi">1</span> <span class="o">/</span> <span class="nx">a</span> <span class="o">==</span> <span class="mi">1</span> <span class="o">/</span> <span class="nx">b</span> <span class="o">:</span> <span class="nx">a</span> <span class="o">==</span> <span class="nx">b</span><span class="p">);</span></div><div class='line' id='LC697'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;[object Date]&#39;</span><span class="o">:</span></div><div class='line' id='LC698'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;[object Boolean]&#39;</span><span class="o">:</span></div><div class='line' id='LC699'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Coerce dates and booleans to numeric primitive values. Dates are compared by their</span></div><div class='line' id='LC700'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// millisecond representations. Note that invalid dates with millisecond representations</span></div><div class='line' id='LC701'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// of `NaN` are not equivalent.</span></div><div class='line' id='LC702'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">+</span><span class="nx">a</span> <span class="o">==</span> <span class="o">+</span><span class="nx">b</span><span class="p">;</span></div><div class='line' id='LC703'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// RegExps are compared by their source patterns and flags.</span></div><div class='line' id='LC704'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;[object RegExp]&#39;</span><span class="o">:</span></div><div class='line' id='LC705'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">a</span><span class="p">.</span><span class="nx">source</span> <span class="o">==</span> <span class="nx">b</span><span class="p">.</span><span class="nx">source</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC706'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span><span class="p">.</span><span class="nx">global</span> <span class="o">==</span> <span class="nx">b</span><span class="p">.</span><span class="nx">global</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC707'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span><span class="p">.</span><span class="nx">multiline</span> <span class="o">==</span> <span class="nx">b</span><span class="p">.</span><span class="nx">multiline</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC708'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span><span class="p">.</span><span class="nx">ignoreCase</span> <span class="o">==</span> <span class="nx">b</span><span class="p">.</span><span class="nx">ignoreCase</span><span class="p">;</span></div><div class='line' id='LC709'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC710'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">a</span> <span class="o">!=</span> <span class="s1">&#39;object&#39;</span> <span class="o">||</span> <span class="k">typeof</span> <span class="nx">b</span> <span class="o">!=</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC711'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Assume equality for cyclic structures. The algorithm for detecting cyclic</span></div><div class='line' id='LC712'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.</span></div><div class='line' id='LC713'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">length</span> <span class="o">=</span> <span class="nx">stack</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC714'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="nx">length</span><span class="o">--</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC715'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Linear search. Performance is inversely proportional to the number of</span></div><div class='line' id='LC716'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// unique nested structures.</span></div><div class='line' id='LC717'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">stack</span><span class="p">[</span><span class="nx">length</span><span class="p">]</span> <span class="o">==</span> <span class="nx">a</span><span class="p">)</span> <span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC718'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC719'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Add the first object to the stack of traversed objects.</span></div><div class='line' id='LC720'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">stack</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span></div><div class='line' id='LC721'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">size</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">result</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC722'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Recursively compare objects and arrays.</span></div><div class='line' id='LC723'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">className</span> <span class="o">==</span> <span class="s1">&#39;[object Array]&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC724'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Compare array lengths to determine if a deep comparison is necessary.</span></div><div class='line' id='LC725'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">size</span> <span class="o">=</span> <span class="nx">a</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC726'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span> <span class="o">=</span> <span class="nx">size</span> <span class="o">==</span> <span class="nx">b</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC727'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">result</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC728'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Deep compare the contents, ignoring non-numeric properties.</span></div><div class='line' id='LC729'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="nx">size</span><span class="o">--</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC730'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Ensure commutative equality for sparse arrays.</span></div><div class='line' id='LC731'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">result</span> <span class="o">=</span> <span class="nx">size</span> <span class="k">in</span> <span class="nx">a</span> <span class="o">==</span> <span class="nx">size</span> <span class="k">in</span> <span class="nx">b</span> <span class="o">&amp;&amp;</span> <span class="nx">eq</span><span class="p">(</span><span class="nx">a</span><span class="p">[</span><span class="nx">size</span><span class="p">],</span> <span class="nx">b</span><span class="p">[</span><span class="nx">size</span><span class="p">],</span> <span class="nx">stack</span><span class="p">)))</span> <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC732'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC733'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC734'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC735'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Objects with different constructors are not equivalent.</span></div><div class='line' id='LC736'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="s2">&quot;constructor&quot;</span> <span class="k">in</span> <span class="nx">a</span> <span class="o">!=</span> <span class="s2">&quot;constructor&quot;</span> <span class="k">in</span> <span class="nx">b</span> <span class="o">||</span> <span class="nx">a</span><span class="p">.</span><span class="nx">constructor</span> <span class="o">!=</span> <span class="nx">b</span><span class="p">.</span><span class="nx">constructor</span><span class="p">)</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC737'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Deep compare objects.</span></div><div class='line' id='LC738'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">a</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC739'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">hasOwnProperty</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">key</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC740'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Count the expected number of properties.</span></div><div class='line' id='LC741'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">size</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC742'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Deep compare each member.</span></div><div class='line' id='LC743'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">result</span> <span class="o">=</span> <span class="nx">hasOwnProperty</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">eq</span><span class="p">(</span><span class="nx">a</span><span class="p">[</span><span class="nx">key</span><span class="p">],</span> <span class="nx">b</span><span class="p">[</span><span class="nx">key</span><span class="p">],</span> <span class="nx">stack</span><span class="p">)))</span> <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC744'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC745'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC746'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Ensure that both objects contain the same number of properties.</span></div><div class='line' id='LC747'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">result</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC748'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">key</span> <span class="k">in</span> <span class="nx">b</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC749'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">hasOwnProperty</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="p">(</span><span class="nx">size</span><span class="o">--</span><span class="p">))</span> <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC750'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC751'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span> <span class="o">=</span> <span class="o">!</span><span class="nx">size</span><span class="p">;</span></div><div class='line' id='LC752'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC753'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC754'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Remove the first object from the stack of traversed objects.</span></div><div class='line' id='LC755'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">stack</span><span class="p">.</span><span class="nx">pop</span><span class="p">();</span></div><div class='line' id='LC756'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC757'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC758'><br/></div><div class='line' id='LC759'>&nbsp;&nbsp;<span class="c1">// Perform a deep comparison to check if two objects are equal.</span></div><div class='line' id='LC760'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isEqual</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC761'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">eq</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="p">[]);</span></div><div class='line' id='LC762'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC763'><br/></div><div class='line' id='LC764'>&nbsp;&nbsp;<span class="c1">// Is a given array, string, or object empty?</span></div><div class='line' id='LC765'>&nbsp;&nbsp;<span class="c1">// An &quot;empty&quot; object has no enumerable own-properties.</span></div><div class='line' id='LC766'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isEmpty</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC767'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">||</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isString</span><span class="p">(</span><span class="nx">obj</span><span class="p">))</span> <span class="k">return</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC768'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">obj</span><span class="p">)</span> <span class="k">if</span> <span class="p">(</span><span class="nx">hasOwnProperty</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">key</span><span class="p">))</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC769'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC770'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC771'><br/></div><div class='line' id='LC772'>&nbsp;&nbsp;<span class="c1">// Is a given value a DOM element?</span></div><div class='line' id='LC773'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isElement</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC774'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">!!</span><span class="p">(</span><span class="nx">obj</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">==</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC775'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC776'><br/></div><div class='line' id='LC777'>&nbsp;&nbsp;<span class="c1">// Is a given value an array?</span></div><div class='line' id='LC778'>&nbsp;&nbsp;<span class="c1">// Delegates to ECMA5&#39;s native Array.isArray</span></div><div class='line' id='LC779'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span> <span class="o">=</span> <span class="nx">nativeIsArray</span> <span class="o">||</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC780'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;[object Array]&#39;</span><span class="p">;</span></div><div class='line' id='LC781'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC782'><br/></div><div class='line' id='LC783'>&nbsp;&nbsp;<span class="c1">// Is a given variable an object?</span></div><div class='line' id='LC784'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isObject</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC785'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span> <span class="o">===</span> <span class="nb">Object</span><span class="p">(</span><span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC786'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC787'><br/></div><div class='line' id='LC788'>&nbsp;&nbsp;<span class="c1">// Is a given variable an arguments object?</span></div><div class='line' id='LC789'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;[object Arguments]&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC790'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isArguments</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC791'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;[object Arguments]&#39;</span><span class="p">;</span></div><div class='line' id='LC792'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC793'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC794'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isArguments</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC795'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">!!</span><span class="p">(</span><span class="nx">obj</span> <span class="o">&amp;&amp;</span> <span class="nx">hasOwnProperty</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="s1">&#39;callee&#39;</span><span class="p">));</span></div><div class='line' id='LC796'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC797'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC798'><br/></div><div class='line' id='LC799'>&nbsp;&nbsp;<span class="c1">// Is a given value a function?</span></div><div class='line' id='LC800'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC801'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;[object Function]&#39;</span><span class="p">;</span></div><div class='line' id='LC802'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC803'><br/></div><div class='line' id='LC804'>&nbsp;&nbsp;<span class="c1">// Is a given value a string?</span></div><div class='line' id='LC805'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isString</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC806'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;[object String]&#39;</span><span class="p">;</span></div><div class='line' id='LC807'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC808'><br/></div><div class='line' id='LC809'>&nbsp;&nbsp;<span class="c1">// Is a given value a number?</span></div><div class='line' id='LC810'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isNumber</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC811'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;[object Number]&#39;</span><span class="p">;</span></div><div class='line' id='LC812'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC813'><br/></div><div class='line' id='LC814'>&nbsp;&nbsp;<span class="c1">// Is the given value `NaN`?</span></div><div class='line' id='LC815'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nb">isNaN</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC816'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// `NaN` is the only value for which `===` is not reflexive.</span></div><div class='line' id='LC817'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span> <span class="o">!==</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC818'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC819'><br/></div><div class='line' id='LC820'>&nbsp;&nbsp;<span class="c1">// Is a given value a boolean?</span></div><div class='line' id='LC821'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isBoolean</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC822'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span> <span class="o">===</span> <span class="kc">true</span> <span class="o">||</span> <span class="nx">obj</span> <span class="o">===</span> <span class="kc">false</span> <span class="o">||</span> <span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;[object Boolean]&#39;</span><span class="p">;</span></div><div class='line' id='LC823'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC824'><br/></div><div class='line' id='LC825'>&nbsp;&nbsp;<span class="c1">// Is a given value a date?</span></div><div class='line' id='LC826'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isDate</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC827'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;[object Date]&#39;</span><span class="p">;</span></div><div class='line' id='LC828'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC829'><br/></div><div class='line' id='LC830'>&nbsp;&nbsp;<span class="c1">// Is the given value a regular expression?</span></div><div class='line' id='LC831'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isRegExp</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC832'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;[object RegExp]&#39;</span><span class="p">;</span></div><div class='line' id='LC833'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC834'><br/></div><div class='line' id='LC835'>&nbsp;&nbsp;<span class="c1">// Is a given value equal to null?</span></div><div class='line' id='LC836'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isNull</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC837'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span> <span class="o">===</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC838'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC839'><br/></div><div class='line' id='LC840'>&nbsp;&nbsp;<span class="c1">// Is a given variable undefined?</span></div><div class='line' id='LC841'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isUndefined</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC842'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span> <span class="o">===</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC843'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC844'><br/></div><div class='line' id='LC845'>&nbsp;&nbsp;<span class="c1">// Utility Functions</span></div><div class='line' id='LC846'>&nbsp;&nbsp;<span class="c1">// -----------------</span></div><div class='line' id='LC847'><br/></div><div class='line' id='LC848'>&nbsp;&nbsp;<span class="c1">// Run Underscore.js in *noConflict* mode, returning the `_` variable to its</span></div><div class='line' id='LC849'>&nbsp;&nbsp;<span class="c1">// previous owner. Returns a reference to the Underscore object.</span></div><div class='line' id='LC850'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">noConflict</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC851'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">root</span><span class="p">.</span><span class="nx">_</span> <span class="o">=</span> <span class="nx">previousUnderscore</span><span class="p">;</span></div><div class='line' id='LC852'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC853'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC854'><br/></div><div class='line' id='LC855'>&nbsp;&nbsp;<span class="c1">// Keep the identity function around for default iterators.</span></div><div class='line' id='LC856'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">identity</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC857'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC858'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC859'><br/></div><div class='line' id='LC860'>&nbsp;&nbsp;<span class="c1">// Run a function **n** times.</span></div><div class='line' id='LC861'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">times</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">n</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC862'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">n</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">i</span><span class="p">);</span></div><div class='line' id='LC863'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC864'><br/></div><div class='line' id='LC865'>&nbsp;&nbsp;<span class="c1">// Escape a string for HTML interpolation.</span></div><div class='line' id='LC866'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">escape</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">string</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC867'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span><span class="s1">&#39;&#39;</span><span class="o">+</span><span class="nx">string</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&amp;/g</span><span class="p">,</span> <span class="s1">&#39;&amp;amp;&#39;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&lt;/g</span><span class="p">,</span> <span class="s1">&#39;&amp;lt;&#39;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&gt;/g</span><span class="p">,</span> <span class="s1">&#39;&amp;gt;&#39;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&quot;/g</span><span class="p">,</span> <span class="s1">&#39;&amp;quot;&#39;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&#39;/g</span><span class="p">,</span> <span class="s1">&#39;&amp;#x27;&#39;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\//g</span><span class="p">,</span><span class="s1">&#39;&amp;#x2F;&#39;</span><span class="p">);</span></div><div class='line' id='LC868'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC869'><br/></div><div class='line' id='LC870'>&nbsp;&nbsp;<span class="c1">// Add your own custom functions to the Underscore object, ensuring that</span></div><div class='line' id='LC871'>&nbsp;&nbsp;<span class="c1">// they&#39;re correctly added to the OOP wrapper as well.</span></div><div class='line' id='LC872'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">mixin</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC873'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">functions</span><span class="p">(</span><span class="nx">obj</span><span class="p">),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">){</span></div><div class='line' id='LC874'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">addToWrapper</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">_</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">name</span><span class="p">]);</span></div><div class='line' id='LC875'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC876'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC877'><br/></div><div class='line' id='LC878'>&nbsp;&nbsp;<span class="c1">// Generate a unique integer id (unique within the entire client session).</span></div><div class='line' id='LC879'>&nbsp;&nbsp;<span class="c1">// Useful for temporary DOM ids.</span></div><div class='line' id='LC880'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">idCounter</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC881'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">uniqueId</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">prefix</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC882'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">id</span> <span class="o">=</span> <span class="nx">idCounter</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC883'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">prefix</span> <span class="o">?</span> <span class="nx">prefix</span> <span class="o">+</span> <span class="nx">id</span> <span class="o">:</span> <span class="nx">id</span><span class="p">;</span></div><div class='line' id='LC884'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC885'><br/></div><div class='line' id='LC886'>&nbsp;&nbsp;<span class="c1">// By default, Underscore uses ERB-style template delimiters, change the</span></div><div class='line' id='LC887'>&nbsp;&nbsp;<span class="c1">// following template settings to use alternative delimiters.</span></div><div class='line' id='LC888'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">templateSettings</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC889'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">evaluate</span>    <span class="o">:</span> <span class="sr">/&lt;%([\s\S]+?)%&gt;/g</span><span class="p">,</span></div><div class='line' id='LC890'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">interpolate</span> <span class="o">:</span> <span class="sr">/&lt;%=([\s\S]+?)%&gt;/g</span><span class="p">,</span></div><div class='line' id='LC891'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">escape</span>      <span class="o">:</span> <span class="sr">/&lt;%-([\s\S]+?)%&gt;/g</span></div><div class='line' id='LC892'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC893'><br/></div><div class='line' id='LC894'>&nbsp;&nbsp;<span class="c1">// JavaScript micro-templating, similar to John Resig&#39;s implementation.</span></div><div class='line' id='LC895'>&nbsp;&nbsp;<span class="c1">// Underscore templating handles arbitrary delimiters, preserves whitespace,</span></div><div class='line' id='LC896'>&nbsp;&nbsp;<span class="c1">// and correctly escapes quotes within interpolated code.</span></div><div class='line' id='LC897'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">template</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">str</span><span class="p">,</span> <span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC898'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">c</span>  <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">templateSettings</span><span class="p">;</span></div><div class='line' id='LC899'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">tmpl</span> <span class="o">=</span> <span class="s1">&#39;var __p=[],print=function(){__p.push.apply(__p,arguments);};&#39;</span> <span class="o">+</span></div><div class='line' id='LC900'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;with(obj||{}){__p.push(\&#39;&#39;</span> <span class="o">+</span></div><div class='line' id='LC901'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">str</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\\/g</span><span class="p">,</span> <span class="s1">&#39;\\\\&#39;</span><span class="p">)</span></div><div class='line' id='LC902'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&#39;/g</span><span class="p">,</span> <span class="s2">&quot;\\&#39;&quot;</span><span class="p">)</span></div><div class='line' id='LC903'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">escape</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">match</span><span class="p">,</span> <span class="nx">code</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC904'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s2">&quot;&#39;,_.escape(&quot;</span> <span class="o">+</span> <span class="nx">code</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\\&#39;/g</span><span class="p">,</span> <span class="s2">&quot;&#39;&quot;</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;),&#39;&quot;</span><span class="p">;</span></div><div class='line' id='LC905'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC906'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">interpolate</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">match</span><span class="p">,</span> <span class="nx">code</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC907'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s2">&quot;&#39;,&quot;</span> <span class="o">+</span> <span class="nx">code</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\\&#39;/g</span><span class="p">,</span> <span class="s2">&quot;&#39;&quot;</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;,&#39;&quot;</span><span class="p">;</span></div><div class='line' id='LC908'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC909'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">evaluate</span> <span class="o">||</span> <span class="kc">null</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">match</span><span class="p">,</span> <span class="nx">code</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC910'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s2">&quot;&#39;);&quot;</span> <span class="o">+</span> <span class="nx">code</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\\&#39;/g</span><span class="p">,</span> <span class="s2">&quot;&#39;&quot;</span><span class="p">)</span></div><div class='line' id='LC911'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/[\r\n\t]/g</span><span class="p">,</span> <span class="s1">&#39; &#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;;__p.push(&#39;&quot;</span><span class="p">;</span></div><div class='line' id='LC912'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC913'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\r/g</span><span class="p">,</span> <span class="s1">&#39;\\r&#39;</span><span class="p">)</span></div><div class='line' id='LC914'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n/g</span><span class="p">,</span> <span class="s1">&#39;\\n&#39;</span><span class="p">)</span></div><div class='line' id='LC915'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\t/g</span><span class="p">,</span> <span class="s1">&#39;\\t&#39;</span><span class="p">)</span></div><div class='line' id='LC916'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s2">&quot;&#39;);}return __p.join(&#39;&#39;);&quot;</span><span class="p">;</span></div><div class='line' id='LC917'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">func</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Function</span><span class="p">(</span><span class="s1">&#39;obj&#39;</span><span class="p">,</span> <span class="s1">&#39;_&#39;</span><span class="p">,</span> <span class="nx">tmpl</span><span class="p">);</span></div><div class='line' id='LC918'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">data</span> <span class="o">?</span> <span class="nx">func</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">_</span><span class="p">)</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">func</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">_</span><span class="p">)</span> <span class="p">};</span></div><div class='line' id='LC919'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC920'><br/></div><div class='line' id='LC921'>&nbsp;&nbsp;<span class="c1">// The OOP Wrapper</span></div><div class='line' id='LC922'>&nbsp;&nbsp;<span class="c1">// ---------------</span></div><div class='line' id='LC923'><br/></div><div class='line' id='LC924'>&nbsp;&nbsp;<span class="c1">// If Underscore is called as a function, it returns a wrapped object that</span></div><div class='line' id='LC925'>&nbsp;&nbsp;<span class="c1">// can be used OO-style. This wrapper holds altered versions of all the</span></div><div class='line' id='LC926'>&nbsp;&nbsp;<span class="c1">// underscore functions. Wrapped objects may be chained.</span></div><div class='line' id='LC927'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">wrapper</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span> <span class="k">this</span><span class="p">.</span><span class="nx">_wrapped</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">;</span> <span class="p">};</span></div><div class='line' id='LC928'><br/></div><div class='line' id='LC929'>&nbsp;&nbsp;<span class="c1">// Expose `wrapper.prototype` as `_.prototype`</span></div><div class='line' id='LC930'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="nx">wrapper</span><span class="p">.</span><span class="nx">prototype</span><span class="p">;</span></div><div class='line' id='LC931'><br/></div><div class='line' id='LC932'>&nbsp;&nbsp;<span class="c1">// Helper function to continue chaining intermediate results.</span></div><div class='line' id='LC933'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">chain</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC934'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">chain</span> <span class="o">?</span> <span class="nx">_</span><span class="p">(</span><span class="nx">obj</span><span class="p">).</span><span class="nx">chain</span><span class="p">()</span> <span class="o">:</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC935'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC936'><br/></div><div class='line' id='LC937'>&nbsp;&nbsp;<span class="c1">// A method to easily add functions to the OOP wrapper.</span></div><div class='line' id='LC938'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">addToWrapper</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">func</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC939'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">wrapper</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC940'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC941'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">unshift</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">args</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_wrapped</span><span class="p">);</span></div><div class='line' id='LC942'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">(</span><span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">_</span><span class="p">,</span> <span class="nx">args</span><span class="p">),</span> <span class="k">this</span><span class="p">.</span><span class="nx">_chain</span><span class="p">);</span></div><div class='line' id='LC943'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC944'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC945'><br/></div><div class='line' id='LC946'>&nbsp;&nbsp;<span class="c1">// Add all of the Underscore functions to the wrapper object.</span></div><div class='line' id='LC947'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">mixin</span><span class="p">(</span><span class="nx">_</span><span class="p">);</span></div><div class='line' id='LC948'><br/></div><div class='line' id='LC949'>&nbsp;&nbsp;<span class="c1">// Add all mutator Array functions to the wrapper.</span></div><div class='line' id='LC950'>&nbsp;&nbsp;<span class="nx">each</span><span class="p">([</span><span class="s1">&#39;pop&#39;</span><span class="p">,</span> <span class="s1">&#39;push&#39;</span><span class="p">,</span> <span class="s1">&#39;reverse&#39;</span><span class="p">,</span> <span class="s1">&#39;shift&#39;</span><span class="p">,</span> <span class="s1">&#39;sort&#39;</span><span class="p">,</span> <span class="s1">&#39;splice&#39;</span><span class="p">,</span> <span class="s1">&#39;unshift&#39;</span><span class="p">],</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC951'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">method</span> <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">[</span><span class="nx">name</span><span class="p">];</span></div><div class='line' id='LC952'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">wrapper</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC953'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">method</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_wrapped</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC954'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_wrapped</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_chain</span><span class="p">);</span></div><div class='line' id='LC955'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC956'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC957'><br/></div><div class='line' id='LC958'>&nbsp;&nbsp;<span class="c1">// Add all accessor Array functions to the wrapper.</span></div><div class='line' id='LC959'>&nbsp;&nbsp;<span class="nx">each</span><span class="p">([</span><span class="s1">&#39;concat&#39;</span><span class="p">,</span> <span class="s1">&#39;join&#39;</span><span class="p">,</span> <span class="s1">&#39;slice&#39;</span><span class="p">],</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC960'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">method</span> <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">[</span><span class="nx">name</span><span class="p">];</span></div><div class='line' id='LC961'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">wrapper</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC962'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">(</span><span class="nx">method</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_wrapped</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">),</span> <span class="k">this</span><span class="p">.</span><span class="nx">_chain</span><span class="p">);</span></div><div class='line' id='LC963'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC964'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC965'><br/></div><div class='line' id='LC966'>&nbsp;&nbsp;<span class="c1">// Start chaining a wrapped Underscore object.</span></div><div class='line' id='LC967'>&nbsp;&nbsp;<span class="nx">wrapper</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">chain</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC968'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_chain</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC969'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC970'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC971'><br/></div><div class='line' id='LC972'>&nbsp;&nbsp;<span class="c1">// Extracts the result from a wrapped and chained object.</span></div><div class='line' id='LC973'>&nbsp;&nbsp;<span class="nx">wrapper</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">value</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC974'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">_wrapped</span><span class="p">;</span></div><div class='line' id='LC975'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC976'><br/></div><div class='line' id='LC977'><span class="p">}).</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC978'><br/></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>
      </div>
    </div>

  </div>

<div class="frame frame-loading" style="display:none;" data-tree-list-url="/documentcloud/backbone/tree-list/1400eea12a0bb067dc3997774937479fb3ee457f" data-blob-url-prefix="/documentcloud/backbone/blob/1400eea12a0bb067dc3997774937479fb3ee457f">
  <img src="https://a248.e.akamai.net/assets.github.com/images/modules/ajax/big_spinner_336699.gif?1302750674" height="32" width="32">
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

      <p>&copy; 2011 <span id="_rrt" title="0.07833s from fe5.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
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

