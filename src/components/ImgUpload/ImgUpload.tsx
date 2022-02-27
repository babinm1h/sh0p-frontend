import React from 'react';
import s from "./ImgUpload.module.scss"

interface IImgUploadProps {
    img: any
    setImg: Function
}


const ImgUpload: React.FC<IImgUploadProps> = ({ img, setImg }) => {
    const [preview, setPreview] = React.useState<string | null>(null)


    React.useEffect(() => {
        if (img) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(img);
        } else {
            setPreview(null);
        }
    }, [img]);


    const handleSetImg = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImg(e.target.files![0])
    }

    return (
        <>
            <input type="file" name="img" accept="image/png, image/jpg, image/jpeg"
                onChange={handleSetImg} className={s.inputFile} />

            {preview && <div className={s.preview}>
                <img src={preview} alt="prod" className={s.previewImg} />
            </div>}
        </>
    );
};

export default ImgUpload;