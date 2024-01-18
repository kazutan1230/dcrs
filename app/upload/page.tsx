import Image from 'next/image'
// import UploadForm from '@/components/uploadForm'
import UploadForm_hook from '@/components/uploadForm_hook'

export default function Upload() {

  return (
    <main className="flex min-h-screen flex-col p-24">

      {/* <UploadForm /> */}
      <UploadForm_hook />

    </main>
  )
}