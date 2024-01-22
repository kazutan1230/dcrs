// import UploadForm from '@/components/uploadForm'
import { UploadFormHook } from '@/components/uploadFormHook'

export default function Upload() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      {/* <UploadForm /> */}
      <UploadFormHook />
    </main>
  )
}
