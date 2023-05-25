
try {
    (function (document, ttm) {
        var ttmLibUrl = 'https://d2hrivdxn8ekm8.cloudfront.net/tag-manager/27d09f95-8c66-4a6b-af79-42601b7b1100-additional-latest.js';
        // first time running, mock FE
        if (!ttm.version) {
            window['ttm'] = ttm;
            ttm['init'] = function (token) {
                var defer = function (target, fn) {
                    // tslint:disable-next-line:only-arrow-functions
                    ttm[fn] = function () {
                        target.push([fn].concat(Array.prototype.slice.call(arguments, 0)));
                    };
                };
                var functions = 'onTrack onPageview onIdentify'.split(' ');
                functions.forEach(function (fn) {
                    defer(ttm, fn);
                });
                ttm['_i'] = token;
            };
            ttm['version'] = '1.0.0';
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = ttmLibUrl;
            var firstScript = document.getElementsByTagName('script')[0];
            firstScript.parentNode.insertBefore(script, firstScript);
        }
    })(document, window['ttm'] || []);
}
catch (e) {
    console.log(e);
}
ttm.init('27d09f95-8c66-4a6b-af79-42601b7b1100');
(function(){
    var ref = window.document.getElementsByTagName('head')[0];
    var script = window.document.createElement('script');
    script.src = 'https://d2hrivdxn8ekm8.cloudfront.net/tracker-latest.min.js';
    script.async = true;
    ref.appendChild(script);
})();
