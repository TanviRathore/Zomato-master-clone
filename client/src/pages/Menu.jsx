import React, {useState} from 'react';
import MenuCollections from '../Components/Restaurant/MenuCollections';

function Menu() {

    const [menus, setMenus] = useState([
        "https://b.zmtcdn.com/data/menus/593/18233593/5b969d0a3ba13ae80c0df1e0d7447b02.jpg",
        "https://b.zmtcdn.com/data/menus/593/18233593/a181458955e1390aa366c636c2d3f0d5.jpg",
      ]);

    return (
        <>
            <div className="flex flex-wrap gap-3">
                <MenuCollections  menuTitle="Menu" pages={menus.length}  images={menus}/>
            </div>
        </>
    );
}

export default Menu;
