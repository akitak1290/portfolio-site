import { useRouteError } from 'react-router-dom';
import loadingGif from '../assets/loading.gif';

function Error({ status }: { status?: number }) {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="error-container">
            <img src={loadingGif} alt="Uh oh..." />
            {
                status == 404 ?
                    <>
                        <div className="error-container-message">
                            <h1>404</h1>
                        </div>
                        <p>Hm, it seems you are looking for unicorns</p>
                    </>
                    :
                    <>
                        <div className="error-container-message">
                            <h1>Woops!</h1>
                            <h1>Something when wrong :(</h1>
                        </div>
                        <p>Have you try turning it off and on again?</p>
                    </>
            }
        </div>
    );
}

export default Error;