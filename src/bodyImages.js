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

// const bodyNames = originalBodyNames.map((body) => {
//     if (/[A-Z]/.test(body)) {
//       return body.slice(0, 5) + ' ' + body[5].toLowerCase() + body.slice(6)
//     } else {
//       return body
//     }
//   })


export { bodyNames, bodyImages }