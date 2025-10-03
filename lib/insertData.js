
import { supabase } from "./supabaseClient"

export async function insertSubmission(formdata) {
  const bucket = "Stored-Forms" // 👈 your Supabase bucket name

  // helper to upload a file to a specific folder and return its public URL
  async function upload(folder, file) {
    if (!file || file) return null

    const path = `${folder}/${Date.now()}_${file.name}`

    const { error: uploadError } = await supabase.storage
      .from(bucket)
      .upload(path, file, { upsert: true })

    if (uploadError) {
      console.error(`❌ Upload failed for ${folder}:`, uploadError.message)
      return null
    }

    const { data: urlData } = supabase.storage.from(bucket).getPublicUrl(path)
    return urlData.publicUrl
  }

  try {
    // Upload files to their respective folders
    const fullSizeAURL = await upload("fullSize-Photos", formdata.fullSizeA)
    const fullSizeBURL = await upload("fullSize-Photos", formdata.fullSizeB)
    const fullVideoURL = await upload("fullVideos", formdata.fullVideo)
    const imageCardIDURL = await upload("Card Images", formdata.imageCardID)
    const documentCVURL = await upload("CV documents", formdata.documentCV)

    // Insert metadata + file URLs into DB
    const { data, error } = await supabase
      .from("stored-forms")
      .insert([{
        userID: formdata.userID,
        date: formdata.date,
        surname: formdata.surname,
        firstName: formdata.firstName,
        middleName: formdata.middleName,
        birthDate: formdata.birthDate,
        age: formdata.age,
        maritalStatus: formdata.maritalStatus,
        gender: formdata.gender,
        region: formdata.region,
        cityTown: formdata.cityTown,
        nationality: formdata.nationality,
        country: formdata.country,
        idType: formdata.idType,
        idNumber: formdata.idNumber,
        residentialAddress: formdata.residentialAddress,
        personalAccount: formdata.personalAccount,

        nameOfInstitution: formdata.nameOfInstitution,
        qualification: formdata.qualification,

        nameOfOrganization: formdata.nameOfOrganization,
        positionHeld: formdata.positionHeld,

        physicallyChallenged: formdata.physicallyChallenged,
        specifyChallenge: formdata.specifyChallenge,

        jobPreference: formdata.jobPreference,
        jobPlace: formdata.jobPlace,

        computerLiterate: formdata.computerLiterate,
        guarantorContact: formdata.guarantorContact,
        guarantorLocation: formdata.guarantorLocation,
        findingRealmer: formdata.findingRealmer,

        // Uploaded file URLs
        fullSizeAURL,
        fullSizeBURL,
        fullVideoURL,
        imageCardIDURL,
        documentCVURL,
      }])

    if (error) {
      console.error("❌ DB insert error:", error.message)
      return null
    }

    return data
  } catch (err) {
    console.error("❌ Unexpected error:", err)
    return null
  }
}
