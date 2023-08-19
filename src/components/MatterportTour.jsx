import React from "react";

const MatterportTour = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 flex flex-col justify-center">
      <h2 className="text-4xl text-center p-4">Explore Our 3D Virtual Tour</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            title="matterpost video"
            frameborder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            allowfullscreen
            src="https://gallery.we-get-around.com/3d-model/250-pharr-road/fullscreen/?embedded"
          />
        </div>
    </div>
  );
};

export default MatterportTour;