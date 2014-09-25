var AppDispatcher = require('../AppDispatcher');
var RemoteHeaderConstants = require('./RemoteHeaderConstants');

var FormActions = {

    init: function () {
        AppDispatcher.handleViewAction({
            actionType: RemoteHeaderConstants.INIT
        });
    },

    sort: function (field, order) {
        AppDispatcher.handleViewAction({
            actionType: RemoteHeaderConstants.SORT,
            field: field,
            order: order
        });
    },
    group: function (field, value) {
        AppDispatcher.handleViewAction({
            actionType: RemoteHeaderConstants.GROUP,
            field: field
        });
    },

    filter: function (field, value) {
        AppDispatcher.handleViewAction({
            actionType: RemoteHeaderConstants.SUBMIT_FORM,
            field: field,
            value: value
        });
    }

};

module.exports = FormActions;
