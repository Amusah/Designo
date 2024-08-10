import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LocationsGrid from "../Components/LocationsGrid";
import CTA from "../Components/CTA";

const LocationsPage = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <LocationsGrid />
      </div>
      <Footer cta={<CTA />} />
    </>
  )
}

export default LocationsPage;