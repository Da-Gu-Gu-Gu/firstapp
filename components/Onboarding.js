import Onboarding from 'react-native-onboarding-swiper';
import {color} from '../utils/constants'

const OnboardingScreen=({navigation})=>{
<Onboarding
    onSkip={()=>navigation.navigate("hometab")}
    onDome={()=>navigation.navigate("settingtab")}
  pages={[
    {
      backgroundColor: color.lightgreen,
      image: <Image source={require('../assets/images/Onboarding.webp')} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
        backgroundColor:color.green,
        image: <Image source={require('../assets/images/Onboarding.webp')} />,
        title: 'Onboarding 2',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
  ]}
/>
}

export default OnboardingScreen