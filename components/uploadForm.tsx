import { Input } from "postcss"
import React, { FC } from "react"


const UploadForm: FC = () => (
    <>
    <p className="mb-3 text-2xl font-semibold">アップロードフォーム</p>
    <form>
        <div>
<<<<<<< HEAD
            <div>
=======
        <div>
>>>>>>> 4329dc5 (updateForm added.)
                <p >お名前</p>
                <p className="text-red-500">必須</p>
            </div>
            <div className="ml-5">
                <p className="mb-2">姓<input type="text" required/></p>
                <p>名<input type="text" required /></p>
            </div>

            <div>
                <p >所属会社</p>
                <p className="text-red-500">必須</p>
            </div>
            <div className="ml-5">
                <p><input type="text" required /></p>
            </div>

            <div>
                <p >社員番号</p>
                <p className="text-red-500">必須</p>
            </div>
            <div className="ml-5">
                <p><input type="text" required /></p>
            </div>

            <div>
<<<<<<< HEAD
=======
                <p >社員番号</p>
                <p className="text-red-500">必須</p>
            </div>
            <div className="ml-5">
                <p><input type="text" required /></p>
            </div>

            <div>
>>>>>>> 4329dc5 (updateForm added.)
                <p >連絡可能な個人電話番号</p>
                <p className="text-red-500">必須</p>
            </div>
            <div className="ml-5">
                <p><input type="text" required /></p>
            </div>

            <div>
                <p >メールアドレス</p>
                <p className="text-red-500">必須</p>
            </div>
            <div className="ml-5">
                <p><input type="text" required /></p>
            </div>

            <div>
                <p >個人情報提供に同意いただけますか?</p>
                <p className="text-red-500">必須</p>
            </div>
            <div className="ml-5">
                <p><input type="radio" required />同意する</p>
            </div>

            <label htmlFor="update">写真を撮影してアップロードする</label>
            <p className="text-red-500">必須</p>
            <input id="upload" type="file" name="image" accept="image/*" capture="environment" required />

        </div>
    </form>

    </>
)

export default UploadForm
