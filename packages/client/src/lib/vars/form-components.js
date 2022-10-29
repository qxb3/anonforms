import Input from '../components/forms/Input.svelte'

const formComponents = [
  {
    name: 'Input',
    description: 'Get input from user',
    options: [
      {
        name: 'text',
        type: 'String',
        optional: true,
        default: ''
      },
      {
        name: 'placeholder',
        type: 'String',
        optional: true,
        default: ''
      },
      {
        name: 'defaultValue',
        type: 'String',
        optional: true,
        default: 'Your answer'
      },
      {
        name: 'inputType',
        type: 'String',
        optional: true,
        default: 'text'
      }
    ],
    component: Input,
    str: '<Input {OPTIONS} />'
  }
]

export default formComponents
