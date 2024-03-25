import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import PdCard from "../PdCard/PdCard";

const PdSlider = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free-snap",
        slides: {
            perView: 5,
            spacing: 15,
        },
    });
    return (
        <div ref={sliderRef} className="keen-slider">
            <PdCard />
            <PdCard />
            <PdCard />
            <PdCard />
            <PdCard />
            <PdCard />
            <PdCard />
            <PdCard />
            <PdCard />
            <PdCard />
            <PdCard />
            <PdCard />
            <PdCard />
            <PdCard />
        </div>
    );
};

export default PdSlider;