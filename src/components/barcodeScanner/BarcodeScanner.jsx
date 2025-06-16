import React, { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";

function BarcodeScanner() {
  const [barcodeText, setBarcodeText] = useState("Barcode not read");
  const videoRef = useRef(null);
  const codeReaderRef = useRef(null);

  useEffect(() => {
    codeReaderRef.current = new BrowserMultiFormatReader();

    const startScanner = async () => {
      try {
        const codeReader = codeReaderRef.current;

        await codeReader.decodeFromConstraints(
          {
            video: {
              facingMode: { ideal: "environment" }, // safer for both laptop and mobile
              width: { ideal: 640 },
              height: { ideal: 480 },
            },
          },
          videoRef.current,
          (result, err) => {
            if (result) {
              setBarcodeText(result.getText());

              // Stop the stream manually
              const tracks = videoRef.current?.srcObject?.getTracks();
              tracks?.forEach((track) => track.stop());
            }
          }
        );
      } catch (error) {
        console.error("Error accessing camera:", error);
        setBarcodeText("Camera access failed or not available");
      }
    };

    startScanner();

    return () => {
      const tracks = videoRef.current?.srcObject?.getTracks();
      tracks?.forEach((track) => track.stop());
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-gray-100 rounded-xl shadow-lg w-full max-w-md mx-auto mt-10">
      <h2 className="text-xl font-semibold text-gray-700">Scan Barcode</h2>

      <video
        ref={videoRef}
        className="w-full h-auto max-h-64 rounded-lg border border-gray-300 object-cover"
        autoPlay
        muted
        playsInline
      />

      <div className="text-center mt-4 text-lg font-medium text-blue-700">
        {barcodeText}
      </div>
    </div>
  );
}

export default BarcodeScanner;
