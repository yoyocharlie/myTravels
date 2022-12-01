import Card from "./Card";
import EmptyCard from "./EmptyCard";
import Modal from "./Modal";
import { useState } from "react";

const Profile = (props) => {
  const [showModal, setShowModal] = useState(false);

  const cards = props.userCards

  const toggleModal = () => {
    props.setShowModal((modal) => !modal)
    // setInput({
    //     image: '',
    //     location: '',
    //     date: '',
    //     description: ''
    // })
}

  const card = cards.map((card) => {
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

  return (
    <div className="flex justify-center">
        <div className="w-3/4 grid md:grid-cols-3 gap-4 md:gap-8 justify-items-center">
            {card}
            <div>
              <EmptyCard openModal={showModal} />
              {showModal && <Modal toggleModal={toggleModal} setShowModal={setShowModal} addTrip={addTrip} />}
            </div>
            {/* <button onClick={createCard} className="rounded-full xs:mt-5 bg-pinkishRed shadow-lg p-5 w-10 h-10 flex justify-center items-center self-center">
              <span className="text-white text-xl mb-1">+</span>
            </button> */}
        </div>
    </div>
  )
}

export default Profile