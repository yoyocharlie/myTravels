import Entry from "./Card"
import testData from "../testData"

const Profile = () => {
  // const travelCard = testData.map(travelItem => {
  //   return (
  //       <Entry 
  //           key={travelItem.id}
  //           travelDetails={travelItem}
  //       />
  //   )
  // })

  return (
    <div className="flex justify-center">
        <div className="w-3/4 grid md:grid-cols-3 gap-4 md:gap-8 justify-items-center">
            {/* {travelCard} */}
        </div>
    </div>
  )
}

export default Profile