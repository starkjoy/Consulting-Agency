

export function emailTemplate(metadata) {
    return `

    <div style="font-family: Arial; user-select: none">
    <style>
     @media only screen and (max-width: 480px) {
       img {width: 80px}
       .formtitle {font-size: 16px}
       .footertext {font-size: 12px}
       .formbody {font-size: 14px}
       .fieldlength{width: 100%; text-wrap: wrap; white-space: normal; 
         overflow-wrap: break-word;
 }
     }
    </style>
     <div style="display: flex; align-items: center; flex-direction: column; justify-content: center;
             padding-top: 25px; margin-bottom: 20px; ">
         <img
             src="https://atbjojczsdzxhugxnxww.supabase.co/storage/v1/object/public/Stored-Forms/Email%20Template%20Images/big_rcg.png" alt="logo" width="110px" />
         <p  class="formtitle"
             style="display: flex; align-items: center; flex-direction: column; 
                    justify-content: center; color: #010157; font-weight: bold; " >
             Job Application Form
         </p>
     </div>
     <div style="width: 90%; margin: 0 auto; margin-bottom: 20px; padding: 20px; border-radius: 10px;
             box-shadow: 0px 0px 20px 0px #EDEDED; ">
       
         <div style="text-transform: uppercase">
             <p
                class="formbody"
                 style="
                     margin: 0;
                     margin-bottom: 7px;
                     color: #010157;
                     font-weight: bold;
                 "
             >
                 Date:
             </p>
             <p class="formbody fieldlength" style="margin: 0; color: #9A9A9A">${metadata.date}</p>
             <div
                 style="
                     background-color: #EDEDED;
                     height: 1px;
                     width: 100%;
                     margin-top: 12px;
                     margin-bottom: 15px;
                 "
             ></div>
         </div>
         <div style="text-transform: uppercase">
             <p
                class="formbody"
                 style="
                     margin: 0;
                     margin-bottom: 7px;
                     color: #010157;
                     font-weight: bold;
                 "
             >
                 Surname:
             </p>
             <p class="formbody fieldlength" style="margin: 0; color: #9A9A9A">${metadata.surname}</p>
             <div
                 style="
                     background-color: #EDEDED;
                     height: 1px;
                     width: 100%;
                     margin-top: 12px;
                     margin-bottom: 15px;
                 "
             ></div>
         </div>
         <div style="text-transform: uppercase">
             <p
                class="formbody"
                 style="
                     margin: 0;
                     margin-bottom: 7px;
                     color: #010157;
                     font-weight: bold;
                 "
             >
                 firstname:
             </p>
             <p class="formbody fieldlength" style="margin: 0; color: #9A9A9A">${metadata.firstName}</p>
             <div
                 style="
                     background-color: #EDEDED;
                     height: 1px;
                     width: 100%;
                     margin-top: 12px;
                     margin-bottom: 15px;
                 "
             ></div>
         </div>
         <div style="text-transform: uppercase">
         <p
            class="formbody" style="margin: 0; margin-bottom: 7px; color: #010157; 
             font-weight: bold; ">
             MiddleName:
         </p>
         <p class="formbody fieldlength" style="margin: 0; color: #9A9A9A">${metadata.middleName}</p>
         <div style="background-color: #EDEDED; height: 1px; width: 100%; margin-top: 12px;
                 margin-bottom: 15px; " ></div>
       </div>
         <div style="text-transform: uppercase">
         <p
            class="formbody" style="margin: 0; margin-bottom: 7px; color: #010157; 
             font-weight: bold; ">
             Date Of Birth:
         </p>
         <p class="formbody fieldlength" style="margin: 0; color: #9A9A9A">${metadata.birthDate}</p>
         <div style="background-color: #EDEDED; height: 1px; width: 100%; margin-top: 12px;
                 margin-bottom: 15px; " ></div>
       </div>
         <div style="text-transform: uppercase">
         <p
            class="formbody" style="margin: 0; margin-bottom: 7px; color: #010157; 
             font-weight: bold; ">
             Age:
         </p>
         <p class="formbody fieldlength" style="margin: 0; color: #9A9A9A">${metadata.age}</p>
         <div style="background-color: #EDEDED; height: 1px; width: 100%; margin-top: 12px;
                 margin-bottom: 15px; " ></div>
       </div>
         <div style="text-transform: uppercase">
         <p
            class="formbody" style="margin: 0; margin-bottom: 7px; color: #010157; 
             font-weight: bold; ">
             Marital Status:
         </p>
         <p class="formbody fieldlength" style="margin: 0; color: #9A9A9A">${metadata.maritalStatus}</p>
         <div style="background-color: #EDEDED; height: 1px; width: 100%; margin-top: 12px;
                 margin-bottom: 15px; " ></div>
       </div>     
         <div style="text-transform: uppercase">
         <p
            class="formbody" style="margin: 0; margin-bottom: 7px; color: #010157; 
             font-weight: bold; ">
             Gender:
         </p>
         <p class="formbody fieldlength" style="margin: 0; color: #9A9A9A">${metadata.gender}</p>
         <div style="background-color: #EDEDED; height: 1px; width: 100%; margin-top: 12px;
                 margin-bottom: 15px; " ></div>
       </div>
         <div style="text-transform: uppercase">
         <p
            class="formbody" style="margin: 0; margin-bottom: 7px; color: #010157; 
             font-weight: bold; ">
             Region:
         </p>
         <p class="formbody fieldlength" style="margin: 0; color: #9A9A9A">${metadata.region}</p>
         <div style="background-color: #EDEDED; height: 1px; width: 100%; margin-top: 12px;
                 margin-bottom: 15px; " ></div>
       </div>
         <div style="text-transform: uppercase">
         <p
            class="formbody" style="margin: 0; margin-bottom: 7px; color: #010157; 
             font-weight: bold; ">
             City/Town:
         </p>
         <p class="formbody fieldlength" style="margin: 0; color: #9A9A9A">${metadata.cityTown}</p>
         <div style="background-color: #EDEDED; height: 1px; width: 100%; margin-top: 12px;
                 margin-bottom: 15px; " ></div>
       </div>
         <div style="text-transform: uppercase">
         <p
            class="formbody" style="margin: 0; margin-bottom: 7px; color: #010157; 
             font-weight: bold; ">
             Nationality:
         </p>
         <p class="formbody fieldlength" style="margin: 0; color: #9A9A9A">${metadata.nationality}</p>
         <div style="background-color: #EDEDED; height: 1px; width: 100%; margin-top: 12px;
                 margin-bottom: 15px; " ></div>
       </div>     
         <div style="text-transform: uppercase">
         <p
            class="formbody" style="margin: 0; margin-bottom: 7px; color: #010157; 
             font-weight: bold; ">
             Country:
         </p>
         <p class="formbody fieldlength" style="margin: 0; color: #9A9A9A">${metadata.country}</p>
         <div style="background-color: #EDEDED; height: 1px; width: 100%; margin-top: 12px;
                 margin-bottom: 15px; " ></div>
       </div>
         <div style="text-transform: uppercase">
         <p
            class="formbody" style="margin: 0; margin-bottom: 7px; color: #010157; 
             font-weight: bold; ">
             IDType:
         </p>
         <p class="formbody fieldlength" style="margin: 0; color: #9A9A9A">${metadata.idType}</p>
         <div style="background-color: #EDEDED; height: 1px; width: 100%; margin-top: 12px;
                 margin-bottom: 15px; " ></div>
       </div>
         <div style="text-transform: uppercase">
         <p
            class="formbody" style="margin: 0; margin-bottom: 7px; color: #010157; 
             font-weight: bold; ">
             ID Number:
         </p>
         <p class="formbody fieldlength" style="margin: 0; color: #9A9A9A">${metadata.idNumber}</p>
         <div style="background-color: #EDEDED; height: 1px; width: 100%; margin-top: 12px;
                 margin-bottom: 15px; " ></div>
       </div>
         <div style="text-transform: uppercase">
         <p
            class="formbody" style="margin: 0; margin-bottom: 7px; color: #010157; 
             font-weight: bold; ">
             Residential Address:
         </p>
         <p class="formbody fieldlength" style="margin: 0; color: #9A9A9A">${metadata.residentialAddress}</p>
         <div style="background-color: #EDEDED; height: 1px; width: 100%; margin-top: 12px;
                 margin-bottom: 15px; " ></div>
       </div>     
         <div style="text-transform: uppercase">
         <p
            class="formbody" style="margin: 0; margin-bottom: 7px; color: #010157; 
             font-weight: bold; ">
             Personal Account:
         </p>
         <p class="formbody fieldlength" style="margin: 0; color: #9A9A9A">${metadata.personalAccount}</p>
         <div style="background-color: #EDEDED; height: 1px; width: 100%; margin-top: 12px;
                 margin-bottom: 15px; " ></div>
       </div>
       
         <div style="text-transform: uppercase">
         <p
            class="formbody" style="margin: 0; margin-bottom: 7px; color: #010157; 
             font-weight: bold; ">
             Name of Institution:
         </p>
         <p class="formbody fieldlength" style="margin: 0; color: #9A9A9A">${metadata.nameOfInstitution}</p>
         <div style="background-color: #EDEDED; height: 1px; width: 100%; margin-top: 12px;
                 margin-bottom: 15px; " ></div>
       </div>
         <div style="text-transform: uppercase">
         <p
            class="formbody" style="margin: 0; margin-bottom: 7px; color: #010157; 
             font-weight: bold; ">
             Qualification:
         </p>
         <p class="formbody fieldlength" style="margin: 0; color: #9A9A9A">${metadata.qualification}</p>
         <div style="background-color: #EDEDED; height: 1px; width: 100%; margin-top: 12px;
                 margin-bottom: 15px; " ></div>
       </div>
       
         <div style="text-transform: uppercase">
         <p
            class="formbody" style="margin: 0; margin-bottom: 7px; color: #010157; 
             font-weight: bold; ">
             Name of Organization:
         </p>
         <p class="formbody fieldlength" style="margin: 0; color: #9A9A9A">${metadata.nameOfOrganization}</p>
         <div style="background-color: #EDEDED; height: 1px; width: 100%; margin-top: 12px;
                 margin-bottom: 15px; " ></div>
       </div>       
         <div style="text-transform: uppercase">
         <p
            class="formbody" style="margin: 0; margin-bottom: 7px; color: #010157; 
             font-weight: bold; ">
             Position Held:
         </p>
         <p class="formbody fieldlength" style="margin: 0; color: #9A9A9A">${metadata.positionHeld}</p>
         <div style="background-color: #EDEDED; height: 1px; width: 100%; margin-top: 12px;
                 margin-bottom: 15px; " ></div>
       </div> 
       
         <div style="text-transform: uppercase">
         <p
            class="formbody" style="margin: 0; margin-bottom: 7px; color: #010157; 
             font-weight: bold; ">
             Are you physically challenged:
         </p>
         <p class="formbody fieldlength" style="margin: 0; color: #9A9A9A">${metadata.physicallyChallenged}</p>
         <div style="background-color: #EDEDED; height: 1px; width: 100%; margin-top: 12px;
                 margin-bottom: 15px; " ></div>
       </div>
         <div style="text-transform: uppercase">
         <p
            class="formbody" style="margin: 0; margin-bottom: 7px; color: #010157; 
             font-weight: bold; ">
             If yes, please specify:
         </p>
         <p class="formbody fieldlength" style="margin: 0; color: #9A9A9A">${metadata.specifyChallenge}</p>
         <div style="background-color: #EDEDED; height: 1px; width: 100%; margin-top: 12px;
                 margin-bottom: 15px; " ></div>
       </div>
       
         <div style="text-transform: uppercase">
         <p
            class="formbody" style="margin: 0; margin-bottom: 7px; color: #010157; 
             font-weight: bold; ">
             job preference:
         </p>
         <p class="formbody fieldlength" style="margin: 0; color: #9A9A9A">${metadata.jobPreference}</p>
         <div style="background-color: #EDEDED; height: 1px; width: 100%; margin-top: 12px;
                 margin-bottom: 15px; " ></div>
       </div>     
         <div style="text-transform: uppercase">
         <p
            class="formbody" style="margin: 0; margin-bottom: 7px; color: #010157; 
             font-weight: bold; ">
             job place:
         </p>
         <p class="formbody fieldlength" style="margin: 0; color: #9A9A9A">${metadata.jobPlace}</p>
         <div style="background-color: #EDEDED; height: 1px; width: 100%; margin-top: 12px;
                 margin-bottom: 15px; " ></div>
       </div>
       
         <div style="text-transform: uppercase">
         <p
            class="formbody" style="margin: 0; margin-bottom: 7px; color: #010157; 
             font-weight: bold; ">
             are you a computer literate:
         </p>
         <p class="formbody  fieldlength" style="margin: 0; color: #9A9A9A">${metadata.computerLiterate}</p>
         <div style="background-color: #EDEDED; height: 1px; width: 100%; margin-top: 12px;
                 margin-bottom: 15px; " ></div>
       </div>
         <div style="text-transform: uppercase">
         <p
            class="formbody" style="margin: 0; margin-bottom: 7px; color: #010157; 
             font-weight: bold; ">
             guarantors contact:
         </p>
         <p class="formbody fieldlength" style="margin: 0; color: #9A9A9A">${metadata.guarantorContact}</p>
         <div style="background-color: #EDEDED; height: 1px; width: 100%; margin-top: 12px;
                 margin-bottom: 15px; " ></div>
       </div>
         <div style="text-transform: uppercase">
         <p
            class="formbody" style="margin: 0; margin-bottom: 7px; color: #010157; 
             font-weight: bold; ">
             guarantors location:
         </p>
         <p class="formbody fieldlength" style="margin: 0; color: #9A9A9A">${metadata.guarantorLocation}</p>
         <div style="background-color: #EDEDED; height: 1px; width: 100%; margin-top: 12px;
                 margin-bottom: 15px; " ></div>
       </div>       
         <div style="text-transform: uppercase">
         <p
            class="formbody" style="margin: 0; margin-bottom: 7px; color: #010157; 
             font-weight: bold; ">
             how did you hear of realmer consulting:
         </p>
         <p class="formbody fieldlength" style="margin: 0; color: #9A9A9A">${metadata.findingRealmer}</p>
         <div style="background-color: #EDEDED; height: 1px; width: 100%; margin-top: 12px;
                 margin-bottom: 15px; " ></div>
       </div>       
 
     </div>
     
     <!--  Footer    -->
     <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;
             color: #706767; font-size: 12px; font-family: Arial; font-weight: 100; 
             padding-bottom: 20px; padding-top: 20px;">
         <div
             style="
                 background-color: #AEAEAE;
                 height: 1px;
                 width: 70%;
                 margin-bottom: 30px;
             "
         ></div>
         <p class="footertext" style="
                                      padding: 0; margin: 0; margin-bottom: 15px; width: 230px; 
                                      text-align: center;
                                      ">
             This email was generated automatically by
             <span style="font-weight: bold">realmerconsultingagency</span>
         </p>
         <p class="footertext" style="padding: 0; margin: 0; margin-bottom: 5px">
             Email: info@realmerconsultingagency.ceo
         </p>
         <p class="footertext" style="padding: 0; margin: 0">
             Whatsapp: +233242810008 | Adum-Kumasi, Ghana
         </p>
     </div>
 </div>

    `
}


{/*

<div style="font-family: Arial">
    <div
        style="
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            padding-top: 25px;
            margin-bottom: 20px;
        "
    >
        <img
            src="https://atbjojczsdzxhugxnxww.supabase.co/storage/v1/object/public/Stored-Forms/Email%20Template%20Images/big_rcg.png"
            alt="logo"
            width="110px"
        />
        <p
            style="
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: center;
                color: #010157;
                font-weight: bold;
            "
        >
            Job Application Form
        </p>
    </div>
    <div
        style="
            width: 90%;
            margin: 0 auto;
            margin-bottom: 20px;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 20px 0px #EDEDED;
        "
    >
        <div style="text-transform: uppercase">
            <p
                style="
                    margin: 0;
                    margin-bottom: 7px;
                    color: #010157;
                    font-weight: bold;
                "
            >
                Date:
            </p>
            <p style="margin: 0; color: #9A9A9A">${metadata.date}</p>
            <div
                style="
                    background-color: #EDEDED;
                    height: 1px;
                    width: 100%;
                    margin-top: 12px;
                    margin-bottom: 15px;
                "
            ></div>
        </div>

        <div style="text-transform: uppercase">
            <p
                style="
                    margin: 0;
                    margin-bottom: 7px;
                    color: #010157;
                    font-weight: bold;
                "
            >
                Surname:
            </p>
            <p style="margin: 0; color: #9A9A9A">${metadata.surname}</p>
            <div
                style="
                    background-color: #EDEDED;
                    height: 1px;
                    width: 100%;
                    margin-top: 12px;
                    margin-bottom: 15px;
                "
            ></div>
        </div>

        <div style="text-transform: uppercase">
            <p
                style="
                    margin: 0;
                    margin-bottom: 7px;
                    color: #010157;
                    font-weight: bold;
                "
            >
                firstname:
            </p>
            <p style="margin: 0; color: #9A9A9A">${metadata.firstName}</p>
            <div
                style="
                    background-color: #EDEDED;
                    height: 1px;
                    width: 100%;
                    margin-top: 12px;
                    margin-bottom: 15px;
                "
            ></div>
        </div>
    </div>
    <div
        style="
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #706767;
            font-size: 12px;
            font-family: Arial;
            font-weight: 100;
            padding-bottom: 20px;
            padding-top: 20px;
        "
    >
        <div
            style="
                background-color: #AEAEAE;
                height: 1px;
                width: 70%;
                margin-bottom: 30px;
            "
        ></div>
        <p style="padding: 0; margin: 0; margin-bottom: 15px">
            This email was generated automatically by
            <span style="font-weight: bold">realmerconsultingagency</span>
        </p>
        <p style="padding: 0; margin: 0; margin-bottom: 5px">
            Email: info@realmerconsultingagency.ceo
        </p>
        <p style="padding: 0; margin: 0">
            Whatsapp: +233242810008 | Adum-Kumasi, Ghana
        </p>
    </div>
</div>


*/}
