import React, { useState } from "react";

// props의 type은 object -> implement로 하던지, type으로 하던지

export type Props = {
    imgUrl: string,
    text: string,
}

type ComplexCount = {
    value: number,
    mutation: number,
}

export default function CaptionImage({imgUrl,text}: Props){ // 그냥 props라고 하면 type 지정안했다고 에러
    const [count, setCount] = useState<ComplexCount>({value:0, mutation:0});
    console.log(count.value);
    console.log(count.mutation);
    
    return(
        <div>
            <img src={imgUrl} alt={text}/>
            <p>{text}</p>
        </div>
    )
}