const util = require('util');

/**
 * PhraseError
 */
function PhraseError(message) {
    this.message = message;
    Error.captureStackTrace(this, PhraseError);
}
/* Inherits */
util.inherits(PhraseError, Error);
PhraseError.prototype.name = "PhraseError";


/**
 * HttpError
 */
function HttpError(status, message){
    this.status = status;
    this.message = message;
    Error.captureStackTrace(this, HttpError)
}
/* Inherits */
util.inherits(HttpError, Error);
PhraseError.prototype.name = "HttpError";



/* get phrase */
function getPhrase(name){
    if (!phrases[name]) {
        throw new PhraseError("Нет такой фразы: " + name);
    }
}


/* make page */
function makePage(url){
    if (url != "index.html") {
        throw new HttpError(404, "Нет такой страницы");
    }
    return util.format("%s, %s", getPhrase("Hello"), getPhrase("world"));
}


try {
    var page = makePage('index.html');
    console.log(page);
} catch (e) {
    if (e instanceof HttpError) {
        console.log(e.status, e.message);
    } else {
        console.error("Ошибка %s\n сообщение: %s\n стек: %s", e.name, e.message, e.stack);
    }

}
