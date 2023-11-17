"use client";
import React from "react";

const LOCATION_COORDINATES = {
  latitude: 41.32407065920933,
  longitude: 69.32011675297309,
};

// NOT YET REUSABLE
function Map({ mode, ...props }) {
  React.useEffect(() => {
    window.GetMap = function () {
      const map = new Microsoft.Maps.Map(`#mapId`, {
        credentials: process.env.NEXT_PUBLIC_BING_MAPS_KEY,
        center: new Microsoft.Maps.Location(
          LOCATION_COORDINATES.latitude,
          LOCATION_COORDINATES.longitude
        ),
        zoom: 16,
        mapTypeId:
          mode === "dark"
            ? Microsoft.Maps.MapTypeId.canvasDark
            : Microsoft.Maps.MapTypeId.canvasLight,
      });

      const pushpin = new Microsoft.Maps.Pushpin(
        new Microsoft.Maps.Location(
          LOCATION_COORDINATES.latitude,
          LOCATION_COORDINATES.longitude
        ),
        {
          color: "rgb(198,41,178)",
          title: "New Uzbekistan University",
        }
      );

      map.entities.push(pushpin);
    };

    if (window.Microsoft && window.Microsoft.Maps) {
      window.GetMap();
    }
  }, [mode]);

  return <div {...props} id={"mapId"}></div>;
}

export default Map;
