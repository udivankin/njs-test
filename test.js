function version(r) {
    r.return(200, njs.version);
}

function dumpRequest(request) {
    var a = JSON.stringify({ headersIn: request.headersIn, headersOut: request.headersOut });
    request.return(200, a);
}
  
function addCookie(r) {
    r.return(200, njs.version);
}

function getPlatform(request) {
    return request.headersIn['success_headersIn'] || request.headersOut['success_headersOut'] || 'fail';
}

export default { addCookie, dumpRequest, getPlatform, version };