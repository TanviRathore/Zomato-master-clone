import React, {useState, useEffect} from 'react';
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

import FoodList from '../Components/Restaurant/Order-Online/FoodList';
import MenuListContainer from '../Components/Restaurant/Order-Online/MenuListContainer';
import FloatMenuBtn from '../Components/Restaurant/Order-Online/FloatMenuBtn';

import { useDispatch, useSelector } from 'react-redux';
import {getFoodList} from '../Redux/Reducer/Food/Food.action';

function OrderOnline() {

  const dispatch = useDispatch();

  const reduxState = useSelector((globalStore) => globalStore.restaurant.selectedRestaurant.restaurant);

  useEffect(() => {
    if (reduxState) {
      dispatch(getFoodList(reduxState.menu)).then((data) => {
        if (data.payload.menus) {
          setMenu(data.payload.menus.menus);
        }
      });
    }
  }, [reduxState]);

  const [menu, setMenu] = useState([]);

  const [selected, setSelected] = useState("Recommended");

  const onClickHandler = (e) => {
      if(e.target.id){
        setSelected(e.target.id);
      }
      return;
  };

    return (
        <>
            <div className="flex w-full h-screen">
                <aside className="hidden md:flex flex-col gap-3 border-r overflow-y-auto border-gray-200 h-screen w-1/4">
                    {menu.map((item) => (
                        <MenuListContainer 
                            {...item}
                            key={item._id}
                            onClickHandler={onClickHandler}
                            selected={selected}
                        />
                    ))}
                </aside>
                <div className="w-full md:w-3/4 px-3">
                    <div className="pl-3 mb-4">
                        <h2 className="text-xl font-semibold">Order Online</h2>
                        <h4 className="flex items-center gap-2 font-light text-gray-500">
                        <   AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45min
                        </h4>
                    </div>
                    <section className="flex h-screen flex-col gap-3 md:gap-5 overflow-y-auto">
                        {menu.map((item) => (
                            <FoodList {...item} key={item._id} />
                        ))}
                    </section>
                </div>
            </div>
            <FloatMenuBtn 
                menu={menu}
                onClickHandler={onClickHandler}
                selected={selected}
            />
        </>
    );
}

export default OrderOnline;
