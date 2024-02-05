import { useState } from "react";
import "./App.css";
// import "./qr-code-file/qrcode";
import QRCodeStyling from 'qr-code-styling'

function App() {
  // state for getting url value from the input field
  const [url, setNewUrl] = useState("");

  // generate QR code event
  const generateQRCode = () => {
  //   console.log("btn clicked");

  //   // generate qr code
  //   var qrcode = new QRCode(
  //     // value to be converted to qrcode
  //     url,

  //     // extra settings if required
  //   );

    // qrcode.makeCode()

    const qrCode = new QRCodeStyling({
      width: 250,
      height: 250,
      type: "svg",
      data: url,

    })

    qrCode.append(document.getElementById("canvas"))
  };

  return (
    <>
      <div>
        <h2>Qr code generator</h2>

        <input
          className="mt-4 border px-2 py-1 border-blue-600"
          placeholder="Enter url..."
          value={url}
          onChange={(e) => setNewUrl(e.target.value)}
        />

        <div className="my-3 flex justify-center">
          <button onClick={generateQRCode}>Generate URL</button>
        </div>

        <p>{url}</p>

        <div id="canvas" className="flex justify-center my-4"></div>
      </div>
    </>
  );
}

export default App;
