import React, { useState } from 'react';


const DemoFiles = () => {


    const mediaMockData = [{ image: "https://notifyy.s3.amazonaws.com/file_example_JPG_500kB.jpg", pdf: "https://notifyy.s3.amazonaws.com/sample-pdf-file.pdf", vedio: "https://notifyy.s3.amazonaws.com/file_example_MP4_1280_10MG.mp4" }];

    const download = (url: any, type: any) => {
        let element = document.createElement("a");
        let file = new Blob(
            [
                url
            ],
            { type: `${type}` }
        );
        element.href = window.URL.createObjectURL(file);
        element.download = `file.${type}`;
        console.log("file11", file, element.href);
        element.click();
    };

    let data: any = [];
    const onButtonClick = (url: any) => {
        fetch(url).then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                const fileFormat = url.match(/\.[0-9a-z]+$/i)[0].split(".").join("");
                alink.download = `Sample.${fileFormat}`;
                let file = new File([blob], `${alink.download}`,{type:`${fileFormat}`, lastModified:new Date().getTime()})
                data?.push(file);
                alink.click();
                window.URL.revokeObjectURL(url);
                console.log("fileURL",file, );
            })
        })
    }


    return (
        <>
            {mediaMockData && mediaMockData?.length > 0 && mediaMockData.map((item, index) => {
                return (
                    <div style={{ display: "inline-flex" }}>
                        <img src={item.image} style={{ width: "300px", height: "300px" }} />
                        <object data={item.pdf} type="application/pdf" width="40%" height="300px">
                            <p>pdf<a href={item.pdf}>to the PDF!</a></p>
                        </object>
                        <video controls width="300" height="300">
                            <source type="video/mp4" src={item.vedio} />
                        </video>
                    </div>
                )
            })}

            {/* {Sample.pdf} */}
            <div>
                <button onClick={() => {
                    onButtonClick(mediaMockData[0]?.pdf)
                }}>Download</button>
            </div>
        </>
    )
}
export default DemoFiles;