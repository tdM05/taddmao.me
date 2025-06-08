import "./AppPanel.css";
import PropTypes from "prop-types";

export default function AppPanel({title, description, moreLink, videoLink}) {
    return (
        <div className="appFrame">
            <div className="leftBox">
                <h2>{title}</h2>
                <p className="leftP">
                    {description}
                </p>
                <a href={moreLink} target="_blank">
                    Learn more
                </a>
            </div>

            <iframe
                className="iFrame"
                width="786"
                height="555"
                src={videoLink}
                title="Youtube link"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    )
}

