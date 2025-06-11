
import Banner from "@/components/Banner";
import FooterComponent from "@/components/FooterComponent";
import Header from "@/components/Header";
import ImageSlider from "@/components/ImageSlider";
import NewDesigns from "@/components/NewDesigns";
import PopularDesigns from "@/components/PopularDesigns";

export default function Home() {
  return (
    <div>
      <Header/>
      <div className="md:mx-10 mx-5">
        {/* <ImageSlider/> */}
        <Banner/>
        <PopularDesigns/>
        <NewDesigns/>
      </div>
      <FooterComponent/>
    </div>
  );
}
