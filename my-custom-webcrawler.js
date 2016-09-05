var URL = "http://bizjournals.com/";
var START_URL = "http://bizjournals.com/";
var SEARCH_WORD = "business";
var MAX_PAGES_TO_VISIT = 10;

var pagesVisited = {};
var pagesToVisit = [];
var numPagesVisited = 0;

var url = START_URL;
var baseUrl = url.protocol + "//" + url.hostname;

pagesToVisit.push(START_URL);
console.log(pagesToVisit);
crawl();



function crawl() {
  if(numPagesVisited >= MAX_PAGES_TO_VISIT) {
    console.log("num pages visited", numPagesVisited.length);
    return;
  }
  
  var nextPage = pagesToVisit.pop();
  console.log(nextPage);
  
  if (nextPage in pagesVisited) {
    // We've already visited this page, so repeat the crawl
    console.log("Page already visited");
    crawl();
  } else {
    // New page we haven't visited
    visitPage(nextPage, crawl);
    console.log("visitPage ing");
  }
}

var location = url.toString();
console.log(location);


function visitPage(url, callback) {
  // Add page to our set
  pagesVisited[url] = true;
  numPagesVisited++;

  // Make the request
  console.log("Visiting page " + url);
  
  
//   request(url, function(error, response, body) {
//      // Check status code (200 is HTTP OK)
//      console.log("Status code: " + response.statusCode);
//      if(response.statusCode !== 200) {
//        callback();
//        return;
//      }
//      // Parse the document body
//     // var $ = cheerio.load(body);
//      var isWordFound = searchForWord($, SEARCH_WORD);
//      if(isWordFound) {
//        console.log('Word ' + SEARCH_WORD + ' found at page ' + url);
//      } else {
//        collectInternalLinks($);
//        // In this short program, our callback is just calling crawl()
//        callback();
//      }
//   });
}


// function searchForWord($, word) {
//   var bodyText = $('html > body').text().toLowerCase();
//   return(bodyText.indexOf(word.toLowerCase()) !== -1);
// }

collectInternalLinks();

function collectInternalLinks($) {
    var relativeLinks = $("a[href^='/']");
    console.log("Found " + relativeLinks.length + " relative links on page");
    relativeLinks.each(function() {
        pagesToVisit.push(baseUrl + $(this).attr('href'));
    });
}



// To check if the nextPage (the URL) is in the set of pagesVisited:
if (nextPage in pagesVisited) {
    console.log("nextPage is in pagesVisited");
}


/*
Exception: ReferenceError: nextPage is not defined
@Scratchpad/1:1:1
*/
//http://www.bizjournals.com/sitemap_main.xml
// place master into browser url and load page
// crawl master and return all href's 
// store hrefs in masterHrefResults

// crawl each href in masterHrefResults

// window.location.assign(master);

// var currentUrl = document.documentElement.namespaceURI;
// //console.log(currentUrl);
// var links = document.getElementsByTagName('url'); // get all links
// console.log(links.length);

//     function crawl() {
//       console.log("crawling...");
//     }

/*
Exception: TypeError: $ is not a function
collectInternalLinks@Scratchpad/1:79:25
@Scratchpad/1:76:1
*/
/*
Exception: TypeError: $ is not a function
collectInternalLinks@Scratchpad/1:81:25
@Scratchpad/1:78:1
*/