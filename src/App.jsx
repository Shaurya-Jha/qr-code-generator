import { useState } from "react";
import "./App.css";
// import "./qr-code-file/qrcode";
import QRCodeStyling from 'qr-code-styling'

function App() {
  // state for getting url value from the input field
  const [url, setNewUrl] = useState("");

  const defaultURL = "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiBmMu475OEAxWiTGwGHbPPBOMQ78AJegQIGxAB&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdQw4w9WgXcQ&usg=AOvVaw0aHtehaphMhOCAkCydRLZU&opi=89978449"

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
      shape: "square",
      image: "https://images.unsplash.com/photo-1683009427590-dd987135e66c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
      dotsOptions:{
        color: "#FF0000"
      },
      backgroundOptions:{
        color: "#00A36C"
      }
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
