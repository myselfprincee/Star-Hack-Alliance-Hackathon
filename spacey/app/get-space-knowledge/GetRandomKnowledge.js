import Image from "next/image";
import Link from 'next/link';

const GetRandomKnowledge = ({ data, imageLoaded, setImageLoaded, download, setDownload }) => {

    const handleDownload = () => {
        const fileName = data.hdurl.split('/').pop();
        const imgUrl = data.hdurl;
        const urlParts = imgUrl.split('/');
        const filteredUrl = urlParts.slice(2).join('/'); // Join parts starting from index 2 (to skip 'https:' and the empty string after '//')
        console.log(filteredUrl);
        const url = `https://princegupta.azurewebsites.net/${filteredUrl}`;
        fetch(url, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(res => res.blob()).then(blob => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', fileName);
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
            setDownload("Downloaded");
        });
    };

    return (
        <>
            <div className=" flex flex-col gap-3 w-[90%]">
                <h2 className="text-white text-[1.5rem] font-[Fago] text-left font-medium">{data?.title}</h2>
                {data?.media_type == 'image' ?
                    <>
                        {/* {!imageLoaded ? <p>erer</p> : */}
                        <Image onLoad={() => { setImageLoaded((image) => !image) }} className={`rounded-lg ${imageLoaded && " delay-1000"}`} onAnimationEnd={() => { setImageLoaded(false) }} src={data?.url} width={600} height={600} alt="" />
                        <p className="text-gray-500 text-[10px] italic w-full  lg:w-1/2">Copyright : {data?.copyright ? data?.copyright : "NA"}</p>
                        {/* } */}
                        <div className="xl:flex items-center justify-between">
                            <p>Loved the image ??</p>
                            <button onClick={handleDownload} className={`rounded-lg flex items-center text-center download max-md:mt-3 bg-black xl:w-[30%] max-md:w-full outline border-white border p-3 font-medium text-[18px] ${download !== "Download Now" && "animate-unfade"}`}>
                                <svg className="w-10 h-10 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 470 468" id="Download">
                                    <defs>
                                        <filter id="a" width="111.8%" height="111.9%" x="-5.9%" y="-3.9%" filterUnits="objectBoundingBox">
                                            <feOffset dy="5" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                                            <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="4"></feGaussianBlur>
                                            <feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.078125 0"></feColorMatrix>
                                            <feOffset dy="4" in="SourceAlpha" result="shadowOffsetOuter2"></feOffset>
                                            <feGaussianBlur in="shadowOffsetOuter2" result="shadowBlurOuter2" stdDeviation="5.5"></feGaussianBlur>
                                            <feColorMatrix in="shadowBlurOuter2" result="shadowMatrixOuter2" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.210824275 0"></feColorMatrix>
                                            <feMerge>
                                                <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                                                <feMergeNode in="shadowMatrixOuter2"></feMergeNode>
                                            </feMerge>
                                        </filter>
                                        <path className="rotate" id="b" d="M9.635 132.808C24.782 59.782 71.388 19.109 144.085 6.822c53.74-9.081 107.5-9.196 161.15.255 74.852 13.185 119.85 56.23 134.185 130.36 11.075 57.29 11.249 115.191-.174 172.427-15.324 72.52-63.132 117.285-135.561 129.527-53.74 9.08-107.5 9.195-161.15-.255-74.852-13.186-120.05-58.38-134.384-132.509-11.64-57.668-10.52-115.935 1.484-173.82z"></path>
                                    </defs>
                                    <g fill="none" fillRule="evenodd">
                                        <g transform="translate(-21 -26)" fill="#000000" className="color000000 svgShape">
                                            <g fill="#000000" className="color000000 svgShape">
                                                <g transform="translate(32 33)" fill="#000000" className="color000000 svgShape">
                                                    <use fill="#000000" filter="url(#a)" href="#b" className="color000000 svgShape"></use>
                                                    <use fill="#ffffff" href="#b" className="color00c86e svgShape"></use>
                                                </g>
                                                <path fill="#000000" d="M215.47 103.299C153.176 107.673 104 159.594 104 223c0 66.274 53.726 120 120 120s120-53.726 120-120c0-56.633-39.231-104.103-92-116.716V92.953C312.009 105.81 357 159.15 357 223c0 73.454-59.546 133-133 133-73.454 0-133-59.546-133-133 0-73.454 59.546-133 133-133 2.01 0 4.011.045 6 .133v13.014l-.197-.01V262.47l55.6-46.953 10.135 10.135-65.845 57.198c-5.475 5.475-12.06 5.827-14.223 3.664V103.299zm-10.132 151.26v18.245L152 226.98l9.02-11.14 44.318 38.718z" transform="translate(32 33)" className="colorffffff svgShape"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>

                                {download}</button>
                        </div>
                    </>
                    : <iframe width="100%" height="315" src={data.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
                    <h4 className="text-white text-[25px] my-3">Explanation</h4>
                <p className="text-white">{data?.explanation}</p>

            </div>
        </>
    )
};

export default GetRandomKnowledge;