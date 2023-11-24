import { Text } from 'react-native'
import globalCss from '../styles/global.css'

const CustomText = (props) => {
  return (
      <Text style = {[globalCss.fontFamily, props.style]} {...props}>{props.children}</Text>
  )
}

export default CustomText