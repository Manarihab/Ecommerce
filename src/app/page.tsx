import Slider from "./_components/Slider";
import CatSlider from "./_components/CatSlider";
import Products from "./products/_components/Products";

export default function Home() {
 
  return (
    <>
    
    <Slider/>
    <div className='mt-30 lg:mt-0'><CatSlider/></div>
    
    <Products/>
    </>
  );
}
