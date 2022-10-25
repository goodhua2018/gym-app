import back from './images/back.png'
import chest from './images/chest.png'
import lowerArms from './images/lower_arms.png'
import lowerLegs from './images/lower_legs.png'
import shoulders from './images/shoulders.png'
import upperArms from './images/upper_arms.png'
import upperLegs  from './images/upper_legs.png'
import waist from './images/waist.png'

const bodyImages = { back, chest, lowerArms, lowerLegs, shoulders, upperArms, upperLegs, waist }

const bodyNames = Object.keys(bodyImages)

export { bodyNames, bodyImages }