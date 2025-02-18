import React from 'react'
import HeroSection from '../../components/Hero/Hero'
import BestSelling from '../../components/BestSelling/BestSelling'
import BasicTabs from '../../components/Products/ProductTab'
import ExclusiveOffer from '../../components/ExclusiveOffer/ExclusiveOffer'
import DesignerClothes from '../../components/DesignerClothes/DesignerClothes'
import Feedback from '../../components/Feedback/Feedback'
import Whatsapp from '../../components/whatsapp/Whatsapp'
const Home:React.FC = () => {
  return (
      <div>
          <HeroSection />
          <BestSelling />
          <BasicTabs />
          <ExclusiveOffer />
          <DesignerClothes />
          <Feedback />
          <Whatsapp />
      </div>
  )
}

export default Home
