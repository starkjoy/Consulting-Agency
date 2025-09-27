
"use client"

import Image from "next/image";
import { useState } from "react";



const FormEntry = ({fieldlabel, inputtype}) => {
    return (
        <div>
            <div className="forms-actual">
              <label>{fieldlabel}:</label>
              <input type={inputtype}/>
            </div>
        </div>
    );
}

const FormEntryB = ({fieldlabel, drop1, drop2, drop3}) => {
    return (
        <div>
            <div className="forms-actual">
              <label>{fieldlabel}:</label>
              <div className="drop-options">
                <select>
                    <option>{drop1}</option>
                    <option>{drop2}</option>
                    <option>{drop3}</option>
                </select>
              </div>
            </div>
        </div>
    );
}

const FormEntryC = ({fieldlabel, drop1, drop2, drop3}) => {
    return (
        <div>
            <div className="forms-actual">
              <label>{fieldlabel}:</label>
              <div className="drop-options">
                <select>
                    <option>{drop1}</option>
                    <option>{drop2}</option>
                </select>
              </div>
            </div>
        </div>
    );
}

const FormEntryD = ({fieldlabel}) => {

    const MAX_FILE_SIZE = 2 * 1024 * 1024; 

    const [formUploadA, setFormUploadA] = useState(false);
    const [formUploadB, setFormUploadB] = useState(false);
    const [filePreview, setFilePreview] = useState({
        filePreview0: "",
        filePreview1: "",
    });

    const handleRemove = (fild) => {
        if (fild === "0") {
            setFilePreview((prev) => ({
              ...prev,
              filePreview0: "",
            }));
            setFormUploadA(false);
          }
  
          if (fild === "1") {
            setFilePreview((prev) => ({
              ...prev,
              filePreview1: "",
            }));
            setFormUploadB(false);
          }
    }

    const handleFileChange = (fild) => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.style.display = "none";
    
        input.onchange = (e) => {
          const file = e.target.files[0];
          if (file && (file.size < MAX_FILE_SIZE)) {
            const previewUrl = URL.createObjectURL(file);
    
            if (fild === "0") {
              setFilePreview((prev) => ({
                ...prev,
                filePreview0: previewUrl,
              }));
              setFormUploadA(true);
            }
    
            if (fild === "1") {
              setFilePreview((prev) => ({
                ...prev,
                filePreview1: previewUrl,
              }));

              setFormUploadB(true);
            }
          }
        };
    
        input.click();
    };

    return (
        <div>
            <div className="forms-actual">
              <label>{fieldlabel}:</label>
              <div className="upload-container">
                <div style={{backgroundImage: `url(${filePreview.filePreview0})`}} className={`upload-select ${formUploadA ? "file-upload" : ""}`}>
                    {!formUploadA && <Image onClick={() => handleFileChange("0")} src="/upload-icon.svg" sizes="100vw" height={0} width={0} alt="upload" className="upload-icon" />}
                    { formUploadA && <Image onClick={() => handleRemove("0")} src="/remove-icon.svg" sizes="100vw" height={0} width={0} alt="upload" className="upload-icon" />}
                </div>
                <div style={{backgroundImage: `url(${filePreview.filePreview1})`}} className={`upload-select last-select ${formUploadB ? "file-upload" : ""}`}>
                    { !formUploadB && <Image onClick={() => handleFileChange("1")} src="/upload-icon.svg" sizes="100vw" height={0} width={0} alt="upload" className="upload-icon" />}
                    { formUploadB && <Image onClick={() => handleRemove("1")} src="/remove-icon.svg" sizes="100vw" height={0} width={0} alt="upload" className="upload-icon" />}
                </div>
              </div>
            </div>
        </div>
    );
}

const FormEntryE = ({fieldlabel}) => {

    const MAX_FILE_SIZE = 5 * 1024 * 1024; 

    const [formUpload, setFormUpload] = useState(false);
    const [videoFile, setVideoFile] = useState(null);
    const [filePreview, setFilePreview] = useState({
        filePreview0: "",
    });

    const handleRemove = (fild) => {
        if (fild === "0") {
            setFilePreview((prev) => ({
              ...prev,
              filePreview0: "",
            }));

            setVideoFile(null);
          }
          setFormUpload(false);
    }

    const handleFileChange = (fild) => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "video/*";
        input.style.display = "none";
      
        input.onchange = (e) => {
          const file = e.target.files[0];
          if (file && file.size < MAX_FILE_SIZE) {
            setVideoFile(file); // ✅ keep the raw video for form upload
      
            const video = document.createElement("video");
            const canvas = document.createElement("canvas");
      
            video.src = URL.createObjectURL(file);
            video.crossOrigin = "anonymous";
            video.muted = true;
            video.playsInline = true; // ✅ for Safari/iOS
      
            // Wait until metadata is ready so we know dimensions
            video.addEventListener("loadedmetadata", () => {
              canvas.width = video.videoWidth;
              canvas.height = video.videoHeight;
      
              // Seek to 1 second (or halfway if shorter)
              video.currentTime = Math.min(1, video.duration / 2);
            });
      
            // Draw the frame after seeking
            video.addEventListener("seeked", () => {
              const ctx = canvas.getContext("2d");
              ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      
              const thumbnailUrl = canvas.toDataURL("image/png");
      
              if (fild === "0") {
                setFilePreview((prev) => ({
                  ...prev,
                  filePreview0: thumbnailUrl, // 👀 thumbnail for preview
                }));
                setFormUpload(true);
              }
            });
          }
        };
      
        input.click();
      };
      
      

    return (
        <div>
            <div className="forms-actual">
              <label>{fieldlabel}:</label>
              <div className="upload-container">
                <div style={{backgroundImage: `url(${filePreview.filePreview0})`}} className={`vid-select ${formUpload ? "file-upload" : ""}`}>
                    { !formUpload && <Image onClick={() => handleFileChange("0")} src="/upload-icon.svg" sizes="100vw" height={0} width={0} alt="upload" className="upload-icon" />}
                    { formUpload && <Image onClick={() => handleRemove("0")} src="/remove-icon.svg" sizes="100vw" height={0} width={0} alt="upload" className="upload-icon" />}
                </div>
              </div>
            </div>
        </div>
    );
}

const FormEntryF = ({fieldlabel}) => {

    const MAX_FILE_SIZE = 2 * 1024 * 1024; 

    const [formUpload, setFormUpload] = useState(false);
    const [filePreview, setFilePreview] = useState({
        filePreview0: "",
    });

    const handleRemove = (fild) => {
        if (fild === "0") {
            setFilePreview((prev) => ({
              ...prev,
              filePreview0: "",
            }));
          }
          setFormUpload(false);
    }

    const handleFileChange = (fild) => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.style.display = "none";
    
        input.onchange = (e) => {
          const file = e.target.files[0];
          if (file && (file.size < MAX_FILE_SIZE)) {
            const previewUrl = URL.createObjectURL(file);
    
            if (fild === "0") {
              setFilePreview((prev) => ({
                ...prev,
                filePreview0: previewUrl,
              }));
              setFormUpload(true);
            }
          }
        };
    
        input.click();
    };

    return (
        <div>
            <div className="forms-actual">
              <label>{fieldlabel}:</label>
              <div className="upload-container">
                <div style={{backgroundImage: `url(${filePreview.filePreview0})`}} className={`id-upload ${formUpload ? "file-upload" : ""}`}>
                    { !formUpload && <Image onClick={() => handleFileChange("0")} src="/upload-icon.svg" sizes="100vw" height={0} width={0} alt="upload" className="upload-icon" />}
                    { formUpload && <Image onClick={() => handleRemove("0")} src="/remove-icon.svg" sizes="100vw" height={0} width={0} alt="upload" className="upload-icon" />}
                </div>
              </div>
            </div>
        </div>
    );
}

export const FormWrapperA = ({
    fieldlabel1,
    fieldlabel2,
    fieldlabel3,
    fieldlabel4,
    fieldlabel5,
    fieldlabel6,
    fieldlabel7,
    fieldlabel8,
    fieldlabel10,
    fieldlabel11,
    fieldlabel12,
    fieldlabel13,
    fieldlabel14,
    fieldlabel15,
    fieldlabel16,
    fieldlabel17,
    fieldlabel18,
    datetype,
    texttype,
    numbertype,
    drop1,
    drop2,
    drop3,
    drop4,
    drop5,
    drop6,
    drop7,
    }) => {
    return (
        <div>
            <FormEntry fieldlabel={fieldlabel1} inputtype={datetype} />
            <FormEntry fieldlabel={fieldlabel2} inputtype={texttype} />
            <FormEntry fieldlabel={fieldlabel3} inputtype={texttype} />
            <FormEntry fieldlabel={fieldlabel4} inputtype={texttype} />
            <FormEntry fieldlabel={fieldlabel5} inputtype={datetype} />
            <FormEntry fieldlabel={fieldlabel6} inputtype={numbertype} />
            <FormEntryB fieldlabel={fieldlabel7} drop1={drop1} drop2={drop2} drop3={drop3} />
            <FormEntryC fieldlabel={fieldlabel8} drop1={drop4} drop2={drop5} />
            <FormEntry fieldlabel={fieldlabel10} inputtype={texttype} />
            <FormEntry fieldlabel={fieldlabel11} inputtype={texttype} />
            <FormEntry fieldlabel={fieldlabel12} inputtype={texttype} />
            <FormEntry fieldlabel={fieldlabel13} inputtype={texttype} />
            <FormEntryC fieldlabel={fieldlabel14} drop1={drop6} drop2={drop7} />
            <FormEntry fieldlabel={fieldlabel15} inputtype={numbertype} />
            <FormEntry fieldlabel={fieldlabel16} inputtype={texttype} />
            <FormEntry fieldlabel={fieldlabel17} inputtype={texttype} />
            <FormEntry fieldlabel={fieldlabel18} inputtype={texttype} />
        </div>
    );
}

export const FormWrapperB = ({fieldlabel1, fieldlabel2,inputtype}) => {
    return (
        <div>
            <FormEntry fieldlabel={fieldlabel1} inputtype={inputtype} />
            <FormEntry fieldlabel={fieldlabel2} inputtype={inputtype} />
        </div>
    );
}

export const FormWrapperC = ({fieldlabel1, fieldlabel2, fieldlabel3, fieldlabel4, drop1, drop2, numbertype}) => {
    return (
        <div>
            <FormEntryC fieldlabel={fieldlabel1} drop1={drop1} drop2={drop2} />
            <FormEntry fieldlabel={fieldlabel2} inputtype={numbertype}/>
            <FormEntry fieldlabel={fieldlabel3} />
            <FormEntry fieldlabel={fieldlabel4} />
        </div>
    );
}

export const FormWrapperD = ({fieldlabel1, fieldlabel2, fieldlabel3}) => {
    return (
        <div>
            <FormEntryD fieldlabel={fieldlabel1} />
            <FormEntryE fieldlabel={fieldlabel2} />
            <FormEntryF fieldlabel={fieldlabel3} />
        </div>
    );
}

export const FormWrapperE = ({fieldlabel1, fieldlabel2, inputtype, drop1, drop2}) => {
    return (
        <div>
            <FormEntryC fieldlabel={fieldlabel1} drop1={drop1} drop2={drop2} />
            <FormEntry fieldlabel={fieldlabel2} inputtype={inputtype} />
        </div>
    );
}


export function ApplicationForm({ 
    fieldname, 
    formtype=FormWrapperB, 
    fieldlabel,
    fieldlabel1,
    fieldlabel2,
    fieldlabel3,
    fieldlabel4,
    fieldlabel5,
    fieldlabel6,
    fieldlabel7,
    fieldlabel8,
    fieldlabel10,
    fieldlabel11,
    fieldlabel12,
    fieldlabel13,
    fieldlabel14,
    fieldlabel15,
    fieldlabel16,
    fieldlabel17,
    fieldlabel18,
    datetype,
    texttype,
    selectype,
    numbertype,
    drop1,
    drop2,
    drop3,
    drop4,
    drop5,
    drop6,
    drop7
     }) {
    const FormWrap = formtype;

    return (
        <div>
          <div className="form-label">
            <div className="form-line"></div>
            <p className="form-section">{fieldname}</p>
          </div>
          <div className="form-container">
            <FormWrap 
                fieldlabel={fieldlabel}
                fieldlabel1={fieldlabel1}
                fieldlabel2={fieldlabel2}
                fieldlabel3={fieldlabel3}
                fieldlabel4={fieldlabel4}
                fieldlabel5={fieldlabel5}
                fieldlabel6={fieldlabel6}
                fieldlabel7={fieldlabel7}
                fieldlabel8={fieldlabel8}
                fieldlabel10={fieldlabel10}
                fieldlabel11={fieldlabel11}
                fieldlabel12={fieldlabel12}
                fieldlabel13={fieldlabel13}
                fieldlabel14={fieldlabel14}
                fieldlabel15={fieldlabel15}
                fieldlabel16={fieldlabel16}
                fieldlabel17={fieldlabel17}
                fieldlabel18={fieldlabel18}
                datetype={datetype}
                texttype={texttype}
                selectype={selectype}
                numbertype={numbertype}
                drop1={drop1}
                drop2={drop2}
                drop3={drop3}
                drop4={drop4}
                drop5={drop5}
                drop6={drop6}
                drop7={drop7}
            />
          </div>
        </div>
    );
}
