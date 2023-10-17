module.exports = async function (context, req) {
  
    let model = (typeof req.body != 'undefined' && typeof req.body == 'object') ? req.body : null;
    let err = !model ? "no data; or invalid payload in body" : null;

    if (!err) {
        context.bindings.blobStorage = model;
    }
    
    context.res = {
        status: err ? 500 : 200,
        body: err
    };
};