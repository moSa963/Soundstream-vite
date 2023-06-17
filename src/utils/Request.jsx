export const APP_URL = "http://127.0.0.1:8000/";
export const TOKEN = ""; //Bearer token will be used throughout the development process


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }

    return "";
}

const getHeader = () => {
    const headers = {
        'Accept': "application/json",
    };

    TOKEN && (headers['Authorization'] = TOKEN);
    !TOKEN && (headers['X-XSRF-TOKEN'] = getCookie('XSRF-TOKEN'));

    return headers;
}

const request = async (url = APP_URL, method = "GET", data = null) => {
    var body = {};

    body["headers"] = getHeader();
    body["method"] = method;

    if (data && method !== 'GET') {
        var form = data;

        if (typeof (data) === "object") {
            form = new FormData();

            Object.keys(data).forEach(key => {
                if (Array.isArray(data[key])) {
                    data[key].forEach((e) => {
                        form.append(key + "[]", e);
                    });
                } else {
                    form.append(key, data[key]);
                }
            });
        }

        body["body"] = form;
    }

    if (!url.match(/^https?:/s)) {
        url = APP_URL + url;
    }

    var res;

    try{
        res = await fetch(url, body);
    }catch(err){
        throw { status: err.status, statusText: err.statusText };
    }

    if (! res.ok)
    {
        const json = await res.json();
        throw { status: res.status, statusText: json.message };
    }

    return res;
}


export default request;