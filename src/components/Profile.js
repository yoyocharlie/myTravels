import Card from "./Card";
import EmptyCard from "./EmptyCard";
import Modal from "./Modal";
import UpdateModal from "./UpdateModal";
import { useState } from "react";

const Profile = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [activeEditId, setActiveEditId] = useState({});
  const [activeEditInputs, setActiveEditInputs] = useState({});
  const cards = props.userCards;
  const postTrip = props.postTrip;
  const updateTrip = props.updateTrip;
  const deleteTrip = props.deleteTrip;
  const toggleModal = () => {
    setShowModal((modal) => !modal);
  }
  const toggleUpdateModal = (id, date, description, location) => {
    return () => {
      setActiveEditInputs({
        ...activeEditInputs,
        date: date,
        description: description,
        location: location
      });
      setActiveEditId(id)
      setUpdateModal((modal) => !modal)
    };
  }
  const closeUpdateModal = () => {
    setUpdateModal(modal => !modal);
  }

  const cardComponents = cards.map((card) => {
    return (
      <Card
        key={card.id}
        id={card.id}
        image={card.url}
        date={card.date}
        description={card.description}
        location={card.location}
        deleteTrip={deleteTrip}
        toggleUpdateModal={toggleUpdateModal(
          card.id,  
          card.date, 
          card.description, 
          card.location
        )}
      />
    )
  });

  

  return (
    <div className="bg-stone-300 min-h-screen">
      <div className="flex justify-center m-4">
          <div className="grid md:grid-cols-3 gap-4 md:gap-8 justify-items-center mt-28">
              {cardComponents}
              <EmptyCard openModal={toggleModal}/>
          </div>
          {showModal && <Modal toggleModal={toggleModal} postTrip={postTrip} />}
          {updateModal && <UpdateModal closeUpdateModal={closeUpdateModal} toggleUpdateModal={toggleUpdateModal} updateTrip={updateTrip} activeEditId={activeEditId} activeEditInputs={activeEditInputs} />}
      </div>
    </div>
  )
}

export default Profile