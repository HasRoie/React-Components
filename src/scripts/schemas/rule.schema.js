var RuleSchema = {
  from: {
    type: 'text',
    component: 'Input',
    data: ['option1', 'option2', 'option3']
  },
  to: {
    type: 'text',
    component: 'Input',
    data: ['option1', 'option2', 'option3']
  },
  where: {
    type: 'text',
    component: 'Input',
    data: ['option1', 'option2', 'option3']
  },
  trend: {
    type: 'text',
    component: 'Input',
    data: ['increase', 'decrease']
  },
  threshold: {
    type: 'number',
    component: 'Input'
  },
  resolution: {
    type: 'text',
    component: 'Input',
    data: ['day', 'week', 'month']
  }
};


module.exports = RuleSchema;
