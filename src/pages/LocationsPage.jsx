import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LocationsGrid from "../Components/LocationsGrid";

const LocationsPage = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <LocationsGrid />
      </div>
      <Footer />
    </>
  )
}

export default LocationsPage;