import styles from './projectEditForm.module.scss';

import { useContext } from "react";
import { ModalDataContext, ModalDataDispatchContext } from "../../contexts/ModalDataContext";
import { Upload } from 'upload-js';

export default function ProjectEditForm({onSubmitForm}) {
    const modalData = useContext(ModalDataContext);
    const dispatch = useContext(ModalDataDispatchContext);
    console.log(modalData)

    // const handleCreateProject = () => {
    //     dispatch({
    //       type: 'create',
    //     });
        
    //     onToggleModal();
    // }

    const handleImageUpload = async e => {
        if (e.target.files[0]) {
            const file = e.target.files[0];
            const upload = Upload({
                apiKey: "public_W142i2QFQESQNm6Gbd3VFoqfLSbL"
            });

            try {
                const { fileUrl, filePath } = await upload.uploadFile(file);
                dispatch({
                    type: modalData.requestType,
                    data: { ...modalData.data, imgURL: fileUrl },
                })
            } catch (err) {
                console.log(err)
            }
        }
    }

    return (modalData.requestType === 'delete' || modalData.requestType === 'visibility') ? (
        <>
            <h4>are you sure delete?</h4>
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
                    type='string'
                    name='imgURL'
                    defaultValue={modalData?.data?.imgURL}
                    required
                    />
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