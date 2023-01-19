import React from "react";
import Swal from "sweetalert2";

export default function SweetAlertDemo1() {
  const alertDemo1 = () => {
    alert("Hellooooooo");
  };
  const alertDemo2 = () => {
    Swal.fire("Good job!", "You clicked the button!", "success");
  };
  const alertDemo3 = () => {
    Swal.fire({
      title: "Sweet!",
      text: "Modal with a custom image.",
      imageUrl: "https://unsplash.it/400/200",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  };
  const alertDemo4 = () => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Apply",
      denyButtonText: `Not Interested`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  return (
    <>
      <div>SweetAlertDemo1</div>
      <button onClick={alertDemo1}>Js Alert</button>
      <button onClick={alertDemo2} className="ms-1">
        Sweet Alert
      </button>
      <button onClick={alertDemo3} className="ms-1">
        Sweet Alert
      </button>
      <button onClick={alertDemo4} className="ms-1">
        Confirmation
      </button>
    </>
  );
}
