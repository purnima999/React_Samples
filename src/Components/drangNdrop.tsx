import React, { useRef, useState } from 'react';


const DragDrop: React.FC = () => {

    const [prductList, setProductList] = useState(['product1', 'product2', 'product3', 'product4'] as any);

    const dragItem: any = useRef();
    const dragOverItem: any = useRef();
    const dragStartHandler = (e: any, index: any) => {
        dragItem.current = index;
        console.log("dragStart", e.target, index, dragItem)
    }

    const dragOverHandler = (e: any, index: any) => {
        e.preventDefault();
        dragOverItem.current = index;
        console.log("dragOver", e.target)
    }

    const drop = (e: any) => {
        let clonnedList = [...prductList]
        let dragProductContent = clonnedList[dragItem?.current];
        clonnedList?.splice(dragItem?.current, 1)
        clonnedList?.splice(dragOverItem?.current, 0, dragProductContent)
        console.log("drop", e.target, dragProductContent, clonnedList)
        dragItem.current = null
        dragOverItem.current = null
        setProductList(clonnedList);
    }

    return (
        <>
            <p>Drag and Drop functionality with out external libraries</p>
            {prductList && prductList?.length > 0 && prductList?.map((x: any, index: any) => (
                <div key={x} >
                    <ul
                        style={{ backgroundColor: "lightblue", listStyle: "none" }}
                        draggable
                        onDragStart={(e) => dragStartHandler(e, index)}
                        onDragOver={(e) => dragOverHandler(e, index)}
                        onDragEnd={drop}
                    >
                        <li>{x}</li>
                    </ul>
                </div>
            ))}
        </>
    )
}
export default DragDrop