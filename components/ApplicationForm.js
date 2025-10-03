
"use client"

import Image from "next/image";
import { useState, useEffect } from "react";



const FormEntry = ({fieldlabel, inputtype, inputvalue, onChange}) => {
    return (
        <div>
            <div className="forms-actual">
              <label>{fieldlabel}: {<span className="important-field">*</span>} </label>
              <input type={inputtype} value={inputvalue} onChange={(e) => onChange(e.target.value)}/>
            </div>
        </div>
    );
}

const FormEntryB = ({fieldlabel, drop1, drop2, drop3, inputvalue, onChange, drophead }) => {
    return (
        <div>
            <div className="forms-actual">
              <label>{fieldlabel}: {<span className="important-field">*</span>}</label>
              <div className="drop-options">
                <select value={inputvalue || ""} onChange={(e) => onChange(e.target.value)}>
                    <option value="" disabled>{drophead}</option>
                    <option value={drop1}>{drop1}</option>
                    <option value={drop2}>{drop2}</option>
                    <option value={drop3}>{drop3}</option>
                </select>
              </div>
            </div>
        </div>
    );
}

const FormEntryC = ({fieldlabel, drop1, drop2, inputvalue, onChange, drophead}) => {
    return (
        <div>
            <div className="forms-actual">
              <label>{fieldlabel}: {<span className="important-field">*</span>}</label>
              <div className="drop-options">
                <select value={inputvalue || ""} onChange={(e) => onChange(e.target.value)}>
                    <option value="" disabled>{drophead}</option>
                    <option value={drop1}>{drop1}</option>
                    <option value={drop2}>{drop2}</option>
                </select>
              </div>
            </div>
        </div>
    );
}

const FormEntryD = ({fieldlabel, formData, setFormData}) => {

    const MAX_FILE_SIZE = 2 * 1024 * 1024; 

    const [formUploadA, setFormUploadA] = useState(false);
    const [formUploadB, setFormUploadB] = useState(false);
    const [filePreview, setFilePreview] = useState({
        filePreview0: "",
        filePreview1: "",
    });

    const handleRemove = (fild) => {
      setFilePreview((prev) => {
        if (fild === "0" && prev.filePreview0) {
          URL.revokeObjectURL(prev.filePreview0); // cleanup memory
        }
        if (fild === "1" && prev.filePreview1) {
          URL.revokeObjectURL(prev.filePreview1); // cleanup memory
        }
    
        return {
          ...prev,
          [fild === "0" ? "filePreview0" : "filePreview1"]: "",
        };
      });
    
      if (fild === "0") setFormUploadA(false);
      if (fild === "1") setFormUploadB(false);
    };
    

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
              setFormData((prev) => ({
                 ...prev, fullSizeA: file, 
              }))
              setFormUploadA(true);
            }
    
            if (fild === "1") {
              setFilePreview((prev) => ({
                ...prev,
                filePreview1: previewUrl,
              }));
              setFormData((prev) => ({
                ...prev, fullSizeB: file, 
             }))
              setFormUploadB(true);
            }
          }
        };
    
        input.click();
    };

    return (
        <div>
            <div className="forms-actual">
              <label>{fieldlabel}: {<span className="important-field">*</span>}</label>
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

const FormEntryE = ({fieldlabel, formData, setFormData}) => {

    const MAX_FILE_SIZE = 5 * 1024 * 1024; 

    const [formUpload, setFormUpload] = useState(false);
    const [videoFile, setVideoFile] = useState(null);
    const [filePreview, setFilePreview] = useState({
        filePreview0: "",
    });

    const handleRemove = (fild) => {
      setFilePreview((prev) => {
        if (fild === "0" && prev.filePreview0) {
          URL.revokeObjectURL(prev.filePreview0); // cleanup memory
        }
        return {
          ...prev,
          filePreview0: "",
        };
      });
    
      setVideoFile(null);
      setFormUpload(false);
    };
    
    const handleFileChange = (fild) => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "video/*";
      input.style.display = "none";
    
      input.onchange = (e) => {
        const file = e.target.files[0];
        if (file && file.size < MAX_FILE_SIZE) {
          setVideoFile(file); // ✅ raw file for upload
    
          const video = document.createElement("video");
          const canvas = document.createElement("canvas");
    
          const objectUrl = URL.createObjectURL(file); // 👈 save this to revoke later
          video.src = objectUrl;
          video.crossOrigin = "anonymous";
          video.muted = true;
          video.playsInline = true;
    
          video.addEventListener("loadedmetadata", () => {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
    
            video.currentTime = Math.min(1, video.duration / 2);
          });
    
          video.addEventListener("seeked", () => {
            const ctx = canvas.getContext("2d");
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
            const thumbnailUrl = canvas.toDataURL("image/png");
    
            if (fild === "0") {
              setFilePreview((prev) => ({
                ...prev,
                filePreview0: thumbnailUrl,
              }));
              setFormData((prev) => ({
                ...prev,
                fullVideo: file, // ✅ store the file itself
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
              <label>{fieldlabel}: {<span className="important-field">*</span>}</label>
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

const FormEntryF = ({fieldlabel, formData, setFormData }) => {

    const MAX_FILE_SIZE = 2 * 1024 * 1024; 

    const [formUpload, setFormUpload] = useState(false);
    const [filePreview, setFilePreview] = useState({
        filePreview0: "",
    });

    const handleRemove = (fild) => {
      setFilePreview((prev) => {
        if (fild === "0" && prev.filePreview0) {
          URL.revokeObjectURL(prev.filePreview0); // cleanup memory
        }
        return {
          ...prev,
          filePreview0: "",
        };
      });
    
      setFormData((prev) => ({
        ...prev,
        imageCardID: null, // clear the value in formData too
      }));
    
      setFormUpload(false);
    };

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
              setFormData((prev) => ({
                ...prev, imageCardID: file, 
             }))
              setFormUpload(true);
            }
          }
        };
    
        input.click();
    };

    return (
        <div>
            <div className="forms-actual">
              <label>{fieldlabel}: {<span className="important-field">*</span>}</label>
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

const FormEntryG = ({fieldlabel, formData, setFormData}) => {

  const MAX_FILE_SIZE = 2 * 1024 * 1024; 

  const [formUpload, setFormUpload] = useState(false);
  const [documentName, setDocumentName] = useState("");

  const handleRemove = () => {
    setDocumentName("");
    setFormData((prev) => ({
      ...prev,
      documentCV: null, // clear the file reference
    }));
    setFormUpload(false);
  };
  
  const handleFileChange = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".pdf,application/pdf";
    input.style.display = "none";
  
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file && file.size < MAX_FILE_SIZE) {
        setDocumentName(file.name);
  
        setFormData((prev) => ({
          ...prev,
          documentCV: file, // 👈 store the actual file, not just the name
        }));
  
        setFormUpload(true);
      }
    };
  
    input.click();
  };
  

  return (
      <div>
          <div className="forms-actual">
            <label>{fieldlabel}: {<span className="important-field">*</span>}</label>
            <div className="upload-container">
              <div className={`vid-select ${formUpload ? "file-upload" : ""}`}>
                  { !formUpload && <Image onClick={() => handleFileChange("0")} src="/upload-icon.svg" sizes="100vw" height={0} width={0} alt="upload" className="upload-icon" />}
                  { formUpload && <Image onClick={() => handleRemove("0")} src="/remove-icon.svg" sizes="100vw" height={0} width={0} alt="upload" className="upload-icon" />}
              </div>  
            </div>
            { formUpload && <p className="upload-filename">{documentName}</p>}
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
    setFormData,
    formData,
    drophead
    }) => {
    return (
        <div>
            <FormEntry inputvalue={formData.date || ""} fieldlabel={fieldlabel1} inputtype={datetype} onChange={(val) =>setFormData((prev) => ({ ...prev, date: val }))} />
            <FormEntry inputvalue={formData.surname || ""} fieldlabel={fieldlabel2} inputtype={texttype} onChange={(val) =>setFormData((prev) => ({ ...prev, surname: val }))} />
            <FormEntry inputvalue={formData.firstName || ""} fieldlabel={fieldlabel3} inputtype={texttype} onChange={(val) =>setFormData((prev) => ({ ...prev, firstName: val }))} />
            <FormEntry inputvalue={formData.middleName || ""} fieldlabel={fieldlabel4} inputtype={texttype} onChange={(val) =>setFormData((prev) => ({ ...prev, middleName: val }))} />
            <FormEntry inputvalue={formData.birthDate|| ""} fieldlabel={fieldlabel5} inputtype={datetype} onChange={(val) =>setFormData((prev) => ({ ...prev, birthDate: val }))} />
            <FormEntry inputvalue={formData.age || ""} fieldlabel={fieldlabel6} inputtype={texttype} onChange={(val) =>setFormData((prev) => ({ ...prev, age: val }))} />
            <FormEntryB inputvalue={formData.maritalStatus || ""} drophead={drophead} fieldlabel={fieldlabel7} drop1={drop1} drop2={drop2} drop3={drop3} onChange={(val) =>setFormData((prev) => ({ ...prev, maritalStatus: val }))} />
            <FormEntryC inputvalue={formData.gender || ""} drophead={drophead} fieldlabel={fieldlabel8} drop1={drop4} drop2={drop5} onChange={(val) =>setFormData((prev) => ({ ...prev, gender: val }))} />
            <FormEntry inputvalue={formData.region || ""} fieldlabel={fieldlabel10} inputtype={texttype} onChange={(val) =>setFormData((prev) => ({ ...prev, region: val }))} />
            <FormEntry inputvalue={formData.cityTown || ""} fieldlabel={fieldlabel11} inputtype={texttype} onChange={(val) =>setFormData((prev) => ({ ...prev, cityTown: val }))} />
            <FormEntry inputvalue={formData.nationality || ""} fieldlabel={fieldlabel12} inputtype={texttype} onChange={(val) =>setFormData((prev) => ({ ...prev, nationality: val }))} />
            <FormEntry inputvalue={formData.country || ""} fieldlabel={fieldlabel13} inputtype={texttype} onChange={(val) =>setFormData((prev) => ({ ...prev, country: val }))} />
            <FormEntryC inputvalue={formData.idType || ""} drophead={drophead} fieldlabel={fieldlabel14} drop1={drop6} drop2={drop7} onChange={(val) =>setFormData((prev) => ({ ...prev, idType: val }))} />
            <FormEntry inputvalue={formData.idNumber || ""} fieldlabel={fieldlabel15} inputtype={texttype} onChange={(val) =>setFormData((prev) => ({ ...prev, idNumber: val }))} />
            <FormEntry inputvalue={formData.residentialAddress || ""} fieldlabel={fieldlabel16} inputtype={texttype} onChange={(val) =>setFormData((prev) => ({ ...prev, residentialAddress: val }))} />
            <FormEntry inputvalue={formData.personalAccount || ""} fieldlabel={fieldlabel17} inputtype={texttype} onChange={(val) =>setFormData((prev) => ({ ...prev, personalAccount: val }))} />
        </div>
    );
}

export const FormWrapperB = ({ setFormData, formData, fieldlabel1, fieldlabel2, inputtype }) => {
    return (
        <div>
            <FormEntry inputvalue={formData.nameOfInstitution || ""} fieldlabel={fieldlabel1} inputtype={inputtype} onChange={(val) =>setFormData((prev) => ({ ...prev, nameOfInstitution: val }))} />
            <FormEntry inputvalue={formData.qualification || ""} fieldlabel={fieldlabel2} inputtype={inputtype} onChange={(val) =>setFormData((prev) => ({ ...prev, qualification: val }))} />
        </div>
    );
}

export const FormWrapperF = ({ setFormData, formData, fieldlabel1, fieldlabel2, inputtype }) => {
  return (
      <div>
          <FormEntry inputvalue={formData.nameOfOrganization || ""} fieldlabel={fieldlabel1} inputtype={inputtype} onChange={(val) =>setFormData((prev) => ({ ...prev, nameOfOrganization: val }))} />
          <FormEntry inputvalue={formData.positionHeld || ""} fieldlabel={fieldlabel2} inputtype={inputtype} onChange={(val) =>setFormData((prev) => ({ ...prev, positionHeld: val }))} />
      </div>
  );
}

export const FormWrapperG = ({ setFormData, formData, fieldlabel1, fieldlabel2, inputtype }) => {
  return (
      <div>
          <FormEntry inputvalue={formData.jobPreference || ""} fieldlabel={fieldlabel1} inputtype={inputtype} onChange={(val) =>setFormData((prev) => ({ ...prev, jobPreference: val }))} />
          <FormEntry inputvalue={formData.jobPlace || ""} fieldlabel={fieldlabel2} inputtype={inputtype} onChange={(val) =>setFormData((prev) => ({ ...prev, jobPlace: val }))} />
      </div>
  );
}

export const FormWrapperC = ({ setFormData, formData, fieldlabel1, fieldlabel2, fieldlabel3, fieldlabel4, drop1, drop2, texttype, numbertype, drophead}) => {
    return (
        <div>
            <FormEntryC inputvalue={formData.computerLiterate || ""} drophead={drophead} fieldlabel={fieldlabel1} drop1={drop1} drop2={drop2} onChange={(val) =>setFormData((prev) => ({ ...prev, computerLiterate: val }))} />
            <FormEntry inputvalue={formData.guarantorContact || ""} fieldlabel={fieldlabel2} inputtype={texttype} onChange={(val) =>setFormData((prev) => ({ ...prev, guarantorContact: val }))} />
            <FormEntry inputvalue={formData.guarantorLocation || ""} fieldlabel={fieldlabel3} onChange={(val) =>setFormData((prev) => ({ ...prev, guarantorLocation: val }))} />
            <FormEntry inputvalue={formData.findingRealmer || ""} fieldlabel={fieldlabel4} onChange={(val) =>setFormData((prev) => ({ ...prev, findingRealmer: val }))} />
        </div>
    );
}

export const FormWrapperD = ({setFormData, fieldlabel1, fieldlabel2, fieldlabel3, fieldlabel4}) => {
    return (
        <div>
            <FormEntryD setFormData={setFormData} fieldlabel={fieldlabel1} />
            <FormEntryE setFormData={setFormData} fieldlabel={fieldlabel2} />
            <FormEntryF setFormData={setFormData} fieldlabel={fieldlabel3} />
            <FormEntryG setFormData={setFormData} fieldlabel={fieldlabel4} />
        </div>
    );
}

export const FormWrapperE = ({formData, setFormData, fieldlabel1, fieldlabel2, inputtype, drop1, drop2, drophead}) => {
    return (
        <div>
            <FormEntryC inputvalue={formData.physicallyChallenged || ""} drophead={drophead} fieldlabel={fieldlabel1} drop1={drop1} drop2={drop2} onChange={(val) =>setFormData((prev) => ({ ...prev, physicallyChallenged: val }))} />
            <FormEntry inputvalue={formData.specifyChallenge || ""} fieldlabel={fieldlabel2} inputtype={inputtype} onChange={(val) =>setFormData((prev) => ({ ...prev, specifyChallenge: val }))} />
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
    drop7,
    drophead,
    setFormData,
    formData
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
                formData={formData}
                setFormData={setFormData}
                drophead={drophead}
            />
          </div>
        </div>
    );
}
