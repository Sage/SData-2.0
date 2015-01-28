---
layout: search
title: Show search results for
---
<link rel="stylesheet" href="{{site.baseurl}}/css/search.css">
<script src="{{site.baseurl}}/js/jquery.tinysort.js"></script>
<script>
 $(document).ready(function() {
	//var q = window.location.search.substring(1).split('=')[1];
	
	/*JekyllSearch.init({
		searchInput: window.location.search.substring(1).split('=')[1],
		jsonFile: "{{site.baseurl}}/search.json",
		searchResultsHeader: "<h1>Search results:</h1>",
		template: "<li><a class='search-result' href='{{site.baseurl}}{url}'>{title}</a></li>",
		searchResults : document.getElementById("search-results"),
		limit: '25',
		noResults: "<h2>No matches found.</h2>",
		fuzzy: true
	});*/
	$().sdataJekyllSearch({
		jsonFile: "{{site.baseurl}}/search.json",
		baseUrl: "{{site.baseurl}}",
		searchResultsTitle: "",	// without title
		template: "<a class='search-result' href='{{site.baseurl}}{url}'>{title}</a><br />",
		body: "content",	// show content
		bodyLen: 500,
		searchResults : "#search-results",
		limit: '25',
		noResults: "<h2>No matches found.</h2><br /><br /><br /><br /><br /><br /><br />"
	});
	
	$('#project_title_subp').html($('#project_title_subp').text() + " <span class='query'>" + window.location.search.substring(1).split('=')[1] + "</span>");
 });
</script>


<div id="results">
  <!--h1><script>document.write("<span class='query'>" + window.location.search.substring(1).split('=')[1] + "</span>");</script></h1-->

  <ul id="search-results">
    <!-- results lists -->
  </ul>
</div>