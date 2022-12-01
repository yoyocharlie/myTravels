import Card from "./Card";
import EmptyCard from "./EmptyCard";
import Modal from "./Modal";
import { useState } from "react";

const Profile = (props) => {
  const [showModal, setShowModal] = useState(false);
  const cards = props.userCards
  const cardComponents = cards.map((card) => {
    return (
      <Card
      key={card.id}
        image={card.image}
        date={card.date}
        description={card.description}
        location={card.location}
      />
    )
  })

  const addTrip = (e) => {
    e.preventDefault();
  }
  
  const toggleModal = () => {
    setShowModal((modal) => !modal);
  }

  return (
    <div className="flex justify-center">
        <div className="grid md:grid-cols-3 gap-4 md:gap-8 justify-items-center">
            {cardComponents}
            <EmptyCard openModal={toggleModal} />
        </div>
        {showModal && <Modal toggleModal={toggleModal} setShowModal={setShowModal} addTrip={addTrip} />}
    </div>
  )
}

export default Profile