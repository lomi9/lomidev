"use client"

const ScrollingIframeMockup = ({ videoSrc, mockupSrc }) => {
    return (
        <div className="mockup-section h-[1000px] py-10 overflow-hidden rounded-lg shadow-lg border flex justify-center">

            <div className="mockup-container relative border border-solid border-red-500 w-full max-w-[800px] overflow-hidden flex justify-center">

            <img src={mockupSrc} alt="Mockup" className="absolute z-20 top-0 w-[100%] h-auto object-cover" />
            <div className="absolute z-10 top-[27px] w-[77%] h-auto overflow-hidden flex justify-center items-center">
                <video
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-contain"
                />
            </div>

            </div>
        </div>
    );
};

export default ScrollingIframeMockup;
