export const obj = {
    remove: function(models, options) {
        var i, l, index, model, singular = !_.isArray(models);
        for(options || (options = {}), i = 0, l = (models = singular ? [
            models
        ] : _.clone(models)).length; i < l; i++)(model = models[i] = this.get(models[i])) && (delete this._byId[model.id], delete this._byId[model.cid], index = this.indexOf(model), this.models.splice(index, 1), this.length--, options.silent || (options.index = index, model.trigger("remove", model, this, options)), this._removeReference(model));
        return singular ? models[0] : models;
    }
};
