import { Helmet } from 'react-helmet'

const Meta = ({ title }) => {
  return (
    <Helmet>
      <title>Packimpex | {title}</title>
    </Helmet>
  )
}

export default Meta
