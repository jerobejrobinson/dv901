const ProgressBar = ({percent})  => {
    return (
        <div
            className="stripes w-80 m-1 h-5 relative rounded" 
            style={{backgroundPosition: percent+'%'}}
        ></div>
    );
}
 
export default ProgressBar;