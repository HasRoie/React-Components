var AppDispatcher = require('../AppDispatcher');
var RemoteHeaderConstants = require('./RemoteHeaderConstants');

var FormActions = {

    init: function () {
        AppDispatcher.handleViewAction({
            actionType: RemoteHeaderConstants.INIT
        });
    },

    select: function (x, y) {
        AppDispatcher.handleViewAction({
            actionType: RemoteHeaderConstants.SELECT,
            x: x,
            y: y
        });
    }

};

module.exports = FormActions;
