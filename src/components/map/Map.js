import React from 'react'

const Map = () => (
  <div className="map mt-4 component-bg">
   <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.780934065311!2d6.098311815955962!3d50.77963437952211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0995d36ff22ff%3A0x3a4248b50ce934de!2sJ%C3%BClicher%20Str.%2072a%2C%2052070%20Aachen%2C%20Germany!5e0!3m2!1sen!2sng!4v1651002907689!5m2!1sen!2sng"
            width="600"
            height="450"
            style={{border: "0"}}
            allowfullscreen=""
            loading="lazy"
            title="Map"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
    </div>
)

export default Map