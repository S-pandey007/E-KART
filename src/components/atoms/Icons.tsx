import React,{FC} from 'react'
import {Ionicons,MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons'

interface IconsProps{
    color?:string;
    size:number;
    name:any;
    iconFamily:"Ionicons" |"MaterialCommunityIcons" | "MaterialIcons"
}
const Icons:FC<IconsProps> = ({color,size,name,iconFamily}) => {
  return (
    <>
        {
            iconFamily==='Ionicons' && <Ionicons name={name} size={size} color={color}/>
        }
        {
            iconFamily==='MaterialCommunityIcons' && <MaterialCommunityIcons name={name} size={size} color={color}/>
        }
        {
            iconFamily==='MaterialIcons' && <MaterialIcons name={name} size={size} color={color}/>
        }
    </>
  )
}

export default Icons