import style from '../styles/ProgressBar.module.css';

const ProgressBar = ({percent})  => {
    const pbClass = "md:max-w-screen-md m-1 h-5 relative rounded mx-auto my-10";
    return (
        <div className="px-4">
            <div className={`${style.stripes} ${pbClass}`} style={{backgroundPosition: percent+'%'}}></div>
        </div>
    );
}
 
export default ProgressBar;