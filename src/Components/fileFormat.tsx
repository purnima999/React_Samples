import React, { useEffect, useRef } from 'react';
import WebViewer from '@pdftron/webviewer';

const FileFormat = () => {

    const viewer:any = useRef(null);
    
    useEffect(() => {
        WebViewer(
            {
                path: '/webviewer',
                initialDoc: 'https://notifyy.s3.amazonaws.com/sample-pdf-file.pdf',
            },
            viewer?.current,
        ).then((instance) => {
            const { documentViewer, annotationManager, Annotations } = instance.Core;
        });
    }, []);

    return (
        <>
            FileFormat
            <div className="webviewer" ref={viewer}></div>

        </>
    )
}
export default FileFormat;