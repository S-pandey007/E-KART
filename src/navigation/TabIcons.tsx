import React from "react";
import Icons from "../components/atoms/Icons";

interface TabIconProps{
    focused:boolean;
    size:number;
    color:string;
}

export const HomeIcon:React.FC<TabIconProps>=({focused,size,color})=>{
return(
    <Icons
    name={focused?'home':'home-outline'}
    size={size}
    iconFamily='Ionicons'
    color={color}
    />
)
}
export const CartIcon:React.FC<TabIconProps>=({focused,size,color})=>{
return(
    <Icons
    name={focused?'cart':'cart-outline'}
    size={size}
    iconFamily='MaterialCommunityIcons'
    color={color}
    />
)
}
export const CategoriesIcon:React.FC<TabIconProps>=({focused,size,color})=>{
return(
    <Icons
    name={focused?'grid':'grid-outline'}
    size={size}
    iconFamily='Ionicons'
    color={color}
    />
)
}
export const AccountIcon:React.FC<TabIconProps>=({focused,size,color})=>{
return(
    <Icons
    name={focused?'person':'person-outline'}
    size={size}
    iconFamily='Ionicons'
    color={color}
    />
)
}