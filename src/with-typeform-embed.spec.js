import withTypeformEmbed from './with-typeform-embed'

describe('withTypeformEmbed', () => {
  const ComponentWithApi = withTypeformEmbed(<div />)
  it('should add an api prop to the component', () => {
    expect(ComponentWithApi.props('api')).toBe(true)
  })
})
