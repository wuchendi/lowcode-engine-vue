import { describe, expect, it } from 'vitest'
import {
  componentDescription,
  componentNameError,
  declaredPropNames,
  newComponentSchema,
} from '../src/utils/components'

describe('componentNameError', () => {
  it('accepts a new PascalCase name', () => {
    expect(componentNameError('UserCard', ['Other'])).toBeNull()
  })

  it('rejects other names and taken ones', () => {
    expect(componentNameError('userCard', [])).toBe('ComponentNameInvalid')
    expect(componentNameError('User Card', [])).toBe('ComponentNameInvalid')
    expect(componentNameError('', [])).toBe('ComponentNameInvalid')
    expect(componentNameError('UserCard', ['UserCard'])).toBe(
      'ComponentNameTaken',
    )
  })
})

describe('newComponentSchema', () => {
  it('is an empty Component root named after the component', () => {
    expect(newComponentSchema('UserCard')).toEqual({
      componentName: 'Component',
      fileName: 'UserCard',
      props: {},
      title: 'UserCard',
      children: [],
    })
  })
})

describe('declaredPropNames', () => {
  const root = (value: string) => ({
    componentName: 'Component',
    lifeCycles: { initProps: { type: 'JSExpression', value } },
  })

  it('reads the names of an object or an array', () => {
    expect(
      declaredPropNames(root('({ name: String, age: { type: Number } })')),
    ).toEqual(['name', 'age'])
    expect(declaredPropNames(root("['name', 'age']"))).toEqual(['name', 'age'])
  })

  it('is empty without valid props', () => {
    expect(declaredPropNames({ componentName: 'Component' })).toEqual([])
    expect(declaredPropNames(root('({ broken'))).toEqual([])
  })
})

describe('componentDescription', () => {
  it('describes a low-code component of the engine assets', () => {
    const root = {
      componentName: 'Component',
      fileName: 'UserCard',
      title: 'User card',
      lifeCycles: {
        initProps: { type: 'JSExpression', value: "['name']" },
      },
      children: [],
    }
    const description = componentDescription(root, 'Low-code')
    expect(description).toMatchObject({
      componentName: 'UserCard',
      title: 'User card',
      group: 'Low-code',
      devMode: 'lowCode',
      schema: { componentsTree: [root] },
      snippets: [{ title: 'User card', schema: { componentName: 'UserCard' } }],
    })
    expect(
      description.configure.props.map((p: { name: string }) => p.name),
    ).toEqual(['name'])
  })
})
