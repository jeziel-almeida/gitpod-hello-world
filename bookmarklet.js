javascript: (() => {
    "use strict";
    (function () {
        for (
            var t = document.getElementsByTagName("meta"), n = 0;
            n < t.length;
            n++
        ) {
            var o = t[n];
            if (o.content.toLowerCase().includes("gitlab")) return !0;
            if ("hostname" === o.name && o.content.includes("github")) return !0;
            if (
                "application-name" === o.name &&
                o.content.toLowerCase().includes("bitbucket")
            )
                return !0;
        }
        return !1;
    })() &&
        window.open(
            ("https://gitpod.io",
                "https://gitpod.io/#" +
                (window.location.protocol + "//" + window.location.host) +
                window.location.pathname)
        );
})();