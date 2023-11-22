import React, { useEffect, useState } from "react";
import MediaService from "../../services/MediaService"; // Import your MediaService module here

// const DriverItem = ({ name, image }) => {
//   const [imageUrl, setImageUrl] = useState("");

//   useEffect(() => {
//     const url = MediaService.getImageUrl();
//     setImageUrl(url);
//   }, []);

//   return (
//     <article className="col-12 col-sm-6 col-md-4 col-lg-3">
//       <div className="border text-center h-100">
//         <h3>{name}</h3>
//         {/* Use the dynamically fetched image URL */}
//         <img className="img-fluid" src={imageUrl} alt="" />
//       </div>
//     </article>
//   );
// };

// export default DriverItem;

const DriverItem = ({ name, image }) => {
  return (
    <article className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="border text-center h-100">
        <h3>{name}</h3>
        {/*ideelt hentes denne delen fra MediaService: http://localhost:5163/images/ - ellers kan det bli mye vedlikeholdsarbeide etter hvert!*/}
        <img
          className="img-fluid"
          src={`http://localhost:5029/images/drivers/${image}`}
          alt=""
        />
      </div>
    </article>
  );
};

export default DriverItem;
