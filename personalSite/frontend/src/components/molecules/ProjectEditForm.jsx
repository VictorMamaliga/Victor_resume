import styles from './projectEditForm.module.scss';

import { useContext, useState } from "react";
import { ModalDataContext } from "../../contexts/ModalDataContext";
import { Upload } from 'upload-js';
import { deleteType, visibilityType } from '../../helpers';

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

    return (modalData.requestType === deleteType || modalData.requestType === visibilityType) ? (
        <>
            <h4>are you sure?</h4>
            <span onClick={onSubmitForm}>yes</span>
        </>
    ) : (
        <form onSubmit={onSubmitForm} className={styles.form}>
            <div className='input-container'>
                <span>Title</span>
                <input
                    type='text'
                    name='name'
                    defaultValue={modalData?.data?.name}
                    required
                    />
            </div>
            <label>
                Is Visible
                <input
                    type='checkbox'
                    name='isVisible'
                    defaultChecked={modalData?.data?.isVisible || false}
                    />
            </label>
            <div className='input-container'>
                <span>Description</span>
                <input
                    type='textarea'
                    name='description'
                    defaultValue={modalData?.data?.description}
                    required
                    />
            </div>
            <fieldset>
                <span>Image URL</span>
                <div className='input-container'>
                    <input
                        onChange={e => setIUrl(e.target.value)}
                        type='string'
                        name='imgURL'
                        value={iUrl}
                        required
                    />
                    {/* {status && <span>Loading</span>} */}
                </div>
                <h3>or</h3>
                <div className={styles.formImage}>
                    <input
                        type='file'
                        onChange={handleImageUpload}
                    />
                    <div>
                        <img src={modalData?.data?.imgURL} alt="" />
                    </div>
                </div>
            </fieldset>
            <div className='input-container'>
                <span>Project URL</span>
                <input
                    type='string'
                    name='redirrect'
                    defaultValue={modalData?.data?.redirrect}
                    required
                    />
            </div>
            <br />
            <button type='submit'>Submit</button>
        </form>
    )
}