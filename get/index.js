module.exports = async function (context, req) {
  
    let model = (typeof context.bindings.blobStorage != 'undefined' && typeof context.bindings.blobStorage == 'object') ? context.bindings.blobStorage : null;
    let err = !model ? "no data; or invalid payload in body" : null;

    context.res = {
        status: err ? 500 : 200,
        body: model
    };
};