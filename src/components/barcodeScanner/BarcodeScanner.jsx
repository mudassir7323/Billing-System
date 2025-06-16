import React, { useEffect, useRef, useState } from 'react';
import { BrowserMultiFormatReader } from '@zxing/browser';

const BarcodeReader = () => {
  const videoRef = useRef(null);
  const codeReaderRef = useRef(null);
  const [barcodeText, setBarcodeText] = useState("Not read");

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();
    codeReaderRef.current = codeReader;

    const initScanner = async () => {
      try {
        const devices = await BrowserMultiFormatReader.listVideoInputDevices();
        const selectedDeviceId = devices[0]?.deviceId;

        if (!selectedDeviceId) {
          console.error("No video input devices found.");
          return;
        }

        await codeReader.decodeFromVideoDevice(
          selectedDeviceId,
          videoRef.current,
          (result, err) => {
            if (result) {
              setBarcodeText(result.getText());

              // Stop scanner
              if (codeReaderRef.current) {
                codeReaderRef.current.stopContinuousDecode();
              }

              // Also stop the video stream
              if (videoRef.current && videoRef.current.srcObject) {
                const tracks = videoRef.current.srcObject.getTracks();
                tracks.forEach((track) => track.stop());
              }
            }
          }
        );
      } catch (error) {
        console.error("Camera initialization error:", error);
      }
    };

    initScanner();

    return () => {
      // Cleanup
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center p-4 rounded-xl bg-white shadow-md max-w-sm mx-auto">
      <h2 className="text-lg font-semibold mb-4">Scan Barcode</h2>

      <div className="w-64 h-40 overflow-hidden rounded-md border shadow-sm">
        <video ref={videoRef} className="w-full h-full object-cover" />
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">Scanned Barcode:</p>
        <p className="text-md font-bold text-blue-600 break-words">
          {barcodeText}
        </p>
      </div>
    </div>
  );
};

export default BarcodeReader;
