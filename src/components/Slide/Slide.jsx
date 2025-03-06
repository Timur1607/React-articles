import Article from "../Article/Article";
import './Slide.css'
import { useContext } from 'react'
import { MainPropsContext } from '../../App'
export default function Slide(){
    const { key1, key2, key3} = useContext(MainPropsContext);
    return(
        <>
            <div className="slide">
                <Article value={key1}/>
                <Article value={key2}/>
                <Article value={key3}/>
            </div>
        </>
    )
}