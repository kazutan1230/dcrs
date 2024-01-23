'use client'

import type { FC } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'

// フォームの各要素と型
type FormData = {
  name: string
  company: string
  employeeId: number
  phone: string
  mail: string
  agreement: boolean
  photo: File
  // photo: "file"
}

// 確定ボタンを押したときの処理
const onSubmit: SubmitHandler<FormData> = (data) => {
  alert(JSON.stringify(data, null, 2))
}

export const UploadFormHook: FC = () => {
  const { handleSubmit, register } = useForm<FormData>()

  return (
    <>
      <p className="mb-3 text-2xl font-semibold">アップロードフォーム</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="mb-5">
            <p>お名前</p>
            <p className="text-red-500">必須</p>
            <input
              {...register('name')}
              placeholder="オープン太郎"
              required={true}
            />
          </div>

          <div className="mb-5">
            <p>所属会社</p>
            <p className="text-red-500">必須</p>
            {/* フォームのサイズを調整すべき */}
            {/* <input {...register('company')} placeholder="株式会社オープンアップグループ" required /> */}
            <input
              {...register('company')}
              placeholder="オープンアップグループ"
              required={true}
            />
          </div>

          <div className="mb-5">
            <p>社員番号</p>
            <p className="text-red-500">必須</p>
            <input
              {...register('employeeId')}
              placeholder="123456"
              required={true}
            />
          </div>

          <div className="mb-5">
            <p>連絡可能な個人電話番号</p>
            <p className="text-red-500">必須</p>
            <input
              {...register('phone')}
              placeholder="090-1234-5678"
              required={true}
            />
          </div>

          <div className="mb-5">
            <p>メールアドレス</p>
            <p className="text-red-500">必須</p>
            <input
              {...register('mail')}
              placeholder="example@mail.com"
              required={true}
            />
          </div>

          <div className="mb-5">
            <p>個人情報提供に同意いただけますか?</p>
            <p className="text-red-500">必須</p>
            <p>
              <input type="radio" {...register('agreement')} required={true} />
              同意する
            </p>
          </div>

          <label className="mb-5" htmlFor="update">
            写真を撮影してアップロードする
          </label>
          <p className="text-red-500">必須</p>
          <input
            className="mb-5"
            id="upload"
            type="file"
            accept="image/*"
            capture="environment"
            {...register('photo')}
            required={true}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          type="submit"
        >
          確認画面へ
        </button>
      </form>
    </>
  )
}
