import PropTypes from 'prop-types'
import NextHead from 'next/head'

function Head ({title, description}) {
  return (
    <NextHead>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  )
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
}

export default Head