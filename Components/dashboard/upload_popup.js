import React, { useState } from 'react';
import FetchApi from '../../utils/fetchAPI';
import { CAP_SUB_API } from '../../utils/APIs';
import { toast } from 'react-toastify';
import { getAuthToken } from '../../utils';
import { Modal } from 'react-bootstrap';
const Upload = ({ esummitId, taskid,points, show, setShow }) => {
//   const [profile, setprofile] = useState();
  const [selectedFile, setselectedFile] = useState('');
  const [loading, setloading] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleInputChange(e) {
    setselectedFile(e.target.files[0]);
  }
  function submit() {
    if (selectedFile) {
      setloading(true);
      let form_data = new FormData();
      form_data.append('images', selectedFile, selectedFile.name);
      form_data.append('taskId', taskid);
      form_data.append('esummitId', esummitId);
      form_data.append('points',points);
      FetchApi('post',CAP_SUB_API, form_data, getAuthToken())
        .then((res) => {
          console.log(res);
          setloading(false);
          toast.success('image uploaded successfully')
        })
        .catch((err) => {
          setloading(false);
          console.log(err);
        });
    } else {
      toast.error('Please Upload a Valid File/Image !');
    }
    setShow(false);
  }
  return (
    <>
      <Modal
        show={show}
        contentClassName='Upload_Content'
        onHide={() => {
          handleClose();
        }}
      >
        <div className='Share_popup_share_background'>
          <div className='Share_popup_mainDiv_behind'>
            <div className='Share_popup_mainDiv_front'>
              <div className='Share_popup_heading'>
                <div className='Share_popup_share_heading'>
                  <h1>Upload</h1>
                </div>
                <div className='Share_popup_close_btn'>
                  <button
                    onClick={() => {
                      handleClose();
                    }}
                  >
                    X
                  </button>
                </div>
              </div>
              <div className='Share_popup_subDiv_behind'>
                <div className='Share_popup_subDiv_front'>
                  <p className='Share_popup_para' id='Share_popup_para1'>
                    Please upload screenshot of share photo of File as
                    instructed in task detail.
                    <br />
                    <br />
                  </p>
                  <div className='Upload_popup_ChooseFileContainer'>
                    <div className='Upload_popup_para'>File Upload:</div>
                    <div className='Upload_popup_Btn_ChooseFile'>
                      <input
                        type='file'
                        className='Upload_input_Class'
                        onChange={(e) => {
                          handleInputChange(e);
                        }}
                      />
                    </div>
                  </div>
                  <div className='Upload_popup_UploadBtn_div'>
                    <div
                      className='Upload_popup_UploadBtn'
                      onClick={() => {
                        submit();
                      }}
                    >
                    UPLOAD
                    </div>
                  </div>
                </div>
              </div>
              <div className='Share_popup_media_div'></div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Upload;