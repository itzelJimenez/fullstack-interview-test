import { useState } from 'react';

import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import Router from './Router/Router';
import { axiosInstance } from './services/git-services/gitServices';

const App = () => {
  const [httpError, setHttpError] = useState();

  axiosInstance.interceptors.response.use((response) => {
    if(response.status === 200) return response;
    else setHttpError("Hubo un error al realizar la solicitud");
  }, (error) => {
      if (error.response && error.response.data) {
          return Promise.reject(error.response.data);
      }
      setHttpError("Hubo un error al realizar la solicitud");
      return Promise.reject(error.message);
  });

  return (
    <div className="App">
      { httpError ?
        <Snackbar open={httpError} autoHideDuration={6000} onClose={() => setHttpError(null)}>
          <Alert onClose={() => setHttpError(null)} severity="error" sx={{ width: '100%' }}>
            {httpError}
          </Alert>
        </Snackbar> : null
      }
      <Router error={httpError}/>
    </div>
  );
}

export default App;
