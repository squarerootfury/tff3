function cookie_information() {
    if (document.cookie.indexOf("cookie_dismiss") >= 0) {
        // User war schon mal hier
        return true;
    } else {
        ch = document.createElement('div');
        ch.setAttribute('style', 'position:fixed;bottom:0;left:0;background:#efefef;padding:2rem 0;width:100%;text-align:center');
        ch.setAttribute('id', 'cookie_dismisser');
        ch.innerHTML = 'Wir verwenden Cookies, um Inhalte und Anzeigen zu personalisieren und die Zugriffe auf unsere Website zu analysieren. Hier unsere <a href="http://www.trancefish.de/page/cms/Datenschutzerklaerung">Datenschutzerklärung</a> <br/> <a class="button-primary button" href="#" onclick="return cookie_dismiss();">Ok</a>';
        document.body.appendChild(ch);
    }
}

function cookie_dismiss() {
    dd = document.getElementById('cookie_dismisser');
    dd.style.display = 'none';
    setCookie('cookie_dismiss', 1, 30);
    return false;
}

function setCookie(name, value, days) {
    var d = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}

$(document).ready(function () {
    $('.votethis').click(function () {
        vote_id = $(this).attr('rel');
        $.post(WEBROOT + 'blog/voter', {"bid": vote_id}, function (data) {
            $('#num_votes').html(data);
        });
    });
});

cookie_information();