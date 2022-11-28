
const Card = (props) => {
  return (
    <div className="card content-center rounded bg-white font-roboto shadow-lg">
        <div className="mx-8 my-5">
            <img src={props.travelDetails.img} alt="" className="rounded sm:11/12 shadow-lg" />
        </div>
        <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ff585D" className="w-6 h-6 inline-block mr-2">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            <h3 className="inline-block mb-4">{props.travelDetails.country}</h3>
            <p className="mt-2 mb-10">{props.travelDetails.description}</p>
        </div>
    </div>
  )
}

export default Card