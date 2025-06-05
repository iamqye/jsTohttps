function toHttps(link) { 
  var url = document.createElement('a');
  url.href = link;
  url.protocol = 'https';
  return url.href;
}
