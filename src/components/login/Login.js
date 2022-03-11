import {GiDeskLamp} from 'react-icons/gi'
import {AiOutlineUser,AiOutlineKey,AiOutlineLogin} from 'react-icons/ai'
import styles from './Login.module.css'

function Login(){
    return(
        <>
            <div className={styles.login} >
                <form>
                    <div>
                        <AiOutlineUser/>
                        <input type="email" placeholder='email@lightdesign.com'></input>
                    </div>
                    <div>
                        <AiOutlineKey/>
                        <input type="password" placeholder='password'></input>
                    </div>
                </form>
                <div>   
                    <div>
                        <button>
                            <AiOutlineLogin/>
                        </button>
                    </div>
                    <div>
                        <GiDeskLamp/>
                        <p>Fope Manager</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login