
// import React from "react"

type ProfileType = {
    size: number;
    person: string;
    img : string;
    // Add?:() => void;  //? ตัวแปรจะส่งค่าไปก็ได้หรือไม่ส่ง
}
//รับ siZe,name เข้ามา
//fucntion component 
export default function ProfileCard({size, person,img}: ProfileType)  {
 

    return(
        <div>
            <div>
                {size}
                {person}
                <img src={img} style={{
                    width:size,
                    height:size, 
                    borderRadius: 100

                }}/>
                
            </div>
        </div>
    );
}