import { ClassPlaceCard } from '@/components/ClassPlaceCard';

const TomariCard = () => (
  <ClassPlaceCard
    placeName="泊校"
    imageSrc="placecard-tomari.jpg"
    linkHref="/tomari"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
  >
    〒819-1111 福岡県糸島市泊１２１６−２ 泊第ー公民館
  </ClassPlaceCard>
);

export { TomariCard };