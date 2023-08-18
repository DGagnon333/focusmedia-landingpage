import React from "react";

const MatterportTour = () => {
  return (
    <div className="flex justify-center">
      <h2 className="text-2xl">Explore Our 3D Virtual Tour</h2>
      <div>
        <div className="py-10">
          <iframe
            width="720"
            height="576"
            src="https://gallery.we-get-around.com/3d-model/250-pharr-road/fullscreen/?embedded"
            allowfullscreen="allowfullscreen"
          />
        </div>
      </div>
    </div>
  );
};

export default MatterportTour;