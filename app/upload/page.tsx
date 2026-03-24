'use client'
import React from 'react';
import { CldUploadWidget } from "next-cloudinary";


const UploadPage = () => {
    return (
        <CldUploadWidget uploadPreset='Hello123'>
            {({ open }) => 
            <button
             className='bg-blue-400 rounded-b-sm p-2'
             onClick={() => open()}>Upload</button>}
        </CldUploadWidget>
    )
}

export default UploadPage;