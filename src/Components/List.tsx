import { useState } from "react";


interface ListProps  {
    Delete: (id:number) => void;
    saveEdit: (name:string,id:number) => void;
    id: number;
    name: string;
};

function List({id,name,Delete,saveEdit}: ListProps){
    const [Editing, setEditing] = useState(false);
    const [EditNote, setEditNote] = useState(name);

    const handleChange = (artists: React.ChangeEvent<HTMLInputElement>) => {
        setEditNote(artists.target.value); 
    };

return(
    <ul>
            <li className="app-output">
              
              {Editing  ? (
                <div className="box-input-save">
    
                    <div className="icon-save">
                      <img src="https://www.thaimediafund.or.th/wp-content/uploads/2024/07/default-avatar-profile-icon-.jpg"></img>
                    
                      <input type="text" value={EditNote} 
                      onChange={handleChange} 
                       className="inputsave"/>
                    </div>
                    <div className="button1">
                    <div className="button-save-1">
                      <button onClick={() => {
                        saveEdit(EditNote,id)
                        setEditing(false)} }
                        className="button-save">
                          บันทึก
                      </button>
                    </div>
                    <div>
    
                    </div>
                      <button className="button-udo" onClick={() => {
                        setEditing(false)
                        setEditNote(name)
                        }}>
                        ยกเลิก
                      </button>
                      </div>
                </div>
    
              ) : (
                <div className="box-output">
                    <div className="icon-output">
                     <img src="https://www.thaimediafund.or.th/wp-content/uploads/2024/07/default-avatar-profile-icon-.jpg"></img>
                    </div>
                  <span 
                   className="artist-name">
                    {name}
                  </span>
                  <div className="button">
                    <button
                      onClick={() => {
                        setEditing(true)
                      }}
                      className="edit-button"
                    >
                      แก้ไข
                    </button>
                    <div>
                      <button onClick={() => Delete(id)} className="delete-button">
                        ลบ
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </li>
         
        </ul>
        
    )
    


};

export default List;
