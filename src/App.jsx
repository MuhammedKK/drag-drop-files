import React, {useState} from 'react'
import './App.css';
import axios from 'axios'
import DragAndDrop from './DragAndDrop';

const  App = () => {

  // // file
  // const [file, setFile] = useState({});
  // console.log(file)

  // // upload file
  // const handleUpload = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('text', file);
  //   console.log(formData)

  //   axios({
  //     url: '/some/api',
  //     method: "POST",
  //     data: formData
  //   }).then(res => console.log(res)).catch(err => console.log(err));
  // }



  return (
    <div className="App">
      <h1>Upload Files With & WIthout Axios</h1>
      <DragAndDrop />
    </div>
  );
}

export default App;
