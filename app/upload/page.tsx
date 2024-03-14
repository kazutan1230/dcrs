import { ProfileForm } from '@/components/profileForm'
import { HomeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function Upload() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-12 lg:px-8 sm:px-6">
      <ul className="steps mb-8">
        <li className="step step-primary">必要情報の入力</li>
        <li className="step">入力確認</li>
        <li className="step">完了</li>
      </ul>
      <h1 className="mb-3 font-semibold text-2xl">必要情報の入力</h1>
      <p className="before:ml-0.5 before:text-red-500 before:content-['*']">
        は必須項目
      </p>
      <br />
      <ProfileForm />
      <br />
      <br />
      <Link href="/" className="btn btn-primary">
        <HomeIcon className="h-6 w-6" />
        ホームに戻る
      </Link>
    </main>
  )
}
