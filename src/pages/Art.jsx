import PageButtons from "../components/General/PageButtons.jsx";
import Frigate from "../../public/Frigate.jsx";
import "../App.css";
import "./Art.css";
import { Fourth_eye } from "../../public/Fourth_eye.jsx";
import GasMask from "../../public/GasMask.jsx";
import GoToTop from "../GoToTop.jsx";
import ArtPanel from "../components/ArtPage/ArtPanel.jsx";
import ThreeDModelPanel from "../components/ArtPage/3dModelPanel.jsx";
import PropTypes from "prop-types";
import { useEffect, useState } from 'react';
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

export default function ArtsPage() {
    const [sketches, setSketches] = useState([]);
    const [digitalData, setDigitalData] = useState([]);
    const [text, setText] = useState("Loading...");

    useEffect(() => {
        getSketches();
        getDigitalData();
    }, []);

    async function getSketches() {
        const {data} = await supabase.from("Sketches").select();
        setSketches(data);
        // console.log("data:", data)
    }

    async function getDigitalData() {
        const {data} = await supabase.from("DigitalPaintings").select();
        setDigitalData(data);
        console.log("data:", data)
    }

    useEffect(() => {
        // need if since initially sketches is an empty array
        if (sketches.length === 0) return;
        setText(sketches[0].title);
    }, [sketches]);

    return (
        <div>
            <PageButtons/>
            <div className="headBox">
                <h1 className="welcome">Welcome to my art gallery</h1>
                <p className="tag">
                    Explore my still sketches, digital paintings, and 3d models
                </p>
            </div>
            <Section title={"Traditional Sketches"}
                     components={
                         <>
                             {sketches.map(({id, name, text, imageSrc}, index) => (
                                 <ArtPanel key={id} leftSide={index % 2 === 0} description={text}
                                           imageSrc={imageSrc} title={name}/>
                             ))}
                         </>
                     }>
            </Section>
            <Section title={"Digital Paintings"}
                     components={
                         <>
                             {digitalData.map(({id, name, text, imageSrc}, index) => (
                                 <ArtPanel key={id} leftSide={index % 2 === 0} description={text}
                                           imageSrc={imageSrc} title={name}/>
                             ))}
                         </>
                     }>
            </Section>

            <Section title={"3d Models"}
                     components={
                         <>
                             <div className="boxTitle">
                                 Quick tip: Left click and hold to interact with the 3d models!
                             </div>
                             <div className="modelBox">

                                 <ThreeDModelPanel
                                     description={"This was one of my first 3d models that I created without a tutorial. At the time, I was very interested in video games, and in particular I loved the story of Halo. So, I decided to test my skills with Blender and see if I could create something on my own."}
                                     model={Frigate}
                                     name={"Halo's Frigate"}
                                     minDist={60}
                                     maxDist={100}></ThreeDModelPanel>

                                 <ThreeDModelPanel
                                     description={"The Fourth Eye is a character from a fictional story that I created. I had always wanted to create a webtoon/manwha which part of the reason as to why I'm so invested in art. I will not give further details on this character as I'm still working on the story."}
                                     model={Fourth_eye}
                                     name={"The Fourth Eye"}
                                     minDist={0}
                                     maxDist={2}></ThreeDModelPanel>

                                 <ThreeDModelPanel
                                     description={"This Gas Mask was one of my first attempts at texturing and sculpting in Blender. I used to do lots of 3d creations in Blender, but now I realize that I lack knowledge in fundamental art skills which is why I'm learning traditional art at the moment."}
                                     model={GasMask}
                                     name={"Gas Mask"}
                                     minDist={3}
                                     maxDist={4}></ThreeDModelPanel>
                             </div>
                         </>
                     }>
            </Section>
            <GoToTop/>
        </div>
    );
}

function Section({title, components}) {
    return (
        <>
            <p className="section">{title}</p>
            {components}
        </>
    );
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    components: PropTypes.object.isRequired
}