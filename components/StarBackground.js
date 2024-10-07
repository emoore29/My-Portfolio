// import { useEffect } from "react";

// // Generates a starry background to be added to _app.js

// const Stars = () => {
//   useEffect(() => {
//     const limit = 50;

//     // Function to generate random numbers
//     const randomInt = (min, max) =>
//       Math.floor(Math.random() * (max - min + 1)) + min;
//     const randomNum = (min, max) => Math.random() * (max - min) + min;

//     for (let i = 0; i < limit; i++) {
//       const star = document.createElement("span");
//       star.classList.add("star");
//       star.innerHTML = `
//         <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
//           <path d="M10.744,5.372C7.777,5.372,5.372,2.967,5.372,0c0,2.967-2.405,5.372-5.372,5.372c2.967,0,5.372,2.405,5.372,5.372
//           C5.372,7.777,7.777,5.372,10.744,5.372z"/>
//         </svg>`;

//       // Set random position, scale, and opacity
//       star.style.left = randomInt(1, 100) + "%";
//       star.style.top = randomInt(1, 100) + "%";
//       star.style.transform = `scale(${randomNum(0, 1)})`;
//       star.style.opacity = randomNum(0.6, 1);

//       // Randomize animation duration and delay for each star
//       const duration = randomInt(3, 8) + "s"; // Random duration between 3-8 seconds
//       const delay = randomInt(0, 5) + "s"; // Random delay between 0-5 seconds
//       star.style.animationDuration = duration;
//       star.style.animationDelay = delay;

//       // Append the star to the body
//       document.body.appendChild(star);
//     }

//     // Cleanup function to remove stars when component unmounts
//     return () => {
//       const stars = document.querySelectorAll(".star");
//       stars.forEach((star) => star.remove());
//     };
//   }, []);

//   return null; // This component doesn't render anything itself
// };

// export default Stars;
