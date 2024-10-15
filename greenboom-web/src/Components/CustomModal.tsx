import React, { useEffect } from "react";
import Title from "../Components/Title/Title";
import { FaTumblr } from "react-icons/fa";
import {
  FacebookOutlined,
  TwitterOutlined,
  PinterestOutlined,
  CopyOutlined,
} from "@ant-design/icons";

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  onClose,
  children,
}) => {
  const sharedUrl = "http://localhost:5173/instructions";

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (visible) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [visible, onClose]);

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

  const shareOnPinterest = () => {
    const pinterestShareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
      sharedUrl
    )}`;
    window.open(pinterestShareUrl, "_blank");
  };

  const shareOnTumblr = () => {
    const tumblrShareUrl = `https://www.tumblr.com/widgets/share/tool?canonicalUrl=${encodeURIComponent(
      sharedUrl
    )}`;
    window.open(tumblrShareUrl, "_blank");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(sharedUrl);
    alert("Link copied to clipboard!");
  };

  if (!visible) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-80" onClick={onClose} />
      <div className="fixed inset-0 flex items-center justify-center">
        <div
          className="bg-black w-[65%] h-[75%] flex flex-col relative"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white"
          >
            X
          </button>
          <Title fontSize="3xl" marginTop="mt-48" color="white">
            Share this Channel
          </Title>
          <div className="flex flex-row gap-12 mt-9">
            <FacebookOutlined
              className="cursor-pointer"
              style={{ fontSize: "30px", color: "white" }}
              onClick={shareOnFacebook}
            />
            <TwitterOutlined
              className="cursor-pointer"
              style={{ fontSize: "30px", color: "white" }}
              onClick={shareOnTwitter}
            />
            <PinterestOutlined
              className="cursor-pointer"
              style={{ fontSize: "30px", color: "white" }}
              onClick={shareOnPinterest}
            />
            <FaTumblr
              style={{ fontSize: "28px", color: "white" }}
              className="cursor-pointer"
              onClick={shareOnTumblr}
            />
            <CopyOutlined
              className="cursor-pointer"
              style={{ fontSize: "30px", color: "white" }}
              onClick={copyToClipboard}
            />
          </div>
          <div className="flex-1 flex items-center justify-center"></div>
        </div>
      </div>
    </>
  );
};

export default CustomModal;
