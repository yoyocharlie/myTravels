import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <div className="h-screen flex justify-center font-roboto">
            <div className="flex items-center text-center">
                <div className="rounded bg-white shadow-2xl p-10">
                    <div className="rounded xs:p-2 sm:p-10">
                        <h1 className="xs:text-2xl sm:text-3xl md:text-5xl md:leading-loose leading-loose text-pinkishRed">Don't call it a dream.</h1>
                        <h1 className="xs:text-2xl sm:text-3xl font-bold md:text-5xl md:leading-loose leading-loose text-pinkishRed">Call it a plan.</h1>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ff585D" className="w-6 h-6 inline-block mr-2">
                            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>

                        <h4 className="inline-block xs:text-md sm:text-lg md:text-xl text-black mt-6 md:mt-14 mb-5">myTravels | 2022</h4>
                        <h4 className="text-black xs:text-md sm:text-lg md:text-xl mb-20">A simple place to document all of your adventures</h4>
                        <Link to='/login' data-testid="getStartedBtn" className="p-3 rounded text-white bg-pinkishRed hover:bg-red-500 transform transition duration-200 hover:shadow-lg">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
            <div className='font-roboto xs:text-md sm:text-xl md:text-2xl lg:text-3xl flex flex-col items-center md:flex-row justify-evenly h-screen bg-white'>
                <div className='min-h-md mx-4 max-w-md p-8 border border-pinkishRed w-fit h-fit inline-block'>
                    <h1 className='font-bold'>Travel & create memories</h1>
                    <p className='mt-10'>Travelling can be a wonderful source of inspiration and personal growth, as it often challenges people to see the world from a different perspective and to learn more about themselves in the process.</p>
                </div>
                <div className='inline-block max-w-md w-fit h-fit mx-4 p-8 border border-pinkishRed'>
                    <h1 className='font-bold'>We'll help you create the journal</h1>
                    <p className='mt-10'>By writing regularly in a journal, people can gain a better understanding of themselves and their experiences, and can develop a deeper sense of self-awareness and personal growth.</p>
                </div>
            </div>
    </div>
  )
}

export default Home