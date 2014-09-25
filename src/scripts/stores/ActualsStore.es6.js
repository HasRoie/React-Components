var BaseForm = require('../stores/BaseForm');
var NgInjector = require('../NgInjector');

// var FormConstants = require('../actions/FormConstants');

var actualsInstance;

var geoService;
var advertiserModel;
var userModel;
var accountModel;
var $q;



var actions = {};

// actions[FormConstants.UPDATE_FIELD] = action => {
//   // using this action since we have cascading selects
//
//   // if country was changed, we need to update regions
//   // if (action.field === 'country_id') {
//   //   formInstance.formData.region_id = -1;
//   //   formInstance.formOptions.regions = [];
//   //   fetchRegions(action.value);
//   // }
// };

class ActualsStore extends BaseForm {
    constructor() {
        this.formOptions.accountTypes = [
            {
                name: 'Company',
                id: 'company'
            },
            {
                name: 'Individual',
                id: 'individual'
            }
    ];

        super(actions);
    }

    getData() {
        var $this = this;

    [geoService, advertiserModel, userModel, accountModel, $q] =
            NgInjector(['advertiserModel', '$q']);


        $q.all({
            // accountData    : accountModel.getCurrent({ fields : '*,country.name,region.name' }),
            // advertiserData : advertiserModel.getCurrent(),
            // countryData    : geoService.getCountries(),
            // timezoneData   : geoService.getTimezones()
        }).then(function (res) {

            // $this.formOptions.countries = res.countryData;
            // $this.formOptions.timezones = _.map(res.timezoneData, function(val, key) {
            //   return { name : key, id : val.display };
            // });
            //
            // $this.formData = res.accountData.data;
            // $this.formData.time_zone = res.advertiserData.data.time_zone;
            // $this.formData.advertiser_id = res.advertiserData.data.id;

            fetchRegions($this.formData.country_id);

            $this.store.emitChange();
        });
    }

    saveData() {
        var formData = this.formData;

        // advertiserModel.save({
        //   id        : formData.advertiser_id,
        //   time_zone : formData.time_zone,
        //   name      : formData.name
        // });
        //
        // accountModel.save(formData);

        // $.main.angularServices.userSession.changeInterfaceName(formData.name);
        // userModel.setCurrentUsersTimezone();
    }
}


acturalsInstance = new ActualsStore();
module.exports = ActuralsInstance.store;
