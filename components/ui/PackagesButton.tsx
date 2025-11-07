"use client";
import { Button } from "./button";

export default function PackagesButton() {
  return (
    <>
      {" "}
      <Button
        className="w-full"
        // variant={pkg.popular ? 'hero' : 'default'}
        onClick={() => {
          const element = document.querySelector("#contact");
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Pilih Paket
      </Button>
    </>
  );
}
