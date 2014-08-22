var RuleSchema = {
  from: {
    type: 'string',
    component: 'Select',
    data: ['option1', 'option2', 'option3']
  },
  to: {
    type: 'string',
    component: 'Select',
    data: ['option1', 'option2', 'option3']
  },
  where: {
    type: 'string',
    component: 'Select',
    data: ['option1', 'option2', 'option3']
  },
  trend: {
    type: 'string',
    component: 'Select',
    data: ['increase', 'decrease']
  },
  threshold: {
    type: 'number',
    component: 'Input'
  },
  resolution: {
    type: 'string',
    component: 'Select',
    data: ['day', 'week', 'month']
  },
  chang: {
    type: 'string',
    component: 'Select',
    data: ['day', 'week', 'month']
  }
};


module.exports = RuleSchema;
