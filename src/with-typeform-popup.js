import withTypeformEmbed from './with-typeform-embed'

const withPopup = (props) => {
  const { typeformEmbed, href } = props
  const popup = typeformEmbed.makePopup(href, {
    mode: 'popup',
    autoOpen: false,
  })

  function openTypeform (e) {
    e.preventDefault()

    popup.open()
  }
  return <WrappedComponent {...props} onClick={openTypeform} />
}

export default WrappedComponent => withTypeformEmbed(withPopup)
