var RuleSchema = {
  from: {
    type: 'string',
    component: 'Input',
    data: ['option1', 'option2', 'option3']
  },
  to: {
    type: 'string',
    component: 'Input',
    data: ['option1', 'option2', 'option3']
  },
  where: {
    type: 'string',
    component: 'Input',
    data: ['option1', 'option2', 'option3']
  },
  trend: {
    type: 'string',
    component: 'Input',
    data: ['increase', 'decrease']
  },
  threshold: {
    type: 'number',
    component: 'Input'
  },
  resolution: {
    type: 'string',
    component: 'Input',
    data: ['day', 'week', 'month']
  }
};


module.exports = RuleSchema;
