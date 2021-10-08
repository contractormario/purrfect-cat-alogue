import { useEffect, useState } from 'react'
import { RouteComponentProps, navigate } from '@reach/router'
import { Alert, AlertTitle, CircularProgress } from '@mui/material'
import styled from 'styled-components'
import { useDropzone } from 'react-dropzone'
import { uploadImage } from '../services/CatsApi'
import { PageLayout } from '../components/PageLayout'

export function UploadPage(props: RouteComponentProps) {
  return (
    <PageLayout>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'100px'}}>
        <Uploader/>
      </div>
    </PageLayout>
  )
}

function Uploader() {
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<null|string>(null)
  const {getRootProps, getInputProps, isDragActive, acceptedFiles, fileRejections} = useDropzone({
    // onDrop,
    accept: 'image/jpeg, image/png',
    maxFiles: 1,
    validator: customValidator
  })

  useEffect(() => {
    if(acceptedFiles.length > 0) {
      const upload = async (file:any) => {
        try {
          setIsUploading(true)
          await uploadImage(file)
          navigate('/')
        }
        catch(err) {
          setIsUploading(false)
          setError('Upload failed. Please try again')
          console.log('err', err)
        }
      }

      const file = acceptedFiles[0]
      upload(file)
    }
  }, [acceptedFiles])

  useEffect(() => {
    if(fileRejections && fileRejections.length > 0) {
      setError(fileRejections[0].errors[0].message)
    }
    else {
      setError(null)
    }
  }, [fileRejections])

  const renderError = () => {
    if(error !== null) {
      return (
        <Alert severity="error" style={{marginBottom:'50px'}}>
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      )
    }
  }

  const renderIcon = () => {
    if(!isUploading) {
      return <UploadIcon/>
    }
  }

  const renderSpinner = () => {
    if(isUploading) {
      return <CircularProgress/>
    }
  }

  return (
    <div>
      {renderError()}
      <UploaderDiv {...getRootProps()}>
        <input {...getInputProps()} />
        {renderSpinner()}
        {renderIcon()}
      </UploaderDiv>
    </div>
  )
}

function customValidator(file:any) {
  console.log('customValidator', file)
  if(file.size > 1024*500) {
    return {
      code: 'file-too-large',
      message: 'File must not exceed 500 KB'
    }
  }
  
  return null
}

function UploadIcon() {
  return (
    <UploadIconDiv/>
  )
}

const UploadIconDiv = styled.div`
  width: 64px;
  height: 64px;
  background: url('/upload.png');
  background-size: 64px 64px;
  background-repeat: no-repeat;
  background-position: center;
`

const UploaderDiv = styled.div`
  border: 2px dashed silver;
  height: 50vh;
  width: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
