"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const DOWNLOAD_URL =
  "https://github.com/rullyfadheli/OtokasRelease/releases/download/OtokasApp/Otokas.apk";

export function DownloadButton(): React.JSX.Element {
  const handleDownload = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    window.location.assign(DOWNLOAD_URL);
  };

  return (
    <Button
      onClick={handleDownload}
      className="bg-transparent hover:bg-transparent text-md font-bold"
    >
      Download Sekarang
    </Button>
  );
}

export default DownloadButton;
