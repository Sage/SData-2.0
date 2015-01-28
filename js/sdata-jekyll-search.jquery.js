(function($) {
    $.fn.sdataJekyllSearch = function(options) {
        var settings = $.extend({
            jsonFile            : '/search.json',
			baseUrl				: '/SData-2.0',
            template            : '<a href="{url}" title="{desc}">{title}</a>',
			body				: '',	// body name expected (if used content/body in search.json file, then can you do output in result)
			bodyLen				: '200',
            searchResults       : '.results',
            searchResultsTitle  : '<h4>Search results</h4>',
            limit               : '10',
            noResults           : '<p>Oh shucks<br/><small>Nothing found :(</small></p>'
        }, options);

        var jsonData = [],
            //origThis = this,
			query = getUrlParameter('q').trim().replace(/[+]/g, ' ');	//window.location.search.substring(1).split('=')[1]
            searchResults = $(settings.searchResults);

        var matches = [];

        if(settings.jsonFile.length && searchResults.length){
            $.ajax({
                type: "GET",
                url: settings.jsonFile,
                dataType: 'json',
                success: function(data, textStatus, jqXHR) {
                    jsonData = data;
                    registerEvent();
                },
                error: function(x,y,z) {
                    console.log("***ERROR in jekyllSearch.js***");
                    console.log(x);
                    console.log(y);
                    console.log(z);
                    // x.responseText should have what's wrong
                }
            });
        }
		
		function getUrlParameter(sParam)
		{
			var sPageURL = window.location.search.substring(1);
			var sURLVariables = sPageURL.split('&');
			for (var i = 0; i < sURLVariables.length; i++) 
			{
				var sParameterName = sURLVariables[i].split('=');
				if (sParameterName[0] == sParam) 
				{
					return sParameterName[1];
				}
			}
		}

        function registerEvent(){
            //origThis.keyup(function(e)
			{
                if(query.length){
                    writeMatches( performSearch(query) );
                }
				/*else{
                    clearSearchResults();
                }*/
            };
        }

        function performSearch(str){
            matches = [];

            for (var i = 0; i < jsonData.length; i++) {
                var obj = jsonData[i];
                for (key in obj) {
                    if(obj.hasOwnProperty(key)){
                        if (obj[key] instanceof Array){
                            var seen = false;
                            for (var j = 0; j < obj[key].length; j++){
                                if(obj[key][j].toLowerCase().indexOf(str.toLowerCase()) >= 0){
                                    matches.push(obj);
                                    break;
                                }
                            }
                        }else if (obj[key].toLowerCase().indexOf(str.toLowerCase()) >= 0){
                            matches.push(obj);
                            break;
                        }
                    }
                }
            }
            return matches;
        }

        function writeMatches(m){
            //clearSearchResults();

			if(settings.searchResultsTitle.length > 0)
				searchResults.append( $(settings.searchResultsTitle) );

            if(m && m.length){
				var coreCounter = 0, syncCounter = 0, sdata20Counter = 0;
                for (var i = 0; i < m.length && i < settings.limit; i++) {
                    var obj = m[i];
					if (obj["group"] == "core")
					{
						//coreCounter++;
						output = "<li class='"+obj["group"]+"' count='"+(coreCounter++)+"'>";
					}
					else if (obj["group"] == "sync")
					{
						output = "<li class='"+obj["group"]+"' count='"+(syncCounter++)+"'>";
					}
					else
					{
						output = "<li class='"+obj["group"]+"' count='"+(sdata20Counter++)+"'>";
						//output = "<li class='"+obj["group"]+"'>";
					}
					output += "<span class='sort "+obj["group"]+"' href='#'></span>";
					//output += (obj["group"] == "20") ? "<span class='search-result-group'>Sdata 2.0: </span>" : ( (obj["group"] == "sync") ? "<span class='search-result-group'>SData 1.1 Sync: </span>" : "<span class='search-result-group'>SData 1.1 Core: </span>" );
                    output += settings.template;
                    output = output.replace(/\{(.*?)\}/g, function(match, property) {
                        return obj[property];
                    });
					// show result pages only with content (can be found in url or in top page title without content)
					if(obj[settings.body].trim().length > 0)
					{
						if(settings.body.length > 0)
							output = output + '<div class="search-result-body">'+obj[settings.body].replace(/(<([^>]+)>)/ig,"").slice(0, settings.bodyLen)+'&hellip;</div>';
						output += '</li>';
						
						searchResults.append($(output));
						
					}
                }
				
				{	// group pages by category
					var groups = {
						"sync" : {},
						"core" : {},
						"sdata-20" : {}
					};

					$('ul#search-results > li[class]').each(function(i, el){
						group = $(el).attr('class');
						count = $(el).attr('count');
						
						groups[group][count] = el;
					});

					ul = $('ul#search-results');
					for(var key in groups)
					{
						for(i in groups[key])
						{
							//console.log('['+key+']['+i+']' + ' (' + groups[key][i] + ')');
							ul.append(groups[key][i]);
						}
					}
				}
		
            }else{
                searchResults.append( settings.noResults );
            }
        }
        function clearSearchResults(){
            searchResults.children().remove();
        }
    }
}(jQuery));
