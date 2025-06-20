import PageButtons from "../components/General/PageButtons.jsx";
import "./Apps.css";
import GoToTop from "../GoToTop.jsx";
import AppPanel from "../components/AppsPage/AppPanel.jsx";
import {useEffect, useState} from "react";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);
import Spinner from "../components/General/Spinner.jsx";

export default function AppsPage() {
    const [apps, setApps] = useState(null);
    useEffect(() => {
        getApps();
    }, []);
    async function getApps() {
        const {data} = await supabase.from("Apps").select();
        setApps(data);
    }
  return (
    <>
      <PageButtons />
      <div className="title">
        <h1 className="titleText">Apps</h1>
      </div>

        {
        apps === null ? (
            <Spinner text={"Loading Apps..."}/>
            ) : apps.length === 0 ? (
            <Spinner text={"No apps found..."}/>
            ) :
            apps.map(({id, name, text, moreLink, videoLink}) => (
            <AppPanel
                key={id}
                title={name}
                description={text}
                moreLink={moreLink}
                videoLink={videoLink}
            />
        ))}
      <GoToTop />
    </>
  );
}

