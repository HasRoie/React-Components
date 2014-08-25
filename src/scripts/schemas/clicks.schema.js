var ClicksSchema = {
  publisher: {
    type: 'string',
    component: 'Select',
    data: ['publisher1', 'publisher2', 'publisher3']
  },
  day: {
    type: 'string',
    component: 'Date'
  },
  clicks: {
    type: 'number',
    component: 'Select'
  }
};


module.exports = ClicksSchema;
