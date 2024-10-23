"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  const handlepickClick = () => {
    imageInput.current.click();
  };

  const handleImageChange = (event) => {
    // i can pick file from input cuz the input type file and under hood the have property files and make it in array
    // can pick multiple fils by property in input tag name multiple
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user "
              fill
            />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept="image/png , image/jpeg"
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlepickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
