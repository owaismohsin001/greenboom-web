// import React from "react";
// import { FaLinkedin, FaFacebook, FaTwitter, FaLink } from "react-icons/fa";
// function ContactPageSharing() {
//   const sharedUrl = "http://localhost:5173/contact";
//   const shareOnFacebook = () => {
//     const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
//       sharedUrl
//     )}`;
//     window.open(facebookShareUrl, "_blank");
//   };

//   const shareOnTwitter = () => {
//     const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
//       sharedUrl
//     )}&text=Check%20out%20this%20YouTube%20channel!`;
//     window.open(twitterShareUrl, "_blank");
//   };
//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(sharedUrl);
//     alert("Link copied to clipboard!");
//     // toast.success("Link copied to clipboard!");
//   };
//   const shareOnLinkedIn = () => {
//     const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
//       sharedUrl
//     )}`;
//     window.open(linkedInShareUrl, "_blank");
//   };

//   return (
//     <div className="mt-16 pl-5 flex flex-row gap-4">
//       <FaFacebook onClick={shareOnFacebook} />
//       <FaTwitter onClick={shareOnTwitter} />
//       <FaLinkedin onClick={shareOnLinkedIn} />
//       <FaLink onClick={copyToClipboard} />
//     </div>
//   );
// }

// export default ContactPageSharing;

import React from "react";
import { FaLinkedin, FaFacebook, FaTwitter, FaLink } from "react-icons/fa";
import { toast } from "react-toastify"; // Import toast

function ContactPageSharing() {
  const sharedUrl = "http://localhost:5173/contact";

  const shareOnFacebook = () => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      sharedUrl
    )}`;
    window.open(facebookShareUrl, "_blank");
  };

  const shareOnTwitter = () => {
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      sharedUrl
    )}&text=Check%20out%20this%20YouTube%20channel!`;
    window.open(twitterShareUrl, "_blank");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(sharedUrl);
    toast.success("Link copied to clipboard!"); // Use toast for notification
  };

  const shareOnLinkedIn = () => {
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      sharedUrl
    )}`;
    window.open(linkedInShareUrl, "_blank");
  };

  return (
    <div className="mt-10 pl-5 flex flex-row gap-4">
      <FaFacebook onClick={shareOnFacebook} className="cursor-pointer" />
      <FaTwitter onClick={shareOnTwitter} className="cursor-pointer" />
      <FaLinkedin onClick={shareOnLinkedIn} className="cursor-pointer" />
      <FaLink onClick={copyToClipboard} className="cursor-pointer" />
    </div>
  );
}

export default ContactPageSharing;
