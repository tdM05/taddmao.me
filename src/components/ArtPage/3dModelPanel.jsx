import PropTypes from "prop-types";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

export default function ThreeDModelPanel({ description, model, name, minDist, maxDist }) {
    return (
        <div className="modelDescriptionBox">
            <Model RenderModel={model} minDist={minDist} maxDist={maxDist} />
            <h1 className="modelHeader">{name}</h1>
            <p className="modelDescription">
                {description}
            </p>
        </div>
    );
}

function Model(props) {
    return (
        <div className="modelViewer">
            <Canvas>
                <ambientLight></ambientLight>
                <OrbitControls
                    minDistance={props.minDist}
                    maxDistance={props.maxDist}
                    enableZoom={false}
                    enablePan={false}
                ></OrbitControls>
                <Suspense fallback={null}>
                    <props.RenderModel />
                </Suspense>
                <Environment preset="sunset" />
            </Canvas>
        </div>
    );
}

Model.propTypes = {
    minDist: PropTypes.number.isRequired,
    maxDist: PropTypes.number.isRequired,
    RenderModel: PropTypes.elementType.isRequired
};

ThreeDModelPanel.propTypes = {
    description: PropTypes.string.isRequired,
    model: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    minDist: PropTypes.number.isRequired,
    maxDist: PropTypes.number.isRequired
};