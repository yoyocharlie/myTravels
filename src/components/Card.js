

const Card = (props) => {
  const deleteTrip = props.deleteTrip;
  const toggleUpdateModal = props.toggleUpdateModal;

  return (
    <div className="mb-5">  
      <div className="max-w-sm rounded bg-white overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
        <img className="w-full" src={props.image} alt="" />
        <div className="px-6 py-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ff585D" className="w-6 h-6 inline-block mr-2 mb-2">
            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
          <div className="font-bold md:text-lg lg:text-xl mb-2 inline-block tracking-wide">{props.location}</div>
          <div className="font-roboto text-md mb-2">{props.date}</div>
          <p className="text-gray-700 text-base font-roboto">
            {props.description}
          </p>
          <button onClick={deleteTrip(props.id)} className="mr-6">X</button>
          <button onClick={toggleUpdateModal}>✏</button>
        </div>
      </div>
    </div>
  )
}

export default Card