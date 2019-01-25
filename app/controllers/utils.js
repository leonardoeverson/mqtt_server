module.exports.prefix_gen = function (prefix_size) {

    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < prefix_size; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;

};

module.exports.prefix_db_insert = function(){

};

module.exports.prefix_db_get = function(){

};