'use client'

import type React from 'react'
import type { FC } from 'react'
import { useRef, useState } from 'react'
import { ImageInput } from './imageInput'

const IMAGE_ID = 'image'

// export type ImageProps = {
//   file: FileList
// }

export const ImagePreview: FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  // 添付画像を状態管理
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [fileName, setFileName] = useState('')
  const [imageSource, setImageSource] = useState('')

  const selectFile = () => {
    if (!fileInputRef.current) {
      return
    }
    // ローカルフォルダから画像選択ダイアログを表示する。
    fileInputRef.current.click()
  }

  // ファイルが読み込まれた際に、画像データを抽出する処理
  const generateImageSource = (files: FileList) => {
    const file = files[0]
    const fileReader = new FileReader()
    setFileName(file.name)
    fileReader.onload = () => {
      setImageSource(fileReader.result as string)
    }
    fileReader.readAsDataURL(file)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length <= 0) {
      return
    }

    generateImageSource(files) // 画像データを抽出する処理
    // ファイルを選択したときの処理
    setImageFile(files[0])
  }

  // キャンセルボタンの処理
  const handleClickCancelButton = () => {
    setFileName('')
    setImageSource('')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  console.log(imageFile) // 添付画像のデータをコンソールに出力する。簡易Check用

  return (
    <>
      <label
        className="mb-5"
        style={{
          border: 'white 3px dotted',
          display: 'flex',
          borderRadius: 12,
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          cursor: 'pointer',
        }}
      >
        {fileName ? (
          <img src={imageSource} alt={fileName} />
        ) : (
          '画像をアップロードする'
        )}
        <ImageInput
          fileInputRef={fileInputRef}
          onChange={handleFileChange}
          id={IMAGE_ID}
        />
      </label>
      <div>
        {/* hidden属性付けて、画像アップロードされてる時だけ表示できるようにした方がいい */}
        <button
          type="button"
          onClick={handleClickCancelButton}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2"
        >
          × 画像アップロードキャンセル
        </button>
        {/* <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          画像を送信
        </button> */}
      </div>
    </>
  )
}
