import styles from './projectEditForm.module.scss';

import { useContext, useState } from "react";
import { ModalDataContext } from "../../contexts/ModalDataContext";
import { Upload } from 'upload-js';

export default function ProjectEditForm({onSubmitForm}) {
    const modalData = useContext(ModalDataContext);
    const [iUrl, setIUrl] = useState(modalData?.data?.imgURL);
    const [status, setStatus] = useState(false);

    const handleImageUpload = async e => {
        if (e.target.files[0]) {
            const file = e.target.files[0];
            const upload = Upload({
                apiKey: "public_W142i2QFQESQNm6Gbd3VFoqfLSbL"
            });

            try {
                setStatus(true)
                const { fileUrl, filePath } = await upload.uploadFile(file);
                setIUrl(fileUrl)
                setStatus(false)
            } catch (err) {
                console.log(err)
            }
        }
    }

    return (modalData.requestType === 'delete' || modalData.requestType === 'visibility') ? (
        <>
            <h4>are you sure?</h4>
            <span onClick={onSubmitForm}>yes</span>
        </>
    ) : (
        <form onSubmit={onSubmitForm} className={styles.form}>
            <label>
                Name:
                <input
                    type='text'
                    name='name'
                    defaultValue={modalData?.data?.name}
                    required
                    />
            </label>
            <label>
                Description:
                <input
                    type='text'
                    name='description'
                    defaultValue={modalData?.data?.description}
                    required
                    />
            </label>
            <label>
                upload image
                <input
                    type='file'
                    onChange={handleImageUpload}
                    />
            </label>
            <label>
                Project Link:
                <input
                    type='string'
                    name='redirrect'
                    defaultValue={modalData?.data?.redirrect}
                    required
                    />
            </label>
            <label>
                Image URL:
                <input
                    onChange={e => setIUrl(e.target.value)}
                    type='string'
                    name='imgURL'
                    value={iUrl}
                    required
                />
                {status && <span>Loading</span>}
            </label>
            <label>
                Is Visible
                <input
                    type='checkbox'
                    name='isVisible'
                    defaultChecked={modalData?.data?.isVisible || false}
                    />
            </label>
            <br />
            <button type='submit'>Submit</button>
        </form>
    )
}